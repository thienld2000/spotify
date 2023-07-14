import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function () {
  const {song} = useContext(Songs)
  return (
    <div className='col-span-1 p-3'>
      <h3 className='text-cyan-500 font-bold'>Now playing</h3>
      <h3 className='text-gray-400 font-bold text-2xl'>{song.name}</h3>
      <div className='w-[204px] m-auto mt-10'>
        <img src={song.links.images[0].url} alt='avatar' />
      </div >
      <div className='flex justify-evenly items-center mt-10  '>
        <img className='w-[70px] rounded-full' src={song.links.images[0].url}alt='avatar'/>
        <span className='text-xl text-white'>{song.author}</span>
      </div>

    </div>
  )
}
