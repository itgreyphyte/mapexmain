
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Swiper pagination styles
import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState } from "react";

export default function casestudies() {

    const featuredBlogs = [
        {
            title: "Mapex Appraised at CMMI Level 3, Reinforcing Its Focus on Scalable Geospatial Solutions",
            href: "/case-studies/caseone",
            imgSrc: "https://content.panoplai.com/hs-fs/hubfs/case%20studies-2.png?width=3825&height=3825&name=case%20studies-2.png",
            category: "Achievement",
        },
        {
            title: "Mapping India’s Infrastructure Future with Geospatial Intelligence",
            href: "/case-studies/caseone",
            imgSrc: "https://content.panoplai.com/hs-fs/hubfs/nytw%20napkins-9.png?width=3825&height=3825&name=nytw%20napkins-9.png",
            category: "Achievement",
        }
    ];
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index); // works with loop mode
        }
    };

    return <>

        <div className="blog_page">

            <div className="about_us_p_banner">

                <div className="about_us_banner_main" style={{ background: "url(/case_study/casestudy.jpg) no-repeat center center/cover", backgroundAttachment: "fixed" }}>
                    <div className="container">
                        <div className="about_us_bann_m_co">
                            <h1>Explore Mapex <br />  Case  Studies</h1>
                            <p>Smart Mapping in Action, see how our solutions are solving real challenges from urban planning to environmental monitoring  with data-driven results.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <section className="blogs_p_hero">
                <div className="container">
                    <div className="blogs_p_hero_content">
                        <h1>Insights from the World of Smart Mapping</h1>
                        <p>Explore expert perspectives, project stories, and emerging trends in geospatial technology, Ai-powered mapping, 3D visualization, and spatial data innovation — all in one place.</p>

                        <div className="blogs_p_search">
                            <FiSearch className="blogs_p_search_icon" />
                            <input type="text" placeholder="Search articles..." />
                        </div>
                    </div>
                </div>
            </section> */}



            {/* <div className="container" id="casestudies">

                <div className="case_studies_top">
                    <div className="left_case_stu_to_img">
                        <img src="/img/mapex_ai.png" alt="" />
                    </div>
                    <div className="right_case_stu_info">
                        <h2>Great design is more than just aesthetics-it's about storytelling, strategy, and impact</h2>
                        <div className="righ_case_stu_i_in">
                            <h4><FaArrowRight /> OUR APPROACH</h4>
                            <p>We partner with ambitious brands to create visuals that inspire, engage and drive results, Whether you're launching a new product or redefining your identity, we bring fearless creativity to every project.</p>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className="case_study_m">
                <div className="container">
                    <div className="case_study_title" data-aos="fade-up">
                        <h2>Case Studies</h2>
                    </div>
                    <div className="case_study_cont">
                        <Link href='/case-studies/caseone' className="case_study" data-aos="fade-up">
                            <div className="case_study_img">
                                <img src="/case_study/1.jpg" alt="" />
                            </div>
                            <h3>Building the Future of E-Governance: How Mapex Digitized and Geo-Enabled West Bengal’s Land Records</h3>
                        </Link>
                        <Link href='/case-studies/casetwo' className="case_study" data-aos="fade-up">
                            <div className="case_study_img">
                                <img src="/case_study/case-study-title.jpg" alt="" />
                            </div>
                            <h3>Modernising Forest Mapping for the Madhya Pradesh State Forest Department</h3>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="case_study_p_services">
                <div className="container">
                    <div className="case_study_p_sevi_cont">
                        <h3><FaArrowRight /> SERVICES</h3>
                        <div className="case_s_p_se_c_f">
                            <Link href='/services'>GIS Data Engineering</Link>
                            <Link href='/services'>Mapping</Link>
                            <Link href='/services'>Surveying</Link>
                            <Link href='/services'>BIM</Link>
                        </div>
                        <div className="righ_case_stud_p_se_gr_p">
                            <img src="/img/services/new-theme-hero-banner-service.jpg" alt="" />
                            <p>It has been our expertise for years to provide the best strategy for your brand to achieve amazing goals in the future.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    </>
}