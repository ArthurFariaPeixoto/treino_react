import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main_page from '../js/main_page';
import Login from '../js/login';

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
