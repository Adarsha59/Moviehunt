import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";
import logo from "../../assets/logooo.svg";
import ContentWrapper from "../ContentWrapper/wrapper";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    


  

  

    return (
        <header >
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                   <img src={logo} alt="" />
                </div>
               

               
            </ContentWrapper>
            
        </header>
    );
};

export default Header;