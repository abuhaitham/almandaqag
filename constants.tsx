import React from 'react';
import type { NavLink, Stat, Project, NewsArticle, BoardMember, PolicyDocument, AnnualReport, FinancialStatement, MeetingMinute, TransparencyDocument, GovernanceGuide, Plan, System, Regulation, Committee, QuarterlyReport, Budget, VolunteeringCharter, FinancialRegulation, FeedbackForm, Form, TrialBalance, EvaluationResult, BasicDataItem, FoundingMember, GeneralAssemblyMember, VolunteeringOpportunity, BankAccount, Value } from './types';
// Fix: Add ABOUT_IMAGE to imports. Other image import errors are resolved by updating assets/images.ts
import {
    PROJECT_IMAGE_1,
    PROJECT_IMAGE_2,
    PROJECT_IMAGE_3,
    NEWS_IMAGE_1,
    NEWS_IMAGE_2,
    NEWS_IMAGE_3,
    PARTNER_LOGO_PLACEHOLDER,
    PORTRAIT_PLACEHOLDER,
    ABOUT_IMAGE,
} from './assets/images';

// Fix: Export ABOUT_IMAGE_URL to fix import error in About.tsx.
export const ABOUT_IMAGE_URL = ABOUT_IMAGE;

// Icons as simple functional components
export const DocumentTextIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 5.197m-3-5.197a4 4 0 110-5.292" /></svg>
);

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
);

const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);

const CashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

const FlagIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-18l18 9-18 9z" /></svg>
);

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 019-2.944 11.955 11.955 0 019 2.944 12.02 12.02 0 00-2.382-9.971" /></svg>
);

const BadgeCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
);

const GiftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13l-4-4h8l-4 4zm0 0v-5m0 5H8m4 0h4m-4-5v5m0-5a2 2 0 10-4 0v5h4V16zm0-5a2 2 0 114 0v5h-4V16z" /></svg>
);

const ScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0 0a9.003 9.003 0 00-11.723 0m11.723 0a9.003 9.003 0 0111.723 0M12 5v14" /></svg>
);

const HandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-7 7-7m-7 14l-7-7 7-7" /></svg>
);

export const NAV_LINKS: NavLink[] = [
    { label: 'الرئيسية', href: 'javascript:void(0)', id: 'home' },
    {
        label: 'عن الجمعية', href: 'javascript:void(0)', id: 'about',
        subLinks: [
            { label: 'من نحن', href: 'javascript:void(0)', id: 'about' },
            { label: 'الرؤية', href: 'javascript:void(0)', id: 'vision' },
            { label: 'الرسالة', href: 'javascript:void(0)', id: 'mission' },
            { label: 'الأهداف', href: 'javascript:void(0)', id: 'goals' },
            { label: 'شهادة التسجيل', href: 'javascript:void(0)', id: 'certificate' },
            { label: 'الجمعية العمومية', href: 'javascript:void(0)', id: 'generalAssembly' },
            { label: 'النموذج الشامل للجمعيات', href: 'javascript:void(0)', id: 'comprehensiveModel' },
            { label: 'المدير التنفيذي', href: 'javascript:void(0)', id: 'executiveDirector' },
            { label: 'الهيكل التنظيمي', href: 'javascript:void(0)', id: 'structure' },
            { label: 'مجلس الإدارة', href: 'javascript:void(0)', id: 'board' },
            { label: 'شركاؤنا', href: 'javascript:void(0)', id: 'partnersPage' },
            { label: 'مشاريعنا', href: 'javascript:void(0)', id: 'projects' },
            { label: 'الحسابات البنكية', href: 'javascript:void(0)', id: 'bankAccounts' },
        ]
    },
    {
        label: 'الحوكمة', href: 'javascript:void(0)', id: 'governance',
        subLinks: [
            { label: 'وثائق الحوكمة', href: 'javascript:void(0)', id: 'governanceGuides' },
            { label: 'التقارير المالية', href: 'javascript:void(0)', id: 'financialReports' },
        ]
    },
    { label: 'التقارير', href: 'javascript:void(0)', id: 'reports' },
    { label: 'المشاريع والأوقاف', href: 'javascript:void(0)', id: 'projects' },
    { label: 'التطوع', href: 'javascript:void(0)', id: 'volunteering' },
    { label: 'المركز الإعلامي', href: 'javascript:void(0)', id: 'news' },
    {
        label: 'قياس رضا أصحاب العلاقة', href: 'javascript:void(0)', id: 'satisfaction',
        subLinks: [
            { label: 'استبيان الرضا', href: 'javascript:void(0)', id: 'satisfactionSurvey' },
            { label: 'نتائج الرضا', href: 'javascript:void(0)', id: 'satisfactionResults' },
        ]
    },
    {
        label: 'تواصل معنا', href: 'javascript:void(0)', id: 'contact',
        subLinks: [
            { label: 'معلومات التواصل', href: 'javascript:void(0)', id: 'contact' },
            { label: 'شكوى / اقتراح', href: 'javascript:void(0)', id: 'feedbackForm' },
        ]
    }
];

