import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UserIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [activeNavLink, setActiveNavLink] = useState("درباره ی ما");

  const navLinks = [
    { name: "درباره ی ما", href: "/AboutPage" },
    { name: "امکانات", href: "#" },
  ];

  const authLinks = [
    { id: "login", name: "ورود", href: "/login", icon: <UserIcon /> },
    { id: "register", name: "ثبت نام", href: "/register", icon: null },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-10 md:px-20 pt-9">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between flex-row-reverse w-full bg-white/50 backdrop-blur-lg rounded-[24px] shadow-[0px_12px_45px_12px_rgba(219,219,219,0.08)] p-1.5 h-[62px]">
          <div className="flex items-center flex-row-reverse">
            <div className="text-4xl font-bold ml-4 md:ml-10">
              <span className="text-gray-800">فم</span> <span className="text-[#B82D30]">تسک</span>
            </div>
            <div className="hidden md:flex items-center gap-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setActiveNavLink(link.name); }}
                  className={`font-medium text-base transition-colors duration-300 cursor-pointer ${activeNavLink === link.name ? 'text-black' : 'text-gray-800 hover:text-black'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="flex items-center bg-gray-100 rounded-full relative w-[190px] h-[45px]">
              {authLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setActiveTab(link.id); }}
                  className={`relative z-10 flex-1 h-full flex items-center justify-center transition-colors duration-300 font-bold text-sm cursor-pointer ${activeTab === link.id ? "text-white" : "text-[#B82D30]"}`}
                >
                  {activeTab === link.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#B82D30] rounded-full"
                      transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    />
                  )}
                  <span className="relative z-20 flex items-center gap-x-2">
                    {link.icon}
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 z-50 relative">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg mt-2 p-4 flex flex-col gap-y-4"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-800 font-bold text-center py-2">
                {link.name}
              </a>
            ))}
            <hr />
            <div className="flex flex-col gap-y-3 items-center">
              <a href="/login" className="w-full text-center bg-[#B82D30] text-white py-2 rounded-lg font-bold">ورود</a>
              <a href="/register" className="w-full text-center text-[#B82D30] py-2 font-bold">ثبت نام</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;