import React from "react";
import {connect} from "react-redux"
import "./index.styl"

class shop extends React.Component {


    imgUrl=()=>{
        const arr = this.props.msiteD.headCateList;
        const path = this.props.location.search;
        const id = path.substring(4,path.length);
        const img = arr.filter(item => {
            return item.id == id
        });
        return img[0].bannerUrl
    };

    render() {
        const imgU = this.imgUrl();

        return (
            <div className="wrap">
                <div className="top">
                    <span onClick={()=>{this.props.history.push('/msite')}}></span>
                    <span></span>
                    <span onClick={()=>{this.props.history.push('/search')}}></span>
                    <span></span>
                </div>
                <img src={imgU} alt=""/>
                <div style={{width:'100%',height: '0.2rem',backgroundColor: '#F4F4F4'}}></div>
            </div>
        )
    }
}

export default connect(
    state => ({
        msiteD : state.msiteData
    })
)(shop)
