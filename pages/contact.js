import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export default function contact() {
    return <>
        <div className="contact_us_page">
            <div className="about_us_p_banner">

                <div className="about_us_banner_main" style={{ background: "url(/img/contact.jpg) no-repeat center center/cover", backgroundAttachment: "fixed" }}>
                    <div className="container">
                        <div className="about_us_bann_m_co">
                            <h1>Let’s Map What’s <br /> Next Together</h1>
                            <p>Have a question, project, or idea? Reach out to explore how Mapex can support your geospatial goals with precision, innovation, and insight.</p>
                            <Link href='#contact'>Contact<FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact_u_p_cont" id="contact">
                <div className="container">
                    <div class="content-grid">
                        <div class="contact-info">
                            <div class="info-section">
                                <h3>Get in Touch</h3>

                                <div class="info-item">
                                    <h4>Email</h4>
                                    <p><a href="mailto:contact@mapex.ai">contact@mapex.ai</a></p>
                                </div>

                                <div class="info-item">
                                    <h4>Phone</h4>
                                    <p><a href="tel:+911203130296">+91 120 313 0296</a></p>
                                </div>

                                <div class="info-item">
                                    <h4>Office Hours</h4>
                                    <p>Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
                                </div>

                                <div class="info-item">
                                    <div className="flex flex-sb flex-left">
                                        <div>
                                            <h4>Address</h4>
                                            <p>8th Floor, Tower-A, Green Boulevard, <br />
                                                Sector 62, Noida 201301, Uttar Pradesh, INDIA</p>
                                        </div>
                                        <a className="get_the_loca" target="_blank" href="https://maps.app.goo.gl/JtuVYF8ihnz6W1q99"><CiLocationOn />Get the location</a>
                                    </div>

                                </div>

                                <div className="join_our_team_btn">
                                    <Link href='/career'>Join Our Team <FaArrowRight /></Link>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form">
                            <div class="form-header">
                                <h2>Send a Message</h2>
                            </div>

                            <div id="successMessage" class="success-message">
                                Thank you for your message. We'll be in touch soon.
                            </div>

                            <form id="contactForm">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" name="firstName" required />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" required />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" required />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" id="phone" name="phone" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" required />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" required placeholder="Tell us about your inquiry..."></textarea>
                                </div>

                                <button type="submit" class="submit-btn" id="submitBtn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}