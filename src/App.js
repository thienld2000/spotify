
import { useState } from 'react';
import './App.css';
import DetailSongs from './component/DetailSongs';
import ListSong from './component/ListSong';
import Navbar from './component/Navbar';
import Playing from './component/Playing';
import {Songs} from './Context'
import DataSongs from './DataSpotify/songs.json'

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const Song = DataSongs.find(song => song.id===idSong)
    if(!Song)
      setSong(DataSongs[0])
    else
      setSong(Song);
  }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-600 h-screen-navbar-player'>
        <DetailSongs />
        <ListSong />  
      </div>x``
      <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
