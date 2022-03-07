import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import Meal from "./components/meal";
import Favourites from "./components/Favourites";
import Search from "./components/SearchMeal";
import FilterArea from "./components/FilterArea";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import {useEffect, useState} from "react";
function App() {
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(!isLoading)
    }, 4000)
  }, [Home])
  
  if(isLoading){
    return <LoadingPage />
  }
  
  
  
  return (
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:name" element={<Products />} />
              <Route path="/meal/:id" element={<Meal />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path='/search' element={<Search />} />
              <Route path='/filterArea/:area' element={<FilterArea />} />
            </Routes>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
