import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/pages/App/App';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

import "./18n"
import Search from './component/pages/Search/Search';
import { Provider } from 'react-redux';
import store from './toolkitRedux'; import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { BiAddToQueue } from "react-icons/bi";
import { BiSolidHeartSquare } from "react-icons/bi";
import mix1 from "./img/1.png";
import mix2 from "./img/2.png";
import mix3 from "./img/3.jpeg";
import mix4 from "./img/4.jpeg";
import mix5 from "./img/5.jpeg";
import mix6 from "./img/6.jpeg";
import Library from './component/pages/Library/Library';
import SignUp from './component/SignUp/SignUp';
import LogIn from './component/LogIn/LogIn';
import LikedSong from './component/pages/LikedSong/LikedSong';
import Playlist from "./component/pages/Playlist/Playlist"

const navigation = [
  {
    title: "Home",
    icon_dark: <GoHomeFill style={{ color: 'white', width: "32px", height: "32px" }} />,
    icon_light: <GoHomeFill />,
    routes: "/"
  },
  {
    title: "Search",
    icon_dark: <CiSearch style={{ color: 'white', width: "32px", height: "32px" }} />,
    icon_light: <CiSearch />,
    routes: "/search"
  },
  {
    title: "Your Library",
    icon_dark: <VscLibrary style={{ color: 'white', width: "32px", height: "32px" }} />,
    icon_light: <VscLibrary />,
    routes: "/your_library"
  },
  {
    title: "",
    icon: ""
  },
  {
    title: "Create Playlist",
    icon_dark: <BiAddToQueue style={{ color: 'white', width: "32px", height: "32px" }} />,
    icon_light: <BiAddToQueue />
  },
  {
    title: "Liked Song",
    icon_dark: <BiSolidHeartSquare style={{ color: 'white', width: "32px", height: "32px" }} />,
    icon_light: <BiSolidHeartSquare />,
    routes: "/liked_song"
  },
]

const top = ["Chill Mix", "Insta Hits", "Your Top Songs 2021", "Mellow Songs", "Anime Lofi & Chillhop Music", "BG Afro “Select” Vibes", "Afro “Select” Vibes", "Happy Hits!", "Deep Focus", "Instrumental Study", "OST Compilations", "Nostalgia for old souled mill...", "Mixed Feelings"];

const mix = [
  {
    id: 1,
    title: "Chill Mix",
    img: mix1,
    description: "Julia Wolf, Khalid, ayokay and more"
  },
  {
    id: 2,
    title: "Pop Mix",
    img: mix2,
    description: "Hey Violet, VÉRITÉ, Timeflies and more"
  },
  {
    id: 3,
    title: "Daily Mix 1",
    img: mix3,
    description: "Ayra Starr, Lil Kesh, Ed Sheeran and more"
  },
  {
    id: 4,
    title: "Daily Mix 5",
    img: mix4,
    description: "Ayra Starr, Lil Kesh, Ed Sheeran and more"
  },
  {
    id: 5,
    title: "Daily Mix 2",
    img: mix5,
    description: "FRENSHIP, Brooke Sierra, Julia Wolf an..."
  },
  {
    id: 6,
    title: "Daily Mix 4",
    img: mix6,
    description: "Joywave, The xx, The Neighbourhood and..."
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App top={top} navigation={navigation} mix={mix} />,
  },
  {
    path: "/search",
    element: <Search top={top} navigation={navigation} mix={mix} />,
  },
  {
    path: "/your_library",
    element: <Library top={top} navigation={navigation} />,
  },
  {
    path: "/liked_song",
    element: <LikedSong top={top} navigation={navigation} />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <LogIn />
  },
  {
    path: "/playlist/:title",
    element: <Routes>
      <Route path="/" element={<Playlist top={top} navigation={navigation} mix={mix} />} />
    </Routes>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);