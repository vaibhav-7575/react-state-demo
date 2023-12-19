import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {User} from './Components/User/User';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
