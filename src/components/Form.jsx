// import '../styles/form.css'
import style from "../styles/form.module.css"

function Form() {
    return (
        <div className={style.form}>

            <div className="form-content">
                <h1>Newsletter</h1>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <button>Subscribe</button>
            </div>
            <img src="https://raw.githubusercontent.com/Obinex-Ecosystem/ObinexImages/main/componentImg/emailImg.png" alt="" />

        </div>
    )
}

export default Form