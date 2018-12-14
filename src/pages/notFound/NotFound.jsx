import React from "react"

export default class NotFound extends React.Component {

    render() {
        return (
            <div>
                <img src="./095532-1493344532ea6a.jpg" alt="" style={{width:'100%'}}/>
                <button onClick={()=>{this.props.history.goBack()}}>返回</button>
            </div>
        )
    }

}
