import * as React from "react";
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import "../styles/Country.css";

function Country(props) {
    const [selected, changeSelected] = React.useState(false);
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

// Country.propTypes = {
//     country: PropTypes.object
// }
export default Country;