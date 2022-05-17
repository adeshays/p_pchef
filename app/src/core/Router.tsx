import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import AddItem from "../containers/AddItem"
import DisplayItems from "../containers/DisplayItems"

const Router = () => {
    return (
    <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path="add" element={<AddItem/>} />
            <Route path="list" element={<DisplayItems />} />
        </Routes>
    </BrowserRouter>
 )
}
export default Router