export const STATS_DATA: Stat[] = [
    { icon: UsersIcon, value: "500+", label: "مزارع مستفيد" },
    { icon: HeartIcon, value: "100+", label: "عضو" },
    { icon: LightBulbIcon, value: "30+", label: "مشروع زراعي" },
    { icon: CashIcon, value: "2M+", label: "إجمالي الدعم" },
];

export const PROJECTS_DATA: Project[] = [
    { image: PROJECT_IMAGE_1, title: 'مشروع استصلاح الأراضي الزراعية', description: 'استصلاح وتأهيل الأراضي الزراعية لزيادة الإنتاج المحلي.' },
    { image: PROJECT_IMAGE_2, title: 'مشروع دعم المزارعين', description: 'تقديم الدعم الفني والمادي للمزارعين وأصحاب المواشي.' },
    { image: PROJECT_IMAGE_3, title: 'مشروع التدريب الزراعي', description: 'عقد الدورات والندوات لتحسين الممارسات الزراعية.' },
];

export const NEWS_DATA: NewsArticle[] = [
    { image: NEWS_IMAGE_1, title: 'انطلاق موسم الحصاد الزراعي', date: '15 مارس 2025' },
    { image: NEWS_IMAGE_2, title: 'دورة تدريبية في الزراعة الحديثة', date: '5 فبراير 2025' },
    { image: NEWS_IMAGE_3, title: 'توزيع مستلزمات زراعية على المزارعين', date: '20 يناير 2025' },
];

export const PARTNER_LOGOS: string[] = [
    PARTNER_LOGO_PLACEHOLDER,
    PARTNER_LOGO_PLACEHOLDER,
    PARTNER_LOGO_PLACEHOLDER,
    PARTNER_LOGO_PLACEHOLDER,
    PARTNER_LOGO_PLACEHOLDER,
    PARTNER_LOGO_PLACEHOLDER,
];

export const BASIC_DATA: BasicDataItem[] = [
    { label: 'اسم الجمعية', value: 'الجمعية التعاونية الزراعية بالمندق' },
    { label: 'رقم التسجيل', value: '10140' },
    { label: 'تاريخ التأسيس', value: '1444 هـ' },
    { label: 'المدينة', value: 'المندق' },
    { label: 'البريد الإلكتروني', value: 'info@almandaqag.org.sa' },
    { label: 'رقم الهاتف', value: '0503774124' },
];

export const BOARD_MEMBERS: BoardMember[] = [
    { name: 'رئيس مجلس الإدارة' },
    { name: 'نائب رئيس مجلس الإدارة' },
    { name: 'عضو مجلس الإدارة' },
    { name: 'عضو مجلس الإدارة' },
    { name: 'عضو مجلس الإدارة' },
];

export const ANNUAL_REPORTS_DATA: AnnualReport[] = [
    { title: 'التقرير المالي للجمعية لعام 2024', href: '/docs/التقرير-المالي-2024.pdf' },
    { title: 'التقرير المالي لعام 2023', href: '/docs/التقرير-المالي-2023.pdf' },
];

export const FINANCIAL_STATEMENTS_DATA: FinancialStatement[] = [
    { title: 'التقرير المالي للجمعية لعام 2024', href: '/docs/التقرير-المالي-2024.pdf' },
    { title: 'التقرير المالي لعام 2023', href: '/docs/التقرير-المالي-2023.pdf' },
];

