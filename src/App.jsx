import React from "react";
import {Route,Switch,withRouter,Redirect} from "react-router-dom"
import Footer from "./components/FooterGuide/FootGuide.jsx";
import Msite from "./pages/Msite/Msite.jsx";
import Classify from "./pages/Classify/Classify.jsx";
import shiwu from "./pages/shiwu/shiwu.jsx";
import Order from "./pages/Order/Order.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import shop from "./pages/shop/shop.jsx"
import login from "./pages/Login/login.jsx"
import search from "./pages/search/search.jsx"



class App extends React.Component {

    render() {
        const path = this.props.location.pathname;
        const arrShow = ["/msite","/classify","/shiwu","/order","/profile"];
        var flag = false;
        arrShow.forEach(item => {
            if (path.includes(item)){
                flag = true
            }
        });

        return (
            <div>
                <Switch>
                    <Redirect exact from='/' to='/msite'></Redirect>
                    <Route path="/msite" component={Msite}></Route>
                    <Route path="/classify" component={Classify}></Route>
                    <Route path="/shiwu" component={shiwu}></Route>
                    <Route path="/order" component={Order}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/shop" component={shop}></Route>
                    <Route path="/login" component={login}></Route>
                    <Route path="/search" component={search}></Route>
                </Switch>
                {flag ? <Footer></Footer> : null}
            </div>
        )
    }
}

export default withRouter(App)
