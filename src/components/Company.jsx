import '../styles/company.css'

const nameCompany = [
    {
        name: 'OIS',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/logos/OIS.png',
        url: 'https://www.ois.dev/',
        class: 'companyItem1'
    },
    {
        name: 'neocoder',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/logos/Neocoder.png ',
        url: 'https://neocoder.com/',
        class: 'companyItem2'

    },
    {
        name: 'ERC20',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/logos/ERC20.png',
        url: 'https://www.linkedin.com/company/erc20digital/',
        class: 'companyItem3'

    },
    {
        namr: 'mixed_rarity',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/logos/mixed_rarity.png',
        url: 'https://mixedrarity.com/',
        class: 'companyItem4'

    },
    {
        name: 'wayops',
        img: 'https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/logos/wayops.png',
        url: 'https://wayops.eu/',
        class: 'companyItem5'

    }
]


function Company() {
    return (
        <>
            <hr />
            <div className='company'>

                {nameCompany.map((item) =>
                    <a href={item.url} key={item.name}>
                        <img src={item.img} alt="" className={item.class} />
                    </a>

                )}
            </div>
        </>
    )
}

export default Company