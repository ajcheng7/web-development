const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* inline styling!  */}
                <a href="/create" style = {{
                    color: "white",
                    backgroundClip: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;