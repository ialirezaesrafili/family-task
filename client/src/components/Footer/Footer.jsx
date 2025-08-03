import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterLink = ({ href = "#", children }) => (
  <li>
    <a href={href} className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
      {children}
    </a>
  </li>
);

const SocialIcon = ({ href = "#", "aria-label": ariaLabel, children }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B112B] transition-transform duration-300 ease-in-out hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer 
      className="bg-[#03112B] text-white px-4 flex flex-col items-center justify-center h-[524px]" 
      dir="rtl"
    >
      <div className="max-w-[1440px] w-full flex flex-col justify-between flex-grow py-18">

       
        
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12">
          
          
          <div className="flex-1 flex flex-col items-start justify-start space-y-6">
            <h2 className="font-bold text-4xl tracking-tighter flex items-center">
              فم<span className="text-[#B82D30]">‌تسک</span>
            </h2>
            <p className="text-white text-lg leading-loose max-w-[320px]">
              فم‌تسک ابزاری ساده و کارآمد برای مدیریت فعالیت‌ها، برنامه‌ها و وظایف خانواده است.<br />
              پیگیری لحظه به لحظه‌ی فعالیت‌های خانواده.
            </p>
          </div>
<div className="">
          
       <div className="flex flex-1 flex-row justify-center items-start gap-10  mb-12">
            <div className="flex flex-col items-start">
              
              <h3 className="text-lg pb-2 mb-6 w-fit border-b-2 border-white">خدمات</h3>
              <ul className="space-y-3">
                <FooterLink>امکانات</FooterLink>
                <FooterLink>ساخت حساب</FooterLink>
                <FooterLink>ورود به حساب</FooterLink>
                <FooterLink>خرید اشتراک</FooterLink>
              </ul>
            </div>
            <div className="flex flex-col items-start">
             
              <h3 className="text-lg pb-2 mb-6 w-fit border-b-2 border-white">درباره‌ی ما</h3>
              <ul className="space-y-3">
                <FooterLink>پشتیبانی</FooterLink>
                <FooterLink>سوالات پرتکرار</FooterLink>
                <FooterLink>رضایت کاربران</FooterLink>
                <FooterLink>سیاست‌ها و قوانین</FooterLink>
              </ul>
            </div>
          </div>

           <div className="flex flex-col items-center mt-auto">
          <p className="text-white text-center mb-4">فم‌تسک را در شبکه‌های اجتماعی دنبال کنید:</p>
          <div className="flex gap-x-6">
            <SocialIcon href="#" aria-label="تلگرام">
              <FaTelegram size={22} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="اینستاگرام">
              <FaInstagram size={22} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="ایکس">
              <FaXTwitter size={22} />
            </SocialIcon>
          </div>
        </div>
        </div>

          
          <div className="flex-1 flex items-start justify-center">
            <div className="bg-white rounded-full w-90 h-90 overflow-hidden shadow-lg">
              <img src="/Saly-10.png" alt="تصویر تزئینی فم تسک" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        
       
      </div>
    </footer>
  );
};

export default Footer;