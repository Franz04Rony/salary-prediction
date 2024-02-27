import { Github } from "../icons/icons.jsx"

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[100px]" >
        <div></div>
        <span className="pl-6 text-2xl"> Salary Predictor 💰</span>
        <a href="https://github.com/Franz04Rony/salary-prediction" target="_blank" className="text-[#E0DEF4] hover:text-[#C4A7E7]" aria-label="View source on Github">
            <Github width={100} height={100}/>
        </a>
    </nav>
  )
}

