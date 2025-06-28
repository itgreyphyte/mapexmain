import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaXTwitter, FaYoutube } from "react-icons/fa6"

export default function Footer() {
    return <>
        <div className="op_three_cta_sec">
            <div className="container">
                <div className="op_three_cta_sec_cont" >
                    <p>Calling all GIS pioneers, engineers and leaders to build
                        India’s geospatial future together with Mapex.</p>

                    <Link href='/'>Join Us</Link>
                </div>
            </div>
        </div>


        <div className="op_three_footer">
            <div className="op_three_footer_cont">
                <div className="container">
                    <div className="op_three_footer_cont_de">
                        <div className="op_three_footer_top">
                            <div className="op_three_footer_newsetter">
                                <h4>Don't miss what's next.</h4>
                                <form action="#">
                                    <input type="email" placeholder="Enter your email" />
                                    <button type="submit">Subscribe</button>
                                </form>
                                <p>By submitting you agree to receive our emails. You can unsubscribe anytime.</p>
                            </div>
                            <div className="flex flex-col flex-right">
                                <img width={450} src="/img/services/service.png" className="mb-2" alt="" />
                                <h3><a href="mailto:contact@mapex.ai">contact@mapex.ai</a></h3>
                            </div>
                        </div>
                        <div className="op_three_footer_logo_info">
                            <Link href='/' className="op_three_foo_logo"><img width={350} src="/img/logo.png" alt="" /></Link>
                            <div className="op_three_footer_nav_address">
                                <div className="footer_soci_ico">
                                    <a target="_blank" href="https://www.linkedin.com/company/mapexai/"><FaLinkedin /></a>
                                    <a target="_blank" href="https://www.facebook.com/mapexai/"><FaFacebook /></a>
                                    <a target="_blank" href="https://www.instagram.com/mapexai/"><FaInstagram /></a>
                                    <a target="_blank" href="https://www.youtube.com/@mapexai"><FaYoutube /></a>
                                    <a target="_blank" href="https://x.com/mapex_ai"><FaXTwitter /></a>
                                    <a target="_blank" href="https://in.pinterest.com/mapexai/"><FaPinterest /></a>
                                </div>
                                <p>&copy; Mapex Ai Pvt Ltd. All Rights Reserved. Design and Developed by <a target="_blank" href="https://greyphyte.com">Greyphyte</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    </>
}