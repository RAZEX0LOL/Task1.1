import React from "react";
import User from "./User";

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            users:[
                {
                    id:1,
                    firstname:'Kapibara',
                    lastname:'Mehmetov',
                    bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum cupiditate nemo officia vel. Eveniet, illo, odit. Amet asperiores culpa distinctio dolores minus, non quasi quibusdam quos saepe temporibus unde?',
                    age:20,
                    isHappy:true
                },
                {
                    id:2,
                    firstname:'Chert',
                    lastname:'Nefor',
                    bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum cupiditate nemo officia vel. Eveniet, illo, odit. Amet asperiores culpa distinctio dolores minus, non quasi quibusdam quos saepe temporibus unde?',
                    age:99,
                    isHappy:false
                }

            ]
        }
    }
    render() {
        if (this.state.users.length>0)
            return (<div>
                {this.state.users.map((el)=>(
                    <User key={el.bio} user={el}/>
                ))}
            </div>)
        else
            return (<div className="user">
                <h3>Пользователей нет</h3>
            </div>)
    }

}

export default Users