import '../styles/about.css'


const items = [
    {
        title: 'Secure',
        desc: 'AI enhances transaction security by spotting suspicious patterns, boosting user trust.',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/componentImg/value/SecureImg.png',
        classImg: 'itemImg1',

    },
    {
        title: 'Transparent',
        desc: 'Have the opportunity to pay less fees with our new transaction volume fee reduction system.',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/componentImg/value/TransparentImg.png',
        classImg: 'itemImg2'
    },
    {
        title: 'Tailored',
        desc: 'Are you experiencing any issue?Our dedicated expert support team is here to prioritize your peace of mind.',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/componentImg/value/TailoredImg.png',
        classImg: 'itemImg3'
    },
]

function About() {

    const getClass = (index) => {

        if (index === 0)
            return "aboutItem1"
        if (index === 1)
            return "aboutItem2"
        if (index === 2)
            return "aboutItem3"
        return ""

    }

    return (
        <div className='about'>
            <h1>Why Obinex?</h1>
            <div className='about-list'>

                {items.map((item, index) => {
                    return (
                        <div className={getClass(index)}>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <img src={item.img} alt="" className={item.classImg} />
                        </div>)
                })}
            </div>
        </div>
    )
}

export default About