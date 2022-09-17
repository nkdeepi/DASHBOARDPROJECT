import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard'
import WowUsers from './pages/WowUsers'
import Sidebar from './Components/Sidebar'
import Table from './Table'
import TableData from './Table';
import VideoClips from './pages/VideoClips'
import ReportedContent from './pages/ReportedContent'
import Category from './pages/Category'
import InfoPage from './pages/InfoPage'
import Faq from './pages/Faq'
import PushNotification  from './pages/PushNotification'
import InternalUser from './pages/InternalUser'
import CardComponent from './Table';






function App() {
  return (
    <div className="App">
      {/* <CardComponent/> */}
 
 <BrowserRouter>
 <Sidebar/>
 <Routes>
 
 <Route path="dashboard" element={<DashBoard/>}></Route>
 <Route path="/wowusers" element={<WowUsers/>}></Route>
 <Route path="/videoclips" element={<VideoClips/>}></Route>
 <Route path="/reportedcontent" element={<ReportedContent/>}></Route>
 <Route path="/category" element={<Category/>}></Route>
 <Route path="/infopage" element={<InfoPage/>}></Route>
 <Route path="/faq" element={<Faq/>}></Route>
 <Route path="/pushnotification" element={<PushNotification/>}></Route>
 <Route path="/internaluser" element={<InternalUser/>}></Route>
 </Routes>

 </BrowserRouter>

    </div>
  );
}

export default App;
