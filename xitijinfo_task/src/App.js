import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/NavComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeComponent } from './component/HomeComponent';
import { LoginComponent } from './component/LoginComponent';
import { SignupComponent } from './component/SignupComponent';
import { SidebarComponent } from './component/SidebarComponent';
function App() {
  return (
     <div className="App">
      <BrowserRouter>
        <NavComponent />
        <SidebarComponent />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="signup" element={<SignupComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
  </div>
  );
}

export default App;
