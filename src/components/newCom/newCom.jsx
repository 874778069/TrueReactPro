import React from "react";
import "./index.styl"
import PropTypes from "prop-types";

export default class newCom extends React.Component {

    static propTypes = {
        objNew : PropTypes.object.isRequired
    };

    render() {
        const {objNew} = this.props;
        return (
            <div className="m-tpls m-tpls-new">
                <a href={objNew.schemeUrl}>
                    <div className="title">{objNew.title}</div>
                    <div className="content">{objNew.subTitle}</div>
                </a>
                <ul className="m-gplist">
                    {
                        objNew.itemList.map((item,index) => (
                            item ? (
                                <li key={index}>
                                    <img src={item.itemUrl} alt="" width="100%" height="100%"/>
                                </li>
                            ) : null
                        ))
                    }
                </ul>
                <div className="u-rcount">
                    <i className="ico"></i>
                    <span>{(objNew.readCount/1000).toFixed(1)} K人看过</span>
                </div>
            </div>
        )
    }

}
