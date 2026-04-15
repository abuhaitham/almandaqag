import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import type { Page } from '../App';
import { supabase } from '../lib/supabaseClient';

interface Survey {
  id: number;
  satisfaction: string;
  accessibility: string;
  team_work: string;
  needs_met: string;
  recommend: string;
  positive_aspects: string;
  suggestions: string;
  created_at: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

interface ComplaintSuggestion {
  id: number;
  type: string;
  name: string;
  email: string | null;
  phone: string | null;
  subject: string;
  description: string;
  priority: string;
  status: string;
  admin_notes: string | null;
  is_read: boolean;
  created_at: string;
  updated_at: string;
}

interface AdminDashboardPageProps {
  setCurrentPage: (page: Page) => void;
  onLogout: () => void;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ setCurrentPage, onLogout }) => {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [complaints, setComplaints] = useState<ComplaintSuggestion[]>([]);
  const [activeTab, setActiveTab] = useState<'surveys' | 'messages' | 'complaints' | 'analytics'>('surveys');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    verySatisfied: 0,
    satisfied: 0,
    neutral: 0,
    notSatisfied: 0
  });
  const [messageStats, setMessageStats] = useState({
    total: 0,
    unread: 0,
    read: 0
  });
  const [complaintStats, setComplaintStats] = useState({
    total: 0,
    complaints: 0,
    suggestions: 0,
    inquiries: 0,
    new: 0,
    inProgress: 0,
    resolved: 0
  });

  useEffect(() => {
    fetchSurveys();
    fetchMessages();
    fetchComplaints();
  }, []);

  const fetchSurveys = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('satisfaction_surveys')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setSurveys(data || []);
      calculateStats(data || []);
      setError('');
    } catch (err) {
      setError('حدث خطأ في تحميل البيانات');
      console.error('Error fetching surveys:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setMessages(data || []);
      calculateMessageStats(data || []);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };

  const fetchComplaints = async () => {
    try {
      const { data, error } = await supabase
        .from('complaints_suggestions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setComplaints(data || []);
      calculateComplaintStats(data || []);
    } catch (err) {
      console.error('Error fetching complaints:', err);
    }
  };

  const calculateMessageStats = (data: ContactMessage[]) => {
    const total = data.length;
    const unread = data.filter(m => !m.is_read).length;
    const read = data.filter(m => m.is_read).length;
    setMessageStats({ total, unread, read });
  };

  const calculateComplaintStats = (data: ComplaintSuggestion[]) => {
    const total = data.length;
    const complaints = data.filter(c => c.type === 'شكوى').length;
    const suggestions = data.filter(c => c.type === 'مقترح').length;
    const inquiries = data.filter(c => c.type === 'استفسار').length;
    const newItems = data.filter(c => c.status === 'جديد').length;
    const inProgress = data.filter(c => c.status === 'قيد المعالجة').length;
    const resolved = data.filter(c => c.status === 'تم الحل').length;
    setComplaintStats({ total, complaints, suggestions, inquiries, new: newItems, inProgress, resolved });
  };

  const markAsRead = async (id: number) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ is_read: true })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setMessages(messages.map(m => 
        m.id === id ? { ...m, is_read: true } : m
      ));
      calculateMessageStats(messages.map(m => 
        m.id === id ? { ...m, is_read: true } : m
      ));
    } catch (err) {
      console.error('Error marking message as read:', err);
    }
  };

  const updateComplaintStatus = async (id: number, status: string) => {
    try {
      const { error } = await supabase
        .from('complaints_suggestions')
        .update({ status, is_read: true, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      const updatedComplaints = complaints.map(c => 
        c.id === id ? { ...c, status, is_read: true } : c
      );
      setComplaints(updatedComplaints);
      calculateComplaintStats(updatedComplaints);
    } catch (err) {
      console.error('Error updating complaint status:', err);
    }
  };

  const markComplaintAsRead = async (id: number) => {
    try {
      const { error } = await supabase
        .from('complaints_suggestions')
        .update({ is_read: true })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setComplaints(complaints.map(c => 
        c.id === id ? { ...c, is_read: true } : c
      ));
    } catch (err) {
      console.error('Error marking complaint as read:', err);
    }
  };

  const calculateStats = (data: Survey[]) => {
    const total = data.length;
    const verySatisfied = data.filter(s => s.satisfaction === 'راضٍ جداً').length;
    const satisfied = data.filter(s => s.satisfaction === 'راضٍ').length;
    const neutral = data.filter(s => s.satisfaction === 'محايد').length;
    const notSatisfied = data.filter(s => s.satisfaction === 'غير راضٍ').length;

    setStats({ total, verySatisfied, satisfied, neutral, notSatisfied });
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    onLogout();
    setCurrentPage('home');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportSurveysToCSV = () => {
    const headers = ['التاريخ', 'مستوى الرضا', 'سهولة الوصول', 'تقييم الفريق', 'تلبية الاحتياجات', 'التوصية', 'الجوانب الإيجابية', 'المقترحات'];
    const csvData = surveys.map(s => [
      formatDate(s.created_at),
      s.satisfaction,
      s.accessibility,
      s.team_work,
      s.needs_met,
      s.recommend,
      s.positive_aspects || '',
      s.suggestions || ''
    ]);

    const csv = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `satisfaction_surveys_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const exportMessagesToCSV = () => {
    const headers = ['التاريخ', 'الاسم', 'البريد الإلكتروني', 'الرسالة', 'الحالة'];
    const csvData = messages.map(m => [
      formatDate(m.created_at),
      m.name,
      m.email,
      m.message,
      m.is_read ? 'مقروءة' : 'غير مقروءة'
    ]);

    const csv = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `contact_messages_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const exportComplaintsToCSV = () => {
    const headers = ['التاريخ', 'النوع', 'الاسم', 'البريد', 'الجوال', 'الموضوع', 'التفاصيل', 'الأولوية', 'الحالة'];
    const csvData = complaints.map(c => [
      formatDate(c.created_at),
      c.type,
      c.name,
      c.email || '',
      c.phone || '',
      c.subject,
      c.description,
      c.priority,
      c.status
    ]);

    const csv = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `complaints_suggestions_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <>
        <PageHeader title="لوحة التحكم" breadcrumb="لوحة التحكم" />
        <section className="py-20 bg-light min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <div className="text-primary text-2xl">جاري التحميل...</div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="لوحة التحكم" breadcrumb="لوحة التحكم" />
      <section className="py-20 bg-light min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header with Logout */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">لوحة التحكم الإدارية</h2>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Tabs */}
          <div className="mb-8 flex gap-4 border-b border-gray-300 overflow-x-auto">
            <button
              onClick={() => setActiveTab('surveys')}
              className={`px-6 py-3 font-bold transition-colors whitespace-nowrap ${
                activeTab === 'surveys'
                  ? 'border-b-4 border-primary text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              📊 استبانات قياس الرضا ({stats.total})
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-6 py-3 font-bold transition-colors relative whitespace-nowrap ${
                activeTab === 'messages'
                  ? 'border-b-4 border-primary text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              ✉️ الرسائل
              {messageStats.unread > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {messageStats.unread}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('complaints')}
              className={`px-6 py-3 font-bold transition-colors relative whitespace-nowrap ${
                activeTab === 'complaints'
                  ? 'border-b-4 border-primary text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              📋 الشكاوى والمقترحات
              {complaintStats.new > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {complaintStats.new}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-3 font-bold transition-colors whitespace-nowrap ${
                activeTab === 'analytics'
                  ? 'border-b-4 border-primary text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              📊 تحليلات الموقع
            </button>
          </div>

          {/* Surveys Tab Content */}
          {activeTab === 'surveys' && (
            <>
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stats.total}</div>
              <div className="text-gray-600">إجمالي الردود</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{stats.verySatisfied}</div>
              <div className="text-gray-600">راضٍ جداً</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.satisfied}</div>
              <div className="text-gray-600">راضٍ</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{stats.neutral}</div>
              <div className="text-gray-600">محايد</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{stats.notSatisfied}</div>
              <div className="text-gray-600">غير راضٍ</div>
            </div>
          </div>

              {/* Export Button */}
              <div className="mb-6 flex justify-end">
                <button
                  onClick={exportSurveysToCSV}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  📥 تصدير الاستبانات إلى Excel
                </button>
              </div>

              {/* Survey Results Table */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-2 py-3 text-right">#</th>
                    <th className="px-2 py-3 text-right">التاريخ</th>
                    <th className="px-2 py-3 text-right">مستوى الرضا</th>
                    <th className="px-2 py-3 text-right hidden md:table-cell">سهولة الوصول</th>
                    <th className="px-2 py-3 text-right hidden md:table-cell">تقييم الفريق</th>
                    <th className="px-2 py-3 text-right">تلبية الاحتياجات</th>
                    <th className="px-2 py-3 text-right">التوصية</th>
                    <th className="px-2 py-3 text-right">تفاصيل</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {surveys.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                        لا توجد بيانات متاحة
                      </td>
                    </tr>
                  ) : (
                    surveys.map((survey, index) => (
                      <tr key={survey.id} className="hover:bg-gray-50">
                        <td className="px-2 py-3">{index + 1}</td>
                        <td className="px-2 py-3 text-xs whitespace-nowrap">{formatDate(survey.created_at)}</td>
                        <td className="px-2 py-3">
                          <span className={`px-2 py-1 rounded text-xs whitespace-nowrap ${
                            survey.satisfaction === 'راضٍ جداً' ? 'bg-green-100 text-green-800' :
                            survey.satisfaction === 'راضٍ' ? 'bg-blue-100 text-blue-800' :
                            survey.satisfaction === 'محايد' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {survey.satisfaction}
                          </span>
                        </td>
                        <td className="px-2 py-3 text-xs hidden md:table-cell">{survey.accessibility}</td>
                        <td className="px-2 py-3 text-xs hidden md:table-cell">{survey.team_work}</td>
                        <td className="px-2 py-3 text-xs">{survey.needs_met}</td>
                        <td className="px-2 py-3 text-xs">{survey.recommend}</td>
                        <td className="px-2 py-3">
                          <button
                            onClick={() => {
                              const details = `
الجوانب الإيجابية:
${survey.positive_aspects || 'لم يتم الإدخال'}

المقترحات:
${survey.suggestions || 'لم يتم الإدخال'}
                              `;
                              alert(details);
                            }}
                            className="text-primary hover:text-primary-dark text-sm font-semibold"
                          >
                            عرض التفاصيل
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
              </div>
            </>
          )}

          {/* Messages Tab Content */}
          {activeTab === 'messages' && (
            <>
              {/* Message Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{messageStats.total}</div>
                  <div className="text-gray-600">إجمالي الرسائل</div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{messageStats.unread}</div>
                  <div className="text-gray-600">غير مقروءة</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{messageStats.read}</div>
                  <div className="text-gray-600">مقروءة</div>
                </div>
              </div>

              {/* Export Button */}
              <div className="mb-6 flex justify-end">
                <button
                  onClick={exportMessagesToCSV}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  📥 تصدير الرسائل إلى Excel
                </button>
              </div>

              {/* Messages Table */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-right">#</th>
                        <th className="px-4 py-3 text-right">التاريخ</th>
                        <th className="px-4 py-3 text-right">الاسم</th>
                        <th className="px-4 py-3 text-right">البريد الإلكتروني</th>
                        <th className="px-4 py-3 text-right">الرسالة</th>
                        <th className="px-4 py-3 text-right">الحالة</th>
                        <th className="px-4 py-3 text-right">إجراء</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {messages.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                            لا توجد رسائل متاحة
                          </td>
                        </tr>
                      ) : (
                        messages.map((message, index) => (
                          <tr key={message.id} className={`hover:bg-gray-50 ${!message.is_read ? 'bg-yellow-50' : ''}`}>
                            <td className="px-4 py-3">{index + 1}</td>
                            <td className="px-4 py-3 text-sm">{formatDate(message.created_at)}</td>
                            <td className="px-4 py-3 font-semibold">{message.name}</td>
                            <td className="px-4 py-3 text-sm">
                              <a href={`mailto:${message.email}`} className="text-primary hover:underline">
                                {message.email}
                              </a>
                            </td>
                            <td className="px-4 py-3 text-sm max-w-md">
                              <div className="truncate">{message.message}</div>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 rounded text-sm ${
                                message.is_read 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {message.is_read ? '✓ مقروءة' : '⚠ جديدة'}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    alert(`الرسالة من: ${message.name}\nالبريد: ${message.email}\n\nالرسالة:\n${message.message}`);
                                    if (!message.is_read) {
                                      markAsRead(message.id);
                                    }
                                  }}
                                  className="text-primary hover:text-primary-dark text-sm font-semibold"
                                >
                                  عرض
                                </button>
                                {!message.is_read && (
                                  <button
                                    onClick={() => markAsRead(message.id)}
                                    className="text-green-600 hover:text-green-800 text-sm font-semibold"
                                  >
                                    وضع علامة كمقروء
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Complaints Tab Content */}
          {activeTab === 'complaints' && (
            <>
              {/* Complaint Statistics Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{complaintStats.total}</div>
                  <div className="text-gray-600 text-sm">إجمالي</div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{complaintStats.complaints}</div>
                  <div className="text-gray-600 text-sm">شكاوى</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{complaintStats.suggestions}</div>
                  <div className="text-gray-600 text-sm">مقترحات</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{complaintStats.inquiries}</div>
                  <div className="text-gray-600 text-sm">استفسارات</div>
                </div>
                <div className="bg-red-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{complaintStats.new}</div>
                  <div className="text-gray-600 text-sm">جديد</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{complaintStats.inProgress}</div>
                  <div className="text-gray-600 text-sm">قيد المعالجة</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{complaintStats.resolved}</div>
                  <div className="text-gray-600 text-sm">تم الحل</div>
                </div>
              </div>

              {/* Export Button */}
              <div className="mb-6 flex justify-end">
                <button
                  onClick={exportComplaintsToCSV}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  📥 تصدير إلى Excel
                </button>
              </div>

              {/* Complaints Table */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-right">#</th>
                        <th className="px-4 py-3 text-right">التاريخ</th>
                        <th className="px-4 py-3 text-right">النوع</th>
                        <th className="px-4 py-3 text-right">الاسم</th>
                        <th className="px-4 py-3 text-right">التواصل</th>
                        <th className="px-4 py-3 text-right">الموضوع</th>
                        <th className="px-4 py-3 text-right">الأولوية</th>
                        <th className="px-4 py-3 text-right">الحالة</th>
                        <th className="px-4 py-3 text-right">إجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {complaints.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
                            لا توجد شكاوى أو مقترحات متاحة
                          </td>
                        </tr>
                      ) : (
                        complaints.map((complaint, index) => (
                          <tr 
                            key={complaint.id} 
                            className={`hover:bg-gray-50 ${!complaint.is_read ? 'bg-yellow-50' : ''}`}
                          >
                            <td className="px-4 py-3">{index + 1}</td>
                            <td className="px-4 py-3 text-sm">{formatDate(complaint.created_at)}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 rounded text-sm ${
                                complaint.type === 'شكوى' ? 'bg-yellow-100 text-yellow-800' :
                                complaint.type === 'مقترح' ? 'bg-blue-100 text-blue-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {complaint.type === 'شكوى' ? '📢' : complaint.type === 'مقترح' ? '💡' : '❓'} {complaint.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-semibold">{complaint.name}</td>
                            <td className="px-4 py-3 text-sm">
                              {complaint.email && (
                                <a href={`mailto:${complaint.email}`} className="text-primary hover:underline block">
                                  {complaint.email}
                                </a>
                              )}
                              {complaint.phone && (
                                <a href={`tel:${complaint.phone}`} className="text-primary hover:underline block">
                                  {complaint.phone}
                                </a>
                              )}
                              {!complaint.email && !complaint.phone && '-'}
                            </td>
                            <td className="px-4 py-3 text-sm max-w-xs">
                              <div className="truncate font-semibold">{complaint.subject}</div>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 rounded text-sm ${
                                complaint.priority === 'عاجلة' ? 'bg-red-100 text-red-800' :
                                complaint.priority === 'عادية' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {complaint.priority === 'عاجلة' ? '🔴' : complaint.priority === 'عادية' ? '🟡' : '🟢'} {complaint.priority}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={complaint.status}
                                onChange={(e) => updateComplaintStatus(complaint.id, e.target.value)}
                                className={`px-2 py-1 rounded text-sm border-2 cursor-pointer ${
                                  complaint.status === 'جديد' ? 'bg-red-50 border-red-300 text-red-800' :
                                  complaint.status === 'قيد المعالجة' ? 'bg-orange-50 border-orange-300 text-orange-800' :
                                  complaint.status === 'تم الحل' ? 'bg-green-50 border-green-300 text-green-800' :
                                  'bg-gray-50 border-gray-300 text-gray-800'
                                }`}
                              >
                                <option value="جديد">🆕 جديد</option>
                                <option value="قيد المعالجة">⏳ قيد المعالجة</option>
                                <option value="تم الحل">✅ تم الحل</option>
                                <option value="مغلق">🔒 مغلق</option>
                              </select>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2 flex-col">
                                <button
                                  onClick={() => {
                                    const details = `
النوع: ${complaint.type}
الاسم: ${complaint.name}
البريد: ${complaint.email || 'غير متوفر'}
الجوال: ${complaint.phone || 'غير متوفر'}
الموضوع: ${complaint.subject}
الأولوية: ${complaint.priority}
الحالة: ${complaint.status}

التفاصيل:
${complaint.description}

تاريخ الإنشاء: ${formatDate(complaint.created_at)}
آخر تحديث: ${formatDate(complaint.updated_at)}
                                    `;
                                    alert(details);
                                    if (!complaint.is_read) {
                                      markComplaintAsRead(complaint.id);
                                    }
                                  }}
                                  className="text-primary hover:text-primary-dark text-sm font-semibold"
                                >
                                  📄 عرض التفاصيل
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Analytics Tab Content */}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">تحليلات الموقع</h3>
                <p className="text-gray-600">عرض إحصائيات الزيارات والنشاط على الموقع</p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setCurrentPage('analytics')}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors text-lg"
                >
                  📊 عرض التحليلات التفصيلية
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminDashboardPage;

