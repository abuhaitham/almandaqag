export const pageToPath: Record<string, string> = {
  home: '/',
  about: '/about',
  vision: '/about/vision',
  mission: '/about/mission',
  goals: '/about/goals',
  certificate: '/about/certificate',
  generalAssembly: '/about/general-assembly',
  comprehensiveModel: '/about/comprehensive-model',
  executiveDirector: '/about/executive-director',
  projects: '/about/projects',
  partnersPage: '/about/partners',
  structure: '/about/structure',
  basicData: '/about/basic-data',
  news: '/news',
  board: '/board',
  contact: '/contact',
  bankAccounts: '/contact/bank-accounts',
  feedbackForm: '/contact/feedback',
  governance: '/governance',
  policies: '/governance/policies',
  governanceGuides: '/governance/guides',
  complianceGuide: '/governance/guides/compliance',
  transparencyGuide: '/governance/guides/transparency',
  financialSafetyGuide: '/governance/guides/financial-safety',
  plans: '/governance/plans',
  systems: '/governance/systems',
  regulations: '/governance/regulations',
  committees: '/governance/committees',
  generalAssemblyGov: '/governance/general-assembly',
  financialReports: '/governance/financial-reports',
  quarterlyReports: '/governance/quarterly-reports',
  budget: '/governance/budget',
  financialStatements: '/governance/financial-statements',
  meetingMinutes: '/governance/meeting-minutes',
  trialBalances: '/governance/trial-balances',
  forms: '/governance/forms',
  ngoSystems: '/governance/ngo-systems',
  volunteeringSystem: '/governance/volunteering-system',
  financialRegulation: '/governance/financial-regulation',
  reports: '/reports',
  transparency: '/transparency',
  evaluationResults: '/evaluation-results',
  volunteering: '/volunteering',
  volunteeringOpportunities: '/volunteering/opportunities',
  volunteerSatisfaction: '/volunteering/satisfaction',
  volunteeringCharter: '/volunteering/charter',
  satisfactionSurvey: '/satisfaction-survey',
  satisfactionResults: '/satisfaction-results',
  adminLogin: '/admin/login',
  adminDashboard: '/admin',
  analytics: '/admin/analytics',
};

export const pathToPage: Record<string, string> = Object.fromEntries(
  Object.entries(pageToPath).map(([page, path]) => [path, page])
);

export function pathFromPage(page: string): string {
  return pageToPath[page] ?? '/';
}

export function pageFromPath(pathname: string): string {
  return pathToPage[pathname] ?? 'home';
}
