import '../styles/team.css'



const team = [
    {
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/peoples/New%20folder/alejandro.png',
        addLin: 'https://www.linkedin.com/in/alejandro-obinex/',
        name: 'Alejandro Grande',
        job: 'CEO | Founder'
    },
    {
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/peoples/New%20folder/miguel.png',
        addLin: 'https://www.linkedin.com/in/mch310199/',
        name: 'Miguel Castaño',
        job: 'CIO | Co-Founder'
    },
    {
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/peoples/New%20folder/jose.png',
        addLin: 'https://www.linkedin.com/in/jose-antonio-lopez-30678a9/',
        name: 'Jose Antonio López',
        job: 'CLO'
    }
]


function Team() {
    return (
        <div className='team'>
            <h1>The Team Behind Obinex</h1>
            <div className='team-list'>

                {team.map((item) =>
                    <div className='team-content'>
                        <img src={item.img} alt='' />
                        <div className='team-item'>
                            <div className='text-item'>
                                <p>{item.job}</p>
                                <p>{item.name}</p>
                            </div>
                            <div className='icon-item'>
                                <a href={item.addLin}><img src="https://obinex.com/static/media/linkedin.406b1fe5586ce14ea65e01fe03edc36b.svg" alt="" /></a>
                            </div>
                        </div>

                    </div>

                )}
            </div>
            <button>Meet More Key People</button>
        </div>
    )
}

export default Team