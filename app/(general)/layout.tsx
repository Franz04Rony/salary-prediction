import React from 'react'
import { Navbar } from '../../components/navbar/Navbar';

const GeneralLayout = ({children}:any) => {
  return (
    <>
        <Navbar/>
        <h1 className="mx-auto bg-yellow-500 text-4xl">
            Hola mundo
        </h1>
        <div className="bg-red-900 text-8xl">{children}</div>
    </>
  )
}

export default GeneralLayout 
