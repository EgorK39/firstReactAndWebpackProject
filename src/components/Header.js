import React, {useState} from "react";
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

export default Header;