import React from "react"
import "./index.styl"
import TopicItem from "./../../../components/Topic/TopicItem.jsx"
import {reqShiWu} from "./../../../store/actions"
import {connect} from "react-redux"

class recommend extends React.Component {

    componentDidMount(){
        this.props.reqShiWu()
    }

    render() {
        const {shiwuArr} = this.props;
        return (
            <div className="wrap99">
                {
                    shiwuArr[0] ? (<img src={shiwuArr[0].ad.picUrl}/>) : null
                }
                {
                    shiwuArr.map((item,index) => (
                        <div key={index}>
                            {
                                item.topics.map((top,index) => (
                                    <TopicItem obj={top} key={index}>

                                    </TopicItem>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }

}
export default connect(
    state => ({
        shiwuArr : state.shiWuArr
    }),
    {reqShiWu}
)(recommend)
