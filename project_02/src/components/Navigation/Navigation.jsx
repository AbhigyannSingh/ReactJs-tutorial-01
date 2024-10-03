import  './Navigation.module.css'
const Navigation = () =>{

    return (
        <nav className = "hello">
            <div className="logo">
                <img src = "/images/logo.png" alt = "logo image" />
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;