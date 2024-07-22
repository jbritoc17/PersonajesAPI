import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Title from './components/Title'
import Button from './components/Button'
import SubTitle from './components/SubTitle'

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(()=> {console.log("useEffect is working also when count is changing!!!");
  },[count])
  
  return (
    <div className='App'>


    <Button 
    onClick={()=> setCount(count + 1)} 
    text={`+1`} />
    
    <Title text={`numero de clicks:  ${count}`}/>
    </div>

)
{/*  <Title />
 <Title text="Texto del componente 2"/>
 <Title text="Texto del componente 3"/> */}
 {/* <Button onClick={()=>alert("boton see more")} button='see more'/>
 <Button onClick={()=>alert("boton save")} button='save'/>
 <SubTitle subText='soy un subtitulo' />
<SubTitle /> */}
}

export default App
