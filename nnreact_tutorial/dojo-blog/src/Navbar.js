import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <h1>The Dojo Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>

                {/* inline styling!  */}
                {/* <a href="/create" style = {{
                    color: "white",
                    backgroundClip: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</a> */}
            </div>
        </nav>
    );
}

export default Navbar;