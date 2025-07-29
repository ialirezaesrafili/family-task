import React from 'react';
import Header from '../../components/Header/Header';

const InfoCard = ({ icon, iconBgColor, mainText, children, className }) => (
  <div className={`absolute w-[12.5rem] bg-white/30 backdrop-blur-md border border-white/30 rounded-lg z-40 flex items-center p-2 px-5 gap-x-3 box-border ${className}`}>
    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgColor}`}>
      <span role="img" aria-label="icon" className="text-2xl">{icon}</span>
    </div>
    <div className="flex flex-col text-right w-full">
      <p className="text-[0.9rem] font-bold text-[#4A4A4A] m-0">{mainText}</p>
      {children}
    </div>
  </div>
);

const SubText = ({ count, item, status }) => (
  <div className="flex justify-end items-center gap-x-1 text-xs text-gray-500">
    <span className="text-[#B82D30] font-bold">{status}</span>
    <span>{item}</span>
    <span>{count}</span>
  </div>
);

export default function HomePage() {
  return (
    <div className="bg-white w-screen h-screen relative overflow-hidden font-vazir">
      <Header />

      <div className="absolute w-[53.75rem] h-[53.75rem] top-[-18.5625rem] left-[-17.5rem] bg-[#03112B] rounded-full shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)] z-10"></div>
      <div className="absolute w-[28.14rem] h-[28.14rem] top-[7.54rem] left-[6.25rem] bg-[#FEFEFE] rounded-full shadow-[0_0.5rem_0.75rem_rgba(3,17,43,0.08)] z-20"></div>

      <img
        src="/Saly-10.png"
        alt="Character illustration"
        className="absolute w-[22.68rem] h-[18.75rem] top-[9.68rem] left-[9.125rem] z-30"
      />

      <div dir="rtl" className="absolute top-[10.125rem] left-0 right-0 mx-auto lg:left-[42.375rem] lg:right-auto w-[90%] lg:w-[32.25rem] z-0 flex flex-col items-center lg:items-start gap-8 text-center lg:text-right">
        <h1 className="text-4xl font-bold text-[#03112B] leading-tight">
          فم تسک <br /> دستیار شخصی شما!
        </h1>
        <p className="text-lg text-[#4A4A4A] leading-loose max-w-md">
          کارهای خونه رو اضافه کن و وقتی انجام شد مطلع شو!
          <br />
          فم‌تسک تلاش می‌کنه تا توی خونه‌ی شما نظم برقرار بشه!
        </p>
        <button className="bg-[#B82D30] text-white w-40 h-[2.875rem] rounded-xl text-base font-semibold cursor-pointer transition-transform hover:scale-105 flex items-center justify-center">
          مشاهده امکانات
        </button>
      </div>
      
      <InfoCard
        icon="💬"
        iconBgColor="bg-[#E6F0FA]"
        mainText="اطلاع‌رسانی سریع"
        className="top-[23.75rem] left-[28.5rem] hidden xl:flex"
      >
        <p className="text-sm text-[#B82D30] m-0">از طریق پیامک</p>
      </InfoCard>

      <InfoCard
        icon="📊"
        iconBgColor="bg-[#FDECEC]"
        mainText="آمار فعالیت‌ها"
        className="top-[7.5rem] left-[14rem] hidden xl:flex"
      >
        <SubText count={4} item="وظیفه‌ی" status="فعال" />
      </InfoCard>
      
      <InfoCard
        icon="🛒"
        iconBgColor="bg-[#E9E7FD]"
        mainText="خریدهای روزانه"
        className="top-[18.125rem] left-[1.5rem] w-[11.5rem] h-[4.25rem] hidden xl:flex"
      >
        <SubText count={4} item="سبد" status="فعال" />
      </InfoCard>
    </div>
  );
}