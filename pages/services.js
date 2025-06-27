import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function services() {
    return <>


        <div className="services_page">


            <div className="about_us_p_banner">

                <div className="about_us_banner_main" style={{ background: "url(/img/services/new-theme-hero-banner-service.jpg) no-repeat center center/cover", backgroundAttachment: "fixed" }}>
                    <div className="container">
                        <div className="about_us_bann_m_co">
                            <h1 data-aos="fade-up">Geospatial Services Built <br /> for Accuracy, Speed, <br /> and Scale</h1>
                            <p data-aos="fade-up">From precision mapping and land surveys to 3D models and data-driven insights, Mapex delivers smart, future-ready solutions that help you plan, build, and grow with confidence.</p>
                            <Link data-aos="fade-up" href='/contact'>Contact Us <FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service_top">
                <div className="container">
                    <div className="service_top_cont">
                        <div className="w-50">

                            <h2 data-aos="fade-up">Platform-Based GIS & 3D Mapping
                                Solutions Built for Precision,
                                Scale, and Impact</h2>
                            <ul>
                                <li>Helping You To Navigate Your Path Towards Success</li>
                            </ul>
                        </div>
                        <div data-aos="fade-up" className="w-50">

                            <p >Mapex stands at the forefront of GIS innovation, delivering scalable geospatial solutions that address real-world challenges. From high-precision mapping to advanced 3D visualization, we transform spatial data into powerful decision-making tools.</p>
                            <p>Our tailored services serve sectors like urban planning, water resources, utilities, and infrastructure. Leveraging Ai and ML models, we help governments, enterprises, and institutions unlock efficiencies and smarter service delivery. Whether it’s intelligent dashboards, automated surveys, or digital twins, our solutions align with your goals and deliver measurable value. With validated, enriched data and a focus on sustainability and governance, we offer next-generation GIS services. Mapex empowers stakeholders to plan better, act faster, and manage smarter—enabling a world that evolves with intelligence and clarity. </p>
                        </div>
                    </div>

                    <div className="service_top_four_img_co" data-aos="fade-up">
                        <div className="service_top_f_i" >
                            <img src="/img/services/Governance.jpg" alt="" />
                            <div className="servi_top_f_i_info">
                                <h4>Empowering Governance Through Geospatial Intelligence</h4>
                                <p>Mapex supports smarter urban planning, land records, and public infrastructure with accurate mapping, spatial data insights, and scalable GIS services built for policy-driven impact.</p>
                            </div>
                        </div>
                        <div className="service_top_f_i" >
                            <img src="/img/services/Enterprise.jpg" alt="" />
                            <div className="servi_top_f_i_info">
                                <h4>Enterprise-Grade Geospatial Solutions for Smarter Decisions</h4>
                                <p>From real estate to logistics, Mapex helps enterprises unlock operational clarity through location intelligence, smart mapping, and high-efficiency GIS workflows.</p>
                            </div>
                        </div>
                        <div className="service_top_f_i" >
                            <img src="/img/services/Future.jpg" alt="" />
                            <div className="servi_top_f_i_info">
                                <h4>Building the Future with Precision Geospatial Services</h4>
                                <p>From roads and smart cities to utilities and BIM integration, Mapex delivers accurate, scalable GIS services that accelerate infrastructure development and reduce on-ground risks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="container">
                    <div className="service_cont" data-aos="fade-up">
                        <div className="left_sticky_service_title" >
                            <h2>Services That Empower <br /> Smarter Planning  Real-Time Decision-Making</h2>
                            <p>Our GIS capabilities are designed to deliver high accuracy, seamless integration, and operational efficiency across every sector we serve. Explore our end-to-end geospatial solutions—from smart mapping and validation to dynamic dashboards and Ai-powered insights.
                                <img className="mt-3" src="/img/services/service.png" alt="" />
                            </p>
                            {/* <div className="service_bg_shadow"></div> */}
                        </div>
                        <div className="right_all_services_cont">
                            <div className="service_de" data-aos="fade-up">
                                <div className="step_arrow">
                                    <div><img src="/img/home/arrow_right.png" alt="" /></div>
                                </div>
                                <div className="service_de_de">
                                    <div>
                                        <h3>Surveying</h3>
                                        <p>UAV and Ai-powered field surveys delivering fast, accurate geographic data collection.</p>
                                        <ul>
                                            <li>DGPS survey</li>
                                            <li>UAV data acquisition</li>
                                            <li>POI collection</li>
                                            <li>Asset tagging</li>
                                            <li>Road network data collection</li>
                                            <li>Street view mapping solutions</li>
                                        </ul>
                                    </div>
                                    <div className="service_de_img">
                                        <img src="/img/services/Surveying.jpg" alt="" />
                                        <h3>Surveying</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="service_de" data-aos="fade-up" id="gisdataengineering">
                                <div className="step_arrow">
                                    <div><img src="/img/home/arrow_right.png" alt="" /></div>
                                </div>
                                <div className="service_de_de">
                                    <div>
                                        <h3>GIS Mapping & Engineering</h3>
                                        <p>Accurate geospatial data digitization, network modeling, and advanced spatial data analysis.</p>
                                        <ul>
                                            <li>Indoor mapping with 360° imagine</li>
                                            <li>Digitization of data from maps and drawings</li>
                                            <li>Map digitization Topographic</li>
                                            <li>Cadastral Parcel</li>
                                            <li>Data conflation & enrichment</li>
                                            <li>Terrain mapping</li>
                                            <li>2D & 3D feature extraction</li>
                                            <li>Navigational</li>
                                        </ul>
                                    </div>
                                    <div className="service_de_img">
                                        <img src="/img/services/GIS.jpg" alt="" />
                                        <h3>GIS Data Engineering</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="service_de" data-aos="fade-up">
                                <div className="step_arrow">
                                    <div><img src="/img/home/arrow_right.png" alt="" /></div>
                                </div>
                                <div className="service_de_de">
                                    <div>
                                        <h3>Spatial Analytics</h3>
                                        <p>Comprehensive 3D city, indoor, and digital mapping with precise geospatial visualization.</p>
                                        <ul>
                                            <li>Data migration from multiple formats into single unified format</li>
                                            <li>Network data modeling for utilities</li>
                                            <li>DSM/ DTM, LOS & shaded relief</li>
                                            <li>Real time terrain mapping</li>
                                            <li>3D GIS visualization</li>
                                            <li>AI/ML based DSS</li>
                                        </ul>
                                    </div>
                                    <div className="service_de_img">
                                        <img src="/img/services/mapping.jpg" alt="" />
                                        <h3>Mapping</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="service_de" data-aos="fade-up">
                                <div className="step_arrow">
                                    <div><img src="/img/home/arrow_right.png" alt="" /></div>
                                </div>
                                <div className="service_de_de">
                                    <div>
                                        <h3>BIM</h3>
                                        <p>Complete BIM and CAD services including digital conversion, 3D Modelling, and documentation.</p>
                                        <ul>
                                            <li>Paper to CAD conversion</li>
                                            <li>2D CAD drafting </li>
                                            <li>Spool drawings</li>
                                            <li>3D Modelling and rendering</li>
                                            <li>Scan to BIM services </li>
                                            <li>BIM content and library creation</li>
                                            <li>Virtual design and construction (VDC) </li>
                                            <li>As-built documentation</li>
                                            <li className="servi_long_li">Design, drafting, modelling and clash detection for  Architectural | Structural | Mechanical | Electrical | Plumbing | Firefighting services </li>
                                        </ul>
                                    </div>
                                    <div className="service_de_img">
                                        <img src="/img/services/BIM.jpg" alt="" />
                                        <h3>BIM</h3>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="service_de">
                            <div className="step_arrow">
                                <div><img src="/img/home/arrow_right.png" alt="" /></div>
                            </div>
                            <div className="service_de_de">
                              
                                <h3>AI/ML-based Agritech Engine</h3>
                                <p>AI-driven crop monitoring, predictive analytics, and real-time farm advisory platforms.</p>
                                <ul>
                                    <li>Farm Advisories and Alerts (Chatbot)</li>
                                    <li>Crop Risk Modeling and Rating</li>
                                    <li>Field data App (Mobile/Web)</li>
                                    <li>Crop Monitoring Platform </li>
                                    <li>Predictive Models</li>
                                </ul>
                                <div className="service_de_img">
                                    <img src="/img/services/AI-Ml.jpg" alt="" />
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="services_main">
                <div className="container">
                    <div className="services_main_title">
                        <h2>Services That Empower
                            Smarter Planning Real-Time Decision-Making</h2>
                        <p>Our GIS capabilities are designed to deliver high accuracy, seamless integration, and operational efficiency across every sector we serve. Explore our end-to-end geospatial solutions—from smart mapping and validation to dynamic dashboards and AI-powered insights.</p>
                    </div>
                    <div className="services_main_cont">
                        <div className="services_m_d">

                            <div className="service_m_d_info">
                                <h3>GIS Data Engineering</h3>
                                <p>At Mapex, we specialize in GIS data engineering services that assist organizations in harnessing the full potential of their geospatial data.</p>
                                <h4>Points</h4>
                                <ul>
                                    <li>Data migration from multiple formats into single unified format</li>
                                    <li>Geospatial network inventory solutions for Telco’s</li>
                                    <li>Digitization of data from maps and drawings</li>
                                    <li>Network data modeling for utilities</li>
                                    <li>Data Conflation</li>
                                    <li>Data upgradation</li>
                                    <li>Spatial Data analysis</li>
                                    <li>Asset Data management</li>
                                    <li>Data enrichment</li>
                                </ul>
                            </div>
                            <div className="service_m_d_img">
                                <img src="http://82.25.104.28:3058/img/services/mapex_GIS.jpg" alt="" />
                            </div>
                        </div>
                        <div className="services_m_d">
                            <div className="service_m_d_img">
                                <img src="http://82.25.104.28:3058/img/services/mapex_GIS.jpg" alt="" />
                            </div>
                            <div className="service_m_d_info">
                                <h3>Mapping</h3>
                                <p>Comprehensive 3D city, indoor, and digital mapping with precise geospatial visualization.</p>
                                <ul>
                                    <li>Map digitization Topographic Cadastral | Parcel | Navigational</li>
                                    <li>DSM/DTM/DEM model <br /> creation</li>
                                    <li>Map enrichment</li>
                                    <li>Asset mapping</li>
                                    <li>Indoor mapping 360° imaging</li>
                                    <li>Municipality GIS mapping</li>
                                    <li>Photogrammetry</li>
                                    <li>3D city modelling</li>
                                    <li>UAV data capture</li>
                                    <li>Location based mapping</li>
                                    <li>Mobile Lidar survey</li>
                                    <li>Ortho rectification</li>
                                </ul>
                            </div>
                        </div>
                        <div className="services_m_d">

                            <div className="service_m_d_info">
                                <h3>Surveying</h3>
                                <p>UAV and AI-powered field surveys delivering fast, accurate geographic data collection.</p>
                                <ul>
                                    <li>Field Surveys</li>
                                    <li>Street view mapping solutions</li>
                                    <li>Road network data collection</li>
                                    <li>UAV survey</li>
                                    <li>Data mapping</li>
                                    <li>Asset tagging</li>
                                    <li>POI collection</li>
                                    <li>AI-powered network data collection</li>
                                </ul>
                            </div>
                            <div className="service_m_d_img">
                                <img src="http://82.25.104.28:3058/img/services/mapex_GIS.jpg" alt="" />
                            </div>
                        </div>
                        <div className="services_m_d">
                            <div className="service_m_d_img">
                                <img src="http://82.25.104.28:3058/img/services/mapex_GIS.jpg" alt="" />
                            </div>
                            <div className="service_m_d_info">
                                <h3>BIM</h3>
                                <p>Complete BIM and CAD services including digital conversion, 3D modeling, and documentation.</p>
                                <ul>
                                    <li>Paper to CAD conversion</li>
                                    <li>2D CAD drafting </li>
                                    <li>Spool drawings</li>
                                    <li>3D modelling and rendering</li>
                                    <li>Scan to BIM services </li>
                                    <li>BIM content and library creation</li>
                                    <li>Virtual design and construction (VDC) </li>
                                    <li>As-built documentation</li>
                                    <li className="servi_long_li">Design, drafting, modelling and clash detection for  Architectural | Structural | Mechanical | Electrical | Plumbing | Firefighting services </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    </>
}