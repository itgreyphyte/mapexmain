import Link from "next/link";
import { FaFeatherAlt } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { FaHandshakeSimple } from 'react-icons/fa6';
import { GiIndiaGate } from "react-icons/gi";
import { FaArrowRight, FaRocket, FaStream } from 'react-icons/fa';

export default function solutions() {



    const features = [
        {
            icon: <GiIndiaGate className="feature-icon-large" />,
            title: "Purpose-Built for Indian Terrain",
            description: "Every platform is trained, tested, and optimized for the complexities of Indian geographies, governance systems, and local nuances."
        },
        {
            icon: <FaRocket className="feature-icon-large" />,
            title: "Designed for Scale & Accuracy",
            description: "Whether it's a smart city or a remote village, our solutions scale efficiently while maintaining data precision and integrity."
        },
        {
            icon: <FaStream className="feature-icon-large" />,
            title: "Future-Ready with Ai & Automation",
            description: "We don’t just digitize, we modernize. Our platforms are infused with Ai and automation to keep you ahead of the curve."
        },
        {
            icon: <FaHandshakeSimple className="feature-icon-large" />,
            title: "Strong Support & Partnership Model",
            description: "We work as your extended team—offering onboarding, training, and real-time support for seamless implementation and long-term success."
        }
    ];

    return <>

        <div className="solution_page">
            <div className="about_us_p_banner">
                <div className="about_us_banner_main" style={{ background: "url(/img/solution/solution-hero-banner.jpg) no-repeat center center/cover", backgroundAttachment: "fixed" }}>
                    <div className="container">
                        <div className="about_us_bann_m_co">
                            <h1>Solving Complex Geospatial Challenges with Smart, <br /> Scalable Solutions</h1>
                            <p>Mapex combines advanced Ai, spatial data engineering, and visualization tools to deliver industry-specific geospatial solutions that turn location data into actionable intelligence.</p>
                            <Link href='/'>View More <FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="solution_top">
                <div className="container">
                    <div className="solution_top_cont">
                        <div className="solu_top_c_l">
                            <h2>Innovation-Driven, <br />
                                Ai-Powered Solutions</h2>
                            <p>Turn data into decisions with smart platforms built for <br />
                                real-world efficiency.</p>
                        </div>
                        <div className="solu_top_c_r">
                            <p>At Mapex, we transform complex data into actionable insights through powerful Ai and ML-driven platforms. Built with real user feedback, our solutions simplify data collection, analysis, and decision-making—no steep learning curve, no unnecessary complexity.</p>
                            <p>We develop platforms that are scalable, intuitive, and optimized to work seamlessly across devices. Our agile teams ensure quick deployment and customization, delivering reliable results within budget and on time. Whether you're a government body, enterprise, or field operator, our solutions are designed to meet your goals with precision and speed.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="solution_main">
                <div className="container">
                    <div className="solu_main_cont">
                        <div className="solution">
                            <div className="solution_l_info_i">
                                <h2>PGLAB</h2>
                                <img src="/img/solution/Solutions-1.jpg" alt="" />
                            </div>
                            <div className="solution_r_info_m">
                                <p>PGLAB is a powerful property and taxation solution that equips Urban Local Bodies with GIS-based tools to increase revenue, boost accountability, and improve citizen services. It provides a unified platform to capture, manage, and assess property data with high precision, helping local authorities make faster, data-backed decisions.</p>
                                <h3>Smart GIS-Based Property and Tax Administration System</h3>
                                <h4><FaFeatherAlt />Core Features :</h4>
                                <ul>
                                    <li><IoIosArrowDropright />Property Geo Register: Maintains structured digital records by tax classification.</li>
                                    <li><IoIosArrowDropright />Mobile GIS Survey: Door-to-door property surveys with real-time geotagged data.</li>
                                    <li><IoIosArrowDropright />Online Data Validation: Verify records using official documents and smart error-flagging tools.</li>
                                    <li><IoIosArrowDropright />Automated Billing: Real-time tax calculation, billing, and online payment system.</li>
                                    <li><IoIosArrowDropright />Smart Dashboard: Role-based access for administrators, surveyors, and decision-makers.</li>
                                </ul>
                                <img src="/img/solution/pglab-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="solution">
                            <div className="solution_l_info_i">
                                <h2>POI Collection Platform</h2>
                                <img src="/img/solution/Solutions-3.jpg" alt="" />
                            </div>
                            <div className="solution_r_info_m">
                                <p>Our AI-enabled POI solution delivers accurate object recognition and validation by leveraging machine learning trained on diverse datasets. Whether using vehicle-mounted systems or manual operations, Mapex offers scalable POI solutions.</p>
                                <h3>Smart, AI-Trained POI Identification and Collection</h3>
                                <h4><FaFeatherAlt />Automated Collection :</h4>
                                <ul>
                                    <li><IoIosArrowDropright />Vehicle-compatible system for AI-based POI detection</li>
                                    <li><IoIosArrowDropright />Identifies signboards, faces, plates, and more</li>
                                    <li><IoIosArrowDropright />Validated outputs with smart image filtering</li>
                                </ul>
                                <h4><FaFeatherAlt />Manual Collection :</h4>
                                <ul>
                                    <li><IoIosArrowDropright />Geo-fenced work allocation</li>
                                    <li><IoIosArrowDropright />Live gig worker tracking with encrypted devices</li>
                                    <li><IoIosArrowDropright />Flexible team creation across multiple cities</li>
                                </ul>
                                <img src="/img/solution/POI.jpg" alt="" />
                            </div>
                        </div>
                        <div className="solution">
                            <div className="solution_l_info_i">
                                <h2>Post Processing Platform</h2>
                                <img src="/img/solution/Solutions-4.jpg" alt="" />
                            </div>
                            <div className="solution_r_info_m">
                                <p>Streamline your data accuracy and post-capture efficiency with our dedicated platform.</p>
                                <h3>Efficient POI Data Cleansing and Standardization</h3>
                                <h4><FaFeatherAlt />Key Features :</h4>
                                <ul>
                                    <li><IoIosArrowDropright />Speech-to-text for faster data entry</li>
                                    <li><IoIosArrowDropright />Smart spell check with suggestions</li>
                                    <li><IoIosArrowDropright />Duplicate POI identification within a 500m radius</li>
                                    <li><IoIosArrowDropright />Dynamic term library for faster editing</li>
                                    <li><IoIosArrowDropright />Standardized outputs for consistent reporting</li>
                                </ul>
                                <img src="/img/solution/PPP-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="solution">
                            <div className="solution_l_info_i">
                                <h2>Mapexport</h2>
                                <img src="/img/solution/Solutions-2.jpg" alt="" />
                            </div>
                            <div className="solution_r_info_m">
                                <p>Mapexport automates the reporting lifecycle, reducing turnaround times from days to hours while ensuring accurate formatting and data integrity.</p>
                                <h3>Mapexport</h3>
                                <h4><FaFeatherAlt />Capabilities :</h4>
                                <ul>
                                    <li><IoIosArrowDropright />Supports Excel, CSV, SPSS, ASCII input</li>
                                    <li><IoIosArrowDropright />Consolidates data from multiple tables</li>
                                    <li><IoIosArrowDropright />Integrates statistical testing in-slide</li>
                                    <li><IoIosArrowDropright />Maintains design consistency across reports</li>
                                    <li><IoIosArrowDropright />Smart content insertion: charts, tables, shapes</li>
                                    <li><IoIosArrowDropright />Custom logic for tailored automation</li>
                                </ul>
                                <h4><FaFeatherAlt />Benefits  :</h4>
                                <p>Faster reporting, consistent outputs, and minimal manual effort. Insights can be delivered within hours, improving operational efficiency across departments.</p>
                              <img src="/img/solution/report.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="features-section">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Why Choose Mapex Solutions</h2>
                        <p>Discover how our advanced solutions can transform your organization</p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </>
}