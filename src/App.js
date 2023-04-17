import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import { useEffect, useState } from "react";
import Loader from './Components/Loader/Loader'

function App() {

  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    window.addEventListener('load', setLoaderHandle)
    setLoaderHandle()
    return () => {
      window.removeEventListener('load', setLoaderHandle)
    }
  }, [])

  const setLoaderHandle = () => {
    setTimeout(() => setLoading(false), 3000);
  }

  return (
    <>
      {
        loading && <Loader />
      }
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
