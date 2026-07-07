import React from 'react';
import PageHeader from '../../components/PageHeader';
import { ALMOND_CITY_IMAGE } from '../../assets/images';

const almondCityDocs = [
    { title: 'التصاميم النهائية لمباني مدينة اللوز', href: '/docs/مدينة-اللوز-التصاميم-النهائية.pdf' },
    { title: 'مخطط الأرض كاملة', href: '/docs/مدينة-اللوز-الأرض-كاملة.pdf' },
    { title: 'الجزء المستفاد منه', href: '/docs/مدينة-اللوز-الجزء-المستفاد.pdf' },
];

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

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto">
                        <img
                            src={ALMOND_CITY_IMAGE}
                            alt="مشروع مدينة اللوز"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                            مشروع مميّز
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
                            مشروع مدينة اللوز
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            مشروع تنموي رائد للجمعية يهدف إلى استثمار أرض الجمعية وتطوير وجهة متكاملة تخدم المجتمع المحلي
                            وتُسهم في تنمية المندق اقتصادياً وزراعياً.
                        </p>
                        <div>
                            <h4 className="text-sm font-bold text-gray-800 mb-3">المستندات المرجعية:</h4>
                            <ul className="space-y-2">
                                {almondCityDocs.map((doc) => (
                                    <li key={doc.href}>
                                        <a
                                            href={doc.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-primary hover:text-primary-dark hover:underline transition-colors"
                                        >
                                            <span className="ml-2">📄</span>
                                            <span>{doc.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
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