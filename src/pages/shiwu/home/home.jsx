import React from "react"
import HomeC from "./../../../components/homeC/homeC.jsx"
import {connect} from "react-redux"
import {reqHomeArr} from "./../../../store/actions"

class home extends React.Component {

    componentDidMount(){
        this.props.reqHomeArr()
    }

    render() {
        const {homeArr} = this.props;
        return (
            <div>
                {
                    homeArr.map((item,index)=>(
                        <HomeC objNew={item} key={index}>

                        </HomeC>
                    ))
                }
            </div>
        )
    }

}
export default connect(
    state => ({
        homeArr : state.homeArr
    }),
    {reqHomeArr}
)(home)
