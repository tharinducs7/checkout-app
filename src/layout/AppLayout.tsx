import React, { ReactNode } from 'react';
import logo from "../../public/euka-future-learning-logo.svg"
interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navbar */}
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="text-xl normal-case btn btn-ghost"> <img src={logo} title='logo' className='w-20'/> </a>
        </div>
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
        </div>
        </div>

      {/* Content Centered */}
      <div className="container p-4 mx-auto">{children}</div>
    </div>
  );
};

export default AppLayout;
