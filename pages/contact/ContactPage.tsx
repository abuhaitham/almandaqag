

import React, { useState } from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { BASIC_DATA } from '../../constants';
import type { Page } from '../../App';
import { supabase } from '../../lib/supabaseClient';

interface ContactPageProps {
  setCurrentPage: (page: Page) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const contactInfo = BASIC_DATA.filter(item => ['المدينة', 'البريد الإلكتروني', 'رقم الهاتف'].includes(item.label));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting message:', err);
      setError('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader title="تواصل معنا" breadcrumb="تواصل معنا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-extrabold text-primary mb-6">
                معلومات التواصل
              </h2>
              <ul className="space-y-4">
                {contactInfo.map(item => (
                  <li key={item.label} className="flex items-center">
                    <span className="font-semibold text-gray-800 text-lg">{item.label}: {item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                <div>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('feedbackForm'); }}
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors w-full text-center"
                  >
                    📋 الشكاوى والمقترحات
                  </a>
                  <p className="text-gray-600 mt-2 text-sm">شاركنا شكواك أو مقترحك لتحسين خدماتنا</p>
                </div>
                <div>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('satisfactionSurvey'); }}
                    className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-colors w-full text-center"
                  >
                    📊 قياس الرضا
                  </a>
                  <p className="text-gray-600 mt-2 text-sm">شاركنا رأيك لنطور خدماتنا</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-extrabold text-primary mb-6">
                أرسل لنا رسالة
              </h2>
              
              {submitted && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}
              
              {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">رسالتك</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
