// libraty import
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

// files import
import avatar from '../assets/profile.png'
import styles from '../styles/Styles.module.css'
import { validateRegister } from '../helper/Validate.js'
import convertImageToBase64 from '../helper/imageConvert.js'


const Profile = () => {

  const[file, setFile] =  useState()

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate: validateRegister,
    validateOnBlur: false,
    validateOnChange: false,

    // onSubmit
    onSubmit: async values => {
      values = await Object.assign(values, {profile: file || ''})
      console.log(values)
    }

  })

  // We can't use formik for file upload, thats why we are creating a function
  const onUpload = async(e) => {
    const base64 = await convertImageToBase64(e.target.files[0])
    setFile(base64)
  }



  return (
    <>
      <div className="container mx-auto">

        {/* Toaster */}
        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-4xl font-bold text-gray-200">Register here</h4>
            </div>
            
            {/* Form start */}
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor='profile'>
                  <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                </label>
                <input onChange={onUpload} type='file' id='profile' name='profile' />
              </div>

              
              <div className="textbox flex flex-col items-center gap-2">
                <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Enter Username here...' />
                <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Enter Email here...' />
                <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Enter Password here...' />
                <button className={styles.btn} type='submit'>Register</button>
              </div>


              <div className="text-center py-4">
                <span className='text-amber-600'>Already a Member? <Link className='text-red-600' to="/">Login here</Link></span>
              </div>

            </form>
            {/* Form end */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile