import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import React from "react";
import axios from "axios";
import Context from "../utils/context";
import LandingPage from "../src/pages/landingpage";
import Register from "../src/pages/auth/register";
import Google from "../src/pages/auth/google";
import Login from "../src/pages/auth/login";
import Undangan from "../src/pages/main/undangan";

const Router = () => {

  const allowed = sessionStorage.getItem('cookie');
  const endpoint = import.meta.env.VITE_API;

  const [token, setToken] = React.useState("");
  const [cookie, setCookie] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [shopname, setShopname] = React.useState("");
  const [cliendID, setClientID] = React.useState("");
  const [isPlay, setIsPlay] = React.useState(false);

  const initCookie = async () => {
    try {
      if (allowed) return setCookie(true);
      await axios.get(`${endpoint}/getvxsrf`);
      await axios.get(`${endpoint}/checkvxsrf`);
      sessionStorage.setItem('cookie', true);
      setCookie(true);
    } catch (error) {
      setCookie(false);
      return false;
    }
  }

  const initData = async () => {
    try {
      if (!cookie) return false;
      const response = await axios.get(`${endpoint}/stresser`);
      response.data.token && setToken(response.data.token);
    } catch (error) {
      return false;
    }
  }

  // React.useEffect(() => {
  //   if (token) {
  //     const decode = jwtDecode(token);
  //     setUsername(decode.username);
  //     setShopname(decode.shopname);
  //     setClientID(decode.clientID);
  //   }
  // }, [token])

  // React.useState(() => {
  //   initCookie().then(() => initData());
  // }, [])

  window.onblur = () => {
    if (isPlay) {
        setIsPlay(false);
        const song = document.getElementById('song');
        song.pause();
    }
  }

  window.onfocus = () => {
    if (!isPlay) {
        setIsPlay(true)
        const song = document.getElementById('song')
        song.play()
    }
  }

  const value = {
    isPlay,
    play : () => {
      setIsPlay(true)
      const song = document.getElementById('song')
      song.play()
    },
    pause : () => {
      setIsPlay(false)
      const song = document.getElementById('song')
      song.pause()
    }
  };

  React.useEffect(() => {}, [isPlay]);

  return (
    <>
    <audio id="song"><source src="/song.mp3" type="audio/mpeg"/></audio>
    <Context.Provider value={value}>
      <Routing>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/undangan" element={<Undangan/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/auth/google/callback" element={<Google/>}/>
        </Routes>
      </Routing>
    </Context.Provider>
    </>
  )
}

export default Router;