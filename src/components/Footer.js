import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
    const year = new Date().getFullYear();

function Footer () {
    return (
       <>
        <footer className="footer">Copyright © Teki  - 
        <a href="https://aimeemisaki.com/">Aimee Misaki <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </a>{` ${year}`}</footer>
        </>
    )
}

export default Footer