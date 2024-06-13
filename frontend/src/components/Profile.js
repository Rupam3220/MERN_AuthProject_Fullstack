// libraty import
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

// files import
import avatar from '../assets/profile.png'
import styles from '../styles/Register.module.css'
import extend from '../styles/Profile.module.css'
import { validateProfile } from '../helper/Validate.js'
import convertImageToBase64 from '../helper/imageConvert.js'


const Profile = () => {

  const[file, setFile] =  useState()

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      address: ''
    },
    validate: validateProfile,
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
          <div className={`${styles.glass} ${extend.glass}`} style={{ width: "30%", paddingTop: '3em'}}>
            <div className="title flex flex-col items-center">
              <h4 className="text-4xl font-bold text-gray-200">My Profile</h4>
            </div>
            
            {/* Form start */}
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor='profile'>
                  <img src={file || avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />
                </label>
                <input onChange={onUpload} type='file' id='profile' name='profile' />
              </div>

              
              <div className="textbox flex flex-col items-center gap-2">

                <div className='name flex w-3/4 gap-10'>
                  <input {...formik.getFieldProps('firstname')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Firstname' />
                  <input {...formik.getFieldProps('lastname')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Lastname' />
                </div>

                <div className='name flex w-3/4 gap-10'>
                  <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Email' />
                  <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Phone' />
                </div>

                
                
                <input {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Address' />
                <button className={styles.btn} type='submit'>Update</button>
              </div>


              <div className="text-center py-4">
                <span className='text-amber-600'>Want to come back later? <Link className='text-red-600' to="/">Logout</Link></span>
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