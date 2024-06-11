import { useState } from "react";
import styles from "./App.module.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./pages/NotFound/NotFound";
import Posts from "./pages/Posts/Posts";
import SignUp from "./pages/SignUp/SignUp";
import Post from "./pages/Post/Post";
import Profile from "./pages/Profile/Profile";
import { ThemeContext } from "./Context/Context";
import About from "./pages/About/About";
import Auth from "./HOC/Auth";
import Favorite from "./pages/Favorite/Favorite";
import { SearchContext } from "./Context/SearchContext";
import Confirmation from "./pages/Confirmation/Confirmation";
import Activation from "./pages/Activation/Activation";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  const [theme, setTheme] = useState("light");
  const [searchString, setSearchString] = useState("Barbie");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SearchContext.Provider value={{ searchString, setSearchString }}>
          <div className={`${theme === "dark" ? styles.dark : styles.light}`}>
            <Routes>
              <Route path="sign-up" element={<SignUp />} />

              <Route path="/" element={<Layout />}>
                <Route path="about" element={<About />} />
                <Route path="about-us" element={<Navigate to="/about" />} />
                {/* <Route path='login' element= {<SignUp/>}/> */}
                <Route index element={<Posts />} />
                <Route
                  path="posts"
                  element={
                    <Auth>
                      <Posts />
                    </Auth>
                  }
                />
                <Route path="posts/:imdbID" element={<Post />} />
                <Route path="profile" element={<Profile />} />
                <Route path="favorite" element={<Favorite />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="activate/:uid/:token" element={<Activation />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
              </Route>
            </Routes>
          </div>
        </SearchContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
