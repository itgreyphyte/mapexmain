
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Swiper pagination styles
import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState } from "react";

export default function blog() {

    const featuredBlogs = [
        {
            title: "Mapex Appraised at CMMI Level 3, Reinforcing Its Focus on Scalable Geospatial Solutions",
            href: "/blogs/Mapex-appraised-at-CMMI-level-3",
            imgSrc: "/blog/blog-1.jpg",
            category: "Achievement",
            excerpt: "New Delhi, India — A key milestone that reflects Mapex's commitment to delivering consistent, process-driven solutions for scalable and sustainable project outcomes."
        },
        {
            title: "Mapping India’s Infrastructure Future with Geospatial Intelligence",
            href: "/blogs/Mapping-India-s-Infrastructure-Future-with-GIS",
            imgSrc: "/img/news/mapex_news-3.jpg",
            category: "Achievement",
            excerpt: "Today, India stands at the brink of an infrastructure revolution. Over the last decade, the nation has made significant strides"
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

                <div className="about_us_banner_main" style={{ background: "url(/img/blog.jpg) no-repeat center center/cover", backgroundAttachment: "fixed" }}>
                    <div className="container">
                        <div className="about_us_bann_m_co">
                            <h1>Insights from the World <br /> of Smart Mapping</h1>
                            <p>Explore expert perspectives, project stories, and emerging trends in geospatial technology, Ai-powered mapping, 3D visualization, and spatial data innovation — <br />all in one place.</p>
                            <div className="blogs_p_search">
                                <FiSearch className="blogs_p_search_icon" />
                                <input type="text" placeholder="Search articles..." />
                            </div>
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


            <div className="blog_p_featured_sec">



                <section className="blogs_p_featured">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        slidesPerView={"auto"}
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000 }}
                        speed={3000}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="blogs_swiper"
                    >
                        {featuredBlogs.map((post, index) => (
                            <SwiperSlide key={index}>
                                <div className="blogs_p_featured_post">
                                    <Link href={post.href} className="blogs_p_featured_image">
                                        <img src={post.imgSrc} alt={`Image for ${post.title}`} />
                                    </Link>
                                    <div className="blogs_p_featured_content">
                                        <span className="blogs_p_featured_category">{post.category}</span>
                                        <Link href={post.href}>
                                            <h2>{post.title}</h2>
                                        </Link>
                                        <p className="blogs_p_featured_excerpt">{post.excerpt}</p>
                                        <Link href={post.href} className="blogs_p_read_more">
                                            Read Article <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="navigration_dots">
                        {featuredBlogs.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={index === activeIndex ? "active" : ""}
                            />
                        ))}
                    </div>
                </section>



            </div>
            <div className="container">


                <div className="blogs_p_categories">
                    <div className="blogs_p_category blogs_p_category_active">All Topics</div>
                    <button className="blogs_p_category">GIS Engineer</button>
                    <button className="blogs_p_category">GIS Data Entry Operator</button>
                    <button className="blogs_p_category">Drone Operator</button>
                    <button className="blogs_p_category">Survey Executive</button>
                    <button className="blogs_p_category">Remote Sensing Analyst</button>
                    <button className="blogs_p_category">CAD/GIS Draftsman</button>
                    <button className="blogs_p_category">Ai/ML</button>
                    <button className="blogs_p_category">GIS Solutions</button>
                    <button className="blogs_p_category">Field Technician</button>
                    <button className="blogs_p_category">Database Administrator</button>
                </div>
                <section className="blogs_p_section">
                    <div className="blogs_p_grid">
                        <article className="blogs_p_card">
                            <Link href='/blogs/Mapex-appraised-at-CMMI-level-3'>
                                <div className="blogs_p_card_image">
                                    <img src="/blog/blog-1.jpg" />
                                </div>
                                <span className="blogs_p_card_category">Achievement</span>
                                <h3>Mapex Appraised at CMMI Level 3, Reinforcing Its Focus on Scalable Geospatial Solutions</h3>
                                <p className="blogs_p_card_excerpt">New Delhi, India — A key milestone that reflects Mapex's commitment to delivering consistent, process-driven solutions for scalable. ...</p>
                                <div className="blogs_p_card_meta">
                                    <span className="blogs_p_card_author">
                                        <img src="/img/mapex_ai.png" alt="Author" /> Mapex Team
                                    </span>
                                    <span>June 14, 2025</span>
                                </div>
                            </Link>
                        </article>
                        <article className="blogs_p_card">
                            <Link href='/blogs/Mapping-India-s-Infrastructure-Future-with-GIS'>
                                <div className="blogs_p_card_image">
                                    <img src="/img/news/mapex_news-3.jpg" />
                                </div>
                                <span className="blogs_p_card_category">Achievement</span>
                                <h3>Mapping India’s Infrastructure Future with Geospatial Intelligence</h3>
                                <p className="blogs_p_card_excerpt">Today, India stands at the brink of an infrastructure revolution. Over the last decade, the nation has made significant strides ...</p>
                                <div className="blogs_p_card_meta">
                                    <span className="blogs_p_card_author">
                                        <img src="/img/mapex_ai.png" alt="Author" /> Mapex Team
                                    </span>
                                    <span>June 14, 2025</span>
                                </div>
                            </Link>
                        </article>
                    </div>
                </section>
            </div>

        </div>

    </>
}