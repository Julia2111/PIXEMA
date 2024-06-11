// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { Header } from "../../components/header/header"
// import { ThemeContext } from "../../context/context";
// import { inputData } from "../../ui-components/input/data-input"
//  import {Input} from "../../ui-components/"

// import "./settings.scss"
// import NavBar from '../../components/Navbar/NavBar';

// export const Settings = () => {
//     const navigate = useNavigate()
//     const themeContext = useContext(ThemeContext)
//     return(
//         <>
//       <NavBar/>
//         <div className = "settings">

//             <div className = "settings-container">
//                 <div className = "settings-section">
//                     <h2 className = {themeContext.themeIsActive === false ? "settings-section__title" : "settings-section__title white"}>Profile</h2>
//                     <div className = {themeContext.themeIsActive === false ? "settings-container__inp-container" : "settings-container__inp-container white"}>
//                         <Input type={inputData[0].type} placeholder={inputData[0].placeholder} title = {inputData[0].title}/>
//                         <Input type={inputData[1].type} placeholder={inputData[1].placeholder} title = {inputData[1].title}/>
//                     </div>
//                 </div>
//                 <div className = "settings-section">
//                     <h2 className = {themeContext.themeIsActive === false ? "settings-section__title" : "settings-section__title white"}>Password</h2>
//                     <div className = {themeContext.themeIsActive === false ? "settings-container__inp-container" : "settings-container__inp-container white"}>
//                         <Input type={inputData[2].type} placeholder={inputData[2].placeholder} title = {inputData[2].title}/>
//                         <Input type={inputData[3].type} placeholder={inputData[3].placeholder} title = {inputData[3].title}/>
//                         <Input type={inputData[5].type} placeholder={inputData[5].placeholder} title = {inputData[5].title}/>
//                     </div>
//                 </div>
//                 <div className = "settings-section">
//                     <h2 className = {themeContext.themeIsActive === false ? "settings-section__title" : "settings-section__title white"}>Color mode</h2>
//                     <div className = {themeContext.themeIsActive === false ? "settings-container__color-container" : "settings-container__color-container white"}>
//                         <div className = "settings-container__color-text">
//                             <p className = {themeContext.themeIsActive === false ? "settings-container__text-item title" : "settings-container__text-item title white"}>{themeContext?.themeIsActive === true ? "White" : "Dark"}</p>
//                             <p className = "settings-container__text-item">Use thema</p>
//                         </div>
//                         <button className = {themeContext.themeIsActive === false ? "settings-container__color-btn" : "settings-container__color-btn white"} onClick = {() => themeContext?.setThemeIsActive(!themeContext.themeIsActive)}>Theme</button>
//                     </div>
//                 </div>
//                 <div className = "settings-btn__section">
//                     <button className = "settings-btn gray" onClick = {() => navigate(-1)}>Cancel</button>
//                     <button className = "settings-btn purple" onClick = {() => navigate("/")}>Save</button>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
