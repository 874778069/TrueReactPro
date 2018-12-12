import React from "react"
import "./index.styl"
import BS from "better-scroll"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {reqMsiteD} from "./../../store/actions"
import "swiper/dist/css/swiper.min.css"
import Swiper from "swiper"

class Msite extends React.Component {

    state={

    };

    callBack = ()=>{
        new Swiper(".swiper-container",{
            effect : "slide",
            direction: 'horizontal',
            loop: true, // 循环模式选项
            autoplay: {
                disableOnInteraction : false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
        new BS(".BS",{
            click: true,
            scrollX: true,
        });
        new BS(".BS2",{
            click: true,
            scrollX: true,
        });
    };

    componentDidMount(){
        this.props.reqMsiteD(this.callBack)
    }

    render() {
        const {headCateList,focusList} = this.props.msiteD;
        return (
            <div id="wrap1">
                <div className="search">
                    <a href="javascript:;">
                    </a>
                    <div className="sreachInput" onClick={()=>{this.props.history.push('/search')}}>
                        <i></i>
                        <span>搜索商品,共19932款好物</span>
                    </div>
                    <span className="login" onClick={()=>{this.props.history.push('/profile')}} >登录</span>
                </div>
                <div className="minWrap">
                    <div className="scrollNav">
                        <div className="BS">
                            <ul className="scroll">
                                <li>推荐</li>
                                <li>饮食</li>
                                <li>音乐</li>
                                <li>鞋包</li>
                                <li>辣鸡</li>
                                <li>废物</li>
                                <li>无聊</li>
                                <li>傻逼</li>
                                <li>红牛</li>
                                <li>D&G</li>
                                <li>特色区</li>
                            </ul>
                        </div>
                        <div className="down">
                            <span></span>
                        </div>
                    </div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                focusList ?
                                focusList.map((item,index) => (
                                    <div className="swiper-slide" key={index}>
                                        <a href={item.targetUrl}>
                                            <img src={item.picUrl} alt=""/>
                                        </a>
                                    </div>
                                )) : null
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                    <div className="msg">
                        <ul className="msgUl">
                            <li><i></i><span>网易自营品牌</span></li>
                            <li><i></i><span>30天无忧退货</span></li>
                            <li><i></i><span>48小时快速退款</span></li>
                        </ul>
                    </div>

                    <div className="shopList">
                        <ul>
                            {
                                headCateList ?
                                headCateList.map(head => (
                                    <li key={head.id}>
                                        <Link to={`/shop?id=${head.id}`} >
                                            <img src={head.iconUrl} alt=""/>
                                            <span>{head.name}</span>
                                        </Link>
                                    </li>
                                )) : null
                            }
                        </ul>
                    </div>

                    <img src="https://yanxuan.nosdn.127.net/15435902145614507.gif" alt=""/>
                    <div className="photoList">
                        <div className="up">
                            <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt="" style={{width: '3.75rem'}}/>
                            <img src="https://yanxuan.nosdn.127.net/15435902616394510.png" alt="" style={{width: '3.75rem'}}/>
                            <img src="https://yanxuan.nosdn.127.net/15439064549673720.png" alt="" style={{width: '3.75rem'}}/>
                        </div>
                        <div className="down">
                            <img src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="" style={{width: '3.75rem'}}/>
                            <img src="https://yanxuan.nosdn.127.net/15435903918604513.png" alt="" style={{width: '3.75rem'}}/>
                        </div>
                    </div>

                    <div style={{width: '100%',height: '0.2rem',backgroundColor: '#F4F4F4'}}></div>

                    <div className="newPerson">
                        <div className="newGift">-- 新人专享礼 --</div>
                        <div className="newPhoto">
                            <div className="left">
                                新人专享礼包
                                <img  className="lingqu" src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt=""/>
                                <img className="gif" src="//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png" alt=""/>
                            </div>
                            <div className="right">
                                <div className="up">
                                    <span style={{fontSize: '0.32rem'}}>福利社</span>
                                    <br/>
                                    <span style={{color: 'rgb(127, 127, 127)'}}>今日特价</span>
                                    <div className="youhui">
                                        <span className="up">¥217</span>
                                        <span className="down">¥299</span>
                                    </div>
                                    <img src="http://yanxuan.nosdn.127.net/7dd153f648f9ffb70384b5868b132ed1.png" alt=""/>
                                </div>

                                <div className="down">
                                    <span style={{fontSize: '0.32rem'}}>新人拼团</span>
                                    <br/>
                                    <span style={{color: 'rgb(127, 127, 127)'}}>1元起包邮</span>
                                    <div className="youhui">
                                        <span className="up">¥21</span>
                                        <span className="down">¥99</span>
                                    </div>
                                    <img src="http://yanxuan.nosdn.127.net/c95a4d1daa62d7a9004208752a1a2098.png" alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{width: '100%',height: '0.2rem',backgroundColor: '#F4F4F4'}}></div>

                    <img src="https://yanxuan.nosdn.127.net/a93606fbdd934ed3daed79a7c2c629fe.jpg" alt=""/>
                    <div className="shopPro">
                        <div className="up">
                            <span>品牌制造商直供</span>
                            <span>更多 > </span>
                        </div>
                        <div className="down">
                            <div className="one"><router-link to="/pro?id=1055007">海外制造商</router-link></div>
                            <div className="two"><router-link to="/pro?id=1026000">CK制造商</router-link></div>
                            <div className="three"><router-link to="/pro?id=1001037">新秀丽制造商</router-link></div>
                            <div className="four"><router-link to="/pro?id=1001000">MUJI制造商</router-link></div>
                        </div>

                    </div>

                    <div style={{width: '100%',height: '0.2rem',backgroundColor:'#F4F4F4'}}></div>
                    <img src="https://yanxuan.nosdn.127.net/3d300175542f86c213da0afd53f7f08c.jpg" alt=""/>

                    <div className="scrollShop">
                        <div className="BS2">
                            <ul>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li><img src="http://yanxuan.nosdn.127.net/1e5203ccf607c0136f06af2b09c15e34.png?imageView&quality=65&thumbnail=330x330" alt=""/>便携式吹风机<br/>¥ 90<br/><span>福利价</span></li>
                                <li>查看更多</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer">
                        <span>下载APP</span>
                        <span>电脑版</span>
                        <p>网易公司版权所有 © 1997-2018</p>
                        <p style={{marginTop: '0.1rem'}}>食品经营许可证：JY13301080111719</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        msiteD : state.msiteData
    }),
    {reqMsiteD}
)(Msite)