export const MEETING_MINUTES_DATA: MeetingMinute[] = [
    { title: 'محضر الجمعية العمومية العادية 2024', href: '/docs/محضر-الجمعية-العمومية-العادية-2024.pdf' },
    { title: 'محضر الجمعية العمومية غير العادية 2024', href: '/docs/محضر-الجمعية-العمومية-غير-العادية-2024.pdf' },
    { title: 'محضر الجمعية العمومية العادية 1-2025', href: '/docs/محضر-الجمعية-العمومية-العادية-1-2025.pdf' },
    { title: 'محضر الجمعية العمومية غير العادية 1-2025', href: '/docs/محضر-الجمعية-العمومية-غير-العادية-1-2025.pdf' },
];

export const EVALUATION_RESULTS: EvaluationResult[] = [
    // لا توجد نتائج تقييم حالياً - جمعية ناشئة
];

export const GENERAL_ASSEMBLY_MEMBERS: GeneralAssemblyMember[] = [
    { name: 'عضو الجمعية العمومية ١' },
    { name: 'عضو الجمعية العمومية ٢' },
    { name: 'عضو الجمعية العمومية ٣' },
    { name: 'عضو الجمعية العمومية ٤' },
    { name: 'عضو الجمعية العمومية ٥' },
];

export const GOVERNANCE_GUIDES: GovernanceGuide[] = [
    { title: 'إجراءات التعامل مع المقبوضات', href: 'javascript:void(0)' },
    { title: 'النموذج الشامل لبيانات الجمعية', href: '/docs/النموذج-الشامل-لبيانات-الجمعية.pdf' },
    { title: 'لائحة الصرف للبرامج والأنشطة', href: '/docs/لائحة-الصرف-للبرامج-والأنشطة.pdf' },
    { title: 'سياسة الاستثمار للجمعية', href: '/docs/سياسة-الاستثمار.pdf' },
];

export const FORMS_DATA: Form[] = [
    { title: 'النموذج الشامل لبيانات الجمعية', href: '/docs/النموذج-الشامل-لبيانات-الجمعية.pdf' },
    { title: 'نموذج توكيل الأعضاء لحضور اجتماعات الجمعية العمومية', href: '/docs/نموذج-توكيل-الأعضاء.pdf' },
    { title: 'بيانات المؤسسين وأعضاء الجمعية العمومية', href: 'javascript:void(0)' },
    { title: 'توقيعات أعضاء الجمعية العمومية بالاطلاع على اللوائح والأنظمة', href: 'javascript:void(0)' },
    { title: 'توقيع مجلس الإدارة بالاطلاع على اللوائح والسياسات', href: '/docs/توقيع-مجلس-الادارة.pdf' },
];

export const REGULATIONS_DATA: Regulation[] = [
    { title: 'اللائحة الأساسية للجمعية المعتمدة من الوزارة', href: '/docs/اللائحة-الأساسية-للجمعية.pdf' },
    { title: 'عقد تأسيس الجمعية التعاونية الزراعية بالمندق', href: '/docs/عقد-تأسيس-الجمعية.pdf' },
    { title: 'لائحة الصرف للبرامج والأنشطة', href: '/docs/لائحة-الصرف-للبرامج-والأنشطة.pdf' },
];

export const POLICIES_DATA: PolicyDocument[] = [
    { title: 'سياسة الاستثمار للجمعية', href: '/docs/سياسة-الاستثمار.pdf' },
    { title: 'لائحة الصرف للبرامج والأنشطة', href: '/docs/لائحة-الصرف-للبرامج-والأنشطة.pdf' },
    { title: 'إجراءات التعامل مع المقبوضات', href: 'javascript:void(0)' },
    { title: 'اللائحة الأساسية للجمعية', href: '/docs/اللائحة-الأساسية-للجمعية.pdf' },
];

