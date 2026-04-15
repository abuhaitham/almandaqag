import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import type { Page } from '../App';

interface AdminLoginPageProps {
  setCurrentPage: (page: Page) => void;
  onLogin: () => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ setCurrentPage, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication - in production, use proper authentication
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminLoginTime', Date.now().toString());
      onLogin();
      setCurrentPage('adminDashboard');
    } else {
      setError('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <>
      <PageHeader title="دخول الإدارة" breadcrumb="دخول الإدارة" />
      <section className="py-20 bg-light min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">تسجيل دخول الإدارة</h2>
              <p className="text-gray-600">قم بتسجيل الدخول للوصول إلى لوحة التحكم</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                تسجيل الدخول
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                العودة إلى الصفحة الرئيسية
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLoginPage;

