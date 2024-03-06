/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route, RouterProvider, Routes, createBrowserRouter,
} from 'react-router-dom';
import './18n';
import { Provider } from 'react-redux';
import { GoHomeFill } from 'react-icons/go';
import { CiSearch } from 'react-icons/ci';
import { VscLibrary } from 'react-icons/vsc';
import { BiAddToQueue, BiSolidHeartSquare } from 'react-icons/bi';
import store from './toolkitRedux';
import Search from './component/pages/Search/Search';
import App from './component/pages/App/App';
import mix1 from './img/1.png';
import mix2 from './img/2.png';
import mix3 from './img/3.jpeg';
import mix4 from './img/4.jpeg';
import mix5 from './img/5.jpeg';
import mix6 from './img/6.jpeg';

import playlist1 from './img/playlist/Screenshot 2022-06-04 at 20.05 (1).png';
import playlist2 from './img/playlist/Screenshot 2022-06-04 at 20.05 (2).png';
import playlist3 from './img/playlist/Screenshot 2022-06-04 at 20.05 (3).png';
import playlist4 from './img/playlist/Screenshot 2022-06-04 at 20.05.png';
import playlist5 from './img/playlist/Screenshot 2022-06-04 at 20.09 (1).png';
import playlist6 from './img/playlist/Album Art (1).png';

import Library from './component/pages/Library/Library';
import SignUp from './component/SignUp/SignUp';
import LogIn from './component/LogIn/LogIn';
import LikedSong from './component/pages/LikedSong/LikedSong';
import PlaylistMix from './component/pages/PlaylistMix/PlaylistMix';
import PlaylistLibrary from './component/pages/PlaylistLibrary/PlaylistLibrary';

const navigation = [
  {
    title: 'Home',
    icon_dark: <GoHomeFill style={{ color: 'white', width: '32px', height: '32px' }} />,
    icon_light: <GoHomeFill style={{ color: 'black', width: '32px', height: '32px' }} />,
    routes: '/',
  },
  {
    title: 'Search',
    icon_dark: <CiSearch style={{ color: 'white', width: '32px', height: '32px' }} />,
    icon_light: <CiSearch style={{ color: 'black', width: '32px', height: '32px' }} />,
    routes: '/search',
  },
  {
    title: 'Your Library',
    icon_dark: <VscLibrary style={{ color: 'white', width: '32px', height: '32px' }} />,
    icon_light: <VscLibrary style={{ color: 'black', width: '32px', height: '32px' }} />,
    routes: '/your_library',
  },
  {
    title: '',
    icon: '',
  },
  {
    title: 'Create Playlist',
    icon_dark: <BiAddToQueue style={{ color: 'white', width: '32px', height: '32px' }} />,
    icon_light: <BiAddToQueue style={{ color: 'black', width: '32px', height: '32px' }} />,
  },
  {
    title: 'Liked Songs',
    icon_dark: <BiSolidHeartSquare style={{ color: 'white', width: '32px', height: '32px' }} />,
    icon_light: <BiSolidHeartSquare style={{ color: 'black', width: '32px', height: '32px' }} />,
    routes: '/liked_songs',
  },
];

const top = [
  'Chill Mix',
  'Insta Hits',
  'Your Top Songs 2021',
  'Mellow Songs',
  'Happy Hits!',
  'Deep Focus',
  'Instrumental Study',
  'OST Compilations',
  'Mixed Feelings',
];

const mix = [
  {
    id: 1,
    title: 'Chill Mix',
    img: mix1,
    description: 'Julia Wolf, Khalid, ayokay and more',
  },
  {
    id: 2,
    title: 'Pop Mix',
    img: mix2,
    description: 'Hey Violet, VÉRITÉ, Timeflies and more',
  },
  {
    id: 3,
    title: 'Daily Mix 1',
    img: mix3,
    description: 'Ayra Starr, Lil Kesh, Ed Sheeran and more',
  },
  {
    id: 4,
    title: 'Daily Mix 5',
    img: mix4,
    description: 'Ayra Starr, Lil Kesh, Ed Sheeran and more',
  },
  {
    id: 5,
    title: 'Daily Mix 2',
    img: mix5,
    description: 'FRENSHIP, Brooke Sierra, Julia Wolf an...',
  },
  {
    id: 6,
    title: 'Daily Mix 4',
    img: mix6,
    description: 'Joywave, The xx, The Neighbourhood and...',
  },
];

const playlists = [
  {
    id: 'happy-hits',
    img: playlist4,
    title: 'Happy Hits!',
    description: 'Hits to boost your mood and fill you wi...',
  },
  {
    id: 'anime-lofi',
    img: playlist6,
    title: 'Anime Lofi & Ch...',
    description: 'Experience the best Anime moments...',
  },
  {
    id: 'afro',
    img: playlist1,
    title: 'Afro “Select” Vi...',
    description: 'A compilation of hit African songs I cons...',
  },
  {
    id: 'instrumental',
    img: playlist2,
    title: 'Instrumental St...',
    description: 'A soft musical backdrop for your st...',
  },
  {
    id: 'pop-mix',
    img: playlist3,
    title: 'Pop Mix',
    description: 'Hey Violet, VÉRITÉ, Timeflies and more',
  },
  {
    id: 'chill-mix',
    img: playlist5,
    title: 'Chill Mix',
    description: 'Julia Wolf, Khalid, ayokay and more',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App top={top} navigation={navigation} mix={mix} />,
  },
  {
    path: '/search',
    element: <Search top={top} navigation={navigation} mix={mix} />,
  },
  {
    path: '/your_library',
    element: <Library top={top} navigation={navigation} playlists={playlists} />,
  },
  {
    path: '/liked_songs',
    element: <LikedSong top={top} navigation={navigation} />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/mix/:title',
    element:
      // eslint-disable-next-line react/jsx-indent
      <Routes>
        <Route path="/" element={<PlaylistMix top={top} navigation={navigation} mix={mix} />} />
      </Routes>,
  },
  {
    path: '/your_library/:title',
    element:
      // eslint-disable-next-line react/jsx-indent
      <Routes>
        <Route path="/" element={<PlaylistLibrary top={top} navigation={navigation} playlists={playlists} />} />
      </Routes>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
