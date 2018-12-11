import React from "react"
import "./index.styl"

export default class Order extends React.Component {

    render() {
        return (
            <div className="g-bd">
                <div className="g-row" id="j-bd">
                    <div className="m-mainView">
                        <div style={{height: '44px'}} className="hdWraper">
                            <div className="m-hd">
                                <div className="m-cartHd">
                                    <span className="logo2">购物车</span>
                                    <div className="right">
                                        <a href="javascript:;" className="cart-coupon">
                                            <span className="txt">领券</span>
                                        </a>
                                        <span className="cart-btn"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="m-servicePolicy">
                                <li className="item">
                                    <i className="u-icon u-icon-servicePolicy"></i>
                                    <span>30天无忧退货</span>
                                </li>
                                <li className="item">
                                    <i className="u-icon u-icon-servicePolicy"></i>
                                    <span>48小时快速退款</span>
                                </li>
                                <li className="item">
                                    <i className="u-icon u-icon-servicePolicy"></i>
                                    <span>满88元免邮费</span>
                                </li>
                            </ul>
                        </div>
                        <div className="m-defaultPage m-defaultPage-noCart">
                            <div className="container">
                                <div className="img"></div>
                                <div className="txt">
                                    <div className="noCart-login">
                                        <div className="noCart-title">去添加点什么吧</div>
                                        <div className="noCart-btn">登录</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
