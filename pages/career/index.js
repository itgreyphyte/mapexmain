import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { CiViewTimeline } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";

export default function career() {
    return <>
        <div className="career_page">
            <div className="about_us_p_banner">

                <div className="about_us_banner_main" style={{ background: "url(/img/career/career.jpg) no-repeat center center/cover", backgroundAttachment: "fixed" }}>
                    <div className="container">
                        <div className="about_us_bann_m_co">
                            <h1>Shape the Future of <br /> Mapping with Us</h1>
                            <p>At Mapex, we’re building more than geospatial solutions — we’re building a smarter world. Join a team where innovation, purpose, and precision come together to solve real-world challenges through technology and data.</p>
                            <Link href='/joinus'>Apply Now <FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="we_are_hiring">
                <div className="container">
                    <div className="we_are_hire_title">
                        <h4>We're Hiring!</h4>
                        <h2>Be part of our mission</h2>
                        <p>We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</p>
                    </div>

                    <div className="we_are_hire_filter_buttons">
                        <button className="active">View all</button>
                        <button>GIS Engineer</button>
                        <button>GIS Data Entry Operator</button>
                        <button>Drone Operator / UAV Pilot</button>
                        <button>Survey Executive</button>
                        <button>Remote Sensing Analyst</button>
                        <button>CAD/GIS Draftsman</button>
                    </div>

                    <div className="we_are_hire_cont">
                        <Link href='/career/gis-engineer' className="we_are_hire">
                            <div className="left_we_are_hire_info">
                                {/* <div className="left_we_are_hi_img"><img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div> */}
                                <div>

                                    <h3>GIS Engineer</h3>
                                    <p>We’re looking for a GIS Engineer who can transform spatial data into actionable intelligence. You’ll work closely with our product and Ai teams to build and maintain high-performing GIS layers and mapping systems that power our platforms like PGLAB, POI Solutions.</p>
                                    <p><span> <IoLocationOutline /> Noida, Delhi</span><span><CiViewTimeline /> 2–5 years</span><span><IoTimeOutline /> Full-time</span></p>
                                </div>
                            </div>
                            <button>Apply <FiArrowUpRight /></button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="workflow-section">
                <div className="container">
                    <div className="workflow_section_cont">
                        <div>
                            <div className="section-title" data-aos="fade-up">
                                <h2>Why Work at Mapex?</h2>
                            </div>

                            <div className="workflow-steps">
                                <div className="workflow-step" data-aos="fade-up" >
                                    <div className="step-number">01</div>
                                    <div className="step-content">
                                        <h3>Impactful Work</h3>
                                        <p>Work on projects that transform the way public services and infrastructure operate in India.</p>
                                    </div>
                                </div>
                                <div className="workflow-step" data-aos="fade-up" data-aos-delay="100">
                                    <div className="step-number">02</div>
                                    <div className="step-content">
                                        <h3>Collaborative Culture</h3>
                                        <p>Experience a work environment that’s agile, transparent, and full of mutual respect.</p>
                                    </div>
                                </div>

                                <div className="workflow-step" data-aos="fade-up" data-aos-delay="200">
                                    <div className="step-number">03</div>
                                    <div className="step-content">
                                        <h3>Room to Grow</h3>
                                        <p>We support continuous learning, certifications, and provide opportunities to work with cutting-edge technologies.</p>
                                    </div>
                                </div>

                                <div className="workflow-step" data-aos="fade-up" data-aos-delay="300">
                                    <div className="step-number">04</div>
                                    <div className="step-content">
                                        <h3>Real Innovation</h3>
                                        <p>Be part of a team that's integrating AI, ML, and GIS into platforms that drive decisions in the real world.</p>
                                    </div>
                                </div>

                                <div className="workflow-line"></div>
                            </div>
                        </div>
                        <div className="workflow_main_model">
                            {/* <Spline
                                scene="/model/mainscene.splinecode"
                            />
                            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}