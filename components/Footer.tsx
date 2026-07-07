import React from 'react';
import type { Page } from '../App';
import { LOGO_IMAGE } from '../assets/images';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2 lg:col-span-1">
             <a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'home')} className="mb-4 block">
               <span className="inline-flex items-center gap-3 text-white">
                 <img src={LOGO_IMAGE} alt="شعار الجمعية" className="h-14 w-auto bg-white rounded-lg p-1" />
                 <span className="text-xl font-extrabold">الجمعية الزراعية بالمندق</span>
               </span>
             </a>
            <p className="text-gray-400 leading-relaxed">
              أنشئت عام ١٤٤٤هـ برقم (١٠١٤٠) لخدمة المزارعين وأصحاب المواشي بالمحافظة عن طريق استصلاح الأراضي الزراعية وعقد الدورات والندوات بهدف خدمة الزراعة وتحسينها.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-secondary transition-colors">عن الجمعية</a></li>
              <li><a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-secondary transition-colors">مشاريعنا</a></li>
              <li><a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'governance')} className="hover:text-secondary transition-colors">الحوكمة</a></li>
              <li><a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-secondary transition-colors">اتصل بنا</a></li>
              <li><a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'feedbackForm')} className="hover:text-secondary transition-colors">الشكاوى والمقترحات</a></li>
              <li><a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'satisfactionSurvey')} className="hover:text-secondary transition-colors">قياس الرضا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">اتصل بنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>العنوان: المندق، منطقة الباحة، المملكة العربية السعودية</li>
              <li>الهاتف: 0505677925</li>
              <li>البريد: Mandq.farmer@hotmail.com</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-bold text-white mb-2">تابعنا</h4>
              <a href="https://x.com/mandq_farmer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Admin Login */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">الإدارة</h4>
            <a href="javascript:void(0)" onClick={(e) => handleNavClick(e, 'adminLogin')} className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-6 rounded-md transition-colors">
              دخول
            </a>
          </div>

        </div>
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} الجمعية التعاونية الزراعية بالمندق. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;