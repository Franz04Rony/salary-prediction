'use client'
import { useState } from "react"
import { Button } from "../button/Button"

export const Form = () => {
  const [result, setResult] = useState("oli")

  const años = [10,11,12,15]
  const jobCategories = ["Data Engineering", "Data Architecture and Modeling", "Data Science and Research", "valor4", "valor5", "valor6"]
  const expLevels = [""]
  const workType = [""]

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
    <>
      <form action="" className="flex gap-3 flex-wrap">
        <input type="text" list="años" 
          onClick={clear}
          onFocus={clear}
          onChange={handleChange}
        />
        <datalist id="años">
          {
            años.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>

        <input type="text" list="jobCategories" 
          onClick={clear}
          onFocus={clear}
          onChange={handleChange}
        />
        <datalist id="jobCategories">
          {
            jobCategories.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>

        <input type="text" list="expLevels" 
          onClick={clear}
          onFocus={clear}
          onChange={handleChange}
        />
        <datalist id="expLevels">
          {
            expLevels.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>

        <input type="text" list="workType" 
          onClick={clear}
          onFocus={clear}
          onChange={handleChange}
        />
        <datalist id="workType">
          {
            workType.map((v)=>(
              <option value={v} key={v}></option>
            ))
          }
        </datalist>
      </form>
        <Button label={"start"} handle= {handleButton} />
      <span>result: {result}</span>
    </>
  )
}