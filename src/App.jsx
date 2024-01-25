import { useState } from "react"
import Header from "./componenet/Header"
import OutputList from "./componenet/OutputList";
import UserInput from "./componenet/UserInput"
function App() {
  const [investmetData, setInvestmentData] = useState({initial:10000, annual:1200, expectedReturn:6, duration:10});
  const handleChangeInput = (type, value) => {
    setInvestmentData((prevData) => {
      return {
        ...prevData, [type]: + value
      }
    })
  }
  return (
    
    <>
      <Header></Header>
      <UserInput handleInputChange={handleChangeInput} data={investmetData}></UserInput>
      <OutputList inputData={investmetData}></OutputList>
    </>
    
  )
}

export default App
