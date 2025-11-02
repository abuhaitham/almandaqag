
import React from 'react';
import type { Page } from '../App';

interface ProjectsProps {
  setCurrentPage: (page: Page) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setCurrentPage }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary">
            مشاريعنا
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            سيتم الإعلان عن مشاريعنا قريبًا. (TBD)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
