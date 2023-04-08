import React, {useState, Fragment} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Country from "./Country";
import "../styles/Countries.css";

function Countries() {
    const [countries, setCounties] = useState([]);
    if (!countries.length) {
        axios.get('https://restcountries.com/v3.1/region/europe').then(res => {
            console.log(res);
            setCounties(res.data);
        });
    }

    return (
        <Fragment>
            <h1>Hello from Countries</h1>
            <Table className={'countries'} striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Столица</th>
                    <th>Страна</th>
                    <th>BTN</th>
                </tr>
                </thead>
                <tbody>
                {countries.map((country) => <Country key={country.cca3} country={country}/>
                )}
                </tbody>
            </Table>
        </Fragment>
    );
}

export default Countries;