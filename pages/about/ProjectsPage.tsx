import React from 'react';
import PageHeader from '../../components/PageHeader';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="مشاريعنا" breadcrumb="عن الجمعية / مشاريعنا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    مشاريعنا
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    تسعى الجمعية لتنفيذ مشاريع زراعية تنموية تخدم أهالي المندق والمنطقة
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-4xl mb-4">🌿</div>
                    <h3 className="text-xl font-bold text-primary mb-2">تطوير الزراعة المحلية</h3>
                    <p className="text-gray-600">دعم المزارعين المحليين وتوفير المستلزمات الزراعية بأسعار تنافسية</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-4xl mb-4">💧</div>
                    <h3 className="text-xl font-bold text-primary mb-2">مشاريع الري والمياه</h3>
                    <p className="text-gray-600">تحسين أنظمة الري وترشيد استهلاك المياه في المزارع</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <h3 className="text-xl font-bold text-primary mb-2">التدريب والتأهيل</h3>
                    <p className="text-gray-600">برامج تدريبية للمزارعين على أحدث التقنيات الزراعية</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;