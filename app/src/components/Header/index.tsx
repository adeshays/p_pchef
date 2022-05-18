import { Space } from "antd"
import {Header as AntdHeader} from "antd/lib/layout/layout"
import { Link } from "react-router-dom"

const Header = (props:any) => {
    return (
    <AntdHeader>
      <Space direction="horizontal">
          <Link to="/add">Add</Link>
          <Link to="/list">List</Link>
      </Space>

    </AntdHeader>
    )
} 
export default Header