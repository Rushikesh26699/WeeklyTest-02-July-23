import React from 'react'
import './Header.css'
import image from '../Assets/Images/image.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from '../Redux Toolkit/ThemeSlices'

const Header = () => {


    const buttonLight = { backgroundColor: "white", color: "black" }
    const buttonDark = { backgroundColor: "#0f172a", color: "white" }

    const themeData = useSelector((store) => {
        return store.Theme
    })
    console.log(themeData);

    const dispatch = useDispatch()

    const handleToggleTheme = () => {
        dispatch(setTheme());
    };

    return (
        <div className="Header">

            

            <div className="headerBottom">

                <div className="logo">
                    <img src={image} alt="Img" />
                </div>

                <div className="tab">
                    <ul>
                        <Link id='link' to="/Home">
                            <li>Home</li>
                        </Link>
                        <Link id='link' to="/Contact">
                            <li>Contact</li>
                        </Link>
                        <Link id='link' to="/Service">
                            <li>Service</li>
                        </Link>
                    </ul>

                </div>

                <div className="toggleButton">
                    <button onClick={handleToggleTheme}
                        style={themeData === "light" ? buttonDark : buttonLight}>
                        {themeData === "light" ?<h3 style={{margin:0}}>Tap To Dark</h3> : <h3 style={{margin:0}}>Tap To Light</h3>}</button>

                        <div className="headerUpper">
                <p>Theme : <span>{themeData === "light" ? "Light" : "Dark"}</span></p>
            </div>


                </div>
            </div>

        </div>

    )
}

export default Header
