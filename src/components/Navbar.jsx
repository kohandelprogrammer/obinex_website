import '../styles/navbar.css'
const menu = [
    { url: "", title: "Ecosystem" },
    { url: "", title: "About us" },
    { url: "", title: "Tokenomics" },
    { url: "", title: "Roadmap" },
    { url: "", title: "Team" },
    { url: "", title: "Litepaper" }]


function Navbar() {
    return (
        <div className='navbar' >
            <div className='navbar-content'>

                <div>
                    <img src="https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/b78731b4f1a5c7539fb4ab635beb0c2d161fb702/componentImg/footerlogo/logo.svg" />
                </div>

                <div className='navbar-menu'>{menu.map((menu) =>
                    <ul><li>
                        <a key={menu.title} href={menu.url}>
                            {menu.title}
                        </a>
                    </li></ul>)}</div>
                <div className='navbar-button'><button>Connect Wallet</button></div>

            </div>
        </div>
    )
}

export default Navbar