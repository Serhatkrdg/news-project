import {React} from 'react'
import sportIco from '../../images/sport.png'
import gundemIco from '../../images/news.png'
import './index.css'

export const MainLayout = ({children, focusSpor, setFocusSpor, focusGundem, setFocusGundem}) => {
  return (
    <div className=''>
      <div className=' flex justify-evenly'>
        <div className=' w-56'>
          
          <button type='button' className=' cursor-pointer border-solid border-2 border-orange-400 h-full w-full text-orange-400' onClick={() => {setFocusSpor(true); setFocusGundem(false)}}><img src={sportIco}></img>Spor Haberleri</button>
        </div>
        <div className=' w-36'>
          
          <button type='button' className=' cursor-pointer border-solid border-2 border-orange-400 h-full w-full text-orange-400' onClick={() => {setFocusGundem(true); setFocusSpor(false)}}><img src={gundemIco}></img>Gundem Haberleri</button>
        </div>
        </div>
        {children}
    </div>
  )
}
