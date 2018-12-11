import React from "react";
import "./index.styl"
import {withRouter} from "react-router-dom"


class FootGuide extends React.Component {


    handeC=(path)=>{
        this.props.history.replace(path)
    }


    render() {
        const path = this.props.location.pathname;
        return (
            <footer className="footer_guide border-1px">
                <span className={path == '/msite' ? 'guide_item on' : 'guide_item'} onClick={()=>{this.handeC('/msite')}}>
                    <span className="item_icon">
                        <i className="icon icon_home"></i>
                    </span>
                    <span>首页</span>
                </span>
                <span className={path.includes('/classify') ? 'guide_item on' : 'guide_item'} onClick={()=>{this.handeC('/classify?id=109230000')}}>
                    <span className="item_icon">
                        <i className="icon icon_classify"></i>
                    </span>
                    <span>分类</span>
                </span>
                <span className={path.includes('/shiwu') ? 'guide_item on' : 'guide_item'} onClick={()=>{this.handeC('/shiwu')}}>
                    <span className="item_icon">
                        <i className={path == '/shiwu' ? 'icon icon_topic on' : 'icon icon_topic'}></i>
                    </span>
                    <span>识物</span>
                </span>
                <span className={path == '/order' ? 'guide_item on' : 'guide_item'} onClick={()=>{this.handeC('/order')}}>
                    <span className="item_icon">
                        <i className="icon icon_shopcart"></i>
                    </span>
                    <span>购物车</span>
                </span>
                <span className={path == '/profile' ? 'guide_item on' : 'guide_item'} onClick={()=>{this.handeC('/profile')}}>
                    <span className="item_icon">
                        <i className="icon icon_login"></i>
                    </span>
                <span>我的</span>
                </span>
            </footer>
        )
    }

}

export default withRouter(FootGuide)
