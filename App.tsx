import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { trackPageVisit } from './lib/analytics';
import { pageFromPath, pathFromPage } from './lib/pageRoutes';

// Lazy-loaded pages for code-splitting
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/about/ProjectsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const BoardPage = lazy(() => import('./pages/BoardPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const GovernancePage = lazy(() => import('./pages/GovernancePage'));
const StructurePage = lazy(() => import('./pages/about/StructurePage'));
const PoliciesPage = lazy(() => import('./pages/governance/PoliciesPage'));
const ReportsPage = lazy(() => import('./pages/ReportsPage'));
const PartnersPage = lazy(() => import('./pages/about/PartnersPage'));
const TransparencyPage = lazy(() => import('./pages/TransparencyPage'));
const FinancialStatementsPage = lazy(() => import('./pages/governance/FinancialStatementsPage'));
const MeetingMinutesPage = lazy(() => import('./pages/MeetingMinutesPage'));
const EvaluationResultsPage = lazy(() => import('./pages/EvaluationResultsPage'));
const BasicDataPage = lazy(() => import('./pages/BasicDataPage'));
const VisionPage = lazy(() => import('./pages/about/VisionPage'));
const MissionPage = lazy(() => import('./pages/about/MissionPage'));
const GoalsPage = lazy(() => import('./pages/about/GoalsPage'));
const CertificatePage = lazy(() => import('./pages/about/CertificatePage'));
const GeneralAssemblyPage = lazy(() => import('./pages/about/GeneralAssemblyPage'));
const ComprehensiveModelPage = lazy(() => import('./pages/about/ComprehensiveModelPage'));
const ExecutiveDirectorPage = lazy(() => import('./pages/about/ExecutiveDirectorPage'));
const GovernanceGuidesPage = lazy(() => import('./pages/governance/GovernanceGuidesPage'));
const ComplianceGuidePage = lazy(() => import('./pages/governance/ComplianceGuidePage'));
const TransparencyGuidePage = lazy(() => import('./pages/governance/TransparencyGuidePage'));
const FinancialSafetyGuidePage = lazy(() => import('./pages/governance/FinancialSafetyGuidePage'));
const PlansPage = lazy(() => import('./pages/governance/PlansPage'));
const SystemsPage = lazy(() => import('./pages/governance/SystemsPage'));
const RegulationsPage = lazy(() => import('./pages/governance/RegulationsPage'));
const CommitteesPage = lazy(() => import('./pages/governance/CommitteesPage'));
const GeneralAssemblyGovPage = lazy(() => import('./pages/governance/GeneralAssemblyPage'));
const QuarterlyReportsPage = lazy(() => import('./pages/governance/QuarterlyReportsPage'));
const BudgetPage = lazy(() => import('./pages/governance/BudgetPage'));
const BankAccountsPage = lazy(() => import('./pages/contact/BankAccountsPage'));
const FeedbackFormPage = lazy(() => import('./pages/contact/FeedbackFormPage'));
const FinancialReportsPage = lazy(() => import('./pages/governance/FinancialReportsPage'));
const TrialBalancesPage = lazy(() => import('./pages/governance/TrialBalancesPage'));
const FormsPage = lazy(() => import('./pages/governance/FormsPage'));
const NgoSystemsPage = lazy(() => import('./pages/governance/NgoSystemsPage'));
const FinancialRegulationPage = lazy(() => import('./pages/governance/FinancialRegulationPage'));
const SatisfactionSurveyPage = lazy(() => import('./pages/SatisfactionSurveyPage'));
const SatisfactionResultsPage = lazy(() => import('./pages/SatisfactionResultsPage'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));

export type Page = string;

const NotFound: React.FC<{ setCurrentPage: (p: string) => void }> = ({ setCurrentPage }) => (
  <div className="py-20 bg-light">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">الصفحة غير موجودة</h2>
      <p className="text-gray-500 mb-8">عذراً، الصفحة التي تبحث عنها غير متاحة.</p>
      <button
        onClick={() => setCurrentPage('home')}
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors"
      >
        العودة للرئيسية
      </button>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = pageFromPath(location.pathname);
  const [isAdmin, setIsAdmin] = useState(false);

  const SESSION_TIMEOUT_MS = 30 * 60 * 1000;

  // setCurrentPage shim — routes existing prop-based navigation through the router
  const setCurrentPage = useCallback((page: string) => {
    navigate(pathFromPage(page));
  }, [navigate]);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    const loginTime = localStorage.getItem('adminLoginTime');

    if (adminStatus === 'true' && loginTime) {
      const elapsed = Date.now() - parseInt(loginTime, 10);
      if (elapsed > SESSION_TIMEOUT_MS) {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('adminLoginTime');
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
      }
    } else if (adminStatus === 'true') {
      localStorage.removeItem('isAdmin');
      setIsAdmin(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!currentPage.startsWith('admin') && currentPage !== 'analytics') {
      trackPageVisit(currentPage);
    }
  }, [location.pathname, currentPage]);

  const handleLogin = () => setIsAdmin(true);
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminLoginTime');
    setIsAdmin(false);
  };

  const requireAdmin = (element: React.ReactElement) =>
    isAdmin ? element : <AdminLoginPage setCurrentPage={setCurrentPage} onLogin={handleLogin} />;

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/vision" element={<VisionPage />} />
            <Route path="/about/mission" element={<MissionPage />} />
            <Route path="/about/goals" element={<GoalsPage />} />
            <Route path="/about/certificate" element={<CertificatePage />} />
            <Route path="/about/general-assembly" element={<GeneralAssemblyPage />} />
            <Route path="/about/comprehensive-model" element={<ComprehensiveModelPage />} />
            <Route path="/about/executive-director" element={<ExecutiveDirectorPage />} />
            <Route path="/about/projects" element={<ProjectsPage />} />
            <Route path="/about/partners" element={<PartnersPage />} />
            <Route path="/about/structure" element={<StructurePage />} />
            <Route path="/about/basic-data" element={<BasicDataPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/contact" element={<ContactPage setCurrentPage={setCurrentPage} />} />
            <Route path="/contact/bank-accounts" element={<BankAccountsPage />} />
            <Route path="/contact/feedback" element={<FeedbackFormPage />} />
            <Route path="/governance" element={<GovernancePage setCurrentPage={setCurrentPage} />} />
            <Route path="/governance/policies" element={<PoliciesPage />} />
            <Route path="/governance/guides" element={<GovernanceGuidesPage />} />
            <Route path="/governance/guides/compliance" element={<ComplianceGuidePage />} />
            <Route path="/governance/guides/transparency" element={<TransparencyGuidePage />} />
            <Route path="/governance/guides/financial-safety" element={<FinancialSafetyGuidePage />} />
            <Route path="/governance/plans" element={<PlansPage />} />
            <Route path="/governance/systems" element={<SystemsPage />} />
            <Route path="/governance/regulations" element={<RegulationsPage />} />
            <Route path="/governance/committees" element={<CommitteesPage />} />
            <Route path="/governance/general-assembly" element={<GeneralAssemblyGovPage />} />
            <Route path="/governance/financial-reports" element={<FinancialReportsPage setCurrentPage={setCurrentPage} />} />
            <Route path="/governance/quarterly-reports" element={<QuarterlyReportsPage />} />
            <Route path="/governance/budget" element={<BudgetPage />} />
            <Route path="/governance/financial-statements" element={<FinancialStatementsPage />} />
            <Route path="/governance/meeting-minutes" element={<MeetingMinutesPage />} />
            <Route path="/governance/trial-balances" element={<TrialBalancesPage />} />
            <Route path="/governance/forms" element={<FormsPage />} />
            <Route path="/governance/ngo-systems" element={<NgoSystemsPage />} />
            <Route path="/governance/financial-regulation" element={<FinancialRegulationPage />} />
            <Route path="/reports" element={<ReportsPage setCurrentPage={setCurrentPage} />} />
            <Route path="/transparency" element={<TransparencyPage setCurrentPage={setCurrentPage} />} />
            <Route path="/evaluation-results" element={<EvaluationResultsPage />} />
            <Route path="/satisfaction-survey" element={<SatisfactionSurveyPage />} />
            <Route path="/satisfaction-results" element={<SatisfactionResultsPage />} />
            <Route path="/admin/login" element={<AdminLoginPage setCurrentPage={setCurrentPage} onLogin={handleLogin} />} />
            <Route path="/admin" element={requireAdmin(<AdminDashboardPage setCurrentPage={setCurrentPage} onLogout={handleLogout} />)} />
            <Route path="/admin/analytics" element={requireAdmin(<AnalyticsPage setCurrentPage={setCurrentPage} onLogout={handleLogout} />)} />
            <Route path="*" element={<NotFound setCurrentPage={setCurrentPage} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
