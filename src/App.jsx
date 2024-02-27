
import "./App.css";
import HomePage from "./components/HomePage";
import {Route,Routes} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import ParkingPage from "./components/parkingbook/ParkingPage";

import ListingHome from "./components/listings/ListingHome";
import EmptyTest from "./components/EmptyTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/parkingpage" element={<ParkingPage />}/>
      <Route path="/emptytest" element={<EmptyTest />}/>

      <Route path="/listings" element={<ListingHome />}/>
    </Routes>
  );
}

export default App;
{/* <div className="bg-cover bg-center h-screen" style={{backgroundImage: 'url("https://th.bing.com/th/id/R.a3c366cbe2fab014bf5f2d121fb1bb0b?rik=6PJRiXJ1Fji12A&riu=http%3a%2f%2fdata.1freewallpapers.com%2fdownload%2fparking-underground-marking.jpg&ehk=7yW%2fwezgsluVzxv4C9x4l4BvaPK7Vzqu2C0Vc%2b3fHWQ%3d&risl=&pid=ImgRaw&r=0")'}}>
      <div className="absolute inset-0 bg-black opacity-50"></div> */}