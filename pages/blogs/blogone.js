
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
                        <img src="/blog/mapex_medium.jpg" alt="mapex" />
                        <article>
                            <h1 data-aos="fade-up">Mapex Appraised at CMMI Level 3, Reinforcing Its Focus on Scalable Geospatial Solutions</h1>
                            <p data-aos="fade-up" class="subtitle">New Delhi, India — A key milestone that reflects Mapex's commitment to delivering consistent, process-driven solutions for scalable and sustainable project outcomes.</p>

                            <div class="article-meta" data-aos="fade-up">
                                <div class="meta-item">Geospatial Intelligence</div>
                                <div class="meta-item">Infrastructure Tech</div>
                                <div class="meta-item">CMMI Level 3</div>
                            </div>

                            <h2 data-aos="fade-up">Delivering Scalable Infrastructure Solutions through Geospatial Intelligence</h2>
                            <p data-aos="fade-up">The demand for real-time, data-driven decision-making is rising as Ai, deep analytics, and geospatial intelligence become more common in infrastructure development. Mapex was founded to address this growing need. The company uses drone data, IoT inputs, and advanced spatial mapping tools to support infrastructure projects. This helps clients across sectors improve efficiency and maintain better control throughout project execution.</p>

                            <p data-aos="fade-up">Mapex supports urban development, highway infrastructure, and water management projects. It provides actionable insights and intelligent automation, enabling teams to plan, track, and execute more effectively.</p>

                            <div class="quote" data-aos="fade-up">
                                <p>"Achieving CMMI Level 3 is a proud moment for Mapex. It reflects our process maturity and commitment to delivering trusted, high-quality solutions. This milestone strengthens our ability to drive innovation in geospatial intelligence and support India's infrastructure goals with greater speed, precision, and reliability."</p>
                                <div >— Surendra Nath Das, CEO of Mapex</div>
                            </div>

                            <h2 data-aos="fade-up">CMMI Level 3: Strengthening Process Maturity</h2>
                            <p data-aos="fade-up">Appraising at CMMI Level 3 demonstrates that Mapex operates with a well-defined, repeatable process framework across its projects. This reflects the organization's ability to manage delivery consistently, scalability, and quality.</p>

                            <p data-aos="fade-up">Industry experts see this as a strong foundation for Mapex's engagement in more complex infrastructure projects, ensuring client objectives are met through structured execution and sustained innovation.</p>

                            <div class="highlight-box" data-aos="fade-up">
                                <h2 data-aos="fade-up">Enabling Business Impact Through Geospatial Intelligence</h2>
                                <p data-aos="fade-up">With CMMI Level 3 process capabilities, Mapex is better positioned to offer:</p>
                                <ul data-aos="fade-up">
                                    <li>Faster project turnaround through optimized data workflows</li>
                                    <li>Greater transparency via real-time dashboards and reporting tools</li>
                                    <li>Predictive insights that reduce risks and delays</li>
                                    <li>Improved cost control through precision planning</li>
                                </ul>
                            </div>

                            <div class="cta" data-aos="fade-up">
                                <h2>Unlock the Power of Geospatial Intelligence with a CMMI Level 3-Certified Team</h2>
                                <p>Now CMMI Level 3 appraised, Mapex invites partners to explore its advanced solutions for smarter infrastructure development.</p>
                                <p>Use their expertise to build more resilient, data-driven infrastructure. To learn more, email: <a href="mailto:contact@mapex.ai">contact@mapex.ai</a>.</p>
                            </div>

                            <h2 data-aos="fade-up">About Mapex</h2>
                            <p data-aos="fade-up">Mapex is a forward-thinking geospatial intelligence company based in India. Specializing in Ai-driven mapping, drone technology, and spatial analytics, the company enables public and private sector clients to improve project execution and infrastructure outcomes. Mapex supports smarter planning and sustainable development across multiple infrastructure verticals through real-time insights and scalable solutions.</p>

                            <div className="articles_tags">
                                <p>Tags: &nbsp;&nbsp; <strong>GIS</strong> <strong>Urban Planning</strong> <strong>Smart Cities</strong> <strong>Technology</strong></p>
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