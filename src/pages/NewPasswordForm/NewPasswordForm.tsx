import React from 'react'
import style from './NewPasswordForm.module.css'
import NewPasswordForm from '@/components/NewPasswordForm/NewPasswordForm'

const NewPassword = () => {
  return (
    <div className={style.container}><NewPasswordForm/></div>
  )
}

export default NewPassword