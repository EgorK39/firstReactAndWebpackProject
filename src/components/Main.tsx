import * as React from "react";
import Countries from "./Countries";
import "../styles/Main.css";

class Main extends React.Component<any, any> {
    render() {
        return (
            <main>
                <Countries/>
            </main>
        )
    }
}

export default Main;