import Link from "next/link";
import { Suspense, useEffect } from "react";
import { FaArrowRight, FaLinkedin } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
// SSR must be disabled for react-three-fiber
const DroneModel = dynamic(() => import('../components/DroneModel'), { ssr: false });

export default function Home() {

  const blogData = [
    {
      image: "/img/news/mapex_news-1.jpg",
      title: "Mapex Appraised at CMMI Level 3, Reinforcing Its Focus on Scalable Geospatial Solutions",
      desc: "New Delhi, India — A key milestone that reflects Mapex's commitment to delivering consistent, process-driven solutions...",
      link: "/blogs/blogone"
    },
    {
      image: "/img/news/mapex_news-3.jpg",
      title: "Mapping India’s Infrastructure Future with Geospatial Intelligence",
      desc: "Today, India stands at the brink of an infrastructure revolution. Over the last decade, the nation has made significant strides...",
      link: "/blogs/blogtwo"
    },
    {
      image: "/img/news/mapex_news-1.jpg",
      title: "Mapex Appraised at CMMI Level 3, Reinforcing Its Focus on Scalable Geospatial Solutions",
      desc: "New Delhi, India — A key milestone that reflects Mapex's commitment to delivering consistent, process-driven solutions...",
      link: "/blogs/blogone"
    },
    {
      image: "/img/news/mapex_news-3.jpg",
      title: "Mapping India’s Infrastructure Future with Geospatial Intelligence",
      desc: "Today, India stands at the brink of an infrastructure revolution. Over the last decade, the nation has made significant strides...",
      link: "/blogs/blogtwo"
    },
  ];

  return <>
    <div className="op_three">



      <div className="op_three_bg_main_image">
        <img loading="lazy" src="/img/sky.jpg" alt="" />
        <img loading="lazy" src="/img/op2.jpg" alt="" />
        {/* <img loading="lazy" src="https://framerusercontent.com/images/ilrQqgQs0SXq9DWXyCza2jmE.png?scale-down-to=2048" alt="" />
            <img loading="lazy" src="https://framerusercontent.com/images/sX2rJ4gs21CAmiefw1MDFmBlWBM.png?scale-down-to=2048" alt="" />
            <img loading="lazy" src="https://framerusercontent.com/images/LMMrCXtM5BgZ4ZxsDdLThr8bwfk.png?scale-down-to=2048" alt="" /> */}
        {/* <img loading="lazy" src="http://localhost:3001/img/mapex_home_two_2.jpg" alt="" /> */}
      </div>


      <div className="op_three_banner">
        <div className="container">
          <div className="op_three_drone">
            {/* <GLBViewer /> */}
            {/* <Spline
                        scene="/3dmodel/drone.splinecode"
                    /> */}
            {/* <img loading="lazy" src="/img/drone_2024.png" width={250} className="mb-2" alt="" /> */}


            <Canvas camera={{ position: [0, 1.7, 4], fov: 45 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[2, 5, 2]} />
              <Environment preset="sunset" />
              <Suspense fallback={null}>
                <DroneModel scale={12.2} position={[0, -1, 1.5]} />
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>


          </div>

          <div className="op_three_banner_cont">
            <h1 data-aos="fade-up">Shaping Tomorrow with <br />Smart Geospatial Intelligence</h1>
            <p data-aos="fade-up" >Where intelligent maps meet bold ideas, crafted with precision, driven by process and built for what’s next.</p>
            <Link data-aos="fade-up" href="/services">Explore Our Services <FaArrowRight /></Link>
          </div>

          <div className="op_three_banner_space"></div>
        </div>
      </div>

      <div className="about_us_two">
        <div className="container">
          <div className="top_ab_us_two">
            <p data-aos="fade-up" className="aos-init aos-animate">We bring digital transformation to a thriving life by leveraging GIS Intelligence, leading us to develop real-time insights and thus, faster and data-driven decisions. </p>
            <h3 data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">Scalable <span>GIS solutions</span> enabling precision, deep insights, and smart infrastructure for future-driven industries.</h3>
          </div>
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
              <h5>Km. Highways <br /> Mapped</h5>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="op_three_about_us">
            <div className="container">
                <div className="op_three_ab_us_cont">
                    <div className="op_three_left_ab_us_d">
                        <img loading="lazy" src="/img/home/mapex_home_one.png" alt="" />
                    </div>
                    <div className="op_three_right_ab_us_d">
                        <h2>Mapping Excellence,Through Innovation.</h2>
                        <p>Born from the legacy of Azure Clouds, Mapex represents a powerful shift — a bold ambition to lead India’s geospatial future. We combine Ai, high-definition visuals, and precision mapping to deliver an unmatched Mapping Experience.</p>
                        <p>Building on the foundations of Azure Clouds, Mapex ushers in a new era to elevate and lead India’s Geospatial capabilities. Combining our rich experience with Ai, High-definition Visuals, and Precision Mapping, we offer a bouquet of cutting-edge solutions that pave the way for efficiency and growth.</p>
                    </div>
                </div>
            </div>
        </div> */}

      <div className="op_three_services">
        <div className="container">

          <div className="op_three_services_title" data-aos="fade-up">
            <h2 >Services That Empower
              Smarter Planning & Real-Time Decision-Making</h2>
            <p >Our GIS capabilities are designed to deliver high accuracy, seamless integration, and operational efficiency across every sector we serve. Explore our end-to-end geospatial solutions—from high precision mapping and field assessments to intuitive dashboards and AI-powered insights.</p>
          </div>
          <div className="op_three_services_cont" data-aos="fade-up">
            <Link href='/services' className="op_three_servi_left_i" >
              <img loading="lazy" src="/img/services/mapex_GIS.jpg" alt="" />
              <h3>GIS Mapping & Engineering</h3>
            </Link>
            <div className="op_three_servi_right_three">
              <Link href='/services' className="op_three_servi_th_o" >
                <img loading="lazy" src="/img/services/mapex_survey.jpg" alt="" />
                <h3>Surveying</h3>
              </Link>
              <div className="op_three_servi_th_o_b">
                <Link href='/services' className="op_three_servi_th_t" >
                  <img loading="lazy" src="/img/services/mapex_mapping.jpg" alt="" />
                  <h3>Spatial Analytics</h3>
                </Link>
                <Link href='/services' className="op_three_servi_th_t" >
                  <img loading="lazy" src="/img/services/mapex_BIM.jpg" alt="" />
                  <h3>BIM</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="op_three_our_partners mobile">
        {/* <div className="container">
                <h2>Our Clients and Partners</h2>
            </div> */}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}

          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          className="mySwiper"
        >
          {/* Other */}
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_7.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_10.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_8.png" alt="" />
            </div>
          </SwiperSlide>
          {/* Government clients */}
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_9.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/TUDA.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/Survey_of_India_logo.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_12.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_11.png" alt="" />
            </div>
          </SwiperSlide>


        </Swiper>
      </div>


      <div className="op_three_our_partners">
        {/* <div className="container">
                <h2>Our Clients and Partners</h2>
            </div> */}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}

          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >

          {/* Government clients */}
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_9.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/TUDA.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/Survey_of_India_logo.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_12.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_11.png" alt="" />
            </div>
          </SwiperSlide>

          {/* Other */}
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_7.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_10.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="op_three_our_partner">
              <img loading="lazy" src="/img/client_logo/mapex_client_8.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="op_three_fe_thee_ca">
        <div className="container">
          <div className="op_thee_fe_three_title">
            <h2>How Mapex Differentiates Itself</h2>
          </div>
          <div className="op_three_fe_thee_ca_cont">
            <div className="op_three_fe_thee_card" data-aos="fade-up">
              <div className="op_three_fe_thee_card_img"><img loading="lazy" src="/img/1.jpg" alt="" /></div>
              <h3>GIS First & Ai-Driven Insights</h3>

            </div>
            <div className="op_three_fe_thee_card" data-aos="fade-up">
              <div className="op_three_fe_thee_card_img"><img loading="lazy" src="/img/2.jpg" alt="" /></div>
              <h3>End-to-End Custom Solutions</h3>

            </div>
            <div className="op_three_fe_thee_card" data-aos="fade-up">
              <div className="op_three_fe_thee_card_img"><img loading="lazy" src="/img/3.jpg" alt="" /></div>
              <h3>Proven Government & Enterprise Expertise</h3>

            </div>
            <div className="op_three_fe_thee_card" data-aos="fade-up">
              <div className="op_three_fe_thee_card_img"><img loading="lazy" src="/img/4.jpg" alt="" /></div>
              <h3>Cost-Effective, Secured & Scalable</h3>

            </div>
          </div>
        </div>
      </div>

      <div className="op_three_solu">
        <div className="op_three_solu_bg_img"></div>
        <div className="container">
          <div className="op_three_solut_title">
            <h2>Innovation-Driven,
              Ai-Powered Solutions</h2>
          </div>

          <div className="op_three_solut_cont">
            <div className="op_three_solu_c_card" data-aos="fade-up">
              <div className="op_three_solu_card_img"><img loading="lazy" src="/img/solution/Solutions-1.jpg" alt="" /></div>
              <h3>PGLAB</h3>
              <h4>Smart GIS-Based Property and Tax Administration System</h4>
              <p>PGLAB is a powerful property and taxation solution that equips Urban Local Bodies with GIS-based tools to increase revenue, boost accountability, and improve citizen services. It provides a unified platform to capture, manage, and assess property data with high precision, helping local authorities make faster, data-backed decisions.</p>
            </div>
            <div className="op_three_solu_c_card" data-aos="fade-up">
              <div className="op_three_solu_card_img"><img loading="lazy" src="/img/solution/Solutions-3.jpg" alt="" /></div>
              <h3>POI Collection Platform</h3>
              <h4>Smart, Ai-Trained POI Identification and Collection</h4>
              <p>Our Ai-enabled POI solution delivers accurate object recognition and validation by leveraging machine learning trained on diverse datasets. Whether using vehicle-mounted systems or manual operations, Mapex offers scalable POI solutions.</p>
            </div>
            <div className="op_three_solu_c_card" data-aos="fade-up">
              <div className="op_three_solu_card_img"><img loading="lazy" src="/img/solution/Solutions-4.jpg" alt="" /></div>
              <h3>Post Processing Platform</h3>
              <h4>Efficient POI Data Cleansing and Standardization</h4>
              <p>Streamline your data accuracy and post-capture efficiency with our dedicated platform.</p>
            </div>
            <div className="op_three_solu_c_card" data-aos="fade-up">
              <div className="op_three_solu_card_img"><img loading="lazy" src="/img/solution/Solutions-2.jpg" alt="" /></div>
              <h3>Mapexport</h3>
              <h4>Automated Report Generation Platform</h4>
              <p>Mapexport automates the reporting lifecycle, reducing turnaround times from days to hours while ensuring accurate formatting and data integrity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="op_three_our_certificate">
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
            {/* <div className="certificate" data-aos="fade-up">
              <div className="certificate_img">
                <img loading="lazy"  src="/certificates/ISO-20252.png" alt="" />
              </div>
            </div> */}
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


      <section className="op_three_blog_section">
        <div className="container">
          <div className="op_three_blog_flexwrap">
            {/* Left Block */}
            <div className="op_three_blog_left">
              <div className="op_three_blog_textblock">
                <h2 className="op_three_blog_title" data-aos="fade-right">
                  Our latest <span className="op_three_blog_title_highlight">blogs</span>
                </h2>
                <p className="op_three_blog_desc">
                  Explore expert perspectives, project stories, and emerging trends in geospatial technology, Ai-powered mapping, 3D visualization, and spatial data innovation — all in one place.
                </p>
                <Link href="/blogs" className="op_three_blog_button" data-aos="fade-up">View All</Link>
              </div>

              {/* Slider Controls */}
              <div className="op_three_blog_controls" data-aos="fade-up">
                <div className="swiper-button-prev">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="swiper-button-next">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Block - Swiper Slider */}
            <div className="op_three_blog_right">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                slidesPerView={2}
                spaceBetween={28}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  568: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                }}
              >
                {blogData.map((blog, i) => (
                  <SwiperSlide key={i}>
                    <div className="op_three_blog_slide">
                      <div className="op_three_blog_image_wrap">
                        <img loading="lazy"
                          src={blog.image}
                          alt="blog"
                          className="op_three_blog_image"
                        />
                      </div>
                      <h3 className="op_three_blog_post_title">{blog.title}</h3>
                      <p className="op_three_blog_post_desc">{blog.desc}</p>
                      <a href={blog.link} className="op_three_blog_readmore">
                        Read more
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                          <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4338CA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>
      </section>

    </div>
  </>
}