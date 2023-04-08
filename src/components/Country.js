import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import "../styles/Country.css";

function Country(props) {
    const [selected, changeSelected] = useState(false);
    return (
        <tr className={selected ? "selected-country" : ""}>
            <td>{props.country.name.official}</td>
            <td>{props.country.capital}</td>
            <td>
                {selected ?
                    <Button variant={"danger"} onClick={() => changeSelected(false)}>Удалить</Button> :
                    <Button variant={"success"} onClick={() => changeSelected(true)}>Добавить</Button>

                }
            </td>
        </tr>
    );
}

export default Country;