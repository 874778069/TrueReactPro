import React from "react";
import PropTypes from "prop-types";
import "./index.styl"

export default class TopicItem extends React.Component {

    static propTypes = {
        obj : PropTypes.object.isRequired
    };

    render() {
        const {obj} = this.props;
        if(obj.type==0){
            return (
                <div className="tpl1">
                    <a href="#">
                        <div className="name">
                            <span className="ava">
                                <img src={obj.avatar}/>
                            </span>
                            <span>{obj.nickname}</span>
                        </div>
                        <div className="title">{obj.title}</div>
                        <div className="pic">
                            <img src={obj.picUrl}/>
                        </div>
                        <div className="rcount">
                            <i className="icon"></i>
                            <span>{obj.readCount}k人看过</span>
                        </div>
                    </a>
                </div>
            )
        }else if (obj.type==1){
            return (
                <div className="tps2">
                    <a href="#">
                        <div className="info">
                            <div className="info">
                                <div className="name">
                                    <span className="ava">
                                        <img src={obj.avatar}/>
                                    </span>
                                    <span>{obj.nickname}</span>
                                </div>
                                <div className="title">{obj.title}</div>
                                <div className="desc">{obj.subTitle}</div>
                                <div className="rcount">
                                    <i className="icon"></i>
                                    <span>{obj.readCount}k人看过</span>
                                </div>
                            </div>
                        </div>
                        <div className="pic">
                            <img src={obj.picUrl} alt="" width="100%" height="100%"/>
                        </div>
                    </a>
                </div>
            )
        }

    }

}
