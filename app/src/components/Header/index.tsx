import { Space } from "antd"
import { Link } from "react-router-dom"

const Header = (props:any) => {
    return (
    <Space>
          <Link to="/add">Add</Link>
          <Link to="/list">List</Link>
    </Space>
    )
} 
export default Header