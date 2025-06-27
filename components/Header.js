import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { TfiThought } from "react-icons/tfi";
import { IoEarthOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiUsersDuotone } from "react-icons/pi";
import { AiOutlineSolution } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".op_three_header");
            if (header) {
                header.classList.toggle("sticky", window.scrollY > 70);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const router = useRouter();
    const { pathname } = router;
    const isNotHome =
        ['/about', '/services', '/solutions', '/contact'].some(p => pathname.startsWith(p)) ||
        (pathname === '/career') ||
        (pathname === '/blogs') ||
        (pathname === '/case-studies')

    const navItems = [
        { href: '/', label: 'Home', icon: <GoHome /> },
        { href: '/about', label: 'About', icon: <TfiThought /> },
        { href: '/services', label: 'Services', icon: <IoEarthOutline /> },
        { href: '/solutions', label: 'Solutions', icon: <AiOutlineSolution /> },
        { href: '/case-studies', label: 'Case Studies', icon: <IoChatboxEllipsesOutline /> },
        { href: '/career', label: 'Career', icon: <PiUsersDuotone /> },
        { href: '/blogs', label: 'Blogs', icon: <IoChatboxEllipsesOutline /> },
        { href: '/contact', label: 'Contact', icon: <RiContactsLine /> }
    ];


    return <>
        <header className="op_three_header">
            <div className="container">
                <div className="op_three_header_cont">
                    <Link href="/" className="op_three_he_logo"><img src={isNotHome ? "/img/logo.png" : "/img/logo.png"} alt="" /></Link>
                    <div className={`op_three_he_navlist ${isNotHome ? "other" : ""}`}>
                        <ul>
                            {navItems.map(({ href, label }) => {
                                const isActive = href !== '/' && pathname.startsWith(href);
                                return (
                                    <li key={href}>
                                        <Link href={href} className={isActive ? 'active' : ''}>
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <button
                        className={`mobile_menu_button ${isNotHome ? "other" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <HiMiniBars3BottomRight />
                    </button>
                </div>
            </div>

            <div className={menuOpen ? "mobile_menu_toggle active" : "mobile_menu_toggle"} onClick={() => setMenuOpen(!menuOpen)}>
                <div className="mobile_logo">
                    <img src="/img/logo.png" alt="" />
                    <button onClick={() => setMenuOpen(!menuOpen)} >
                        <IoClose />
                    </button>
                </div>
                <ul>
                    <li >
                        <Link href='/' className='active'>
                            Home
                        </Link>
                        <Link href='/about' className='active'>
                            About
                        </Link>
                        <Link href='/services' className='active'>
                            Services
                        </Link>
                        <Link href='/solutions' className='active'>
                            Solution
                        </Link>
                        <Link href='/case-studies' className='active'>
                            Case Studies
                        </Link>
                        <Link href='/career' className='active'>
                            Career
                        </Link>
                        <Link href='/blogs' className='active'>
                            Blogs
                        </Link>
                    </li>
                </ul>

                <div className="mobile_join_to_btns">
                    <Link href="/joinus"><LuUser />Join us</Link>
                    <Link href="/contact">Contact us</Link>
                </div>
            </div>
        </header>
    </>
}