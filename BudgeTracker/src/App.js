
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import LoginPage from './Pages/User/LoginPage';
import SignupPage from './Pages/User/SignupPage';
import DashBoardPages from './Pages/User/DashBoardPages';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path='/signup'element={<SignupPage/>}/>
      <Route path='/dashboard' element={<DashBoardPages/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
