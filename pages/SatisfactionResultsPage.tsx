import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { supabase } from '../lib/supabaseClient';

interface SurveyStats {
  totalResponses: number;
  averageSatisfaction: number;
  recommendationRate: number;
  satisfactionBreakdown: {
    'راضٍ جداً': number;
    'راضٍ': number;
    'محايد': number;
    'غير راضٍ': number;
  };
  accessibilityBreakdown: {
    'سهل جداً': number;
    'سهل': number;
    'صعب إلى حد ما': number;
    'صعب جداً': number;
  };
  teamWorkBreakdown: {
    'ممتاز': number;
    'جيد جداً': number;
    'جيد': number;
    'مقبول': number;
    'ضعيف': number;
  };
}

const SatisfactionResultsPage: React.FC = () => {
  const [stats, setStats] = useState<SurveyStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('satisfaction_surveys')
        .select('*');

      if (error) throw error;

      if (data && data.length > 0) {
        // Calculate statistics
        const totalResponses = data.length;
        
        // Calculate satisfaction breakdown
        const satisfactionBreakdown = {
          'راضٍ جداً': 0,
          'راضٍ': 0,
          'محايد': 0,
          'غير راضٍ': 0,
        };
        
        const accessibilityBreakdown = {
          'سهل جداً': 0,
          'سهل': 0,
          'صعب إلى حد ما': 0,
          'صعب جداً': 0,
        };
        
        const teamWorkBreakdown = {
          'ممتاز': 0,
          'جيد جداً': 0,
          'جيد': 0,
          'مقبول': 0,
          'ضعيف': 0,
        };

        let recommendCount = 0;

        data.forEach((survey: any) => {
          // Count satisfaction
          if (survey.satisfaction in satisfactionBreakdown) {
            satisfactionBreakdown[survey.satisfaction as keyof typeof satisfactionBreakdown]++;
          }
          
          // Count accessibility
          if (survey.accessibility in accessibilityBreakdown) {
            accessibilityBreakdown[survey.accessibility as keyof typeof accessibilityBreakdown]++;
          }
          
          // Count team work
          if (survey.team_work in teamWorkBreakdown) {
            teamWorkBreakdown[survey.team_work as keyof typeof teamWorkBreakdown]++;
          }

          // Count recommendations
          if (survey.recommend === 'نعم، بالتأكيد') {
            recommendCount++;
          }
        });

        // Calculate average satisfaction (converting to percentage)
        const satisfactionScores = {
          'راضٍ جداً': 100,
          'راضٍ': 75,
          'محايد': 50,
          'غير راضٍ': 25,
        };
        
        const totalScore = data.reduce((sum: number, survey: any) => {
          return sum + (satisfactionScores[survey.satisfaction as keyof typeof satisfactionScores] || 0);
        }, 0);
        
        const averageSatisfaction = Math.round(totalScore / totalResponses);
        const recommendationRate = Math.round((recommendCount / totalResponses) * 100);

        setStats({
          totalResponses,
          averageSatisfaction,
          recommendationRate,
          satisfactionBreakdown,
          accessibilityBreakdown,
          teamWorkBreakdown,
        });
      } else {
        setStats({
          totalResponses: 0,
          averageSatisfaction: 0,
          recommendationRate: 0,
          satisfactionBreakdown: {
            'راضٍ جداً': 0,
            'راضٍ': 0,
            'محايد': 0,
            'غير راضٍ': 0,
          },
          accessibilityBreakdown: {
            'سهل جداً': 0,
            'سهل': 0,
            'صعب إلى حد ما': 0,
            'صعب جداً': 0,
          },
          teamWorkBreakdown: {
            'ممتاز': 0,
            'جيد جداً': 0,
            'جيد': 0,
            'مقبول': 0,
            'ضعيف': 0,
          },
        });
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError('حدث خطأ أثناء جلب البيانات');
    } finally {
      setLoading(false);
    }
  };

  const renderChart = (data: Record<string, number>, title: string) => {
    const total = Object.values(data).reduce((sum, val) => sum + val, 0);
    
    if (total === 0) {
      return (
        <div className="text-center text-gray-500 py-8">
          لا توجد بيانات كافية
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {Object.entries(data).map(([label, count]) => {
          const percentage = Math.round((count / total) * 100);
          return (
            <div key={label}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{label}</span>
                <span className="text-gray-600">
                  {count} ({percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <PageHeader title="نتائج قياس الرضا" breadcrumb="الشفافية / نتائج قياس الرضا" />
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">جاري تحميل البيانات...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageHeader title="نتائج قياس الرضا" breadcrumb="الشفافية / نتائج قياس الرضا" />
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!stats || stats.totalResponses === 0) {
    return (
      <>
        <PageHeader title="نتائج قياس الرضا" breadcrumb="الشفافية / نتائج قياس الرضا" />
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-12 rounded-lg shadow-md text-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <svg 
                    className="w-20 h-20 text-gray-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-700">قريباً</h3>
                  <p className="text-gray-600 text-lg">
                    لا توجد نتائج لقياس الرضا متاحة حالياً
                  </p>
                  <p className="text-gray-500 text-sm max-w-md">
                    نحن جمعية ناشئة وسيتم نشر نتائج قياس الرضا بعد جمع البيانات الكافية من المستفيدين والمتعاملين معنا
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="نتائج قياس الرضا" breadcrumb="الشفافية / نتائج قياس الرضا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stats.totalResponses}
                </div>
                <p className="text-gray-600">إجمالي المشاركين</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stats.averageSatisfaction}%
                </div>
                <p className="text-gray-600">متوسط الرضا العام</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stats.recommendationRate}%
                </div>
                <p className="text-gray-600">نسبة التوصية</p>
              </div>
            </div>

            {/* Detailed Charts */}
            <div className="space-y-8">
              {/* Satisfaction Breakdown */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  مستوى الرضا عن الخدمات والبرامج
                </h3>
                {renderChart(stats.satisfactionBreakdown, 'مستوى الرضا')}
              </div>

              {/* Accessibility Breakdown */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  سهولة الوصول للخدمات
                </h3>
                {renderChart(stats.accessibilityBreakdown, 'سهولة الوصول')}
              </div>

              {/* Team Work Breakdown */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  تقييم تعامل فريق العمل
                </h3>
                {renderChart(stats.teamWorkBreakdown, 'تقييم الفريق')}
              </div>
            </div>

            {/* Note */}
            <div className="mt-12 bg-blue-50 border-r-4 border-blue-500 p-6 rounded">
              <p className="text-gray-700">
                <span className="font-bold text-blue-700">ملاحظة:</span> البيانات المعروضة تعكس آراء المشاركين في استبيان قياس الرضا. نسعى دائماً لتحسين خدماتنا بناءً على ملاحظاتكم القيمة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SatisfactionResultsPage;

