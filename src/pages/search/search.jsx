import React from "react"
import "./index.styl"
import {reqInitHot} from "./../../store/actions"
import {connect} from "react-redux"

class search extends React.Component {

    componentDidMount(){
        this.props.reqInitHot()
    }


    render() {
        return (
            <div className="wrapo">
                <div className="search">
                    <span></span>
                    <input />
                    <div style={{paddingLeft: '0.15rem'}}>取消</div>
                </div>

                <div className="loading">
                    <img src="./012b3c599276cc0000002129ebff53.gif" alt=""/>
                </div>

                <div className="searchList">
                    <ul>
                        <li >
                            <router-link >

                            </router-link>
                        </li>
                    </ul>
                </div>

                <div className="initList" >
                    <span>热门搜索</span>
                    <ul>
                        <li >
                            <a >

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default connect(
    state => ({
        initArr : state.initArr
    }),
    {reqInitHot}
)(search)
