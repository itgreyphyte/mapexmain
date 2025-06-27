
import { useRouter } from "next/router"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function blogSlug() {

    const router = useRouter();

    const { slug } = router.query;



    return <>

        <div className="blog_inner_page">


            <div className="blog_inner">
                <div className="container">
                    <div className="blog_inner_cont">
                        <img src="/img/news/mapex_news-3.jpg" alt="mapex" />
                        <article>
                            <h1 data-aos="fade-up">Mapping India’s Infrastructure Future with Geospatial Intelligence</h1>
                            <p data-aos="fade-up" className="subtitle">Setting the Context</p>

                            <p data-aos="fade-up">
                                Today, India stands at the brink of an infrastructure revolution. Over the last decade, the nation has
                                made significant strides towards the future with notable advancements in smart cities and expressways,
                                agricultural technology, as well as new-age energy grids...
                            </p>

                            <p data-aos="fade-up">
                                Geospatial Intelligence, or GIS-based Spatial Analytics, goes beyond developing just maps. Instead, this
                                technology focuses on capturing, processing, and analysing spatial data that encourages smarter
                                decisions...
                            </p>

                            <p data-aos="fade-up">
                                In this article, we take a microscoping view of GIS and its importance in shaping India’s future, and
                                how Mapex is leveraging AI and other new-age technologies for both private and public players to achieve
                                these goals.
                            </p>

                            <h2 data-aos="fade-up">Simplifying Geospatial Intelligence</h2>
                            <p data-aos="fade-up">
                                Before we go forward, let us quickly go through some of the frequently occurring terms that you will
                                encounter throughout this article.
                            </p>
                            <p data-aos="fade-up">Geospatial intelligence refers to the use of location-based data...</p>
                            <ul data-aos="fade-up">
                                <li>Mapping (GIS): Understanding “where” something is</li>
                                <li>Remote Sensing: Using satellite/drones to observe land or infrastructure</li>
                                <li>Data Engineering: Cleaning and organising data for use</li>
                                <li>Analytics: Extracting patterns, forecasting, and optimising based on data</li>
                                <li>BIM: To leverage new-age CAD and Infrastructure Modelling for efficiency</li>
                            </ul>
                            <p data-aos="fade-up">
                                Together, these technologies convert raw data into meaningful insights that will drive decision-making.
                            </p>

                            <h2 data-aos="fade-up">A Closer Look at India’s Infrastructure Landscape</h2>
                            <p data-aos="fade-up">Some noteworthy objectives include:</p>
                            <ul data-aos="fade-up">
                                <li>150+ New Airports...</li>
                                <li>100+ Smart Cities...</li>
                                <li>80,000+ km of National Highways...</li>
                                <li>Urban Mobility Reforms...</li>
                                <li>Digital Infrastructure: BharatNet and 5G...</li>
                                <li>Water, Sanitation, and Waste Management...</li>
                            </ul>
                            <p data-aos="fade-up">
                                With such lofty goals... it is crucial for India to adopt location intelligence...
                            </p>

                            <h2 data-aos="fade-up">Geospatial Intelligence And Smarter Infrastructure</h2>
                            <p data-aos="fade-up">Geospatial intelligence supports every stage of infrastructure development:</p>

                            <h3 data-aos="fade-up">1. Pre-Planning & Feasibility</h3>
                            <ul data-aos="fade-up">
                                <li>Land surveys, elevation models...</li>
                                <li>Population and mobility heat maps...</li>
                                <li>Risk analysis: flood zones, seismic risks...</li>
                            </ul>

                            <h3 data-aos="fade-up">2. Design & Engineering</h3>
                            <ul data-aos="fade-up">
                                <li>CAD and GIS integration...</li>
                                <li>Precise boundary and layout planning</li>
                                <li>Material and manpower estimations...</li>
                            </ul>

                            <h3 data-aos="fade-up">3. Execution & Monitoring</h3>
                            <ul data-aos="fade-up">
                                <li>Drone-based construction monitoring</li>
                                <li>Real-time field data reporting</li>
                                <li>Tracking timelines, compliance...</li>
                            </ul>

                            <h3 data-aos="fade-up">4. Post-Completion Maintenance</h3>
                            <ul data-aos="fade-up">
                                <li>Digital twins of infrastructure assets</li>
                                <li>Predictive maintenance alerts</li>
                                <li>Utility line mapping...</li>
                            </ul>

                            <h2 data-aos="fade-up">How Mapex Enables India’s GIS-Driven Future</h2>
                            <ul data-aos="fade-up">
                                <li>AI & ML tools for large-scale spatial analysis</li>
                                <li>BIM expertise for efficiency</li>
                                <li>Survey & drone teams for accurate data</li>
                                <li>Custom application development</li>
                                <li>Expertise in municipal, road, and utility projects</li>
                            </ul>

                            <h2 data-aos="fade-up">The Mapex Difference</h2>
                            <ul data-aos="fade-up">
                                <li>Municipal Projects: Accurate maps for governance</li>
                                <li>Road & Highway Planning: Optimise route alignment</li>
                                <li>Smart City Solutions: 3D models for zoning and planning</li>
                            </ul>

                            <h2 data-aos="fade-up">The Global Perspective</h2>
                            <p data-aos="fade-up">
                                The global geospatial analytics market is projected to grow to $157 billion by 2030...
                            </p>

                            <h2 data-aos="fade-up">Conclusion: Mapping Tomorrow with Confidence</h2>
                            <p data-aos="fade-up">
                                India is building faster than ever before... In such a scenario, geospatial intelligence, when integrated
                                early, gives planners and policymakers the power to see problems before they occur...
                            </p>
                            <p data-aos="fade-up">
                                We, at Mapex, are not just making this transformation possible but making it efficient as well...
                            </p>

                            <div className="articles_tags">
                                <p>
                                    Tags: &nbsp;&nbsp; <strong>GIS</strong> <strong>Urban Planning</strong>{" "}
                                    <strong>Smart Cities</strong> <strong>Technology</strong>
                                </p>
                            </div>
                        </article>
                    </div>


                    <div className="share_and_comment_cont">

                        <div className="share_this_article">
                            <div className="share_th_ar">
                                <p>Share this Article :</p>
                                <div className="share_ar_icons">
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaPinterestP /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                </div>
                            </div>
                            <div className="published_date">
                                <p>Published at: 21-05-2025</p>
                            </div>
                        </div>

                        {/* <div className="comment_sec">
                            <div className="view_all_commnet">
                                <div className="view_all_comment_title">
                                    <h3>Comments (5)</h3>
                                </div>
                                <div class="comment_sec_root">

                                    <ul class="comment_sec_list">

                                        <li class="comment_sec_item">
                                            <div class="comment_sec_meta">
                                                <h3 class="comment_sec_author">Alex Johnson</h3>
                                                <span class="comment_sec_date">2 days ago</span>
                                            </div>
                                            <p class="comment_sec_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt explicabo iste tempora, fugit nam sed?</p>
                                            <button class="comment_sec_reply_btn">Reply</button>


                                            <ul class="comment_sec_list">
                                                <li class="comment_sec_item reply">
                                                    <div class="comment_sec_meta">
                                                        <h3 class="comment_sec_author">Sarah Miller</h3>
                                                        <span class="comment_sec_date">1 day ago</span>
                                                    </div>
                                                    <p class="comment_sec_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    <button class="comment_sec_reply_btn">Reply</button>
                                                </li>
                                            </ul>
                                        </li>


                                        <li class="comment_sec_item">
                                            <div class="comment_sec_meta">
                                                <h3 class="comment_sec_author">Michael Chen</h3>
                                                <span class="comment_sec_date">3 days ago</span>
                                            </div>
                                            <p class="comment_sec_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nihil culpa ea.</p>
                                            <button class="comment_sec_reply_btn">Reply</button>


                                            <ul class="comment_sec_list">
                                                <li class="comment_sec_item reply">
                                                    <div class="comment_sec_meta">
                                                        <h3 class="comment_sec_author">DesignTeam</h3>
                                                        <span class="comment_sec_date">2 days ago</span>
                                                    </div>
                                                    <p class="comment_sec_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    <button class="comment_sec_reply_btn">Reply</button>


                                                    <ul class="comment_sec_list">
                                                        <li class="comment_sec_item reply">
                                                            <div class="comment_sec_meta">
                                                                <h3 class="comment_sec_author">Michael Chen</h3>
                                                                <span class="comment_sec_date">1 day ago</span>
                                                            </div>
                                                            <p class="comment_sec_text">Lorem ipsum dolor sit amet consectetur.</p>
                                                            <button class="comment_sec_reply_btn">Reply</button>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="commnet_form_sec_cont">
                                        <form class="comment_sec_form">
                                            <h3 class="comment_sec_form_title">Leave a comment</h3>

                                            <div class="comment_sec_form_group">
                                                <label class="comment_sec_label" for="name">First Name</label>
                                                <input class="comment_sec_input" type="text" id="name" required />
                                            </div>

                                            <div class="comment_sec_form_group">
                                                <label class="comment_sec_label" for="email">Email (will not be published)</label>
                                                <input class="comment_sec_input" type="email" id="email" required />
                                            </div>

                                            <div class="comment_sec_form_group">
                                                <label class="comment_sec_label" for="comment">Your Thoughts</label>
                                                <textarea class="comment_sec_textarea" id="comment" required></textarea>
                                            </div>

                                            <div class="comment_sec_submit_wrap">
                                                <button type="submit" class="comment_sec_submit">Post Comment</button>
                                            </div>
                                        </form>

                                        <div className="comment_form_right_svg_icon">
                                            <img src="/svg/mapex_svg.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}