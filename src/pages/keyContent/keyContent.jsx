import React from "react"
import {connect} from "react-redux"
import {reqKeyC} from "./../../store/actions"
import "./index.styl"

class keyContent extends React.Component {

    state={
        isCom :true,
        isHigh :false,
        isLow :false,
    };

    changeUl=(c,h,l)=>{
        this.setState({
            isCom : c,
            isHigh : h,
            isLow : l,
        })
    };

    componentDidMount(){
        this.props.reqKeyC(this.props.match.params.keyword)
    }

    render() {
        const {isCom,isHigh,isLow} = this.state;
        const keyword = this.props.match.params.keyword;
        const {keyC} = this.props;
        const comArr = keyC.slice(0);
        const highArr = keyC.slice(0).sort((a,b)=>{
            return b.retailPrice - a.retailPrice
        });
        const lowArr = keyC.slice(0).sort((a,b)=>{
            return a.retailPrice - b.retailPrice
        });
        return (
            <div className="wrapmm">
                <div className="top">
                    <span></span>
                    <span></span>
                    <input type="text" defaultValue={keyword} onClick={()=>{this.props.history.replace('/search')}}/>
                    <div className="conditions">
                        <div onClick={()=>{this.changeUl(true,false,false)}}>综合</div>
                        <div onClick={()=>{this.changeUl(false,true,false)}}>价格高到低</div>
                        <div onClick={()=>{this.changeUl(false,false,true)}}>价格低到高</div>
                    </div>
                </div>

                {
                    isCom && keyC.length > 0? (
                        <ul>
                            {
                                comArr.map((item,index) => (
                                    <li key={index}>
                                        <a href={`http://m.you.163.com/item/detail?id=${item.id}&_stat_area=0&_stat_referer=search&_stat_query=%E6%8C%89%E6%91%A9&_stat_count=40#/?_k=7ywltw`}>
                                            <img src={item.listPicUrl} alt=""/>
                                            <div className="up">{item.simpleDesc}</div>
                                            <div className="down">{item.name}</div>
                                            <span className="new">¥{item.retailPrice}</span>
                                            <span className="old">{item.counterPrice == item.retailPrice ? "" : `¥${item.counterPrice}`}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : null
                }

                {
                    isHigh && keyC.length > 0? (
                        <ul>
                            {
                                highArr.map((item,index) => (
                                    <li key={index}>
                                        <a href={`http://m.you.163.com/item/detail?id=${item.id}&_stat_area=0&_stat_referer=search&_stat_query=%E6%8C%89%E6%91%A9&_stat_count=40#/?_k=7ywltw`}>
                                            <img src={item.listPicUrl} alt=""/>
                                            <div className="up">{item.simpleDesc}</div>
                                            <div className="down">{item.name}</div>
                                            <span className="new">¥{item.retailPrice}</span>
                                            <span className="old">{item.counterPrice == item.retailPrice ? "" : `¥${item.counterPrice}`}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : null
                }

                {
                    isLow && keyC.length > 0 ? (
                        <ul>
                            {
                                lowArr.map((item,index) => (
                                    <li key={index}>
                                        <a href={`http://m.you.163.com/item/detail?id=${item.id}&_stat_area=0&_stat_referer=search&_stat_query=%E6%8C%89%E6%91%A9&_stat_count=40#/?_k=7ywltw`}>
                                            <img src={item.listPicUrl} alt=""/>
                                            <div className="up">{item.simpleDesc}</div>
                                            <div className="down">{item.name}</div>
                                            <span className="new">¥{item.retailPrice}</span>
                                            <span className="old">{item.counterPrice == item.retailPrice ? "" : `¥${item.counterPrice}`}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : null
                }
            </div>
        )
    }

}
export default connect(
    state => ({
        keyC : state.keyC
    }),
    {reqKeyC}
)(keyContent)
