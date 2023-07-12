import React from "react";
import Header from "./Components/Header";
import Users from "./Components/Users";


class App extends React.Component {


    render() {
        return (
            <div >
                <Header title="Список пользователей"/>
                <main>
                    <Users />
                </main>
                <aside></aside>
            </div>
        )
    }


}

export default App