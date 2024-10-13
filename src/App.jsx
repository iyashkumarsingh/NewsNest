import Navbar from './components/Navbar';
import NewsMain from './components/NewsMain';
import { useState } from "react"

const App = () => {
  const [category, setCategory] = useState('general');
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsMain category={category}/>
    </>
  )
}

export default App