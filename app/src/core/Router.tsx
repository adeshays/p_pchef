import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import AddItem from "../containers/AddItem"

const Router = () => {
    return (
    <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path="add" element={<AddItem/> as any} />
        </Routes>
    </BrowserRouter>
 )
}
export default Router