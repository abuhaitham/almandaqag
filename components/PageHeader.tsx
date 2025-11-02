import React from 'react';
import { PAGE_HEADER_IMAGE } from '../assets/images';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-12"
      style={{ backgroundImage: `url(${PAGE_HEADER_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
        <p className="text-gray-300">{breadcrumb}</p>
      </div>
    </section>
  );
};

export default PageHeader;