import { FaDownload } from "react-icons/fa6";
import { LuMessageSquareQuote } from "react-icons/lu";

export default function caseOne() {
    return <>


        <div className="case_study_page">
            <div className="case_study_p_t_top" style={{ background: "url(/case_study/case-study-1a.jpg) no-repeat center center/cover", backgroundAttachment: "fixed" }}></div>


            <div className="case_study_op_t_m">


                <div className="case_study_op_t_title" data-aos="fade-up">
                    <div className="flex flex-center gap-2">
                        <span><img src="/img/mapex_ai.png" alt="" />CASE STUDY</span>
                    </div>
                    <h2>Building the Future of E-Governance: <br />How Mapex Digitized and Geo-Enabled <br /> West Bengal’s Land Records</h2>
                </div>

                <div className="case_study_op_t_info">
                    <div className="case_study_hightlight_text">
                        <div className="case_stu_hi_text_info">
                            <p data-aos="fade-up">In this case study, we explore Mapex’s (formerly Azure Cloud Services, the GIS division of Azure Knowledge Corporation) collaboration with the Directorate of Land Records & Surveys (DLRS), Government of West Bengal. The objective of this was for us to transform over 68,000 analogue cadastral maps into a comprehensively geo‐referenced, digital land‐records system that would increase efficiency when it comes to governance. </p>
                            <p data-aos="fade-up">The project was conducted across four stages and towards its conclusion, delivered sub‐meter accuracy across 42,302 revenue villages. This modernisation has driven transparency, accelerated transactions, reduced disputes, and established a scalable platform for future e-governance and planning initiatives.</p>
                        </div>
                    </div>

                    <img src="/case_study/case-study-1b.jpg" alt="" data-aos="fade-up" />

                    <div className="case_study_challenge" data-aos="fade-up">
                        <h3>The Challenge</h3>
                        <p>Before we understand how we conducted this comprehensive exercise, let’s understand the challenge: West Bengal’s land‐records system comprised over 68,000 cadastral maps across 42,302 revenue villages. However, these records lacked any embedded spatial references and were not available in the digital realm, leading to inefficiency, low citizen trust, and increased litigation, all contributing to reduced transparency. </p>
                    </div>

                    <div className="case_study_approch">
                        <h3 data-aos="fade-up">Our Approach</h3>
                        <p data-aos="fade-up">To address this, we, at Mapex, designed a four-stage, end-to-end georeferencing methodology</p>
                        <h4 data-aos="fade-up">Stage I: Ground Control Network Establishment</h4>
                        <ul data-aos="fade-up">
                            <li>Collected 50 cm archived satellite imagery (ORI) and existing primary control points.</li>
                            <li>Planned grid-based placement of new Primary (25 km²) and Secondary (5 km²) Ground Control Points (GCPs) using DGPS surveys.</li>
                            <li>Monumented and geotagged control points with rigorous field documentation .</li>
                        </ul>

                        <h4 data-aos="fade-up">Stage II: Spatial Data Preparation</h4>
                        <ul data-aos="fade-up">
                            <li>Performed satellite triangulation and bundle-block adjustment on stereo imagery.</li>
                            <li>Generated high-resolution DEMs and 1 m contour maps.</li>
                            <li>Edge-matched, color-balanced, and mosaicked ortho-rectified imagery for seamless coverage.</li>
                        </ul>

                        <h4 data-aos="fade-up">Stage III: Mono Imagery Georeferencing</h4>
                        <ul data-aos="fade-up">
                            <li>Acquired 30 cm fresh mono imagery for plain regions.</li>
                            <li>Georeferenced imagery to DGPS GCPs, ensuring sub-meter spatial accuracy.</li>
                            <li>Conducted batch processing of mosaics for contiguous map datasets.</li>
                        </ul>

                        <h4 data-aos="fade-up">Stage IV – Cadastral Map Geo-Referencing</h4>
                        <ul data-aos="fade-up">
                            <li>Superimposed and spatially adjusted scanned raster cadastral maps over ortho-imagery.</li>
                            <li>Aligned existing vector cadastral datasets to the newly georeferenced raster maps.</li>
                            <li>Performed topology validation, seamless edge matching, and final mosaicking at village, block, and district levels .</li>
                        </ul>
                        <p data-aos="fade-up">During every stage, we undertook a rigorous and robust QA/QC process to ensure RMS error thresholds were met, with independent sample verifications by the Directorate.</p>
                    </div>
                    <div className="case_study_sec_inner" data-aos="fade-up">
                        <h3>The Solution</h3>
                        <p>After identifying the approach, we delivered a wide range of modules to ensure the objectives outlined at the outset were delivered meticulously. These included:</p>
                        <ul>
                            <li><strong>Comprehensive Digital Delivery:</strong> Geo-referenced cadastral maps at Mouza (village) level. We delivered over 68,000 maps in both digital GIS layers and hard-copy formats.</li>
                            <li><strong>Scalable Infrastructure:</strong> We also deployed Mapex’s cloud-hosted GIS platform, integrating DGPS, Cartosat-I, LISS-IV feeds, and custom web/mobile applications for future map maintenance.</li>
                            <li><strong>Capacity Building:</strong> To ensure a smooth transition, we trained the Directorate’s staff on GIS workflows, satellite imagery processing, and system maintenance.</li>
                        </ul>
                    </div>
                    <div className="case_study_sec_inner" data-aos="fade-up">
                        <h3>Impact & Results</h3>
                        <ul>
                            <li><strong>Enhanced Transparency:</strong> Citizens can now access authoritative, spatially accurate land records online, leading to reduced litigation and manual verification.</li>
                            <li><strong>Accelerated Transactions:</strong> We have streamlined property transactions and mutations by integrating the Land Records Maintenance System (LRMS) and Registration workflows.</li>
                            <li><strong>Dispute Reduction:</strong> Increased transparency has paved the way for the authorities to minimize boundary disputes and support long-term credit secured on land.</li>
                            <li><strong>Foundational Platform:</strong> The geo-referenced database serves as the backbone for future initiatives—land reform measures, urban planning, watershed management, and e-governance services.</li>
                        </ul>
                    </div>
                    <div className="case_study_sec_inner" data-aos="fade-up">
                        <h3>Key Statistics</h3>
                             <p>4 structured project stages, spanning imagery collection to vector map alignment</p>
                        <div className="case_study_stactic">
                            <div className="case_study_s_s">
                                <h4>42,302</h4>
                                <span>Revenue villages <br /> mapped</span>
                            </div>
                            <div className="case_study_s_s">
                                <h4>68,453</h4>
                                <span>Cadastral sheets <br /> georeferenced</span>
                            </div>
                            <div className="case_study_s_s">
                                <h4>22+</h4>
                                <span>District-wide satellite <br /> imagery analyses</span>
                            </div>
                            <div className="case_study_s_s">
                                <h4>100%</h4>
                                <span>QA/QC compliance with <br /> RMS error targets</span>
                            </div>
                        </div>
                        <div className="cunclution_pera" data-aos="fade-up">

                           
                            <p>By modernizing West Bengal’s land records into a seamless, spatially enabled system, Mapex helped government authorities deliver citizen-centric, dispute-free land administration. This large-scale exercise has allowed us to lay the foundation of India’s bid to usher in the next generation of digital land governance.</p>
                        </div>
                    </div>
                    <div className="download_case_study_btn" data-aos="fade-up">
                        <a href='/pdf/mapex_case study_1a.pdf' download={'/pdf/mapex_case study_1a.pdf'} className="case_stud_cta_button">
                            Download Case Study <FaDownload />
                        </a>
                    </div>
                </div>
            </div>
            <div className="gredient_colors">
                <div className="gred_one"></div>
                <div className="gred_two"></div>
                <div className="gred_three"></div>
            </div>
        </div>
    </>
}