import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import AddItem from "../containers/AddItem"
import DisplayItems from "../containers/DisplayItems"
import ModifyItem from "../containers/ModifyItem"

const Router = () => {
    return (
    <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path="/add" element={<AddItem/>} />
            <Route path="/list" element={<DisplayItems />} />
            <Route path="/item/:id" element={<ModifyItem />} />
        </Routes>
    </BrowserRouter>
 )
}
export default Router