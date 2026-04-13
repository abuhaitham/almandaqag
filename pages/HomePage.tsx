import React from 'react';
import Hero from '../components/Hero';
import type { Page } from '../App';
import { ABOUT_IMAGE_URL } from '../constants';
import { CTA_IMAGE } from '../assets/images';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const goals = [
    'زيادة الإنتاج الزراعي والحيواني',
    'توفير البذور ومدخلات الإنتاج الزراعي',
    'الإرشاد الزراعي ومكافحة الحشرات',
    'الآلات الزراعية وأنظمة الري بالتنقيط',
    'التبريد وتخزين الفائض',
    'تشجيع المزارعين باستيعاب المنتجات بأسعار مناسبة',
    'إقامة المهرجانات للتعريف بالمنتجات الزراعية',
  ];

  const memberBenefits = [
    'الاستفادة من متجر الجمعية بأسعار مناسبة',
    'اختبار جودة المنتجات الزراعية',
    'الاستفادة من مهندسي الزراعة التابعين',
    'تخزين المنتجات بطريقة حديثة وعلمية',
    'تسويق المنتجات داخل وخارج المنطقة بأسعار مناسبة',
  ];

  const aspirations = [
    'إقامة منشأة زراعية بمتجر زراعي شامل',
    'الحصول على حراثات لدعم المزارعين',
    'الحصول على وسائل نقل مناسبة',
    'الحصول على مختبر لتحليل المنتجات',
    'التعاقد مع مهندسين زراعيين أكفاء',
  ];

  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />

      {/* الرؤية */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">رؤيتنا</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              أن تكون الجمعية التعاونية الزراعية بالمندق رائدة في تحقيق التنمية الزراعية المستدامة بمحافظة المندق، من خلال تعزيز الابتكار، وتحسين جودة المحاصيل، ودعم المزارعين بالتقنيات الحديثة، بما يساهم في تحسين مستوى المعيشة وتحقيق الأمن الغذائي للمنطقة.
            </p>
          </div>
        </div>
      </section>

      {/* الرسالة */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">رسالتنا</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              الجمعية التعاونية الزراعية بالمندق تسعى إلى دعم وتطوير القطاع الزراعي في محافظة المندق من خلال تقديم الاستشارات والخدمات الزراعية المتقدمة، وتشجيع الممارسات الزراعية المستدامة، وتوفير الموارد والتقنيات اللازمة للمزارعين، بهدف زيادة الإنتاجية والجودة، والمساهمة في تحقيق التنمية الاقتصادية والاجتماعية المستدامة للمجتمع المحلي.
            </p>
            <button
              onClick={() => setCurrentPage('governanceGuides')}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              الحوكمة
            </button>
          </div>
        </div>
      </section>

      {/* من نحن */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">من نحن</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                الجمعية التعاونية الزراعية بالمندق.. أنشئت عام ١٤٤٤هـ برقم (١٠١٤٠) لخدمة المزارعين وأصحاب المواشي بالمحافظة عن طريق استصلاح الأراضي الزراعية وعقد الدورات والندوات بهدف خدمة الزراعة وتحسينها.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition-colors"
              >
                تواصل معنا
              </button>
            </div>
            <div>
              <img src={ABOUT_IMAGE_URL} alt="عن الجمعية" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* أهداف الجمعية */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 text-center">أهداف الجمعية</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <CheckIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-800 font-medium">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* مميزات المساهمين */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">مميزات المساهمين</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white bg-opacity-10 p-5 rounded-lg">
                  <CheckIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* تطلعات الجمعية */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10">تطلعات الجمعية</h2>
              <div className="space-y-4">
                {aspirations.map((aspiration, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border-r-4 border-secondary">
                    <span className="bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {index + 1}
                    </span>
                    <span className="text-lg text-gray-800">{aspiration}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={CTA_IMAGE} alt="تطلعات الجمعية" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* تواصل معنا */}
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${CTA_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-primary opacity-80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">تواصل معنا</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            نحن نعمل باستمرار لجعل تجربتك من خلال موقع الجمعية أسهل، سنقوم بالرد على رسائلكم خلال 24 ساعة.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105"
          >
            تواصل معنا
          </button>
        </div>
      </section>

      {/* الموقع */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-primary mb-8">نتشرف بزيارتكم</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.0!2d41.25!3d20.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z2KzZhdi52YrYqSDYp9mE2KjYsSDZiNin2YTYrtiv2YXYp9iqINin2YTYp9it2KrZhdin2LnZitipINio2KfZhNmF2YbYr9mC!5e0!3m2!1sar!2ssa!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الجمعية"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
