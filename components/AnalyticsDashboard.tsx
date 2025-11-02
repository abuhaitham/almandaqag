import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { format, subDays, startOfDay } from 'date-fns';
import { ar } from 'date-fns/locale';
import type { AnalyticsData } from '../types';
import { getAnalyticsData } from '../lib/analytics';

interface AnalyticsDashboardProps {
  className?: string;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ className = '' }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [timeRange, setTimeRange] = useState(30);

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const data = await getAnalyticsData(timeRange);
      setAnalyticsData(data);
      setError('');
    } catch (err) {
      setError('حدث خطأ في تحميل بيانات التحليلات');
      console.error('Error fetching analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'dd/MM', { locale: ar });
  };

  const formatHour = (hour: number) => {
    return `${hour}:00`;
  };

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
        <div className="text-center">
          <div className="text-primary text-xl">جاري تحميل بيانات التحليلات...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
        <div className="text-center text-red-600">
          <div className="text-xl mb-2">⚠️</div>
          <div>{error}</div>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
        <div className="text-center text-gray-500">
          <div className="text-xl mb-2">📊</div>
          <div>لا توجد بيانات متاحة</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">تحليلات الموقع</h2>
        <div className="flex gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value={7}>آخر 7 أيام</option>
            <option value={30}>آخر 30 يوم</option>
            <option value={90}>آخر 90 يوم</option>
          </select>
          <button
            onClick={fetchAnalyticsData}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm"
          >
            تحديث
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {analyticsData.totalVisits.toLocaleString()}
          </div>
          <div className="text-gray-600">إجمالي الزيارات</div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {analyticsData.uniqueVisitors.toLocaleString()}
          </div>
          <div className="text-gray-600">زوار فريدون</div>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {analyticsData.topPages.length}
          </div>
          <div className="text-gray-600">صفحات تمت زيارتها</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Visits Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">الزيارات اليومية</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analyticsData.dailyVisits}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                tick={{ fontSize: 12 }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                labelFormatter={(value) => `التاريخ: ${formatDate(value)}`}
                formatter={(value, name) => [
                  value,
                  name === 'visits' ? 'الزيارات' : 'زوار فريدون'
                ]}
              />
              <Area
                type="monotone"
                dataKey="visits"
                stackId="1"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="uniqueVisitors"
                stackId="2"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Hourly Visits Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">الزيارات حسب الساعة</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.hourlyVisits}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="hour" 
                tickFormatter={formatHour}
                tick={{ fontSize: 12 }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                labelFormatter={(value) => `الساعة: ${formatHour(value)}`}
                formatter={(value) => [value, 'الزيارات']}
              />
              <Bar dataKey="visits" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Pages Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">أكثر الصفحات زيارة</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={analyticsData.topPages.slice(0, 8)}
              layout="horizontal"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis 
                type="category" 
                dataKey="page" 
                tick={{ fontSize: 12 }}
                width={120}
              />
              <Tooltip 
                formatter={(value, name, props) => [
                  `${value} زيارة (${props.payload.percentage}%)`,
                  'الزيارات'
                ]}
              />
              <Bar dataKey="visits" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Device Types Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">أنواع الأجهزة</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={analyticsData.deviceTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ type, percentage }) => `${type} (${percentage}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {analyticsData.deviceTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name, props) => [
                `${value} زيارة (${props.payload.percentage}%)`,
                'الزيارات'
              ]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Referrers Table */}
      {analyticsData.referrers.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">مصادر الزيارات</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">المصدر</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">عدد الزيارات</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">النسبة المئوية</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.referrers.map((referrer, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">
                      {referrer.referrer === 'Direct' ? 'مباشر' : referrer.referrer}
                    </td>
                    <td className="py-3 px-4 text-sm font-semibold">
                      {referrer.count.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${referrer.percentage}%` }}
                          ></div>
                        </div>
                        <span>{referrer.percentage}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
