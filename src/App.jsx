
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { Statema } from './components/Statema'
import Effect from './components/Effect'

function App() {
 
  const bn="livewire"
  const theme="dark"

  const data=[
    {
      name:"bala",age:23,student:false
    },
    {
      name:"raja",age:24,student:true
    },
    {
      name:"varun",age:22,student:false
    }
  ]

  return (
    <>
    <Header name={bn} theme={theme}/>
    <Main brand={bn} data={data}/>
    <Statema/>
     <Footer bn={bn} theme={theme}/>
     <Effect/>
    </>
  )
}

export default App
