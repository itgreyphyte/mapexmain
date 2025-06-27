// pages/api/gemini-tts.js or app/api/gemini-tts/route.js (depending on your Next.js version)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { text, voice = 'en-US-Journey-D', speed = 1.0, pitch = 0.0 } = req.body;

        if (!text || text.trim().length === 0) {
            return res.status(400).json({ error: 'Text is required' });
        }

        // Truncate text if too long (Google Cloud Text-to-Speech has limits, typically 5000 characters for a single request)
        const truncatedText = text.length > 5000 ? text.substring(0, 5000) + '...' : text;

        // Make request to Google Cloud Text-to-Speech API
        const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input: { text: truncatedText },
                voice: {
                    languageCode: voice.split('-').slice(0, 2).join('-'), // e.g., 'en-US'
                    name: voice, // Full voice name (e.g., 'en-US-Journey-D')
                    // ssmlGender is optional and can be inferred from the voice name
                    // if you consistently use voices with known genders.
                    // For 'en-US-Journey-D', it's a male voice.
                    ssmlGender: voice.includes('FEMALE') ? 'FEMALE' : 'MALE' // This is a heuristic, adjust as needed
                },
                audioConfig: {
                    audioEncoding: 'MP3',
                    speakingRate: speed,
                    pitch: pitch,
                    volumeGainDb: 0.0, // Adjust volume if needed, e.g., -6.0 for quieter
                    sampleRateHertz: 24000, // Common sample rate for good quality
                    effectsProfileId: ['telephony-class-application'] // Optional: improves quality for phone-like audio
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Google TTS API error:', errorData);
            return res.status(response.status).json({
                error: 'Failed to generate speech',
                details: errorData.error?.message || 'Unknown error occurred from Google TTS API'
            });
        }

        const data = await response.json();

        // The audioContent is base64 encoded
        const audioContent = data.audioContent;

        if (!audioContent) {
            return res.status(500).json({ error: 'No audio content received from Google TTS API' });
        }

        // Set the content type to audio/mpeg (for MP3)
        res.setHeader('Content-Type', 'audio/mpeg');
        // Set Content-Disposition to allow direct download or playback in browser
        res.setHeader('Content-Disposition', 'attachment; filename="speech.mp3"');

        // Decode the base64 audio content and send as binary data
        const audioBuffer = Buffer.from(audioContent, 'base64');
        return res.status(200).send(audioBuffer);

    } catch (error) {
        console.error('Server error during TTS generation:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}