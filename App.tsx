
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { trackPageVisit } from './lib/analytics';

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
const VolunteeringOpportunitiesPage = lazy(() => import('./pages/volunteering/VolunteeringOpportunitiesPage'));
const VolunteerSatisfactionPage = lazy(() => import('./pages/volunteering/VolunteerSatisfactionPage'));
const VolunteeringCharterPage = lazy(() => import('./pages/volunteering/VolunteeringCharterPage'));
const BankAccountsPage = lazy(() => import('./pages/contact/BankAccountsPage'));
const FeedbackFormPage = lazy(() => import('./pages/contact/FeedbackFormPage'));
const FinancialReportsPage = lazy(() => import('./pages/governance/FinancialReportsPage'));
const TrialBalancesPage = lazy(() => import('./pages/governance/TrialBalancesPage'));
const FormsPage = lazy(() => import('./pages/governance/FormsPage'));
const NgoSystemsPage = lazy(() => import('./pages/governance/NgoSystemsPage'));
const VolunteeringSystemPage = lazy(() => import('./pages/governance/VolunteeringSystemPage'));
const FinancialRegulationPage = lazy(() => import('./pages/governance/FinancialRegulationPage'));
const VolunteeringPage = lazy(() => import('./pages/volunteering/VolunteeringPage'));
const SatisfactionSurveyPage = lazy(() => import('./pages/SatisfactionSurveyPage'));
const SatisfactionResultsPage = lazy(() => import('./pages/SatisfactionResultsPage'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));

export type Page = string;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAdmin, setIsAdmin] = useState(false);

  const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

  useEffect(() => {
    // Check if user is already logged in as admin
    const adminStatus = localStorage.getItem('isAdmin');
    const loginTime = localStorage.getItem('adminLoginTime');

    if (adminStatus === 'true' && loginTime) {
      const elapsed = Date.now() - parseInt(loginTime, 10);
      if (elapsed > SESSION_TIMEOUT_MS) {
        // Session expired
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('adminLoginTime');
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
      }
    } else if (adminStatus === 'true') {
      // Legacy login without timestamp — clear it
      localStorage.removeItem('isAdmin');
      setIsAdmin(false);
    }

    window.scrollTo(0, 0);

    // Track page visit for analytics (exclude admin pages)
    if (!currentPage.startsWith('admin') && currentPage !== 'analytics') {
      trackPageVisit(currentPage);
    }
  }, [currentPage]);

  const handleLogin = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminLoginTime');
    setIsAdmin(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'vision':
        return <VisionPage />;
      case 'mission':
        return <MissionPage />;
      case 'goals':
        return <GoalsPage />;
      case 'certificate':
        return <CertificatePage />;
      case 'generalAssembly':
        return <GeneralAssemblyPage />;
      case 'comprehensiveModel':
        return <ComprehensiveModelPage />;
      case 'executiveDirector':
        return <ExecutiveDirectorPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'news':
        return <NewsPage />;
      case 'board':
        return <BoardPage />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'governance':
        return <GovernancePage setCurrentPage={setCurrentPage} />;
      case 'structure':
        return <StructurePage />;
      case 'policies':
        return <PoliciesPage />;
      case 'reports':
        return <ReportsPage setCurrentPage={setCurrentPage} />;
      case 'partnersPage':
        return <PartnersPage />;
      case 'transparency':
        return <TransparencyPage setCurrentPage={setCurrentPage} />;
      case 'financialStatements':
        return <FinancialStatementsPage />;
      case 'meetingMinutes':
        return <MeetingMinutesPage />;
      case 'evaluationResults':
        return <EvaluationResultsPage />;
      case 'basicData':
        return <BasicDataPage />;
      case 'governanceGuides':
        return <GovernanceGuidesPage />;
      case 'complianceGuide':
        return <ComplianceGuidePage />;
      case 'transparencyGuide':
        return <TransparencyGuidePage />;
      case 'financialSafetyGuide':
        return <FinancialSafetyGuidePage />;
      case 'plans':
        return <PlansPage />;
      case 'systems':
        return <SystemsPage />;
      case 'regulations':
        return <RegulationsPage />;
      case 'committees':
        return <CommitteesPage />;
      case 'generalAssemblyGov':
        return <GeneralAssemblyGovPage />;
      case 'financialReports':
        return <FinancialReportsPage setCurrentPage={setCurrentPage} />;
      case 'quarterlyReports':
        return <QuarterlyReportsPage />;
      case 'budget':
        return <BudgetPage />;
      case 'volunteering':
        return <VolunteeringPage setCurrentPage={setCurrentPage} />;
      case 'volunteeringOpportunities':
        return <VolunteeringOpportunitiesPage />;
      case 'volunteerSatisfaction':
        return <VolunteerSatisfactionPage />;
      case 'volunteeringCharter':
        return <VolunteeringCharterPage />;
      case 'bankAccounts':
        return <BankAccountsPage />;
      case 'feedbackForm':
        return <FeedbackFormPage />;
      case 'trialBalances':
        return <TrialBalancesPage />;
      case 'forms':
        return <FormsPage />;
      case 'ngoSystems':
        return <NgoSystemsPage />;
      case 'volunteeringSystem':
        return <VolunteeringSystemPage />;
      case 'financialRegulation':
        return <FinancialRegulationPage />;
      case 'satisfactionSurvey':
        return <SatisfactionSurveyPage />;
      case 'satisfactionResults':
        return <SatisfactionResultsPage />;
      case 'adminLogin':
        return <AdminLoginPage setCurrentPage={setCurrentPage} onLogin={handleLogin} />;
      case 'adminDashboard':
        if (!isAdmin) {
          return <AdminLoginPage setCurrentPage={setCurrentPage} onLogin={handleLogin} />;
        }
        return <AdminDashboardPage setCurrentPage={setCurrentPage} onLogout={handleLogout} />;
      case 'analytics':
        if (!isAdmin) {
          return <AdminLoginPage setCurrentPage={setCurrentPage} onLogin={handleLogin} />;
        }
        return <AnalyticsPage setCurrentPage={setCurrentPage} onLogout={handleLogout} />;
      default:
        return (
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
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          {renderPage()}
        </Suspense>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
