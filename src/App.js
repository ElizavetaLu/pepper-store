import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SelectedCategory from './components/selected-category/SelectedCategory';
import { sortData } from './sortData'



function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    sortData(dispatch)
  })


  return (
    <div className="artboard">
      <div className="container">
        <Header />

        <Routes>
          <Route path='/pepper-store/build/' element={<Main />} />
          <Route path='/pepper-store/build/category/:name' element={<SelectedCategory />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
