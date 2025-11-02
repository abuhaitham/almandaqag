import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { supabase } from '../lib/supabaseClient';

const SatisfactionSurveyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    satisfaction: '',
    accessibility: '',
    teamWork: '',
    needsMet: '',
    recommend: '',
    positiveAspects: '',
    suggestions: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
        .from('satisfaction_surveys')
        .insert([
          {
            satisfaction: formData.satisfaction,
            accessibility: formData.accessibility,
            team_work: formData.teamWork,
            needs_met: formData.needsMet,
            recommend: formData.recommend,
            positive_aspects: formData.positiveAspects,
            suggestions: formData.suggestions
          }
        ]);

      if (insertError) throw insertError;

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting survey:', err);
      setError('حدث خطأ أثناء إرسال الاستبانة. الرجاء المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <PageHeader title="قياس الرضا" breadcrumb="قياس الرضا" />
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-6xl text-green-500 mb-4">✓</div>
              <h2 className="text-3xl font-bold text-primary mb-4">شكراً جزيلاً لمشاركتك القيمة</h2>
              <p className="text-gray-700 text-lg">تم استلام إجاباتك بنجاح. نقدر رأيك ونسعى دائماً للتطوير.</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="قياس الرضا" breadcrumb="قياس الرضا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">جمعية التنمية الأهلية ببلخزمر</h2>
              <p className="text-gray-700 text-lg">
                نقدر رأيك ونسعى دائمًا للتطوير. نأمل منك الإجابة على الأسئلة التالية بصدق وشفافية.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="border-b pb-6">
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  1. بشكل عام، ما هو مستوى رضاك عن الخدمات والبرامج المقدمة من الجمعية؟
                </label>
                <div className="space-y-2">
                  {['راضٍ جداً', 'راضٍ', 'محايد', 'غير راضٍ'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 space-x-reverse cursor-pointer">
                      <input
                        type="radio"
                        name="satisfaction"
                        value={option}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="border-b pb-6">
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  2. ما مدى سهولة الوصول لخدمات الجمعية والحصول عليها؟
                </label>
                <div className="space-y-2">
                  {['سهل جداً', 'سهل', 'صعب إلى حد ما', 'صعب جداً'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 space-x-reverse cursor-pointer">
                      <input
                        type="radio"
                        name="accessibility"
                        value={option}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div className="border-b pb-6">
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  3. كيف تقييم تعامل فريق عمل الجمعية معك؟
                </label>
                <div className="space-y-2">
                  {['ممتاز', 'جيد جداً', 'جيد', 'مقبول', 'ضعيف'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 space-x-reverse cursor-pointer">
                      <input
                        type="radio"
                        name="teamWork"
                        value={option}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 4 */}
              <div className="border-b pb-6">
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  4. هل تشعر أن البرامج التي تقدمها الجمعية تلبي احتياجاتك؟
                </label>
                <div className="space-y-2">
                  {['نعم، تلبيها بشكل كبير', 'نعم، إلى حد ما', 'لا، لا تلبيها'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 space-x-reverse cursor-pointer">
                      <input
                        type="radio"
                        name="needsMet"
                        value={option}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 5 */}
              <div className="border-b pb-6">
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  5. هل تنصح الآخرين بالاستفادة من خدمات الجمعية؟
                </label>
                <div className="space-y-2">
                  {['نعم، بالتأكيد', 'ربما', 'لا'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 space-x-reverse cursor-pointer">
                      <input
                        type="radio"
                        name="recommend"
                        value={option}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 6 */}
              <div className="border-b pb-6">
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  6. ما هي أبرز الجوانب الإيجابية التي لمستها في الجمعية؟
                </label>
                <textarea
                  name="positiveAspects"
                  value={formData.positiveAspects}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="اكتب إجابتك هنا..."
                />
              </div>

              {/* Question 7 */}
              <div className="pb-6">
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  7. ما هي مقترحاتك لتطوير خدماتنا وبرامجنا؟
                </label>
                <textarea
                  name="suggestions"
                  value={formData.suggestions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="اكتب إجابتك هنا..."
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'جاري الإرسال...' : 'إرسال الاستبانة'}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center text-gray-600">
              <p className="font-semibold">شكرًا جزيلاً لمشاركتك القيمة.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SatisfactionSurveyPage;

