import { FaDownload } from "react-icons/fa6";
import { LuMessageSquareQuote } from "react-icons/lu";

export default function casetwo() {
    return <>


        <div className="case_study_page">
            <div className="case_study_p_t_top" style={{ background: "url(/case_study/case-study-2.jpg) no-repeat center center/cover", backgroundAttachment: "fixed"  }}></div>


            <div className="case_study_op_t_m">


                <div className="case_study_op_t_title" data-aos="fade-up">
                    <div className="flex flex-center gap-2">
                        <span><img src="/img/mapex_ai.png" alt="" />CASE STUDY</span>
                    </div>
                    <h2>Modernising Forest Mapping for the Madhya Pradesh State Forest Department</h2>
                </div>

                <div className="case_study_op_t_info">
                    <div className="case_study_hightlight_text">
                        <div className="case_stu_hi_text_info">
                            <p data-aos="fade-up">In this case study, we take a look at Mapex’s collaboration with the Madhya Pradesh State Department, an organization that oversees one of India’s largest forest tracts, supporting critical biodiversity, watershed and community livelihoods. In this exercise, our goal was to develop a comprehensive geo-database and mapping solution for over 75,000 sq. km. of forest land. To achieve this goal, we used high-resolution satellite, drone, LiDAR and ground-survey data. We developed a four-stage methodology that delivered an accurate and insightful inventory of flora, fauna, utilities and terrain. The endeavour helped the department to optimise resource planning, biodiversity monitoring, fireline management, and property tax information services.</p>
                        </div>
                    </div>

                    <img src="/case_study/case-study-2a.jpg" alt="" data-aos="fade-up" />

                    <div className="case_study_challenge" data-aos="fade-up">
                        <h3>Context</h3>
                        <p>The MP State Forest Department used forest maps that were maintained in disparate formats such as scanned as-built diagrams, cadastral sheets, and paper records. The existing system was not suitable when it come to broader analysis. The department demanded wildlife habitat monitoring, fire-control planning, and local-tax assessments, leading them to deploy a comprehensive geo-database to help operational and strategic decision-making .</p>
                    </div>

                    <div className="case_study_sec_inner" data-aos="fade-up">
                        <h3>Objectives</h3>
                        <p>To implement the solution, we fragmented our objectives into five key deliverables, allowing us to achieve them. They included:</p>
                        <ul>
                            <li><strong>Comprehensive Geo-Database</strong> Our first goal was to compile spatial data from satellite, drone, LiDAR, GPR, camera-trap surveys and scanned maps into a GIS repository.</li>
                            <li><strong>High-Resolution Topography & Canopy Mapping</strong>Our second objective was to generate DEM/DTM, shaded relief, canopy-cover models and also achieve tree-species detection by using technologies like Ai and ML.</li>
                            <li><strong>Asset & Utility Surveying</strong> Further, we also set out to identify and map utilities (pipelines, fire-lines, trails), point-of-interest (POI) features, and survey natural and regenerated forests.</li>
                            <li><strong>Operational Applications:</strong> Further, we also wanted to extract property-tax information management (PTIMS), fire-control planning, biodiversity surveys, and community engagement via a web-GIS portal.</li>
                            <li><strong>QA/QC & Training:</strong> Our last goal was to ensure quality control at every workflow step and build MP SFD’s in-house capability through tailored training and support.</li>
                        </ul>
                    </div>
                    <div className="case_study_sec_inner" data-aos="fade-up">
                        <h3>Challenges & Detailed Analysis</h3>
                        <ul>
                            <li><strong>Varied Data Sources:</strong> Inputs ranged from sub-metre MSI and stereo satellite imagery to drone-derived ortho-imagery, LiDAR point clouds and scanned as-built diagrams.</li>
                            <li><strong>Complex Terrain & Vegetation Structure: </strong> The state’s topography spans plateau, hill and water ecosystems. Also, the dense canopy impeded aerial GCP visibility.</li>
                            <li><strong>Biodiversity Monitoring Needs: </strong> Tracking flora and fauna populations, root structures via GPR and illegal hunting hotspots required the integration of field-survey, camera-trap and community-reported data streams.</li>
                            <li><strong>Operational Scale: </strong> Covering 100+ urban local bodies for PTIMS and 75,000 sq. km. of forest required meticulous project management.</li>
                        </ul>
                    </div>
                    <div className="case_study_approch">
                        <h3 data-aos="fade-up">Our Approach: Four-Stage Methodology:</h3>
                        <p data-aos="fade-up">To achieve our five-pronged objective, we divided our approach into four stages. They included: </p>
                        <h4 data-aos="fade-up">Stage I: Data Acquisition & Ground Control</h4>
                        <ul data-aos="fade-up">
                            <li><strong>Satellite Imagery:</strong> We procured sub-metre MSI and stereo pairs.</li>
                            <li><strong>Drone & LiDAR Flights:</strong> Further, we planned flights with 5 cm GSD, 70–80 % overlap for 3D modelling.</li>
                            <li><strong>DGPS Survey:</strong> Subsequently, we Installed GCPs for MSI ortho-rectification and stereo bundle-block adjustments.</li>
                            <li><strong>Secondary Data Collection:</strong> Field surveys (POI, asset tagging), GPR for root-system and underground utility mapping </li>
                        </ul>

                        <h4 data-aos="fade-up">Stage II: Image & Point-Cloud Processing</h4>
                        <ul data-aos="fade-up">
                            <li><strong>Ortho-Rectification & DEM/DTM Generation:</strong> Applied polynomial transformations; produced 1 m DEM, shaded‐relief maps.</li>
                            <li><strong>Photogrammetry:</strong> We also processed Stereo-drone imagery for high-resolution orthophotos, contours and 3D reality meshes.</li>
                            <li><strong>LiDAR Processing:</strong> Trajectory correction, point-cloud classification, DTM extraction and canopy analysis.</li>
                        </ul>

                        <h4 data-aos="fade-up">Stage III: Feature Extraction & Ai/ML Integration</h4>
                        <ul data-aos="fade-up">
                            <li><strong>2D/3D Feature Digitisation:</strong> Semi-automated extraction of parcels, trails, fire-lines, watercourses and infrastructure.</li>
                            <li><strong>Object Detection:</strong> Deployed ML models to identify tree canopies, buildings, vehicles and natural vs man-made features.</li>
                            <li><strong>Vegetation & Biodiversity Surveys:</strong> Integrated camera-trap, animal-movement and GPR root data to map species distribution and habitat corridors.</li>
                        </ul>

                        <h4 data-aos="fade-up">Stage IV – Geo-Database Creation & QA/QC</h4>
                        <ul data-aos="fade-up">
                            <li><strong>Schema Design:</strong> Developed industry-standard geospatial data models.</li>
                            <li><strong>Vectorisation & Topology Validation:</strong> Ensured clean parcel boundaries, no overlaps/gaps and accurate alignment with ortho-imagery.</li>
                            <li><strong>Quality Assurance:</strong> Sample-based positional accuracy checks (≤0.5 m RMSE), visual, graphic and database validations; error correction and final deliverable verification .</li>
                        </ul>
                        <p data-aos="fade-up">During every stage, we undertook a rigorous and robust QA/QC process to ensure RMS error thresholds were met, with independent sample verifications by the Directorate.</p>
                    </div>
                    <div className="case_study_approch">
                        <h3 data-aos="fade-up">Capacity Building & Knowledge Assets</h3>
                        <p data-aos="fade-up">To ensure a smooth transition for the MP SFD, we delivered</p>
                        <ul data-aos="fade-up">
                            <li>Comprehensive user manuals and standard operating procedures.</li>
                            <li>Step-by-step video tutorials covering routine maintenance, data ingestion and model updates.</li>
                            <li>A dedicated helpdesk for six months post-implementation.</li>
                        </ul>
                    </div>
                    <div className="case_study_approch">
                        <h3 data-aos="fade-up">Impact & Results</h3>
                        <ul data-aos="fade-up">
                            <li><strong>Operational Efficiency:</strong> 60% reduction in time to generate updated forest maps.</li>
                            <li><strong>Data Accuracy:</strong> Achieved sub-0.5 m positional precision across all layers.</li>
                            <li><strong>Biodiversity Insights:</strong> Enabled near real-time tracking of key species movements and illegal hunting hotspots.</li>
                            <li><strong>Strategic Planning:</strong> Provided MP SFD with a future-proof platform for climate resilience modelling, watershed management and ecotourism development.</li>
                        </ul>
                    </div>
                    <div className="cunclution_pera" data-aos="fade-up">
                        <h3>Conclusion</h3>
                        <p>By modernizing West Bengal’s land records into a seamless, spatially enabled system, Mapex helped government authorities deliver citizen-centric, dispute-free land administration. This large-scale exercise has allowed us to lay the foundation of India’s bid to usher in the next generation of digital land governance.</p>
                    </div>
                    <div class="download_case_study_btn" data-aos="fade-up">
                        <a href="/pdf/mapex_case study_2a.pdf" download="/pdf/mapex_case study_2a.pdf" className="case_stud_cta_button">Download Case Study <FaDownload /></a>
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