
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import ProjectsPage from './pages/about/ProjectsPage';
import NewsPage from './pages/NewsPage';
import BoardPage from './pages/BoardPage';
import ContactPage from './pages/contact/ContactPage';
import GovernancePage from './pages/GovernancePage';
import StructurePage from './pages/about/StructurePage';
import PoliciesPage from './pages/governance/PoliciesPage';
import ReportsPage from './pages/ReportsPage';
import PartnersPage from './pages/about/PartnersPage';
import TransparencyPage from './pages/TransparencyPage';
import FinancialStatementsPage from './pages/governance/FinancialStatementsPage';
import MeetingMinutesPage from './pages/MeetingMinutesPage';
import EvaluationResultsPage from './pages/EvaluationResultsPage';
import BasicDataPage from './pages/BasicDataPage';
import VisionPage from './pages/about/VisionPage';
import MissionPage from './pages/about/MissionPage';
import GoalsPage from './pages/about/GoalsPage';
import CertificatePage from './pages/about/CertificatePage';
import GeneralAssemblyPage from './pages/about/GeneralAssemblyPage';
import ComprehensiveModelPage from './pages/about/ComprehensiveModelPage';
import ExecutiveDirectorPage from './pages/about/ExecutiveDirectorPage';
import GovernanceGuidesPage from './pages/governance/GovernanceGuidesPage';
import ComplianceGuidePage from './pages/governance/ComplianceGuidePage';
import TransparencyGuidePage from './pages/governance/TransparencyGuidePage';
import FinancialSafetyGuidePage from './pages/governance/FinancialSafetyGuidePage';
import PlansPage from './pages/governance/PlansPage';
import SystemsPage from './pages/governance/SystemsPage';
import RegulationsPage from './pages/governance/RegulationsPage';
import CommitteesPage from './pages/governance/CommitteesPage';
import GeneralAssemblyGovPage from './pages/governance/GeneralAssemblyPage';
import QuarterlyReportsPage from './pages/governance/QuarterlyReportsPage';
import BudgetPage from './pages/governance/BudgetPage';
import VolunteeringOpportunitiesPage from './pages/volunteering/VolunteeringOpportunitiesPage';
import VolunteerSatisfactionPage from './pages/volunteering/VolunteerSatisfactionPage';
import VolunteeringCharterPage from './pages/volunteering/VolunteeringCharterPage';
import BankAccountsPage from './pages/contact/BankAccountsPage';
import FeedbackFormPage from './pages/contact/FeedbackFormPage';
import FinancialReportsPage from './pages/governance/FinancialReportsPage';
import TrialBalancesPage from './pages/governance/TrialBalancesPage';
import FormsPage from './pages/governance/FormsPage';
import NgoSystemsPage from './pages/governance/NgoSystemsPage';
import VolunteeringSystemPage from './pages/governance/VolunteeringSystemPage';
import FinancialRegulationPage from './pages/governance/FinancialRegulationPage';
import VolunteeringPage from './pages/volunteering/VolunteeringPage';
import SatisfactionSurveyPage from './pages/SatisfactionSurveyPage';
import SatisfactionResultsPage from './pages/SatisfactionResultsPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import { trackPageVisit } from './lib/analytics';

export type Page = string;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is already logged in as admin
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(adminStatus === 'true');

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
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
