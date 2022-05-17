import { Link } from "react-router-dom"

const Header = (props:any) => {
    return (
    <div>
        <h1>Home</h1>
        <nav>
          <Link to="/add">Add</Link>
          <Link to="/list">List</Link>
        </nav>
    </div>
    )
} 
export default Header