import React from 'react'

export default function Navbar(props) {

  const dark1 = "text-white bg-slate-900";
  const light1 = "text-black bg-white";

  const handleCheck = ()=>{
    if(props.themeMode === "dark"){
        props.setMode("light");
        document.body.style.backgroundColor = "white";
    }
    else{
        props.setMode("dark");
        document.body.style.backgroundColor = "black";
    }

  }

  return (
    <div className= {`flex justify-between items-center w-full h-28 m-auto font-semibold ${props.themeMode === "dark"? dark1:light1}`}>
        <div className="left w-80 h-full flex justify-center items-center">
            <img src="public\textifyLogo.png" alt="Logo" className='w-auto h-3/4'/>
        </div>
        <div className="mid justify-items-end list-none flex space-x-16">
            <li className='w-16 text-center border border-transparent hover:border-red-400 hover:border-2' > <a href="/" >Home</a></li>
            <li className='w-16 text-center border border-transparent hover:border-red-400 hover:border-2'><a href="/">Contact</a></li>
            <li className='w-20 text-center border border-transparent hover:border-red-400 hover:border-2'><a href="/">About Us</a></li>


            <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" onClick={handleCheck} value="" className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
            </label>

        </div>  

        


    </div>
  )
}
