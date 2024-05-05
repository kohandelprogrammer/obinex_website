import '../styles/future.css'

const icons = [{ url: 'https://twitter.com/obinexofficial', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/twitter.svg', title: "twitter" },
{ url: 'https://www.linkedin.com/company/obinex/', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/linkedin.svg', title: "linkedin" },
{ url: 'https://t.me/ObinexEnglish', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/telegram.svg', title: "telegram" },
{ url: 'https://discord.com/invite/obix', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/discord.svg', title: "discord" },
{ url: 'https://medium.com/@obinex', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/medium.svg', title: "medium" },
{ url: 'https://www.instagram.com/obinexofficial/', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/instagram.svg', title: "instagram" }]

function Future() {
    return (
        <div className='future'>

            <div className='future-text'>
                <h3>Bringing the</h3>
                <h3>Future</h3>
                <h3>to now!</h3>
                <p>We are going to be the largest, most trusted and stable ecosystem in the world</p>
                <div className='future-social'>
                    {icons.map((icon) => <a className='future-icon' href={icon.url}><img src={icon.img} alt={icon.title} /></a>)}
                </div>
            </div>

            <div className='future-img'>
                <img src="../public/images/rocket.png" alt="" />
                <div className='img-cloud'>
                    <img src="../public/images/c1.png" alt="" />
                    <img src="../public/images/c2.png" alt="" />
                    <img src="../public/images/c3.png" alt="" />
                </div>

                <img src="https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/effect/star.png" alt="" />
                <img src="https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/effect/star.png" alt="" />
            </div>
        </div>
    )
}

export default Future
