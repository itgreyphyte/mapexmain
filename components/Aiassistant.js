import { useState, useRef, useEffect } from "react";
import { LuMic, LuMicOff } from "react-icons/lu";
import { RiMagicLine } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import Typed from "typed.js";
import { RxSpeakerLoud } from "react-icons/rx";
import Spline from "@splinetool/react-spline";

export default function Aiassistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [messages, setMessages] = useState([]); // [{role: 'user'|'assistant', content: string}]
    const [query, setQuery] = useState("");
    const [aiResponse, setAiResponse] = useState(""); // streaming buffer
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    // Voice recognition states
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);
    const [speechSupported, setSpeechSupported] = useState(false);
    const [micPermission, setMicPermission] = useState('prompt'); // 'granted', 'denied', 'prompt'
    const [isRequestingPermission, setIsRequestingPermission] = useState(false);

    // Text-to-speech states
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [speechSynthesisSupported, setSpeechSynthesisSupported] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const [currentUtterance, setCurrentUtterance] = useState(null);
    const [currentlySpokenMessage, setCurrentlySpokenMessage] = useState(null);

    // Voice input timing
    const [silenceTimer, setSilenceTimer] = useState(null);
    const [finalTranscript, setFinalTranscript] = useState('');

    /** Check microphone permission status */
    const checkMicrophonePermission = async () => {
        try {
            if (navigator.permissions) {
                const permission = await navigator.permissions.query({ name: 'microphone' });
                setMicPermission(permission.state);

                // Listen for permission changes
                permission.onchange = () => {
                    setMicPermission(permission.state);
                };
            }
        } catch (error) {
            console.log('Permission API not supported, will request on first use');
        }
    };

    /** Request microphone permission */
    const requestMicrophonePermission = async () => {
        setIsRequestingPermission(true);
        setError(null);

        try {
            // Request permission by attempting to access microphone
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            // Permission granted - stop the stream and update state
            stream.getTracks().forEach(track => track.stop());
            setMicPermission('granted');
            setIsRequestingPermission(false);

            // Now start speech recognition
            if (recognition) {
                startSpeechRecognition();
            }

        } catch (error) {
            setIsRequestingPermission(false);

            if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
                setMicPermission('denied');
                setError('Microphone access denied. Please enable microphone permissions in your browser settings and refresh the page.');
            } else if (error.name === 'NotFoundError') {
                setError('No microphone found. Please connect a microphone and try again.');
            } else if (error.name === 'NotSupportedError') {
                setError('Microphone access is not supported in this browser.');
            } else {
                setError('Unable to access microphone. Please check your browser settings.');
            }

            // Clear error after 5 seconds
            setTimeout(() => setError(null), 5000);
        }
    };

    /** Initialize Speech Recognition and Text-to-Speech */
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Check for speech recognition support
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            if (SpeechRecognition) {
                setSpeechSupported(true);
                const recognitionInstance = new SpeechRecognition();

                recognitionInstance.continuous = true;
                recognitionInstance.interimResults = true;
                recognitionInstance.lang = 'en-US';
                recognitionInstance.maxAlternatives = 1;

                recognitionInstance.onstart = () => {
                    setIsListening(true);
                    setError(null);
                    setFinalTranscript('');
                };

                recognitionInstance.onresult = (event) => {
                    let interimTranscript = '';
                    let finalTranscriptLocal = '';

                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            finalTranscriptLocal += transcript;
                        } else {
                            interimTranscript += transcript;
                        }
                    }

                    // Update the query with interim + final results
                    setQuery(finalTranscript + finalTranscriptLocal + interimTranscript);

                    // If we got a final result, update final transcript and start silence timer
                    if (finalTranscriptLocal) {
                        const newFinalTranscript = finalTranscript + finalTranscriptLocal;
                        setFinalTranscript(newFinalTranscript);

                        // Clear any existing timer
                        if (silenceTimer) {
                            clearTimeout(silenceTimer);
                        }

                        // Set new timer for auto-submit after 2 seconds of silence
                        const timer = setTimeout(() => {
                            if (newFinalTranscript.trim()) {
                                recognitionInstance.stop();
                                // Auto-submit the query
                                setTimeout(() => {
                                    const form = document.querySelector('.ai_search_box_text');
                                    if (form) {
                                        const submitEvent = new Event('submit', {
                                            bubbles: true,
                                            cancelable: true
                                        });
                                        form.dispatchEvent(submitEvent);
                                    }
                                }, 500);
                            }
                        }, 2000);

                        setSilenceTimer(timer);
                    }
                };

                recognitionInstance.onend = () => {
                    setIsListening(false);
                    if (silenceTimer) {
                        clearTimeout(silenceTimer);
                        setSilenceTimer(null);
                    }
                };

                recognitionInstance.onerror = (event) => {
                    console.error('Speech recognition error:', event.error);
                    setIsListening(false);

                    if (silenceTimer) {
                        clearTimeout(silenceTimer);
                        setSilenceTimer(null);
                    }

                    switch (event.error) {
                        case 'no-speech':
                            setError('No speech detected. Please try again and speak clearly.');
                            break;
                        case 'network':
                            setError('Network error. Please check your internet connection.');
                            break;
                        case 'not-allowed':
                            setMicPermission('denied');
                            setError('Microphone access denied. Please enable microphone permissions and refresh the page.');
                            break;
                        case 'service-not-allowed':
                            setError('Speech recognition service not allowed. Please try again.');
                            break;
                        case 'bad-grammar':
                            setError('Speech recognition grammar error. Please try again.');
                            break;
                        default:
                            setError('Speech recognition error. Please try again.');
                    }

                    // Clear error after 4 seconds
                    setTimeout(() => setError(null), 4000);
                };

                setRecognition(recognitionInstance);
            } else {
                setSpeechSupported(false);
                console.warn('Speech Recognition not supported in this browser');
            }

            // Check for text-to-speech support
            if ('speechSynthesis' in window) {
                setSpeechSynthesisSupported(true);
            } else {
                setSpeechSynthesisSupported(false);
                console.warn('Speech Synthesis not supported in this browser');
            }

            // Check microphone permission on load
            checkMicrophonePermission();
        }

        // Cleanup timer on unmount
        return () => {
            if (silenceTimer) {
                clearTimeout(silenceTimer);
            }
        };
    }, []);

    /** Start speech recognition */
    const startSpeechRecognition = () => {
        if (!recognition) return;

        try {
            setQuery(""); // Clear any existing query when starting new recording
            setFinalTranscript('');
            recognition.start();
        } catch (error) {
            console.error('Error starting speech recognition:', error);
            setError('Unable to start speech recognition. Please try again.');
            setTimeout(() => setError(null), 3000);
        }
    };
    // useEffect(() => {
    //     const checkVoices = async () => {
    //         const voices = await loadVoices();
    //         console.log("Available voices:");
    //         voices.forEach(v => console.log(`${v.name} | ${v.lang}`));
    //     };
    //     checkVoices();
    // }, []);

    const loadVoices = () =>
        new Promise((resolve) => {
            let voices = speechSynthesis.getVoices();
            if (voices.length) {
                resolve(voices);
            } else {
                const interval = setInterval(() => {
                    voices = speechSynthesis.getVoices();
                    if (voices.length) {
                        clearInterval(interval);
                        resolve(voices);
                    }
                }, 100);
            }
        });

    const playElevenLabsVoice = async (text) => {
        try {
            const res = await fetch(`/api/elevenTTS?text=${encodeURIComponent(text)}`);
            if (!res.ok) throw new Error("Failed to get audio");

            const audioBlob = await res.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        } catch (err) {
            console.error("TTS error:", err);
        }
    };


    /** Text-to-Speech Functions */
    const speakText = async (text) => {
        if (!speechSynthesisSupported || !voiceEnabled || !text.trim()) return;

        stopSpeaking();

        const cleanText = text
            // Remove code blocks (```)
            .replace(/```[\s\S]*?```/g, '')
            // Remove inline code (`code`)
            .replace(/`([^`]+)`/g, '$1')
            // Remove bold and italics (**text**, *text*)
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\*(.*?)\*/g, '$1')
            // Remove headers (e.g., ### Title)
            .replace(/^#{1,6}\s+/gm, '')
            // Remove links but keep the text: [text](url) => text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            // Remove images: ![alt](url)
            .replace(/!\[.*?\]\(.*?\)/g, '')
            // Remove blockquotes
            .replace(/^>\s+/gm, '')
            // Remove horizontal rules
            .replace(/^([-*_] *){3,}$/gm, '')
            // Convert multiple newlines to a single space
            .replace(/\n+/g, ' ')
            // Remove any remaining markdown symbols
            .replace(/[*_`~>#+=|-]/g, '')
            .trim();


        if (!cleanText) return;

        const utterance = new SpeechSynthesisUtterance(cleanText);

        // ✅ Use natural sounding rate/pitch
        utterance.rate = 0.95;   // normal speed
        utterance.pitch = 1.0;   // natural pitch
        utterance.volume = 1.0;

        // ✅ Wait for voice list
        const voices = await new Promise((resolve) => {
            const loadedVoices = speechSynthesis.getVoices();
            if (loadedVoices.length) return resolve(loadedVoices);
            const interval = setInterval(() => {
                const v = speechSynthesis.getVoices();
                if (v.length) {
                    clearInterval(interval);
                    resolve(v);
                }
            }, 100);
        });

        // ✅ Choose from known male voices (your list)
        const preferredVoice =
            voices.find(v => v.name === 'Microsoft Mark - English (United States)') ||
            voices.find(v => v.name === 'Google UK English Male') ||
            voices.find(v => v.name === 'Microsoft David - English (United States)') ||
            voices.find(v => v.lang.startsWith('en'));

        if (preferredVoice) {
            utterance.voice = preferredVoice;
            console.log("✅ Using voice:", preferredVoice.name);
        } else {
            console.warn("⚠️ No preferred male voice found, using default.");
        }

        utterance.onstart = () => {
            setIsSpeaking(true);
            setCurrentlySpokenMessage(text);
        };

        utterance.onend = () => {
            setIsSpeaking(false);
            setCurrentUtterance(null);
            setCurrentlySpokenMessage(null);
        };

        utterance.onerror = (e) => {
            console.error('Speech synthesis error:', e.error);
            setIsSpeaking(false);
            setCurrentUtterance(null);
            setCurrentlySpokenMessage(null);
        };

        setCurrentUtterance(utterance);
        speechSynthesis.speak(utterance);
    };

    


    const stopSpeaking = () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        setIsSpeaking(false);
        setCurrentUtterance(null);
        setCurrentlySpokenMessage(null);

    };

    const toggleVoice = () => {
        if (isSpeaking) {
            stopSpeaking();
        }
        setVoiceEnabled(!voiceEnabled);
    };

    /** Handle Voice Recording */
    const handleVoiceToggle = async () => {
        // Check if speech recognition is supported
        if (!speechSupported) {
            setError('Speech recognition is not supported in your browser. Please try using Chrome, Edge, or Safari.');
            setTimeout(() => setError(null), 4000);
            return;
        }

        if (!recognition) {
            setError('Speech recognition is not initialized. Please refresh the page and try again.');
            setTimeout(() => setError(null), 3000);
            return;
        }

        // If currently listening, stop
        if (isListening) {
            recognition.stop();
            return;
        }

        // Check microphone permission
        if (micPermission === 'denied') {
            setError('Microphone access is denied. Please enable microphone permissions in your browser settings and refresh the page.');
            setTimeout(() => setError(null), 5000);
            return;
        }

        // If permission not granted, request it
        if (micPermission !== 'granted') {
            await requestMicrophonePermission();
        } else {
            // Permission already granted, start recognition
            startSpeechRecognition();
        }
    };

    /** Scroll to newest message */
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, aiResponse]);

    /** Typed.js loop for hero text */
    const typedRef = useRef(null);
    const question = "Which service we provide?";
    const services = [
        "GIS Data Engineering",
        "Mapping",
        "Surveying",
        "BIM Engineering",
    ];

    useEffect(() => {
        // run only when the box is open AND the span is in the DOM
        if (!isOpen || !typedRef.current) return;

        const typed = new Typed(typedRef.current, {
            strings: services,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 800,
            loop: true,
            showCursor: true,
        });

        // destroy the instance when the box closes/unmounts
        return () => typed.destroy();
    }, [isOpen, services]);   // re-run if you ever change services

    /** Submit question */
    const handleQuerySubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        const newUserMessage = { role: "user", content: query };
        setMessages((prev) => [...prev, newUserMessage]); // show instantly

        setAiResponse("");
        setIsLoading(true);
        setError(null);

        try {
            const context = "You can optionally add any dynamic context here.";
            const recentHistory = [...messages, newUserMessage].slice(-4); // small context window
            const chatHistory = JSON.stringify(recentHistory);
            // const chatHistory = JSON.stringify([...messages, newUserMessage]);
            const url = `/api/geminitwo?query=${encodeURIComponent(
                query
            )}&context=${encodeURIComponent(context)}&chatHistory=${encodeURIComponent(
                chatHistory
            )}`;

            const eventSource = new EventSource(url);
            let aiBuffer = "";

            eventSource.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.text) {
                    aiBuffer += data.text;
                    setAiResponse(aiBuffer); // live stream buffer
                }
            };

            eventSource.addEventListener("done", () => {
                eventSource.close();
                setIsLoading(false);
                const finalMessage = { role: "assistant", content: aiBuffer };
                setMessages((prev) => [...prev, finalMessage]);
                setAiResponse(""); // clear buffer after final push

                // Speak the AI response if voice is enabled
                if (voiceEnabled && aiBuffer.trim()) {
                    setTimeout(() => speakText(aiBuffer), 500);
                }
            });

            eventSource.onerror = (err) => {
                console.error("EventSource error:", err);
                setError("Something went wrong.");
                setIsLoading(false);
                eventSource.close();
            };
        } catch (err) {
            console.error(err);
            setError(err.message || "Unexpected error.");
            setIsLoading(false);
        }

        setQuery(""); // finally clear input
    };

    /** Suggestions quick-fill */
    const handleSuggestionClick = (service) => {
        setQuery(service);
        // Use a more reliable way to trigger form submission
        setTimeout(() => {
            const form = document.querySelector('.ai_search_box_text');
            if (form) {
                const submitEvent = new Event('submit', {
                    bubbles: true,
                    cancelable: true
                });
                form.dispatchEvent(submitEvent);
            }
        }, 100);
    };

    /** Derived UI flags */
    const hasHistory = messages.length > 0 || isLoading || aiResponse;
    const hasAnswers = messages.some((m) => m.role === "assistant") || aiResponse;

    const handeCloseAI = () => {
        setIsOpen(false);
    }

    const handleOpenAI = () => {
        setIsClosing(false);          // be sure the flag is reset
        setIsOpen(true);              // → adds .active immediately
    };

    // CLOSE  ─────────────────────────────────────────────
    const handleCloseAI = () => {
        setIsClosing(true);           // ① start height-shrink (adds .closing)

        // ② after height animation (600 ms) remove .active
        setTimeout(() => setIsOpen(false), 600);

        // ③ after slide-out (400 ms more) clear .closing
        setTimeout(() => setIsClosing(false), 1000);

        // Stop listening if active
        if (isListening && recognition) {
            recognition.stop();
        }

        // Stop speaking if active
        if (isSpeaking) {
            stopSpeaking();
        }

        // Clear any timers
        if (silenceTimer) {
            clearTimeout(silenceTimer);
            setSilenceTimer(null);
        }
    };

    useEffect(() => {
        const handleFooterQuestion = (e) => {
            const service = e.detail;
            setQuery(service);
            setIsOpen(true);
            setTimeout(() => {
                const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
                const form = document.querySelector('.ai_search_box_text');
                if (form) form.dispatchEvent(submitEvent);
            }, 200);
        };

        window.addEventListener("footer-question-clicked", handleFooterQuestion);

        return () => {
            window.removeEventListener("footer-question-clicked", handleFooterQuestion);
        };
    }, []);

    /** Get microphone button appearance based on state */
    const getMicButtonStyle = () => {
        if (isRequestingPermission) {
            return {
                backgroundColor: '#ffa500',
                color: 'white',
                animation: 'pulse 1s ease-in-out infinite'
            };
        }
        if (isListening) {
            return {
                backgroundColor: '#ff4444',
                color: 'white',
                animation: 'pulse 1.5s ease-in-out infinite'
            };
        }
        if (micPermission === 'denied') {
            return {
                backgroundColor: '#cccccc',
                color: '#666666'
            };
        }
        return {};
    };

    /** Get microphone button title */
    const getMicButtonTitle = () => {
        if (!speechSupported) {
            return "Speech recognition not supported in this browser";
        }
        if (micPermission === 'denied') {
            return "Microphone access denied. Please enable in browser settings.";
        }
        if (isRequestingPermission) {
            return "Requesting microphone permission...";
        }
        if (isListening) {
            return "Stop recording";
        }
        if (micPermission === 'granted') {
            return "Start voice input";
        }
        return "Click to enable microphone";
    };

    return (
        <>
            {!isOpen && (
                <div className="chat-toggle-button" onClick={handleOpenAI}>
                    AskMapexAi
                    <div className="spark_gif">
                        <img loading="lazy" className="x_rotae" src="/img/mapex_ai.png" alt="" />
                        <img loading="lazy" src="/gif/meteor-rain.gif" alt="" />
                    </div>
                </div>
            )}



            {isOpen && (
                <div onClick={handeCloseAI} className="close_background"></div>
            )}

            <div className={`ai_search_box_cont ${isOpen ? "active" : ""} ${isClosing ? 'closing' : ''}`}>
                <div className="ai_close_button" onClick={handleCloseAI}>
                    ✖
                </div>

                {!messages.length > 0 && <>
                    <div className="right_chat_bot_ai_model">
                        <Spline scene="/model/ball.splinecode" />
                    </div>
                </>}





                {/* Chat-history section (never blinks) */}
                <div className="container chat_history_cont">
                    <div className="ai_answer_summary_cont">
                        {error && <div className="error-message">{error}</div>}

                        <div className="ai_answer_summary" data-lenis-prevent>
                            <div className="answer-content">
                                <div className="chat-messages" data-lenis-prevent>
                                    {messages.map((msg, idx) => {
                                        const isAssistant = msg.role === 'assistant';
                                        const isCurrentlySpeaking = isSpeaking && currentlySpokenMessage === msg.content;

                                        return (
                                            <div key={idx} className={`chat-bubble ${msg.role}`}>
                                                {isAssistant && (
                                                    <div className="ai-latest-controls">
                                                        <button
                                                            className="ai-action-button"
                                                            onClick={() => {
                                                                if (isCurrentlySpeaking) {
                                                                    stopSpeaking();
                                                                } else {
                                                                    speakText(msg.content);
                                                                }
                                                            }}
                                                            title={isCurrentlySpeaking ? "Stop speaking" : "Read this aloud"}
                                                        >
                                                            {isCurrentlySpeaking ? '🔇 Stop' : '🔊 Read'}
                                                        </button>
                                                    </div>
                                                )}
                                                <ReactMarkdown>{msg.content}</ReactMarkdown>
                                            </div>
                                        );
                                    })}





                                    {/* Live stream bubble */}
                                    {aiResponse && (
                                        <div className="chat-bubble assistant">
                                            <ReactMarkdown>{aiResponse}</ReactMarkdown>
                                        </div>
                                    )}

                                    {isLoading && !aiResponse && (
                                        <div className="chat-bubble assistant loading thinking">
                                            <div className="spinner" />
                                            <p>Thinking...</p>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input area */}
                <div
                    className={`ai_search_box ${isOpen ? "active" : ""} ${hasAnswers ? "answer" : ""
                        }`}
                >
                    <div className="container">
                        <div className="ai_search_box_content">
                            <form className="ai_search_box_text" onSubmit={handleQuerySubmit}>
                                {/* {!query.trim() && (
                                    <div className="ai_type_text" >
                                        <h3>{question}</h3>
                                        <span ref={typedRef} />
                                    </div>
                                )} */}

                                <input
                                    type="text"
                                    placeholder={
                                        isRequestingPermission
                                            ? "Requesting microphone permission..."
                                            : isListening
                                                ? "Listening... Speak now"
                                                : "Let’s map out your needs, what are you looking for..."
                                    }
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    style={{
                                        border: isListening ? '2px solid #ff4444' : isRequestingPermission ? '2px solid #ffa500' : '',
                                        backgroundColor: isListening ? '#fff5f5' : isRequestingPermission ? '#fff8f0' : ''
                                    }}
                                />

                                <div className="voice_submit">
                                    <button
                                        type="button"
                                        onClick={handleVoiceToggle}
                                        disabled={isLoading || !speechSupported || isRequestingPermission}
                                        style={getMicButtonStyle()}
                                        title={getMicButtonTitle()}
                                    >
                                        {isRequestingPermission ? (
                                            <span>⏳</span>
                                        ) : isListening ? (
                                            <LuMicOff />
                                        ) : (
                                            <LuMic />
                                        )}
                                    </button>

                                    {/* Voice toggle button */}
                                    {/* {speechSynthesisSupported && (
                                        <button
                                            type="button"
                                            onClick={toggleVoice}
                                            disabled={isLoading}
                                            className="voice_speech"
                                            style={{
                                                backgroundColor: voiceEnabled ? '#4CAF50' : '#cccccc',
                                            }}
                                            title={voiceEnabled ? "Voice responses enabled" : "Voice responses disabled"}
                                        >
                                            {isSpeaking ? '🔊' : voiceEnabled ? '🔉' : '🔇'}
                                            {isSpeaking ? 'Speaking...' : voiceEnabled ? 'Voice On' : 'Voice Off'}
                                        </button>
                                    )} */}

                                    <button type="submit" disabled={isLoading}>
                                        {isLoading ? "mapexai..." : (
                                            <>
                                                <RiMagicLine /> Ask us
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>

                            {/* Voice status indicator */}
                            {(isListening || isRequestingPermission || isSpeaking) && (
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: '10px',
                                    color: isRequestingPermission ? '#ffa500' : isSpeaking ? '#4CAF50' : '#ff4444',
                                    fontSize: '14px',
                                    fontWeight: '500'
                                }}>
                                    {isRequestingPermission ? (
                                        <>🔒 Please allow microphone access in the browser popup</>
                                    ) : isSpeaking ? (
                                        <>🔊 AI is speaking... Click voice button to stop</>
                                    ) : isListening ? (
                                        <>🎤 Listening... Speak clearly. Will auto-submit after you finish.</>
                                    ) : null}
                                </div>
                            )}

                            {/* Suggestions visible only before first answer */}
                            {!hasHistory && (
                                <div className="suggestions">
                                    {services.map((service, idx) => (
                                        <span
                                            key={idx}
                                            className="tag"
                                            onClick={() => handleSuggestionClick(service)}
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add pulse animation styles */}
            <style jsx>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </>
    );
}