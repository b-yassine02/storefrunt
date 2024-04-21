import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaBars } from "react-icons/fa6";
import { LuPlusSquare } from "react-icons/lu";
import { MdExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { PiHouseBold } from "react-icons/pi";

function Navigation() {
    const links = [
        { label: "Home",                icon: <PiHouseBold className="fs-small" />          },
        { label: "Search",              icon: <IoSearch className="fs-small" />             },
        { label: "Create",              icon: <LuPlusSquare className="fs-small" />         },
        { label: "Explore",             icon: <MdExplore className="fs-small" />            },
        { label: "Messages",            icon: <FiMessageSquare className="fs-small" />      },
        { label: "Notifications",       icon: <FaRegHeart className="fs-small" />           },
        { label: "Profile",             icon: 
        <div className="wd-icon-profile">
            <img src="/images/duckie.jpg" alt="profile" />
        </div>
        },
    ];
    const { pathname } = useLocation();

    return (
        <div className="wd-storefrunt">
            <p className="wd-storefrunt-logo d-none d-sm-none d-md-block">STOREFRUNT</p>
            <ul className="wd-storefrunt-navigation d-none d-sm-none d-md-block">
                <li>
                    {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Main/${link.label}`}> 
                    <div className="wd-storefrunt-icon-label">
                        <div className="wd-icon" >
                            {link.icon} 
                        </div>
                        <div className="wd-label">
                            {link.label}
                        </div>
                    </div>
                    </Link>
                    </li>
                    ))}
                </li>
                <li className="more-nav" style={{ marginTop: 120 }}>
                    <li className={pathname.includes("More") ? "wd-active" : ""}>
                        <Link to={`/Main/More`}> 
                            <div className="wd-storefrunt-icon-label">
                                <div className="wd-icon">
                                    <FaBars className="fs-small" /> 
                                </div>
                                <div className="wd-label">
                                    More
                                </div>
                            </div>
                        </Link>
                    </li>
                </li>
            </ul>

        </div>
    );
}
export default Navigation;