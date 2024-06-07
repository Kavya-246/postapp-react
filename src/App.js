import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';
import ViewallPost from './components/ViewallPost';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/Add' element={<AddPost/>}/>
      <Route path='/Search' element={<SearchPost/>}/>
      <Route path='/delete' element={<DeletePost/>}/>
      <Route path='/Viewall' element={<ViewallPost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
