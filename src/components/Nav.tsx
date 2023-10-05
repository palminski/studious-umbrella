
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <h1>Navigation</h1>
            <Link to="/"><a> Home - </a></Link>
            <Link to="/about"><a>About - </a></Link>
            <Link to="/for-parents"><a>For Parents - </a></Link>
            <Link to="/for-schools"><a>For Schools </a></Link>
        </>
    );
}

export default Nav;