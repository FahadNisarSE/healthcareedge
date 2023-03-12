import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  AppointmentListDoctor,
  DoctorList,
  SingleDoctor,
  BookDoctor,
} from "./Views/Doctor";
import { AppointmentListAdmin, AdminDashBoard } from "./Views/Admin";
import { UserProfile, UserList } from "./Views/Patient";
import NotAuthorized from "./Views/Notfound/NotAuthorized";
import Notfound from "./Views/Notfound/Notfound";
import Home from "./Views/Home/Home";
import RegisterUser from "./Views/RegisterUser/RegisterUser";
import VideoCall from "./Views/VideoCall/VideoCall";

import { Navbar, Sidebar, Footer } from "./Containers";

import ProtectedRoutes from "./utils/ProtectedRoutes";
import useSideBarState from "./Store/sideBar";
import navDisplay from "./utils/NavDisplay";

import ScrollToTop from "./utils/ScrollToTop";
import "./global.css";
import Contact from "./Views/Contact/Contact";
import { Banner } from "./Components";

export default function App() {
  const show = useSideBarState((state) => state.show);
  const { pathname } = useLocation();

  return (
    <>
      {(navDisplay(pathname) || pathname.includes("/contact-us")) && <Navbar />}
      {show && <Sidebar />}
      <Banner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/doctors">
            <Route path="" element={<DoctorList />} />
            <Route path=":id" element={<SingleDoctor />} />
            <Route path="bookDoctor" element={<BookDoctor />} />
          </Route>
          <Route path="/users">
            <Route path="" element={<UserList />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route path="/doctor">
            <Route path="appointments" element={<AppointmentListDoctor />} />
          </Route>
          <Route path="/admin">
            <Route path="appointments" element={<AppointmentListAdmin />} />
            <Route path="" element={<AdminDashBoard />} />
          </Route>
          <Route path="/video-call" element={<VideoCall />} />
        </Route>
        <Route path="contact-us" element={<Contact />} />
        <Route path="login" element={<RegisterUser />} />
        <Route path="signup" element={<RegisterUser />} />
        <Route path="notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {navDisplay(pathname) && <Footer />}
    </>
  );
}
