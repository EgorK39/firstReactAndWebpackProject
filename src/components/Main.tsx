import * as React from "react";
import Countries from "./Countries";
import Alerts from "./Alerts";
import "../styles/Main.css";
import Alert from "react-bootstrap/Alert";

class Main extends React.Component<any, any> {
    render() {
        let alertText = <b>Text from Main</b>;
        return (
            <main>
                <Alerts>
                    <Alert variant={"info"}>
                        {alertText}
                    </Alert>
                    <Alert variant={"danger"}>
                        {alertText}
                    </Alert>
                    <Alert variant={"success"}>
                        {alertText}
                    </Alert>
                </Alerts>
                <Countries/>
            </main>
        )
    }
}

export default Main;