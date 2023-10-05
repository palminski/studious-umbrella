
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <h1>Navigation</h1>
            <Link to="/"><a>Home</a></Link>
            <Link to="/about"><a>About</a></Link>
            <Link to="/contact"><a>Contact</a></Link>
        </>
    );
}

export default Nav;