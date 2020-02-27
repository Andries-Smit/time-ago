import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import JavascriptTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import nl from "javascript-time-ago/locale/nl";
import ReactTimeAgo from "react-time-ago";

import "./ui/TimeAgo.css";

class TimeAgo extends Component {
    constructor(props) {
        super(props);
        JavascriptTimeAgo.locale(en);
        JavascriptTimeAgo.locale(nl);
    }

    render() {
        const style = ["twitter", "time"];
        const timeStyle = style.includes(this.props.format) ? this.props.format : { flavour: this.props.format };

        if (this.props.timeStamp.status === "available" && this.props.timeStamp.value) {
            const locale = window.mx.session.sessionData.locale.code.replace("_", "-");
            return (
                <div className="widget-time-ago">
                    <ReactTimeAgo date={this.props.timeStamp.value} timeStyle={timeStyle} locale={locale} />
                </div>
            );
        } else {
            return <div className="widget-time-ago" />;
        }
    }
}

export default hot(TimeAgo);
