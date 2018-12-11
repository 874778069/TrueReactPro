import React from "react";
import NewCom from "../../../components/newCom/newCom.jsx"
import {connect} from "react-redux"
import {reqNewD} from "./../../../store/actions"

class UpNew extends React.Component {

    componentDidMount(){
        this.props.reqNewD()
    }

    render() {
        const {newArr} = this.props;
        return (
            <div>
                {
                    newArr.map((obj,index) => (
                        <NewCom key={index} objNew={obj}>

                        </NewCom>
                    ))
                }
            </div>
        )
    }

}
export default connect(
    state => ({
        newArr : state.newArr
    }),
    {reqNewD}
)(UpNew)
