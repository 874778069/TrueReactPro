import React from "react"
import {Link,Switch,Route,Redirect} from "react-router-dom"
import "./index.styl";
import recommend from "./recommend/recommend.jsx"
import daren from "./daren/daren.jsx"
import UpNew from "./new/UpNew.jsx"
import shaidan from "./shaidan/shaidan.jsx"
import home from "./home/home.jsx"

export default class shiwu extends React.Component {

    render() {
        const path = this.props.location.pathname;
        return (
            <div className="wrap3">
                <div className="header">
                    <span></span>
                    <span>发现</span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav">
                    <Link to="/shiwu/recommend" className={path.includes('recommend') ? "on" : null}>推荐</Link>
                    <Link to="/shiwu/daren" className={path.includes('daren') ? "on" : null}>达人</Link>
                    <Link to="/shiwu/new" className={path.includes('new') ? "on" : null}>上新</Link>
                    <Link to="/shiwu/shaidan" className={path.includes('shaidan') ? "on" : null}>晒单</Link>
                    <Link to="/shiwu/home" className={path.includes('home') ? "on" : null}>HOME</Link>
                </div>
                <div className="enmty"></div>
                <Switch>
                    <Redirect exact from='/shiwu' to='/shiwu/recommend'></Redirect>
                    <Route path='/shiwu/recommend' component={recommend}></Route>
                    <Route path='/shiwu/daren' component={daren}></Route>
                    <Route path='/shiwu/new' component={UpNew}></Route>
                    <Route path='/shiwu/shaidan' component={shaidan}></Route>
                    <Route path='/shiwu/home' component={home}></Route>
                </Switch>
            </div>
        )
    }

}
