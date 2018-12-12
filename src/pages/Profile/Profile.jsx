import React from "react"
import "./index.styl"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {reqIU,reqLOUT} from "./../../store/actions"
import {Modal} from "antd-mobile"

class Profile extends React.Component {

    componentDidMount(){
        this.props.reqIU()
    }

    loginOut=()=>{
        Modal.alert('Delete', '你确定退出登录吗', [
            { text: '取消', onPress: () => {} },
            {
                text: '确认', onPress: () => {
                    this.props.reqLOUT();
                    if (JSON.stringify(this.props.user) == "{}") {
                        this.props.history.replace("/login")
                    }
                }
            },
        ])
    };

    render() {
        const {user} = this.props;
        if (!user._id){
            return (<Redirect to="/login"></Redirect>)
        }
        return (
            <div className="wrap6666">
                <div className="header">
                    <img src="/z.jpg" alt=""/>
                    <span>{user.name || user.phone}</span>
                </div>

                <div className="headerP">
                    <img src="/z.jpg" alt=""/>
                </div>


                <ul className="list" data-reactid=".0.3.0.0">
                    <li className="item" data-reactid=".0.3.0.0.$0">
                        <a className="m-uMenuItem" href="/order/myList" title="我的订单" data-reactid=".0.3.0.0.$0.0">
                            <img src="/timg.jpg" alt=""/>
                            <span className="txt" data-reactid=".0.3.0.0.$0.0.1">我的订单</span>
                        </a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$1"><a className="m-uMenuItem" href="/pin/item/list"
                                                                       title="周六一起拼" data-reactid=".0.3.0.0.$1.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$1.0.1">周六一起拼</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$2"><a className="m-uMenuItem" href="/aftersale/service"
                                                                       title="售后服务" data-reactid=".0.3.0.0.$2.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$2.0.1">售后服务</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$3"><a className="m-uMenuItem"
                                                                       href="/lead/newIndex?qrType=1" title="邀请返利"
                                                                       data-reactid=".0.3.0.0.$3.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$3.0.1">邀请返利</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$4"><a className="m-uMenuItem" href="/coupon"
                                                                       title="优惠券" data-reactid=".0.3.0.0.$4.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$4.0.1">优惠券</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$5"><a className="m-uMenuItem" href="/redpacket"
                                                                       title="我的红包" data-reactid=".0.3.0.0.$5.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$5.0.1">我的红包</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$6"><a className="m-uMenuItem" href="/preemption/index"
                                                                       title="优先购" data-reactid=".0.3.0.0.$6.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$6.0.1">优先购</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$7"><a className="m-uMenuItem" href="/giftCard/list"
                                                                       title="礼品卡" data-reactid=".0.3.0.0.$7.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$7.0.1">礼品卡</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$8"><a className="m-uMenuItem" href="/points/index"
                                                                       title="积分中心" data-reactid=".0.3.0.0.$8.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$8.0.1">积分中心</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$9"><a className="m-uMenuItem" href="/membership/index"
                                                                       title="会员俱乐部" data-reactid=".0.3.0.0.$9.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$9.0.1">会员俱乐部</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$10"><a className="m-uMenuItem" href="/address/list"
                                                                        title="地址管理" data-reactid=".0.3.0.0.$10.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$10.0.1">地址管理</span></a>
                    </li>
                    <li className="item" data-reactid=".0.3.0.0.$11"><a className="m-uMenuItem"
                                                                        href="/user/securityCenter" title="帐号安全"
                                                                        data-reactid=".0.3.0.0.$11.0"> <img
                        src="/timg.jpg" alt=""/><span className="txt" data-reactid=".0.3.0.0.$11.0.1">帐号安全</span></a>
                    </li>
                </ul>
                <div className="loginout" onClick={()=>{this.loginOut()}}>退出登录</div>
            </div>
        )
    }
}

export default connect(
    state => ({
        user : state.user,
        out : state.loginOut
    }),
    {reqIU,reqLOUT}
)(Profile)
