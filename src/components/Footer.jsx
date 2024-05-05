import '../styles/footer.css'

const icons = [{ url: 'https://twitter.com/obinexofficial', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/twitter.svg', title: "twitter" },
{ url: 'https://www.linkedin.com/company/obinex/', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/linkedin.svg', title: "linkedin" },
{ url: 'https://t.me/ObinexEnglish', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/telegram.svg', title: "telegram" },
{ url: 'https://discord.com/invite/obix', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/discord.svg', title: "discord" },
{ url: 'https://medium.com/@obinex', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/medium.svg', title: "medium" },
{ url: 'https://www.instagram.com/obinexofficial/', img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/social/instagram.svg', title: "instagram" }]
function Footer() {
    return (
        <>
            <div className='footer'>

                <div className="social">
                    <div className="social-img">
                        <img src="https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/b78731b4f1a5c7539fb4ab635beb0c2d161fb702/componentImg/footerlogo/logo.svg" alt="" />
                        <img src="https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/componentImg/footerlogo/logoLetter.png" alt="" />
                    </div>

                    <div>
                        <div className="social-icon">
                            {icons.map((icon) => <a className='footer-icon' href={icon.url}><img src={icon.img} alt={icon.title} /></a>)}
                        </div>
                        <p>Join the future of finance</p>
                    </div>
                </div>

                <div className="information">
                    <div className='company-information'>
                        <h3>company</h3>
                        <div className="company-item">
                            <p>About Us</p>
                            <p>Our Services</p>
                            <p>Blog</p>
                            <p>Careers</p>
                            <p>Ambassadors Program</p>
                            <p>Contact the Team</p>
                            <p>Request a Feature</p>
                        </div>
                    </div>
                    <div className='legal-information'>
                        <h3>legal</h3>
                        <div className="legal-item">
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>Cookies Policy</p>
                            <p>Cookies Policy</p>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default Footer