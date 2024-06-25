import './App.css'
import SideBar from './SideBar'
import Header from './Header'
import MainWindow from './MainWindow'
import { useState } from 'react'
import { MoviePreview } from './MoviePreview'

function App() {
  const [isPreview, setIsPreview] = useState(null);

  if(isPreview === null)
  return (
    <div className='homeBody'>
      <SideBar/>
      <Header/>
      <MainWindow setIsPreview={setIsPreview}/>
    </div>
  )
  else return(
    <MoviePreview setIsPreview={setIsPreview} movie={isPreview}/>
  )
}

export default App
