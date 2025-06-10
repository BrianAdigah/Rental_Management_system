import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import SignIn from './pages/signin';
import SignOut from './pages/signout';
import Profile from './pages/profile';

export default function App() {
  return <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signout' element={<SignOut />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
  </BrowserRouter>
}
