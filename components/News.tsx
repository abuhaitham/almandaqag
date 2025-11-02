
import React from 'react';
import { NEWS_DATA } from '../constants';
import type { Page } from '../App';

interface NewsProps {
  setCurrentPage: (page: Page) => void;
}

const News: React.FC<NewsProps> = ({ setCurrentPage }) => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary">
            آخر الأخبار
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-bold text-primary mb-4 h-16">{article.title}</h3>
                <button 
                  onClick={() => setCurrentPage('news')}
                  className="text-secondary font-semibold hover:underline"
                >
                  التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
