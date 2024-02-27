'use client'
import { useState } from "react"
import { Button } from "../button/Button"

interface FillYears {
  a: number,
  b: number,
  years: Array<number>
}

const fillYears = ({a, b, years}:FillYears) => {
  for(let i = a; i < b + 1; i++){
    years.push(i)
  }
}

export const Form = () => {
  const [result, setResult] = useState("oli")

  const años: Array<number> = []
  fillYears({a:2020, b:2030, years:años})

  const jobCategories = [
    "BI y Visualización de datos", 
    "Base de datos y cloud computing", 
    "Análisis de datos", 
    "Arquitectura y modelamiento de datos", 
    "Ingeniería de datos", 
    "Gestión y estrategia de proyectos",
    "Calidad y Operaciones",
    "Data science e investigación",
    "Liderazgo y manejo de proyectos",
    "Machine Learning e IA",
  ]
  const expLevels = [
    "junior level",
    "executive level",
    "Mid level",
    "Senior level"
  ]
  const workType = [
    "Híbrido",
    "Presencial",
    "Remoto"
  ]

  const handleButton = () => {
    setResult("wtf")
  }

  const clear = (event: any) => {
    event.target.value = ""
  }

  const handleChange = (event: any) => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  };

  return (
    <section className="flex justify-center flex-col items-center gap-12 mt-16">
      <form action="" className="flex gap-12 flex-wrap justify-center w-[480px] lg:w-[770px]">
        <label className="flex gap-4">
          Año:
          <input type="text" list="años" 
            onClick={clear}
            onFocus={clear}
            onChange={handleChange}
            className="text-black focus:outline-8 focus:outline-[#9CCFD8]"
            placeholder={años[0]+""}
          />
        </label>
        <datalist id="años">
          {
            años.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>
        <label className="flex gap-4">
          Trabajo: 
          <input type="text" list="jobCategories" 
            onClick={clear}
            onFocus={clear}
            onChange={handleChange}
            className="text-black focus:outline-8 focus:outline-[#9CCFD8]"
            placeholder={jobCategories[0]}
          />
        </label>
        <datalist id="jobCategories">
          {
            jobCategories.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>
        <label className="flex gap-4">
          experiencia:
          <input type="text" list="expLevels" 
            onClick={clear}
            onFocus={clear}
            onChange={handleChange}
            className="text-black focus:outline-8 focus:outline-[#9CCFD8]"
            placeholder={expLevels[0]}
          />
        </label>
        <datalist id="expLevels">
          {
            expLevels.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>
        <label className="flex gap-4">
          Modalidad:
          <input type="text" list="workType" 
            onClick={clear}
            onFocus={clear}
            onChange={handleChange}
            className="text-black focus:outline-8 focus:outline-[#9CCFD8]"
            placeholder={workType[0]}
          />
        </label>
        <datalist id="workType">
          {
            workType.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>
      </form>
      <aside className="flex justify-center flex-col items-center gap-3 mt-4 mb-4">
        <Button label={"start"} handle= {handleButton}/>
        <span>result: {result}</span>
      </aside>
    </section>
  )
}