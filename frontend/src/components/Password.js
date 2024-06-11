// libraty import
import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

// files import
import avatar from '../assets/profile.png'
import styles from '../styles/Styles.module.css'
import { validatePassword } from '../helper/Validate.js'


const Password = () => {

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: validatePassword,
    validateOnBlur: false,
    validateOnChange: false,

    // onSubmit
    onSubmit: async values => {
      console.log(values)
    }

  })


  return (
    <>
      <div className="container mx-auto">

        {/* Toaster */}
        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-4xl font-bold text-gray-200">Welcome Back!</h4>
            </div>
            
            {/* Form start */}
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Enter Password here...' />
                <button className={styles.btn} type='submit'>Login</button>
              </div>

              <div className="text-center py-4">
                <span className='text-amber-600'>Forgot your password? <Link className='text-red-600' to="/recovery">Recover Now</Link></span>
              </div>

            </form>
            {/* Form end */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Password