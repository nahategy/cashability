import {Link} from "react-router-dom";

function Menu() {
    return (
        <nav>
            <Link to={"/"}>/</Link> <br/>
            <Link to={"/spendings/add"}>+</Link> <br/>
            <Link to={"spendings"}>Spendings</Link>
        </nav>
    )
}

export default Menu;