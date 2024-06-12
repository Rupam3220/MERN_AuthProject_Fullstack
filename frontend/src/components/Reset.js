// libraty import
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

// files import
import styles from '../styles/Styles.module.css'
import { validateResetPassword } from '../helper/Validate.js'


const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validate: validateResetPassword,
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
          <div className={styles.glass} >
            <div className="title flex flex-col items-center">
              <h4 className="text-4xl font-bold text-gray-200">Reset Password</h4>
            </div>
            
            {/* Form start */}
            <form className='py-20' onSubmit={formik.handleSubmit}>

              <div className="textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Enter new password...' />
                <input {...formik.getFieldProps('confirmPassword')} className={styles.textbox} type="text" placeholder='Confirm new password...' />
                <button className={styles.btn} type='submit'>Reset</button>
              </div>

            </form>
            {/* Form end */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Reset