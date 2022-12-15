import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main_page from './pages/main_page';
import Login from './pages/login';

function App() {
  return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Main_page />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
