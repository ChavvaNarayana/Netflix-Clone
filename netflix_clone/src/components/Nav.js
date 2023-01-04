import React from 'react';
import { useEffect, useState , useLayoutEffect } from 'react';
import '../styles/Nav.css'


export default function Nav() {

    // const [show, handleShow] = useState(false);

    // useLayoutEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         } else {
    //             handleShow(false);
    //         }
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);

    return (
        <>
            <div>
                <img
                    className='nav_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                />
                <img
                    className='nav_avatar'
                    src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                    alt='Avatar'
                />
            </div>
            <button className="scroll-to-top" >Scroll to top</button>
            {/* style={{ display: show ? "block" : "none" }} */}
        </>
    );
}
