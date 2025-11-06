import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ImageApp() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
