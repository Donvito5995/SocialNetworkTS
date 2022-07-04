import React from 'react';
import k from './App.module.css';
import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar/navBar";
import state from "./redux/state";

const App = () => {
  return (
      <BrowserRouter>
        <div className={k.appwrapper}>
          <Header/>
          <NavBar/>
          <div className={k.content}>
            <Routes>
              <Route path="/dialogs/*" element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                         messages={state.dialogsPage.messages}/>}/>
              <Route path="/profile" element={<Profile posts={state.profilePage.posts}/>}/>
            </Routes>

          </div>
        </div>
      </BrowserRouter>
  );
}


export default App;