import React from 'react';
import PageHeader from '../components/PageHeader';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import type { Page } from '../App';

interface AnalyticsPageProps {
  setCurrentPage: (page: Page) => void;
  onLogout: () => void;
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ setCurrentPage, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    onLogout();
    setCurrentPage('home');
  };

  return (
    <>
      <PageHeader title="تحليلات الموقع" breadcrumb="تحليلات الموقع" />
      <section className="py-20 bg-light min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header with Logout */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">تحليلات الموقع</h2>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('adminDashboard')}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
              >
                العودة للوحة التحكم
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
              >
                تسجيل الخروج
              </button>
            </div>
          </div>

          <AnalyticsDashboard />
        </div>
      </section>
    </>
  );
};

export default AnalyticsPage;
