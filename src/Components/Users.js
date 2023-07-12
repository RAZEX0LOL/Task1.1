import React from "react";


class Users extends React.Component {

    users=[
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
    render() {

        return (<div>
            {this.users.map((el)=>(<div className={"user"}>
                <h3>{el.firstname} {el.lastname}</h3>
                <p>{el.bio}</p>
            </div>))}
        </div>)
    }

}

export default Users