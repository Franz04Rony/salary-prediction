'use client'
import { useState, useEffect } from "react"
import { Button } from "../button/Button"
import { getPrediction } from "../api/getPrediction"

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

interface Data{
  year: number,
  job: number[],
  exp: number[],
  mode: number[]
}

export const Form = () => {

  const [data, setData] = useState<Data>({
    year: 0,
    job: [],
    exp: [],
    mode: []
  })
  const [prediction, setPrediction] = useState("")

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

  const handleButton = async() => {

    if( 
      data.year != 0 &&
      data.job.some((e)=> e===1) &&
      data.exp.some((e)=> e===1) &&
      data.mode.some((e)=> e===1)
      ){
      const result = await getPrediction(data.year, data.job, data.exp, data.mode)
      //console.log(result)
      const predictionPerMonth = +result.salario / 12
      setPrediction("$"+predictionPerMonth + "")
    }
    else{
      setPrediction("¡Hay campos sin rellenar! rellénalos antes de predecir")
    }
  }

  const clear = (event: any) => {
    event.target.value = ""
  }

  const handleChangeYear = (event: any) => {
    setData({
      ...data,
      year: event.target.value
    })
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  }
  const handleChangeJob = (event: any) => {
    const currentJob = event.target.value
    const arrJob = []
    for (let i = 0; i < jobCategories.length; i++){
      if(jobCategories[i] === currentJob) arrJob.push(1)
      else arrJob.push(0)
    }
    setData({
      ...data,
      job: arrJob
    })
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  }
  const handleChangeExp = (event: any) => {
    const currentExp = event.target.value
    const arrExp = []
    for (let i = 0; i < expLevels.length; i++){
      if(expLevels[i] === currentExp) arrExp.push(1)
      else arrExp.push(0)
    }
    setData({
      ...data,
      exp: arrExp
    })
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  }
  const handleChangeMode = (event: any) => {
    const currentMode = event.target.value
    const arrMode = []
    for (let i = 0; i < workType.length; i++){
      if(workType[i] === currentMode) arrMode.push(1)
      else arrMode.push(0)
    }
    setData({
      ...data,
      mode: arrMode
    })
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  }

  return (
    <section className="flex justify-center flex-col items-center gap-12 mt-16">
      <form action="" className="flex gap-12 flex-wrap justify-center w-[480px] lg:w-[770px]">
        <label className="flex gap-4">
          Año:
          <input type="text" list="años" 
            onClick={clear}
            onFocus={clear}
            onChange={handleChangeYear}
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
            onChange={handleChangeJob}
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
            onChange={handleChangeExp}
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
            onChange={handleChangeMode}
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
      <aside className="flex justify-center flex-col items-center gap-7 mt-8 mb-8">
        <Button label={"start"} handle= {handleButton}/>
        <span>
          Predicción Sueldo Mensual: 
          <p className="text-amber-200 text-center">
            {prediction}
          </p>
        </span>
      </aside>
    </section>
  )
}