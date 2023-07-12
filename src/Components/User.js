import React from "react";
import {IoCloseCircleSharp} from "react-icons/io5";

class User extends React.Component {
    user=this.props.user
    render() {
        return (
            <div className="user" >
                <IoCloseCircleSharp className={"delete-icon"}/>
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив': 'Он черт, какой счастлив'}</b>
            </div>
        )
    }

}

export default User