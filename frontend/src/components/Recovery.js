// libraty import
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

// files import
import styles from '../styles/Styles.module.css'
import { validatePassword } from '../helper/Validate.js'


const Recovery = () => {

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
              <h4 className="text-4xl font-bold text-gray-200">Password Recovery</h4>
              <span className='py-4 text-l text-center text-amber-600'>Enter OTP to recover password.</span>
            </div>
            
            {/* Form start */}
            <form className='pt-20' onSubmit={formik.handleSubmit}>

              <div className="textbox flex flex-col items-center gap-6">
                
                <div className='input text-center'>
                  <span className='py-4 text-sm w-2/3 text-center text-amber-600'>Please enter 6 digit OTP that has been sent to your email.</span>
                  <input className={styles.textbox} type="text" placeholder='Enter OTP here...' />
                </div>

                <button className={styles.btn} type='submit'>Login</button>
              </div>

              <div className="text-center py-4">
                <span className='text-amber-600'>Didn't Received OTP? <button className='text-red-600'>Resend OTP</button></span>
              </div>

            </form>
            {/* Form end */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Recovery