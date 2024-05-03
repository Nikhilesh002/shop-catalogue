import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className=" w-100">
      <Header />

      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;

// all->  className='bg-dark text-white'
