


import React from 'react';
// Fix: Corrected import path to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';

const MissionPage: React.FC = () => {
  return (
    <>
      <PageHeader title="رسالتنا" breadcrumb="عن الجمعية / رسالتنا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">رسالتنا</h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              الجمعية التعاونية الزراعية بالمندق تسعى إلى دعم وتطوير القطاع الزراعي في محافظة المندق من خلال تقديم الاستشارات والخدمات الزراعية المتقدمة، وتشجيع الممارسات الزراعية المستدامة، وتوفير الموارد والتقنيات اللازمة للمزارعين، بهدف زيادة الإنتاجية والجودة، والمساهمة في تحقيق التنمية الاقتصادية والاجتماعية المستدامة للمجتمع المحلي.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionPage;
