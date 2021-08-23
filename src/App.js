import "./styles/Base/App.css"
import "./styles/Base/Reset.css"
import "./styles/Components/Section/Section01.css"
import "./styles/Typography/Font.css"

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTodoLayerValue } from './Context/TodoContext';
import Header from "./Components/Header/Header";
import AddItem from "./Pages/AddItem"
import Home from "./Pages/Home"



const App = () => {
    const [{ data }, dispatch] = useTodoLayerValue()

    localStorage.setItem("data",JSON.stringify(data));

    return (
        <>
            <Header />
            <main>
            <Switch>
                <Route path="/" component={Home}  exact />
                <Route path="/addItem" component={AddItem} />
            </Switch>
            </main>
        </>
    )
}

export default App
