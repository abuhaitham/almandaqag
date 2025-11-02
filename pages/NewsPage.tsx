import React from 'react';
import PageHeader from '../components/PageHeader';
import { NEWS_DATA } from '../constants';

const NewsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="أخبارنا" breadcrumb="أخبارنا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <a
              href="https://youtube.com/@kzmr247?si=trKDp5_R3EQDOr1U"
              target="_blank"
              rel="noopener noreferrer"
              title="القناة الرسمية لجمعية التنمية الأهلية ببلخزمر"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-md transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.002 3.002 0 00-2.115-2.122C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.383.564A3.002 3.002 0 00.502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a3.002 3.002 0 002.115 2.122C4.5 20.5 12 20.5 12 20.5s7.5 0 9.383-.564a3.002 3.002 0 002.115-2.122C24 15.92 24 12 24 12s0-3.92-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
              <span>القناة الرسمية لجمعية التنمية الأهلية ببلخزمر</span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_DATA.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-bold text-primary mb-4 flex-grow">{article.title}</h3>
                  <a href="#" className="text-secondary font-semibold hover:underline mt-auto">
                    قراءة المزيد
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;