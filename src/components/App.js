import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header buttonName="Some button"/>
                <Main/>
            </React.Fragment>

        );
    }
}

export default App;