import { Listbox } from '@headlessui/react'
import { useFormik } from 'formik'
import React, { useState } from 'react'

export default function Login() {
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: (values) => {
            console.log(values)
        }
    })




    return (
        <div className='w-full  flex items-center justify-center flex-col absolute top-[50%] translate-y-[-50%] '>


            <h2 className='mx-auto font-bold text-mainColor text-center text-3xl'>Sign In:</h2>

            <form onSubmit={formik.handleSubmit} className='flex w-full px-4 items-center flex-col   gap-y-5 sm:w-[60%] mx-auto py-2' >
                <div className='name flex flex-col w-full'>
                    <label className='text-base text-secondMainColor font-semibold' htmlFor="email">Email:</label>
                    <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={` w-full px-2 placeholder:text-size_12 text-size_12 outline-none  focus:outline-none text-start border-[1px] text-sm text-secondMainColor font-semibold   rounded-xl py-2 placeholder:text-start`}
                        type="text"
                        placeholder='type Fullname ...'
                        id='email'
                    />
                </div>

                <div className='name flex flex-col w-full'>
                    <label className='text-base text-secondMainColor font-semibold' htmlFor="password">Password:</label>
                    <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={` w-full px-2 placeholder:text-size_12 text-size_12 outline-none  focus:outline-none text-start border-[1px] text-sm text-secondMainColor font-semibold   rounded-xl py-2   px 6 placeholder:text-start`}
                        type="password"
                        placeholder='type Password ...'
                        id='password'

                    />

                </div>


                <div className="buttons w-full">
                    <button type='submit' className='font-bold bg-mainColor rounded-xl text-white py-2 px-3 w-full'>
                        Submit
                    </button>

                </div>



            </form>

        </div>
    )
}
