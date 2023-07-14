import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'

export default function ListSong() {
  const {DataSongs, handleSetSong, song} = useContext(Songs)
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id)
  }, [song])
  

  return (
    <div className='col-span-2 bg-slate-500 overflow-y-scroll'>
      <table className='table-auto w-full  '>
        <thead className='text-white '>
          <tr>
            <th className='w-[10%] '>#</th>
            <th className='w-[60%] text-left'>Tittle</th>
            <th className='w-[20%]'>Author</th>
            <th className='w-[10%] '><i className='fa fa-download'></i></th>
          </tr>
        </thead>
        <tbody className='mt-4 h-full bg-slate-800 text-gray-400'>
          {
            DataSongs.map((song, index) =>(
                <tr 
                  key={index} 
                  className={`hover:bg-slate-5 h-12 hover:text-gray-300 ${idSong === song.id && 'bg-gray-500 text-teal-500'}`}
                  onClick={()=> handlePlaySong(song.id)}
                >
                  <td className='text-center'>{index+1}</td>
                  <td className='text-left'>{song.name}</td>
                  <td className='text-center'>{song.author}</td>
                  <td className='text-center'><a href={song.url}/> <i className='fa fa-download'/></td>
                </tr>
              )
                
            )
          }
          
        </tbody>
      </table>
    </div>
  )
}
