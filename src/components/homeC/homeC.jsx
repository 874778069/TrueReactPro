import React from "react";
import "./index.styl"
import PropTypes from "prop-types";

export default class homeC extends React.Component {

    static propTypes = {
        objNew : PropTypes.object.isRequired
    };

    render() {
        const {objNew} = this.props;
        return (
            <div className="m-tpls m-tpls-rec">
                <a href={objNew.schemeUrl}>
                    <div className="title">{objNew.title}</div>
                    <div className="u-pic">
                        <img src={objNew.picUrl} alt="" width="100%" height="100%"/>
                    </div>
                    <div className="u-rcount"><i className="ico"></i><span>{objNew.readCount}人看过</span>
                    </div>
                </a>
            </div>
        )
    }

}
