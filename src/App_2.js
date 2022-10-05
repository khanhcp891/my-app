import React from 'react'
import logoGoogle from "./image/google.jpg";
import './App_2.css';

const language = ["English US", "Eglinsh UK", "Vietnamese"]

function App_2() {
    return (
        <div className='container'>
            <form className='form'>
                <div className='logo'>
                    <div className='container_logo'>
                        <img src={logoGoogle} alt="img" className='img_logo' />
                    </div>
                </div>
                <h1 className="form_title">Welcome</h1>
                <div className="form_title2">Định danh</div>
                <div className='form_second'>
                    <input type={'password'} className='input_pass' placeholder='Enter your password' />
                    <div className='form_checkbox'>
                        <div className='input_checkbox'>
                            <input type={'checkbox'} id="check_box" className="checkBox" />
                        </div>
                        <div className='note'>
                            <div className='note_content'>Show password</div>
                        </div>
                    </div>
                    <div class="form_text">
                        <a id="linkCreatAccount" href="#" class="link_forgot_account">Forgot your password?</a>
                        <button class="form_button" type="submit">Next</button>

                    </div>
                </div>
            </form>

            <div className='footer'>
                <select name="" id="" className="select_language">
                    {language.map((lang, index) => (
                        <option value="english_us">{lang}</option>
                    ))}
                </select>

                <ul className='footer_ul'>
                    <li className='footer_li'>
                        <a href='#' className='footer_a'>Help</a>
                    </li>
                    <li className='footer_li'>
                        <a href='#' className='footer_a'>Privacy</a>
                    </li>
                    <li className='footer_li'>
                        <a href='#' className='footer_a'>Rules</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default App_2