export const GENERAL_ASSEMBLY_DOCUMENTS: GovernanceGuide[] = [
    { title: 'بيانات المؤسسين وأعضاء الجمعية العمومية', href: 'javascript:void(0)' },
    { title: 'أعضاء مجلس الإدارة', href: '/docs/مجلس-الإدارة-الجديد.pdf' },
    { title: 'نموذج توكيل الأعضاء لحضور اجتماعات الجمعية العمومية', href: '/docs/نموذج-توكيل-الأعضاء.pdf' },
    { title: 'توقيعات أعضاء الجمعية العمومية بالاطلاع على اللوائح', href: 'javascript:void(0)' },
];

export const PLANS_DATA: Plan[] = [
    { title: 'عقد تأسيس الجمعية التعاونية الزراعية بالمندق', href: '/docs/عقد-تأسيس-الجمعية.pdf' },
    { title: 'اللائحة الأساسية للجمعية المعتمدة من الوزارة', href: '/docs/اللائحة-الأساسية-للجمعية.pdf' },
];

export const SYSTEMS_DATA: System[] = [
    { title: 'نظام الجمعيات والمؤسسات الأهلية', href: 'javascript:void(0)' },
    { title: 'نظام العمل التطوعي', href: 'javascript:void(0)' },
];

export const COMMITTEES_DATA: Committee[] = [
    { title: 'لجنة المراجعة الداخلية', href: 'javascript:void(0)' },
    { title: 'لجنة الترشيحات والمكافآت', href: 'javascript:void(0)' },
];

export const QUARTERLY_REPORTS_DATA: QuarterlyReport[] = [
    { title: 'التقرير المالي للربع الثالث 2023', href: 'javascript:void(0)' },
    { title: 'التقرير المالي للربع الثاني 2023', href: 'javascript:void(0)' },
];

export const BUDGET_DATA: Budget[] = [
    { title: 'الموازنة التقديرية لعام 2024', href: 'javascript:void(0)' },
];

export const VOLUNTEERING_OPPORTUNITIES: VolunteeringOpportunity[] = [
    { title: 'متطوع زراعي ميداني', description: 'المشاركة في مشاريع استصلاح الأراضي والدعم الزراعي.', status: 'open' },
    { title: 'متطوع إعلامي', description: 'المساعدة في تغطية فعاليات وأنشطة الجمعية.', status: 'open' },
];

export const FEEDBACK_FORM_DATA: FeedbackForm[] = [
    { title: 'نموذج الشكاوى والمقترحات', href: 'javascript:void(0)' },
];

export const VOLUNTEERING_CHARTER_DATA: VolunteeringCharter[] = [
    { title: 'تحميل ميثاق العمل التطوعي', href: 'javascript:void(0)' },
];

export const BANK_ACCOUNTS: BankAccount[] = [
    { bankName: 'الحساب العام', accountNumber: 'SA5980000353608010999939', iban: 'SA5980000353608010999939' },
];

export const TRIAL_BALANCES_DATA: TrialBalance[] = [
    { title: 'ميزان المراجعة - الربع الثالث 2023', href: 'javascript:void(0)' },
];

export const ACHIEVEMENTS_DATA: Stat[] = [
    { icon: HeartIcon, value: "سيتم الاعلان لاحقا", label: "متطوع" },
    { icon: LightBulbIcon, value: "سيتم الاعلان لاحقا", label: "برنامج زراعي" },
    { icon: UsersIcon, value: "سيتم الاعلان لاحقا", label: "مزارع مستفيد" },
    { icon: CashIcon, value: "سيتم الاعلان لاحقا", label: "ريال قيمة المشاريع" },
];

export const VALUES_DATA: Value[] = [
    { icon: FlagIcon, title: "الاعتزاز بالهوية الوطنية", description: "" },
    { icon: HeartIcon, title: "الاخلاص", description: "" },
    { icon: ShieldIcon, title: "النزاهة", description: "" },
    { icon: LightBulbIcon, title: "الابتكار", description: "" },
    { icon: BadgeCheckIcon, title: "المصداقية", description: "" },
    { icon: GiftIcon, title: "العطاء", description: "" },
    { icon: ScaleIcon, title: "العدالة", description: "" },
    { icon: HandshakeIcon, title: "الاحترام", description: "" },
    { icon: UsersIcon, title: "التعاون", description: "" },
    { icon: UsersIcon, title: "العمل بروح الفريق", description: "" },
];