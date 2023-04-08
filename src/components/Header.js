import React, {useState} from "react";
import PropTypes from "prop-types";
import "../styles/Header.css";


function Header(props) {
    let [count, setNewCount] = useState(0);
    const handleClick = function () {
        setNewCount(count + 1);
    }
    return (
        <header>Hello from Header.js
            <button className={"some-button"} onClick={handleClick}>{props.buttonName}, нажата {count} раз</button>
        </header>
    )
}

Header.propTypes  = {
    buttonName: PropTypes.string
}
export default Header;