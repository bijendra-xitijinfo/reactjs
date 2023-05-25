import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/NavComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeComponent } from './component/HomeComponent';
import { LoginComponent } from './component/LoginComponent';
import { SignupComponent } from './component/SignupComponent';
import { SidebarComponent } from './component/SidebarComponent';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth } from './component/Auth';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <NavComponent />
            <Auth><SidebarComponent /></Auth>
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="login" element={<LoginComponent />} />
                <Route path="signup" element={<SignupComponent />} />
              </Routes>
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
