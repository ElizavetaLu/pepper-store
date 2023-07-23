import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SelectedCategory from './components/selected-category/SelectedCategory';
import { sortData } from './sortData'



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    sortData(dispatch)
  })


  return (
    <div className="artboard">
      <div className="container">
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='category/:name' element={<SelectedCategory />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
