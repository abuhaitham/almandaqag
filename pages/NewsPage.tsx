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
              href="https://x.com/mandq_farmer"
              target="_blank"
              rel="noopener noreferrer"
              title="حساب الجمعية التعاونية الزراعية بالمندق على منصة أكس"
              className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-bold py-3 px-5 rounded-md transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>أخبار الجمعية على منصة أكس</span>
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