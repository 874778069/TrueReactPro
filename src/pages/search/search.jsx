import React from "react"
import "./index.styl"
import {reqInitHot,reqSA,getReset} from "./../../store/actions"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class search extends React.Component {

    componentDidMount(){
        this.props.reqInitHot();
    }

    componentWillUnmount(){
        this.props.getReset()
    }

    searching = (val) => {
        this.props.reqSA(val)
    };

    render() {
        const {initArr,searchArr} = this.props;
        return (
            <div className="wrapo">
                <div className="search">
                    <span></span>
                    <input ref="searchKey" onChange={e => {this.searching(e.target.value)}}/>
                    <div style={{paddingLeft: '0.15rem'}} onClick={()=>{this.props.history.replace('/msite')}}>取消</div>
                </div>


                {
                    (this.refs.searchKey && this.refs.searchKey.value && searchArr.length == 0) ? (
                        <div className="loading">
                            <img src="/012b3c599276cc0000002129ebff53.gif" alt=""/>
                        </div>
                    ) : null
                }
                {
                    searchArr.length>0 ? (
                        <div className="searchList">
                            <ul>
                                {
                                    searchArr.map((item,index) => (
                                        <li key={index}>
                                            <Link to={`/keyContent/${item}`}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ) : null
                }
                <div className="initList" >
                    <span>热门搜索</span>
                    <ul>
                        {
                            initArr.length>0 && searchArr.length==0? (
                                initArr.map((item,index)=>(
                                    <li key={index}>
                                        <a href={item.schemeUrl}>
                                            {item.keyword}
                                        </a>
                                    </li>
                                ))
                            ) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }

}
export default connect(
    state => ({
        initArr : state.initArr,
        searchArr : state.searchArr
    }),
    {reqInitHot,reqSA,getReset}
)(search)
