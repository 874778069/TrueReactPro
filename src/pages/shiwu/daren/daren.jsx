import React from "react"
import "./index.styl"
import TopicItem from "./../../../components/Topic/TopicItem.jsx"
import {reqDaRenD} from "./../../../store/actions"
import {connect} from "react-redux"


class daren extends React.Component {

    componentDidMount(){
        this.props.reqDaRenD()
    }

    render() {
        const {daRenArr} = this.props;
        return (
            <div className="wrap88">
                {
                    daRenArr ?
                    daRenArr.map((item,index) => (
                        <TopicItem obj={item} key={index}>

                        </TopicItem>
                    )) : null
                }
            </div>
        )
    }
}
export default connect(
    state => ({
        daRenArr : state.daRenArr
    }),
    {reqDaRenD}
)(daren)
