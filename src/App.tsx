import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DropSection from './components/DropSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="accordion" id="Main">
        <DropSection title={"Home"} expanded={true}>
            <div className='w-full'>
              Hello
            </div>
        </DropSection>
        <DropSection title={"About"}>
            <div className='w-full'>
              Hello
            </div>
        </DropSection>
        <DropSection title={"Projects"}>
            <div className='w-full'>
              Hello
            </div>
        </DropSection>
      </div>
    </div>
  )
}

export default App
