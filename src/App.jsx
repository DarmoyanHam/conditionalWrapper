import { useState } from 'react'
import './App.css'
import { ConditionalWrapper } from './conditionalWrapper'

const Wrapper = (children) => {
  return <div>
    {children}
    <p>wrapped</p>
  </div>
}

function App() {
  const [condition, setCondition] = useState(false);

  const handleToggle = () => {
    setCondition(!condition);
  }

  return (
    <>
      <button className='wrapper' onClick={handleToggle}>toggle</button>
      <ConditionalWrapper 
        condition={condition}
        wrapper={Wrapper}
        children={<p>something</p>}
      />
    </>
  )
}

export default App;
