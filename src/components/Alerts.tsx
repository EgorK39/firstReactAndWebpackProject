import * as React from "react";

function Alerts(props) {
    let children = props.children;
    return (
        <>
            {
                React.Children.map(children, (el, index) => {
                    if (index < 2) {
                        return el;
                    }
                })
            }
            {
                React.Children.count(children)
            }
        </>
    );

}

export default Alerts;