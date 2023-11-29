import { useState} from "react";

import { close, rainbow, menu } from "../assets";
import { navLinks } from "../constants";
import {Link, NavLink} from "react-router-dom";
import '../index.css'


const Navbar = (props) => {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [hoveredNavItem, setHoveredNavItem] = useState(null);
    const [clickedNavItem, setClickedNavItem] = useState(null);

    const handleMouseEnter = (navId) => {
        setHoveredNavItem(navId);
    };

    const handleMouseLeave = () => {
        setHoveredNavItem(null);
    };

    const handleItemClick = (navId) => {
        setClickedNavItem(clickedNavItem === navId ? null : navId);
    };
    return (
        <nav className="w-full flex sm:flex-col py-6 justify-between items-center navbar">
            <Link to={'/'}><img src={rainbow} alt="" className="w-[180px] h-[77px] mb-5" /></Link>


            <ul className="list-none sm:flex hidden justify-end items-center flex-1 ml-5">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-Heebo font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onMouseEnter={() => handleMouseEnter(nav.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {nav.subnavlinks ? (
                            <div
                                onClick={() => handleItemClick(nav.id)}
                                className="flex flex-row items-center"
                            >
                                {nav.title}{' '}
                                <svg
                                    className="-mr-1 h-5 w-5 text-gray-400 ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        ) : (
                            <Link to={nav.path} className="flex flex-row items-center">
                                {nav.title}{' '}
                                {nav.subnavlinks && (
                                    <svg
                                        className="-mr-1 h-5 w-5 text-gray-400 ml-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </Link>
                        )}
                        {(hoveredNavItem === nav.id || clickedNavItem === nav.id) && nav.subnavlinks && (
                            <ul className="absolute mt-2 bg-white border rounded shadow-lg">
                                {nav.subnavlinks.map((subnav) => (
                                    <li key={subnav.id} className="py-2 px-4">
                                        <a href={subnav.path}>{subnav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>




            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-babyblue absolute text-white top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className=" bg-babyblue list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-Heebo font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                                onMouseEnter={() => handleMouseEnter(nav.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {nav.subnavlinks ? (
                                    <div
                                        onClick={() => handleItemClick(nav.id)}
                                        className="flex flex-row items-center"
                                    >
                                        {nav.title}{' '}
                                        <svg
                                            className="-mr-1 h-5 w-5 text-gray-400 ml-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <Link to={nav.path} className="flex flex-row items-center">
                                        {nav.title}{' '}
                                        {nav.subnavlinks && (
                                            <svg
                                                className="-mr-1 h-5 w-5 text-gray-400 ml-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </Link>
                                )}
                                {(hoveredNavItem === nav.id || clickedNavItem === nav.id) && nav.subnavlinks && (
                                    <ul className="bg-red-300 absolute mt-2 bg-white border rounded shadow-lg">
                                        {nav.subnavlinks.map((subnav) => (
                                            <li key={subnav.id} className="py-2 px-4">
                                                <a href={subnav.path}>{subnav.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
