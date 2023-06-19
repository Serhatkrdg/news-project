import {React, useState} from 'react'
import { MainLayout } from '../../components/MainLayout'
import {SabahGundem} from '../../components/SabahGundem'
import { SabahSpor } from '../../components/SabahSpor'

export const NewsPage = () => {
  const [focusSpor, setFocusSpor] = useState(false)
  const [focusGundem, setFocusGundem] = useState(false)
  return (
    <div className=''>
        <MainLayout focusSpor={focusSpor} setFocusSpor={setFocusSpor} focusGundem={focusGundem} setFocusGundem={setFocusGundem}>
            {focusSpor && <SabahSpor /> }
            {focusGundem && <SabahGundem />}
        </MainLayout>
    </div>
  )
}
