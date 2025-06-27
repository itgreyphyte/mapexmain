import Link from "next/link";
import { useState } from "react";

import { FaArrowRight, FaLinkedin } from "react-icons/fa6";

export default function About() {


    const [oneBig, setOnebig] = useState(true);
    const [twoBig, settwobig] = useState(true);
    const [threeBig, setthreebig] = useState(true);
    const [fourBig, setFourbig] = useState(true);
    const [fiveBig, setFivebig] = useState(true);


    const [selectedMember, setSelectedMember] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleTeamClick = (memberData) => {
        setSelectedMember(memberData);
        setIsPopupOpen(true);
    };


    const teamData = [
        {
            name: "Surendra Das",
            title: "CEO Geospatial Global Govt. Business",
            img: "/img/team/sd.jpg",
            linkedIn: "https://www.linkedin.com/in/surendra-nath-das-021aa317/",
            description: [
                "Mr. Das brings 20+ years of excellence in geospatial leadership across industries and government.",
                "He has held senior roles at Arcadis, Rolta, and REPL and is a master’s degree holder from BHU. With Six Sigma credentials and six published research papers, he drives innovation and operational excellence.",
                "His expertise includes full-cycle management of geospatial projects across sectors like defense, utilities, and land systems. At Mapex, he leads business development, delivery, and strategic expansion of GIS solutions globally.",
                "Committed to geospatial excellence and sustainable development impact."
            ]
        },
        {
            name: "Dr. Shivendra Tripathi",
            title: "Director - Strategic Growth and Business Development",
            img: "/img/team/st.jpg",
            linkedIn: "https://www.linkedin.com/in/shivendra-dutt-tripathi-07b50132/",
            description: [
                "Dr. Tripathi brings 28 years of leadership in GIS, digital innovation, and market expansion.",
                "He is a visionary in integrating GIS with strategic planning across public and private sectors. Known for fostering collaborations, he drives digital transformation through technology-aligned business models.",
                "As Director, he expands Mapex's market presence and partnerships while shaping advanced geospatial solutions with long-term impact. His leadership consistently unlocks commercial growth and technology innovation.",
                "Leading growth through insight, strategy, and geospatial excellence."
            ]
        },
        {
            name: "Sanjay Pahal",
            title: "VP - Operations",
            img: "/img/team/sp.jpg",
            linkedIn: "https://www.linkedin.com/in/sanjay-pahal-a42a5555/",
            description: [
                "Sanjay brings 25+ years of operations expertise, delivering complex, multi-sector projects nationwide.",
                "He has led major initiatives like DILRMP, Smart Cities, GIS-based utilities, and World Bank-backed urban development. With an MBA in Operations, his skills include cost control, project lifecycle management, and team leadership.",
                "At Mapex, Sanjay manages end-to-end operations—ensuring quality, timeliness, and efficiency in all national-level geospatial and infrastructure programs under his supervision.",
                "Driving precision and performance in every project milestone."
            ]
        },
        {
            name: "Abhishek Agarwal",
            title: "Group CFO",
            img: "/img/team/aa.jpg",
            linkedIn: "https://www.linkedin.com/in/abhishek-a-1a3078103",
            description: [
                "A visionary finance leader with unwavering professionalism, Abhishek brings 22+ years of global expertise.",
                "He is a Chartered Accountant and holds Master’s and Law degrees, with a track record spanning sectors in finance, legal, compliance, and strategic planning. His leadership covers IPOs, audits, international business, and financial technologies.",
                "At Mapex, he oversees finance across Mavrix and AutoVerse verticals. He leads all group-level financial operations, including M&A, budgeting, treasury, taxes, and corporate governance with excellence and integrity.",
                "Driving strategic growth through financial leadership and global experience."
            ]
        },
        {
            name: "Atul Kamdar",
            title: "Group CTO",
            img: "/img/team/ak.jpg",
            linkedIn: "https://www.linkedin.com/in/atul-kamdar-india/",
            description: [
                "As Group CTO, Atul Kamdar leads innovation across Mapex, Mavrix, and AutoVerseAI businesses.",
                "With over 30 years in digital transformation, Atul specializes in scalable architecture, cloud platforms, and product strategy across fintech, insuretech, and automotive SaaS. He has led large technology teams globally with a startup mindset.",
                "Atul’s focus is building GCCs and transforming legacy systems into cloud-native platforms. His leadership enables AI-enabled product development, data-driven decision-making, and long-term value through resilient digital solutions.",
                "Technology strategist transforming ideas into intelligent business ecosystems."
            ]
        }
    ];

    const menage_team_data = [
        {
            name: "Louis Pereira",
            title: "VP - Global Key Accounts & Service Delivery",
            img: "/img/team/lp.jpg",
            linkedIn: "https://www.linkedin.com/in/louis-p-84171a5/",
            description: [
                "Louis Pereira is a seasoned global operations leader in GIS and outsourcing domains.",
                "He excels in SLA-based service delivery, transition management, CRM, and operational scalability. His expertise includes managing global GIS teams and building local authority partnerships for hyperlocal data acquisition.",
                "At Mapex, Louis leads global client engagement, delivering consistent performance and expanding the organization's international presence through strategic account leadership.",
                "Delivering client value with reliability, agility, and precision."
            ]
        },
        {
            name: "Anurag Chauhan",
            title: "Sr. Project Manager",
            img: "/img/team/ac.jpg",
            linkedIn: "https://www.linkedin.com/in/anurag-chauhan-05611810/",
            description: [
                "Anurag is a versatile project leader passionate about research, drones, and digital mapping.",
                "He oversees drone-based surveys, 360° street views, and POI collection projects. With an MBA, he manages operations, field team training, platform rollouts, and vendor performance across India.",
                "He plays a critical role in market research, project cost control, digital platform innovation, and ensuring seamless client service through operational excellence.",
                "Orchestrating field intelligence into actionable business insights."
            ]
        },
        {
            name: "Manoj Pant",
            title: "Sr. Manager - GIS",
            img: "/img/team/mp.jpg",
            linkedIn: "",
            description: [
                "Manoj brings over two decades of expertise in GIS and survey-based project execution.",
                "He has a strong background in lifecycle project management, stakeholder coordination, resource optimization, and engineering delivery. His strength lies in performance tracking and seamless execution.",
                "At Mapex, Manoj ensures precise and timely project outcomes in GIS and infrastructure sectors by balancing technical depth with leadership excellence.",
                "Delivering results through discipline, experience, and operational strength."
            ]
        },
        {
            name: "Krishnakant Kumar",
            title: "VP - Presales GIS",
            img: "/img/team/kk.jpg",
            linkedIn: "https://www.linkedin.com/in/krishnakant-kumar-a2917023/",
            description: [
                "Krishnakant Kumar is a geospatial expert with 22+ years in GIS and satellite analytics.",
                "He holds an M.Tech in Remote Sensing and has led high-impact projects like Smart Cities and Digital Land Records. He’s an expert in SAR data, Polarimetry, and microwave remote sensing technologies.",
                "At Mapex, Krishnakant drives GIS-led innovation, strategic proposals, and enterprise-grade geospatial solutions, aligning cutting-edge science with real-world impact.",
                "Enabling scalable, secure, and future-ready geospatial innovations."
            ]
        },
        {
            name: "Namrata Oza",
            title: "Talent Acquisition Head",
            img: "/img/team/no.jpg",
            linkedIn: "https://www.linkedin.com/in/namrata9/",
            description: [
                "Namrata is a strategic talent leader with 16+ years in global recruitment leadership.",
                "At Mapex, she manages hiring across India, Canada, and the U.S., ensuring delivery of top talent aligned with business needs. She champions workforce planning, funnel optimization, and recruitment strategy.",
                "She also leads HR operations, policy development, and compliance. Namrata is instrumental in building high-performance teams and positioning Mapex as a global talent destination.",
                "Building great teams through strategy, insight, and execution."
            ]
        },
        {
            name: "Vaibhavi Rajak",
            title: "Sr. Manager - GIS",
            img: "/img/team/vr.jpg",
            linkedIn: "https://www.linkedin.com/in/vaibhavi-mankodi-b6776218/",
            description: [
                "Vaibhavi is a Senior Manager with over 18 years of experience in Geographic Information Systems (GIS).",
                "She holds a Master’s degree from the Symbiosis Institute of Geoinformatics. Her strong technical skills, strategic mindset, and collaborative approach have made her a trusted leader in the geospatial field.",
                "As a Senior GIS Manager, she excels in project leadership, geodatabase management, spatial modelling, and integrating GIS with advanced tools. She is committed to mentoring teams, ensuring data accuracy, and driving operational excellence.",
                "Her expertise spans the full GIS growth, delivering innovative, scalable solutions that align with strategic goals and enhance organizational efficiency."
            ]
        },
        {
            name: "Anil Mishra",
            title: "Regional Head - Sales (West & South)",
            img: "/img/team/am.jpg",
            linkedIn: "",
            description: [
                "Anil Mishra is a strategic sales leader with 26+ years of enterprise growth experience.",
                "With a Mechanical Engineering degree and Systems Management postgrad, he combines technical expertise with deep commercial insight. Anil has delivered impactful results across global markets in IT, geospatial, and engineering domains.",
                "He excels in revenue generation, margin optimization, and business planning. Recognized for leading large teams and managing complex projects, his style blends visionary leadership with hands-on execution for sustainable business success.",
                "Driving growth through innovation, strategy, and operational excellence."
            ]
        }
    ];

    return <>

        <div className="about_us_page">


            <div className="about_us_p_banner">

                <div className="about_us_banner_main">
                    <div className="container">
                        <div className="about_us_bann_m_co">
                            <h1 data-aos="fade-right">Built to Map Smarter. <br /> Engineered to Deliver Better.</h1>
                            <p data-aos="fade-right">At Mapex, we merge geospatial intelligence, Ai-powered precision, and deep industry insight to solve complex Mapping challenges at scale. As a CMMI Level 3 certified company, we don’t just deliver data — we deliver decisions.</p>
                            <Link data-aos="fade-right" href='/contact'>Contact Us<FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="about_us_p_banner_cont">
                        <div className="about_us_de">
                            <div className="ab_left_us_de" data-aos="fade-right">
                                <h3>Welcome to Mapex, where we assist Industries, Infrastructure Projects, and Government Authorities take a step into the future with data-driven geospatial intelligence solutions.</h3>
                                <Link href='/services'>Services</Link>
                            </div>  
                            <div className="ab_righ_us_de" data-aos="fade-left">
                                <p>Mapex represents a new era in offering customised GIS Solutions and new-age offerings such as geospatial data engineering, enabling our clients to elevate their strategic planning, operational efficiency, and growth. At Mapex, we envision a world where innovation, integrity, and impact guide every journey. Our mission is to map the future—connecting people, ideas, and technology to shape a smarter, more sustainable tomorrow.</p>
                                <p>We bring a pool of proficient experts with rich experience in creating smarter networks, advanced urban areas, and efficient infrastructure. Mapex focuses on accuracy, scalability, and real-time intelligence to positively impact public and private layers through faster and more objective decision-making.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="vision_mission">
                <div className="container">
                    <div className="vision_mission_cont">
                        <div className="vision_mi_de_card" data-aos="fade-right">
                            <div className="vi_mi_de_card_info">
                                <h3><img width={30} src="https://cdn-icons-png.flaticon.com/128/2258/2258238.png" alt="" /> Our Goals</h3>
                                <p>To become the preferred GIS partner by continuously advancing our capabilities in platform-based GIS data engineering and 3D Mapping. We aim to deliver customized, future-ready solutions that add measurable value and support strategic decision-making.</p>
                            </div>
                        </div>
                        <div className="vision_mi_de_card" data-aos="fade-right">
                            <div className="vi_mi_de_card_info">
                                <h3><img width={30} src="https://cdn-icons-png.flaticon.com/128/1078/1078327.png" alt="" /> Our Vision</h3>
                                <p>Mapex aspires to stand at the forefront of geospatial transformation by transforming raw information into actionable insights. We aim to serve as the benchmark of GIS Data Engineering and 3D Mapping, and contribute to a smarter, more efficient world.</p>
                            </div>
                        </div>

                        <div className="vision_mi_de_card" data-aos="fade-left">
                            <div className="vi_mi_de_img">
                                <img src="/img/about/about-goal.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="vision_mission_cont">
                        <div className="vision_mi_de_card" data-aos="fade-right">
                            <div className="vi_mi_de_img">
                                <img src="/img/about/about-value.jpg" alt="" />
                            </div>
                        </div>
                        <div className="vision_mi_de_card" data-aos="fade-left">
                            <div className="vi_mi_de_card_info">
                                <h3><img width={30} src="https://cdn-icons-png.flaticon.com/128/3109/3109880.png" alt="" /> Our Values</h3>
                                <p>Our operations are rooted in a commitment to integrity, innovation, and collaboration while ensuring our customers access not just quality solutions but also a long-term partnership in their growth journey.</p>
                            </div>
                        </div>
                        <div className="vision_mi_de_card" data-aos="fade-left">
                            <div className="vi_mi_de_card_info">
                                <h3><img width={30} src="https://cdn-icons-png.flaticon.com/128/2258/2258238.png" alt="" /> Our Mission</h3>
                                <p>To deliver scalable GIS solutions that address evolving needs, enhance service delivery, and support sustainable development through advanced data engineering and 3D Mapping.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our_certificate">
                <div className="container">
                    <div className="our_certificate_title">
                        <h2>Accreditations & Certifications</h2>
                    </div>
                    <div className="our_certificate_cont">
                        <div className="certificate" data-aos="fade-up">
                            <div className="certificate_img" >
                                <img loading="lazy" src="/certificates/CMMI.png" alt="CMMI services maturity" />
                            </div>
                        </div>
                        <div className="certificate" data-aos="fade-up">
                            <div className="certificate_img" >
                                <img loading="lazy" src="/certificates/ISO.png" alt="" />
                            </div>
                        </div>
                        <div className="certificate" data-aos="fade-up">
                            <div className="certificate_img">
                                <img loading="lazy" src="/certificates/ISO-2.png" alt="" />
                            </div>
                        </div>
                        <div className="certificate" data-aos="fade-up">
                            <div className="certificate_img">
                                <img loading="lazy" src="/certificates/DPIIT-certificate.png" alt="DPIIT-certificate" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="about_us_two about">
                <div className="container">
                    <div className="after_ab_us_two_four">
                        <div className="af_ab_us_tw_fo_d" data-aos="fade-up">
                            <h3>5M <span>+</span></h3>
                            <h5>POIs</h5>
                        </div>
                        <div className="af_ab_us_tw_fo_d" data-aos="fade-up">
                            <h3>250 <span>+</span></h3>
                            <h5>Cities & Towns Surveyed</h5>
                        </div>
                        <div className="af_ab_us_tw_fo_d" data-aos="fade-up">
                            <h3>1M <span>+</span></h3>
                            <h5>Properties GeoTagged</h5>
                        </div>
                        <div className="af_ab_us_tw_fo_d" data-aos="fade-up">
                            <h3>9M <span>+</span></h3>
                            <h5>Sq. Ft BIM Conversions</h5>
                        </div>
                        <div className="af_ab_us_tw_fo_d" data-aos="fade-up">
                            <h3>500,000<span>+</span></h3>
                            <h5>Km. Highways Mapped</h5>
                        </div>
                    </div>
                </div>
            </div>


            <div className="indus_we_serve">
                <div className="container">
                    <div className="indus_we_serve_title" data-aos="fade-up">
                        <h2>Industries We Serve</h2>
                        <p>Serving key industries through powerful GIS solutions for Smart Cities, utilities, and more...</p>
                    </div>
                    <div className="indus_we_serve_cont">
                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/3.jpg" alt="" />
                            <h3>Smart Cities</h3>
                            <h4>Urban Planning & Smart governance</h4>
                        </div>

                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/2.jpg" alt="" />
                            <h3>Utilities and Telecom</h3>
                            <h4>Asset inventory & Network management</h4>
                        </div>
                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/1.jpg" alt="" />
                            <h3>Municipality</h3>
                            <h4>Property Tax management & Efficient service delivery</h4>
                        </div>
                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/4.jpg" alt="" />
                            <h3>Construction</h3>
                            <h4>GIS + BIM for Construction management</h4>
                        </div>
                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/5.jpg" alt="" />
                            <h3>Roads and Highways</h3>
                            <h4>Corridore planning & Asset management</h4>
                        </div>
                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/6.jpg" alt="" />
                            <h3>Oil and Gas</h3>
                            <h4>Corridor planning & survey</h4>
                        </div>
                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/7.jpg" alt="" />
                            <h3>Disaster Management</h3>
                            <h4>Risk assessment & Emergency response</h4>
                        </div>
                        <div className="indus_we_ser_de" data-aos="fade-up">
                            <img src="/img/about/9.jpg" alt="" />
                            <h3>Real Estate</h3>
                            <h4>Infrastructure planning & Property valuation</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why_mapex">
                <div class="op_three_solu_bg_img"></div>
                <div className="container">
                    <div className="why_map_title">
                        <h2 data-aos="fade-right">Why Mapex Is the Trusted GIS Partner
                            for Future-Ready Infrastructure</h2>
                        <p data-aos="fade-left">At Mapex, we combine deep industry expertise with intelligent geospatial solutions to deliver unmatched clarity, precision, and performance. Our Ai-driven approach empowers governments, utilities, and enterprises to make smarter decisions, accelerate service delivery, and unlock the full value of spatial data. With every project, we bring reliability, innovation, and a commitment to excellence.</p>
                    </div>
                    <div className="why_mapex_cont">
                        <div className="why_map_left_three">
                            <div className="why_map_top_one" data-aos="fade-right">
                                <img src="/img/about/domain.jpg" alt="" />
                                <div className="why_map_main_txt">
                                    <h3>Domain-Led Expertise</h3>
                                    <p>Years of experience across urban planning, utilities, infrastructure, and smart governance.</p>
                                </div>
                            </div>
                            <div className="why_map_two_two">
                                <div className="why_map_two_o" data-aos="fade-up">
                                    <img src="/img/about/Scalable.jpg" alt="" />
                                    <div className="why_map_main_txt">
                                        <h3>Scalable Technology Frameworks</h3>
                                        <p>Future-ready platforms built to scale with evolving data, city expansions, and project goals.</p>
                                    </div>
                                </div>
                                <div className="why_map_two_o" data-aos="fade-up">
                                    <img src="/img/about/client.jpg" alt="" />
                                    <div className="why_map_main_txt">
                                        <h3>Agile and Client-Centric Delivery</h3>
                                        <p>We adapt fast, deliver efficiently, and align with your mission every step of the way.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why_map_ri" data-aos="fade-left">
                            <img src="/img/about/GIS.jpg" alt="" />
                            <div className="why_map_main_txt">
                                <h3>End-to-End GIS Solutions</h3>
                                <p>From Mapping to smart validation, seamless integration, and actionable dashboards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="meet_team">
                <div className="container">
                    <div className="meet_team_title">
                        <h2 data-aos="fade-right">Executive Leadership</h2>
                        <p data-aos="fade-left">Driven by deep expertise and forward-thinking vision, our leadership team guides Mapex in redefining geospatial intelligence for a smarter, connected future.</p>
                    </div>

                    <div className="meet_team_cont">
                        <div className="team"
                            onMouseEnter={() => setOnebig(false)}
                            onMouseLeave={() => setOnebig(true)}
                            onClick={() =>
                                handleTeamClick({
                                    name: "Surendra Das",
                                    title: "CEO Geospatial Global Govt. Business",
                                    img: "/img/team/sd.jpg",
                                    linkedIn: "https://www.linkedin.com/in/surendra-nath-das-021aa317/",
                                    description: [
                                        "Mr. Das brings 20+ years of excellence in geospatial leadership across industries and government.",
                                        "He has held senior roles at Arcadis, Rolta, and REPL and is a master’s degree holder from BHU...",
                                        "His expertise includes full-cycle management of geospatial projects...",
                                        "Committed to geospatial excellence and sustainable development impact."
                                    ]
                                })
                            }
                        >
                            <div className="team_img_sec">
                                <img src="/img/team/sd.jpg" alt="" />
                                <h3>Surendra Das <a target="_blank" href="https://www.linkedin.com/in/surendra-nath-das-021aa317/"><FaLinkedin /></a></h3>
                                <p>CEO Geospatial Global Govt. Business</p>
                            </div>
                            <div className="team_info_se">
                                <p>Mr. Das brings 20+ years of excellence in geospatial leadership across industries and government.</p>
                                <p>He has held senior roles at Arcadis, Rolta, and REPL and is a master’s degree holder from BHU. With Six Sigma credentials and six published research papers, he drives innovation and operational excellence.</p>
                                <p>His expertise includes full-cycle management of geospatial projects across sectors like defense, utilities, and land systems. At Mapex, he leads business development, delivery, and strategic expansion of GIS solutions globally.</p>
                                <p>Committed to geospatial excellence and sustainable development impact.</p>
                            </div>
                        </div>
                        <div className="team" onMouseEnter={() => setOnebig(false)}
                            onMouseLeave={() => setOnebig(true)}

                        >
                            <div className="team_img_sec">
                                <img src="/img/team/st.jpg" alt="" />
                                <h3>Dr. Shivendra Tripathi <a target="_blank" href="https://www.linkedin.com/in/shivendra-dutt-tripathi-07b50132/"><FaLinkedin /></a></h3>
                                <p>Director - Strategic Growth and Business Development</p>
                            </div>
                            <div className="team_info_se">
                                <p>Dr. Tripathi brings 28 years of leadership in GIS, digital innovation, and market expansion.</p>
                                <p>He is a visionary in integrating GIS with strategic planning across public and private sectors. Known for fostering collaborations, he drives digital transformation through technology-aligned business models.</p>
                                <p>As Director, he expands Mapex's market presence and partnerships while shaping advanced geospatial solutions with long-term impact. His leadership consistently unlocks commercial growth and technology innovation.</p>
                                <p>Leading growth through insight, strategy, and geospatial excellence.</p>
                            </div>
                        </div>
                        {oneBig && <h4 className="big_text">vision</h4>}
                    </div>
                    <div className="meet_team_cont right">
                        {twoBig && <h4 className="big_text">lead</h4>}
                        <div className="team three" onMouseEnter={() => settwobig(false)}
                            onMouseLeave={() => settwobig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/sp.jpg" alt="" />
                                <h3>Sanjay Pahal <a target="_blank" href="https://www.linkedin.com/in/sanjay-pahal-a42a5555/"><FaLinkedin /></a></h3>
                                <p>VP - Operations</p>
                            </div>
                            <div className="team_info_se">
                                <p>Sanjay brings 25+ years of operations expertise, delivering complex, multi-sector projects nationwide.</p>
                                <p>He has led major initiatives like DILRMP, Smart Cities, GIS-based utilities, and World Bank-backed urban development. With an MBA in Operations, his skills include cost control, project lifecycle management, and team leadership.</p>
                                <p>At Mapex, Sanjay manages end-to-end operations—ensuring quality, timeliness, and efficiency in all national-level geospatial and infrastructure programs under his supervision.</p>
                                <p>Driving precision and performance in every project milestone.</p>
                            </div>
                        </div>
                        <div className="team three" onMouseEnter={() => settwobig(false)}
                            onMouseLeave={() => settwobig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/aa.jpg" alt="" />
                                <h3>Abhishek Agarwal <a target="_blank" href="https://www.linkedin.com/in/abhishek-a-1a3078103"><FaLinkedin /></a></h3>
                                <p>Group CFO</p>
                            </div>
                            <div className="team_info_se">
                                <p>A visionary finance leader with unwavering professionalism, Abhishek brings 22+ years of global expertise.</p>
                                <p>He is a Chartered Accountant and holds Master’s and Law degrees, with a track record spanning sectors in finance, legal, compliance, and strategic planning. His leadership covers IPOs, audits, international business, and financial technologies.</p>
                                <p>At Mapex, he oversees finance across Mavrix and AutoVerse verticals. He leads all group-level financial operations, including M&A, budgeting, treasury, taxes, and corporate governance with excellence and integrity.</p>
                                <p>Driving strategic growth through financial leadership and global experience.</p>
                            </div>
                        </div>
                        <div className="team three" onMouseEnter={() => settwobig(false)}
                            onMouseLeave={() => settwobig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/ak.jpg" alt="" />
                                <h3>Atul Kamdar <a target="_blank" href="https://www.linkedin.com/in/atul-kamdar-india/"><FaLinkedin /></a></h3>
                                <p>Group CTO</p>
                            </div>
                            <div className="team_info_se">
                                <p>As Group CTO, Atul Kamdar leads innovation across Mapex, Mavrix, and AutoVerseAI businesses.</p>
                                <p>With over 30 years in digital transformation, Atul specializes in scalable architecture, cloud platforms, and product strategy across fintech, insuretech, and automotive SaaS. He has led large technology teams globally with a startup mindset.</p>
                                <p>Atul’s focus is building GCCs and transforming legacy systems into cloud-native platforms. His leadership enables AI-enabled product development, data-driven decision-making, and long-term value through resilient digital solutions.</p>
                                <p>Technology strategist transforming ideas into intelligent business ecosystems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="meet_team">
                <div className="container">
                    <div className="meet_team_title" >
                        <h2>Management Team</h2>
                    </div>
                    <div className="meet_team_cont right">
                        {threeBig && <h4 className="big_text">impact</h4>}
                        <div className="team" onMouseEnter={() => setthreebig(false)}
                            onMouseLeave={() => setthreebig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/lp.jpg" alt="" />
                                <h3>Louis Pereira <a target="_blank" href="https://www.linkedin.com/in/louis-p-84171a5/"><FaLinkedin /></a></h3>
                                <p>VP - Global Key Accounts & Service Delivery</p>
                            </div>
                            <div className="team_info_se">
                                <p>Louis Pereira is a seasoned global operations leader in GIS and outsourcing domains.</p>
                                <p>He excels in SLA-based service delivery, transition management, CRM, and operational scalability. His expertise includes managing global GIS teams and building local authority partnerships for hyperlocal data acquisition.</p>
                                <p>At Mapex, Louis leads global client engagement, delivering consistent performance and expanding the organization's international presence through strategic account leadership.</p>
                                <p>Delivering client value with reliability, agility, and precision.</p>
                            </div>
                        </div>
                        <div className="team" onMouseEnter={() => setthreebig(false)}
                            onMouseLeave={() => setthreebig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/ac.jpg" alt="" />
                                <h3>Anurag Chauhan <a target="_blank" href="https://www.linkedin.com/in/anurag-chauhan-05611810/"><FaLinkedin /></a></h3>
                                <p>Sr. Project Manager</p>
                            </div>
                            <div className="team_info_se">
                                <p>Anurag is a versatile project leader passionate about research, drones, and digital mapping.</p>
                                <p>He oversees drone-based surveys, 360° street views, and POI collection projects. With an MBA, he manages operations, field team training, platform rollouts, and vendor performance across India.</p>
                                <p>He plays a critical role in market research, project cost control, digital platform innovation, and ensuring seamless client service through operational excellence.</p>
                                <p>Orchestrating field intelligence into actionable business insights.</p>
                            </div>
                        </div>
                    </div>
                    <div className="meet_team_cont">
                        <div className="team three" onMouseEnter={() => setFourbig(false)}
                            onMouseLeave={() => setFourbig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/mp.jpg" alt="" />
                                <h3>Manoj Pant </h3>
                                <p>Sr. Manager - GIS</p>
                            </div>
                            <div className="team_info_se">
                                <p>Manoj brings over two decades of expertise in GIS and survey-based project execution.</p>
                                <p>He has a strong background in lifecycle project management, stakeholder coordination, resource optimization, and engineering delivery. His strength lies in performance tracking and seamless execution.</p>
                                <p>At Mapex, Manoj ensures precise and timely project outcomes in GIS and infrastructure sectors by balancing technical depth with leadership excellence.</p>
                                <p>Delivering results through discipline, experience, and operational strength.</p>
                            </div>
                        </div>
                        <div className="team three" onMouseEnter={() => setFourbig(false)}
                            onMouseLeave={() => setFourbig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/kk.jpg" alt="" />
                                <h3>Krishnakant Kumar <a target="_blank" href="https://www.linkedin.com/in/krishnakant-kumar-a2917023/"><FaLinkedin /></a></h3>
                                <p>VP - Presales GIS</p>
                            </div>
                            <div className="team_info_se">
                                <p>Krishnakant Kumar is a geospatial expert with 22+ years in GIS and satellite analytics.</p>
                                <p>He holds an M.Tech in Remote Sensing and has led high-impact projects like Smart Cities and Digital Land Records. He’s an expert in SAR data, Polarimetry, and microwave remote sensing technologies.</p>
                                <p>At Mapex, Krishnakant drives GIS-led innovation, strategic proposals, and enterprise-grade geospatial solutions, aligning cutting-edge science with real-world impact.</p>
                                <p>Enabling scalable, secure, and future-ready geospatial innovations.</p>
                            </div>
                        </div>
                        <div className="team three" onMouseEnter={() => setFourbig(false)}
                            onMouseLeave={() => setFourbig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/no.jpg" alt="" />
                                <h3>Namrata Oza <a target="_blank" href="https://www.linkedin.com/in/namrata9/"><FaLinkedin /></a></h3>
                                <p>Talent Acquisition Head</p>
                            </div>
                            <div className="team_info_se">
                                <p>Namrata is a strategic talent leader with 16+ years in global recruitment leadership.</p>
                                <p>At Mapex, she manages hiring across India, Canada, and the U.S., ensuring delivery of top talent aligned with business needs. She champions workforce planning, funnel optimization, and recruitment strategy.</p>
                                <p>She also leads HR operations, policy development, and compliance. Namrata is instrumental in building high-performance teams and positioning Mapex as a global talent destination.</p>
                                <p>Building great teams through strategy, insight, and execution.</p>
                            </div>
                        </div>
                        {fourBig && <h4 className="big_text">rise</h4>}
                    </div>
                    <div className="meet_team_cont right">
                        {fiveBig && <h4 className="big_text">driven</h4>}
                        <div className="team" onMouseEnter={() => setFivebig(false)}
                            onMouseLeave={() => setFivebig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/vr.jpg" alt="" />
                                <h3>Vaibhavi Rajak <a target="_blank" href="https://www.linkedin.com/in/vaibhavi-mankodi-b6776218/"><FaLinkedin /></a></h3>
                                <p>Sr. Manager - GIS</p>
                            </div>
                            <div className="team_info_se">
                                <p>Vaibhavi is a Senior Manager with over 18 years of experience in Geographic Information Systems (GIS).</p>
                                <p>She holds a Master’s degree from the Symbiosis Institute of Geoinformatics. Her strong technical skills, strategic mindset, and collaborative approach have made her a trusted leader in the geospatial field.</p>
                                <p>As a Senior GIS Manager, she excels in project leadership, geodatabase management, spatial modelling, and integrating GIS with advanced tools. She is committed to mentoring teams, ensuring data accuracy, and driving operational excellence.</p>
                                <p>Her expertise spans the full GIS growth, delivering innovative, scalable solutions that align with strategic goals and enhance organizational efficiency</p>
                            </div>
                        </div>
                        <div className="team" onMouseEnter={() => setFivebig(false)}
                            onMouseLeave={() => setFivebig(true)}>
                            <div className="team_img_sec">
                                <img src="/img/team/am.jpg" alt="" />
                                <h3>Anil Mishra</h3>
                                <p>Regional Head - Sales <br />(West & South)</p>
                            </div>
                            <div className="team_info_se">
                                <p>Anil Mishra is a strategic sales leader with 26+ years of enterprise growth experience.</p>
                                <p>With a Mechanical Engineering degree and Systems Management postgrad, he combines technical expertise with deep commercial insight. Anil has delivered impactful results across global markets in IT, geospatial, and engineering domains.</p>
                                <p>He excels in revenue generation, margin optimization, and business planning. Recognized for leading large teams and managing complex projects, his style blends visionary leadership with hands-on execution for sustainable business success.</p>
                                <p>Driving growth through innovation, strategy, and operational excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="meet_team mobile">
                <div className="container">
                    <div className="meet_team_title">
                        <h2 data-aos="fade-right">Executive Leadership</h2>
                        <p data-aos="fade-left">Driven by deep expertise and forward-thinking vision, our leadership team guides Mapex in redefining geospatial intelligence for a smarter, connected future.</p>
                    </div>

                    <div className="meet_team_cont">
                        {teamData.map((member, index) => (
                            <div
                                className="team"
                                key={index}
                                onClick={() => handleTeamClick(member)}
                            >
                                <div className="team_img_sec">
                                    <img src={member.img} alt={member.name} />
                                    <h3>
                                        {member.name}{" "}
                                        <a target="_blank" rel="noopener noreferrer" href={member.linkedIn}>
                                            <FaLinkedin />
                                        </a>
                                    </h3>
                                    <p>{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="meet_team mobile">
                <div className="container">
                    <div className="meet_team_title" >
                        <h2>Management Team</h2>
                    </div>
                    <div className="meet_team_cont">

                        {menage_team_data.map((member, index) => (
                            <div
                                className="team"
                                key={index}
                                onClick={() => handleTeamClick(member)}
                            >
                                <div className="team_img_sec">
                                    <img src={member.img} alt={member.name} />
                                    <h3>
                                        {member.name}{" "}
                                        <a target="_blank" rel="noopener noreferrer" href={member.linkedIn}>
                                            <FaLinkedin />
                                        </a>
                                    </h3>
                                    <p>{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


        {isPopupOpen && selectedMember && (
            <div className="team_popup_de" onClick={() => setIsPopupOpen(false)}>
                <div className="team_pop_cont" onClick={(e) => e.stopPropagation()}>
                    <div className="left_pop_img_co">
                        <img src={selectedMember.img} alt={selectedMember.name} />
                        <h3>{selectedMember.name} </h3>
                        <h4>{selectedMember.title}</h4>

                    </div>
                    <div className="ri_pop_des">
                        {selectedMember.description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        )
        }

    </>
} 