import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import logoGoogle from "./image/google.jpg";
import App_2 from "./App_2.js";

// const numberCar = ["car1", "car2", "car3"];
const language = ["English US", "Eglinsh UK", "Vietnamese"]


function App() {
  // const [car, setCar] = useState("gghjghjgjhgh");
  // const [language, setLanguage] = useState("English US")
  // const handleClick = () => {
  //   const random = Math.floor(Math.random()*3) 
  //   setCar(numberCar[random])
  // }
  const [next, setNext] = useState(false)
  
  return (
    // <div> 
    //   <h1 className= "car">{car}</h1>
    //   <button onClick={handleClick}>Lay thuong</button>
    // </div>
    <div className="container">
      {/* <div className='logo'>
          <div className='container_logo'>
            <img src={logoGoogle} alt="img_logo"/>
          </div>
        </div> */}
      <form className="form" id="login">
      <div className='logo'>
          <div className='container_logo'>
            <img src={logoGoogle} alt="img" className='img_logo'/>
          </div>
        </div>
        <h1 className="form_title">Log in</h1>
        <div className="form_title2">Continue to YouTube</div>
        <div className="form_input-group">
          <input type="text" className="form_input" autofocus placeholder="Email or phone number" />
          <p className="form_text">
            <a href="#" className="form_link">Forgot your email address?</a>
          </p>
        </div>
        <p class="form_text2">This is not your computer? Use Guest mode to log in privately.
          <a href="#" className="form_link_looking_infomation">looking for more information</a>
        </p>

        <div class="form_text3">
          <a id="linkCreatAccount" href="#" className="form_link_create_account">Create Account</a>
          <button class="form_button" type="submit" onClick={() =>
          setNext(!next)
          }>Next</button>

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
  );
}

export default App;
