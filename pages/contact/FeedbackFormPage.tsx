import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { supabase } from '../../lib/supabaseClient';

const FeedbackFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    type: 'مقترح',
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
    priority: 'عادية'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        .from('complaints_suggestions')
        .insert([
          {
            type: formData.type,
            name: formData.name,
            email: formData.email || null,
            phone: formData.phone || null,
            subject: formData.subject,
            description: formData.description,
            priority: formData.priority
          }
        ]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({
        type: 'مقترح',
        name: '',
        email: '',
        phone: '',
        subject: '',
        description: '',
        priority: 'عادية'
      });

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError('حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader title="الشكاوى والمقترحات" breadcrumb="الشكاوى والمقترحات" />
      <section className="py-20 bg-gradient-to-br from-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8 border-r-4 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-4">نرحب بملاحظاتكم واقتراحاتكم</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                نحن في <strong>الجمعية التعاونية الزراعية بالمندق</strong> نؤمن بأهمية الاستماع لآرائكم وملاحظاتكم. 
                نموذج الشكاوى والمقترحات يتيح لكم التواصل معنا بشكل مباشر لمشاركة أفكاركم، شكاواكم، أو استفساراتكم. 
                كل رسالة تصلنا تحظى باهتمامنا الكامل ونعمل على معالجتها في أسرع وقت ممكن.
              </p>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                  <div>
                    <h3 className="font-bold text-primary">مقترحات</h3>
                    <p className="text-sm text-gray-600">أفكارك تهمنا</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-lg">
                  <div>
                    <h3 className="font-bold text-primary">شكاوى</h3>
                    <p className="text-sm text-gray-600">نحن هنا للمساعدة</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                  <div>
                    <h3 className="font-bold text-primary">استفسارات</h3>
                    <p className="text-sm text-gray-600">سنجيب على أسئلتك</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-8 bg-green-50 border-2 border-green-500 rounded-lg shadow-lg text-center">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="font-bold text-green-800 text-2xl mb-3">تم الإرسال بنجاح!</h3>
                <p className="text-green-700 text-lg mb-6">شكراً لتواصلكم معنا. سيتم مراجعة رسالتكم والرد عليها في أقرب وقت ممكن.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-6 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <p className="text-red-700 font-semibold">{error}</p>
                </div>
              </div>
            )}

            {/* Form Card */}
            {!submitted && <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type Selection */}
                <div>
                  <label htmlFor="type" className="block text-gray-800 font-bold text-lg mb-3">
                    نوع الرسالة <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg transition-all"
                  >
                    <option value="مقترح">مقترح</option>
                    <option value="شكوى">شكوى</option>
                    <option value="استفسار">استفسار</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-bold text-lg mb-3">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg transition-all"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-800 font-bold text-lg mb-3">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-800 font-bold text-lg mb-3">
                      رقم الجوال
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05xxxxxxxx"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg transition-all"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-400">
                  <p className="text-sm text-gray-700">
                    <strong>ملاحظة:</strong> يُفضل تزويدنا بالبريد الإلكتروني أو رقم الجوال لنتمكن من التواصل معك والرد على رسالتك.
                  </p>
                </div>

                {/* Priority */}
                <div>
                  <label htmlFor="priority" className="block text-gray-800 font-bold text-lg mb-3">
                    الأولوية <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg transition-all"
                  >
                    <option value="منخفضة">منخفضة</option>
                    <option value="عادية">عادية</option>
                    <option value="عاجلة">عاجلة</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-800 font-bold text-lg mb-3">
                    موضوع الرسالة <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="عنوان مختصر للموضوع"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-gray-800 font-bold text-lg mb-3">
                    التفاصيل <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="اكتب تفاصيل الرسالة هنا... كن واضحاً ومحدداً قدر الإمكان"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg transition-all resize-none"
                  ></textarea>
                  <p className="text-sm text-gray-600 mt-2">
                    الحد الأدنى: 20 حرفاً | الحد الأقصى: 1000 حرف | عدد الأحرف الحالي: {formData.description.length}
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold py-4 px-8 rounded-lg transition-all text-xl shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-none transform hover:scale-105 active:scale-95"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        إرسال الرسالة
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>}

            {/* Additional Information */}
            <div className="mt-8 bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">طرق التواصل الأخرى</h3>
              <div className="space-y-2 text-white/90">
                <p>البريد الإلكتروني: info@almandaqag.org.sa</p>
                <p>الهاتف: 0503774124</p>
                <p>أوقات العمل: الأحد - الخميس (8:00 ص - 4:00 م)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackFormPage;
