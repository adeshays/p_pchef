import { Layout } from "antd"
import { Footer } from "antd/lib/layout/layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import AddItem from "../containers/AddItem"
import DisplayItems from "../containers/DisplayItems"
import ModifyItem from "../containers/ModifyItem"

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <div className="centered">

            <Routes>
                <Route path="/add" element={<AddItem/>} />
                <Route path="/list" element={<DisplayItems />} />
                <Route path="/item/:id" element={<ModifyItem />} />
            </Routes>
        </div>
        </BrowserRouter>
 )
}
export default Router