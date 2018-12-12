import React from "react"
import "./index.styl"
import {connect} from "react-redux"
import {reqLogin,reqC,reqCL} from "./../../store/actions"
import {Redirect} from "react-router-dom"
import {Toast} from 'antd-mobile'
import "antd-mobile/dist/antd-mobile.css"

class login extends React.Component {

    state={
        isHome : true,
        isPhone : false,
        isUser : false,
        time : 0,
        flag : true
    };

    userLogin=()=>{
        if(!this.refs.name.value || !this.refs.pwd.value){
            return Toast.fail("用户名或密码不能为空!")
        }

        this.flag3 = true;
        this.props.reqLogin(this.refs.name.value,this.refs.pwd.value)
    };

    timer;
    t=30;
    flag2=true;
    flag3=true;
    flag5=true;
    flag4=true;

    sendCode=()=>{
        if (!/^1\d{10}$/.test(this.refs.phone.value)){
            return Toast.fail("手机号必须合法")
        }
        Toast.loading("发送验证码...");
        this.flag2 = true;
        this.flag5=true
        this.props.reqC(this.refs.phone.value);
    };

    codeLogin=()=>{
        console.log(this.refs.phone.value);
        if(!/^1\d{10}$/.test(this.refs.phone.value) || this.refs.code.value.length < 6){
            return Toast.fail("手机号或验证码不合法")
        }
        this.flag4 = true;
        this.props.reqCL(this.refs.phone.value,this.refs.code.value)
    };

    handleC=(h,p,u)=>{
        this.flag5 = false;
        this.state.time=0;
        clearInterval(this.timer);
        this.setState({
            isHome : h,
            isPhone : p,
            isUser : u,
        })
    };

    render() {
        const {isHome,isPhone,isUser} = this.state;
        const user = this.props.user;
        const code = this.props.code;
        const {time} = this.state;

        if(code.sMsg && this.t==30 && this.flag5){
            Toast.success(code.sMsg);
            this.flag5=false
            this.timer = setInterval(()=>{
                this.t--;
                this.setState({
                    time : this.t
                });
                if (this.t==0){
                    this.t=30;
                    clearInterval(this.timer)
                }
            },1000)
        }
        if(code.fMsg && this.flag2){
            Toast.fail("发送验证码失败");
            this.flag2 = false
        }
        if(user.msg && this.flag3){
            Toast.fail("用户名或密码不正确!");
            this.flag3 = false
        }

        if(user.cFMsg && this.flag4){
            Toast.fail(user.cFMsg); //验证码登录失败
            this.flag4 = false
        }

        if(user._id){
            this.state.time=0;
            clearInterval(this.timer);
            return (<Redirect to="/profile"></Redirect>)
        }

        return (
            <div>
                <div style={{height: '44px'}} className="hdWraper">
                    <div className="m-hd">
                        <div className="m-topBar">
                            <div className="bd">
                                <div className="row">
                                    <a className="u-icon u-icon-home" onClick={()=>{this.props.history.push('/msite')}}></a>
                                    <a href="javascript:;"><i className="logo u-icon u-icon-logo"></i></a>
                                    <div className="right">
                                        <a href="javascript:;" className="search">
                                            <li className="u-icon u-icon-search1"></li>
                                        </a>
                                        <a href="javascript:;" className="cart">
                                            <li className="u-icon u-icon-cart"></li>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isHome ? (<div style={{height: '623px'}} className="loginTypesWrap">
                        <div className="m-loginTypes">
                            <div className="cont">
                                <div className="logoWrap">
                                    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
                                </div>
                                <div className="btnWrap">
                                    <div className="w-button w-button-xl w-button-block" onClick={()=>{this.handleC(false,true,false)}}>
                                        <i className="u-icon u-icon-loginPhone"></i>
                                        <span>手机号码登录</span>
                                    </div>
                                    <div className="w-button w-button-xl w-button-block w-button-ghostRed" onClick={()=>{this.handleC(false,false,true)}}>
                                        <i className="u-icon u-icon-loginMail"></i>
                                        <span>用户账号登录</span>
                                    </div>
                                    <div className="btn">
                                        <span>手机号快捷注册</span>
                                        <i className="u-icon u-icon-arrow-right3"></i>
                                    </div>

                                </div>
                            </div>
                            <div className="thirdWrap">
                                <div className="itemWrap">
              <span className="item">
                <i className="icon icon-weixin"></i>
               <span className="name">微信</span>
              </span>
                                </div>
                                <div className="itemWrap">
              <span className="item">
                <i className="icon icon-qq"></i>
               <span className="name">QQ</span>
              </span>
                                </div>
                                <div className="itemWrap">
              <span className="item">
                <i className="icon icon-weibo"></i>
               <span className="name">微博</span>
              </span>
                                </div>
                            </div>
                        </div>
                    </div>) : null
                }

                {
                    isPhone ? (<div className="loginWrap loginWrap-1" v-show="isPhone">
                        <div className="view">
                            <div id="logo1">
                                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
                                <div id="loginPhone">
                                    <div className="phone">
                                        <input type="text" maxLength="11" placeholder="请输入手机号" ref="phone"/>
                                    </div>
                                    <div className="code">
                                        <input type="text" maxLength="6" placeholder="请输入验证码" ref="code"/>
                                        <button onClick={()=>{this.sendCode()}} disabled={time>0 ? true : false}>{time==0 ? "获取验证码" : `已发送${time}s`}</button>
                                    </div>
                                    <div className="denglu" onClick={()=>{this.codeLogin()}}>
                                        登录
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="w-button w-button-xl w-button-block w-button-ghostRed" onClick={()=>{this.handleC(true,false,false)}}>
                                <span>其他登录方式</span>
                            </div>
                            <div className="btn btn-1"><span>注册帐号</span><i className="u-icon u-icon-arrow-right3"></i>
                            </div>
                        </div>
                    </div>) : null
                }

                {
                    isUser ? (<div className="loginWrap loginWrap-1">
                        <div className="view">
                            <div id="logo2">
                                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
                                <div id="username">
                                    <div className="name">
                                        <input type="text" ref="name" placeholder="请输入用户名" />
                                    </div>
                                    <div className="code">
                                        <input type="password" maxLength="8" ref="pwd" placeholder="请输入密码" />
                                    </div>
                                    <div className="denglu" onClick={() => {this.userLogin()}}>
                                        登录
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="w-button w-button-xl w-button-block w-button-ghostRed" onClick={()=>{this.handleC(true,false,false)}}><span>其他登录方式</span>
                            </div>
                            <div className="btn btn-1"><span>注册帐号</span><i className="u-icon u-icon-arrow-right3"></i>
                            </div>
                        </div>
                    </div>) : null
                }

            </div>
        )
    }

}
export default connect(
    state => ({
        user : state.user,
        code : state.code
    }),
    {reqLogin,reqC,reqCL}
)(login)
