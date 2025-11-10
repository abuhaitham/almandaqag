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
    { label: 'الرئيسية', href: '#', id: 'home' },
    {
        label: 'عن الجمعية', href: '#', id: 'about',
        subLinks: [
            { label: 'من نحن', href: '#', id: 'about' },
            { label: 'الرؤية', href: '#', id: 'vision' },
            { label: 'الرسالة', href: '#', id: 'mission' },
            { label: 'الأهداف', href: '#', id: 'goals' },
            { label: 'شهادة التسجيل', href: '#', id: 'certificate' },
            { label: 'الجمعية العمومية', href: '#', id: 'generalAssembly' },
            { label: 'النموذج الشامل للجمعيات', href: '#', id: 'comprehensiveModel' },
            { label: 'المدير التنفيذي', href: '#', id: 'executiveDirector' },
            { label: 'الهيكل التنظيمي', href: '#', id: 'structure' },
            { label: 'مجلس الإدارة', href: '#', id: 'board' },
            { label: 'شركاؤنا', href: '#', id: 'partnersPage' },
            { label: 'مشاريعنا', href: '#', id: 'projects' },
            { label: 'الحسابات البنكية', href: '#', id: 'bankAccounts' },
        ]
    },
    {
        label: 'الحوكمة', href: '#', id: 'governance',
        subLinks: [
            { label: 'وثائق الحوكمة', href: '#', id: 'governanceGuides' },
            { label: 'النماذج', href: '#', id: 'forms' },
            { label: 'اللوائح', href: '#', id: 'regulations' },
            { label: 'السياسات', href: '#', id: 'policies' },
            { label: 'الجمعية العمومية', href: '#', id: 'generalAssemblyGov' },
        ]
    },
    { label: 'التقارير', href: '#', id: 'reports' },
    { label: 'المشاريع والأوقاف', href: '#', id: 'projects' },
    { label: 'البرامج', href: '#', id: 'volunteering' },
    { label: 'المركز الإعلامي', href: '#', id: 'news' },
    {
        label: 'قياس رضا أصحاب العلاقة', href: '#', id: 'satisfaction',
        subLinks: [
            { label: 'استبيان الرضا', href: '#', id: 'satisfactionSurvey' },
            { label: 'نتائج الرضا', href: '#', id: 'satisfactionResults' },
        ]
    },
    {
        label: 'تواصل معنا', href: '#', id: 'contact',
        subLinks: [
            { label: 'معلومات التواصل', href: '#', id: 'contact' },
            { label: 'شكوى / اقتراح', href: '#', id: 'feedbackForm' },
        ]
    }
];

export const STATS_DATA: Stat[] = [
    { icon: UsersIcon, value: "1,200+", label: "مستفيد" },
    { icon: HeartIcon, value: "300+", label: "متطوع" },
    { icon: LightBulbIcon, value: "50+", label: "مشروع" },
    { icon: CashIcon, value: "5M+", label: "إجمالي الصرف" },
];

export const PROJECTS_DATA: Project[] = [
    { image: PROJECT_IMAGE_1, title: 'مشروع كفالة الأيتام', description: 'نوفر الرعاية الشاملة للأيتام وأسرهم.' },
    { image: PROJECT_IMAGE_2, title: 'مشروع السلة الغذائية', description: 'توزيع السلال الغذائية على الأسر المحتاجة.' },
    { image: PROJECT_IMAGE_3, title: 'مشروع تفطير صائم', description: 'تقديم وجبات الإفطار للصائمين في رمضان.' },
];

export const NEWS_DATA: NewsArticle[] = [
    { image: NEWS_IMAGE_1, title: 'خبر ١', date: '15 ديسمبر 2023' },
    { image: NEWS_IMAGE_2, title: 'خبر ٢', date: '5 ديسمبر 2023' },
    { image: NEWS_IMAGE_3, title: 'خبر ٣', date: '20 نوفمبر 2023' },
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
    { label: 'اسم الجمعية', value: 'جمعية الباحة الخضراء' },
    { label: 'رقم التسجيل', value: '4028' },
    { label: 'تاريخ التأسيس', value: '22 / 8 / 1443 هـ' },
    { label: 'المدينة', value: 'الباحة' },
    { label: 'البريد الإلكتروني', value: 'kzmr274@gmail.com' },
    { label: 'رقم الهاتف', value: '0506659700' },
];

export const BOARD_MEMBERS: BoardMember[] = [
    { name: 'أ.د.عبدالرحمن مساعد عيدان' },
    { name: 'أ.أحمد محمد سعيد' },
    { name: 'أ.عبدالكريم محمد عوضه' },
    { name: 'أ.صالح عيدان صالح' },
    { name: 'أ.صالح عبدالله حسن' },
];

export const ANNUAL_REPORTS_DATA: AnnualReport[] = [
    // لا توجد تقارير سنوية حالياً - جمعية ناشئة
];

export const FINANCIAL_STATEMENTS_DATA: FinancialStatement[] = [
    { title: 'القوائم المالية لعام 2024', href: '/assets/docs/القوائم المالية المعتمدة جمعية الباحة الخضراء2024.pdf' },
    { title: 'القوائم المالية لعام 2023', href: '#' },
    { title: 'القوائم المالية لعام 2022', href: '#' },
];

export const MEETING_MINUTES_DATA: MeetingMinute[] = [
    { title: 'محضر اجتماع الجمعية العمومية 2023', href: '#' },
    { title: 'محضر اجتماع الجمعية العمومية 2022', href: '#' },
];

export const EVALUATION_RESULTS: EvaluationResult[] = [
    // لا توجد نتائج تقييم حالياً - جمعية ناشئة
];

export const GENERAL_ASSEMBLY_MEMBERS: GeneralAssemblyMember[] = [
    { name: 'عبدالرحمن مساعد عيدان' },
    { name: 'أحمد محمد سعيد' },
    { name: 'عبدالكريم محمد عوضه' },
    { name: 'صالح عيدان صالح' },
    { name: 'صالح عبدالله حسن' },
    { name: 'محمد فطيس عبدالله' },
    { name: 'محمد يحيى علي' },
    { name: 'فهد يحيى أحمد' },
    { name: 'خالد مساعد عيدان' },
    { name: 'عبدالعزيز علي محمد' },
    { name: 'ضيف الله أحمد ضيف الله' },
    { name: 'فيصل علي سعود' },
    { name: 'راشد هاشم محمد' },
    { name: 'محمد يحيى علي' },
];

export const GOVERNANCE_GUIDES: GovernanceGuide[] = [
    { title: 'إجراءات التعامل مع المقبوضات', href: '/assets/docs/إجراءات التعامل مع المقبوضات.pdf' },
    { title: 'إجراءات الوقاية من عمليات غسيل الأموال وجرائم تمويل الإرهاب', href: '/assets/docs/إجراءات الوقاية من عمليات غسيل الأموال وجرائم تمويل الإرهاب.pdf' },
    { title: 'الميثاق الأخلاقي', href: '/assets/docs/الميثاق الأخلاقي.pdf' },
    { title: 'آلية التأكد من استحقاق المستفيد', href: '/assets/docs/الية التأكد من استحقاق المستفيد.pdf' },
    { title: 'دليل السياسات والإجراءات المالية والمحاسبية', href: '/assets/docs/دليل-السياسات-والإجراءات-المالية-والمحاسبية.pdf' },
];

export const FORMS_DATA: Form[] = [
    { title: 'الالتزام بسياسة الشفافية والافصاح', href: '/assets/docs/الالتزام بسياسة الشفافية والافصاح.pdf' },
    { title: 'النموذج الشامل تحديث 6', href: '/assets/docs/النموذج-الشامل-تحديث-6.pdf' },
    { title: 'قائمة العلاقات العائلية والتجارية بين أعضاء المجلس والقياديين التنفيذيين والموظفين في الجمعية', href: '/assets/docs/قائمة العلاقات العائلية والتجارية بين أعضاء المجلس والقياديين التنفيذيين والموظفين في الجمعية.pdf' },
    { title: 'تعهد وإقرار بعدم تعارض المصالح ١', href: '/assets/docs/تعهد وإقرار بعدم تعارض المصالح ١.pdf' },
    { title: 'تعهد وإقرار بعدم تعارض المصالح ٢', href: '/assets/docs/تعهد وإقرار بعدم تعارض المصالح ٢.pdf' },
    { title: 'تعهد وإقرار بعدم تعارض المصالح ٣', href: '/assets/docs/تعهد وإقرار بعدم تعارض المصالح ٣.pdf' },
];

export const REGULATIONS_DATA: Regulation[] = [
    { title: 'اللائحة المختومة من المركز الوطني', href: '/assets/docs/اللائحة المختومة من المركز الوطني.pdf' },
    { title: 'لائحة إجراءات شراء الأصول', href: '/assets/docs/لائحة إجراءات شراء الاصو.pdf' },
    { title: 'لائحة المشتريات', href: '/assets/docs/لائحة المشتريات.pdf' },
    { title: 'لائحة الموارد البشرية', href: '/assets/docs/لايحة الموارد البشرية.pdf' },
];

export const POLICIES_DATA: PolicyDocument[] = [
    { title: 'سياسة الصرف للبرامج والأنشطة', href: '/assets/docs/سياسة الصرف للبرامج والأنشطة.pdf' },
    { title: 'سياسة الإبلاغ عن المخالفات وحماية مقدمي البلاغات', href: '/assets/docs/سياسة  الإبلاغ عن المخالفات  وحماية مقدمي البلاغات.pdf' },
    { title: 'سياسة إدارة المتطوعين', href: '/assets/docs/سياسة إدارة المتطوعين.pdf' },
    { title: 'سياسة إدارة المخاطر', href: '/assets/docs/سياسة إدارة المخاطر.pdf' },
    { title: 'سياسة الاستثمار', href: '/assets/docs/سياسة الاستثمار.pdf' },
    { title: 'سياسة التعامل مع الشركاء المنفذين والأطراف الثالثة', href: '/assets/docs/سياسة التعامل مع الشركاء المنفذين والأطراف الثالثة.pdf' },
    { title: 'سياسة تعارض المصالح', href: '/assets/docs/سياسة تعارض المصالح.pdf' },
    { title: 'سياسة تنظيم العلاقة مع المستفيدين', href: '/assets/docs/سياسة تنظيم العلاقة مع المستفيدين.pdf' },
    { title: 'سياسة جمع التبرعات', href: '/assets/docs/سياسة جمع التبرعات.pdf' },
    { title: 'سياسة خصوصية البيانات', href: '/assets/docs/سياسة خصوصية البيانات.pdf' },
    { title: 'سياسة قواعد السلوك', href: '/assets/docs/سياسة قواعد السلوك.pdf' },
    { title: 'سياسة مصفوفة الصلاحيات بين مجلس الإدارة والإدارة التنفيذية', href: '/assets/docs/سياسة مصفوفة الصلاحيات بين مجلس الإدارة والإدارة التنفيذية.pdf' },
    { title: 'سياسة وآليات الرقابة والإشراف على المنظمة وفروعها ومكاتبها وتقييمها', href: '/assets/docs/سياسة وآليات الرقابة الإشراف على المنظمة وفروعها ومكاتبها وتقييمها.pdf' },
];

export const GENERAL_ASSEMBLY_DOCUMENTS: GovernanceGuide[] = [
    { title: 'آلية إدارة طلبات العضوية في الجمعية العمومية', href: '/assets/docs/آلية إدارة طلبات العضوية في الجمعية العمومية.pdf' },
    { title: 'خطاب أعضاء مجلس الإدارة', href: '/assets/docs/خطاب اعضاء مجلس الادارة.pdf' },
];

export const PLANS_DATA: Plan[] = [
    { title: 'الخطة الاستراتيجية 2023-2025', href: '#' },
    { title: 'الخطة التشغيلية لعام 2024', href: '#' },
];

export const SYSTEMS_DATA: System[] = [
    { title: 'نظام الجمعيات والمؤسسات الأهلية', href: '#' },
    { title: 'نظام العمل التطوعي', href: '#' },
];

export const COMMITTEES_DATA: Committee[] = [
    { title: 'لجنة المراجعة الداخلية', href: '#' },
    { title: 'لجنة الترشيحات والمكافآت', href: '#' },
];

export const QUARTERLY_REPORTS_DATA: QuarterlyReport[] = [
    { title: 'التقرير المالي للربع الثالث 2023', href: '#' },
    { title: 'التقرير المالي للربع الثاني 2023', href: '#' },
];

export const BUDGET_DATA: Budget[] = [
    { title: 'الموازنة التقديرية لعام 2024', href: '#' },
];

export const VOLUNTEERING_OPPORTUNITIES: VolunteeringOpportunity[] = [
    { title: 'متطوع إعلامي', description: 'المشاركة في تغطية فعاليات الجمعية.', status: 'open' },
    { title: 'متطوع ميداني', description: 'المساعدة في توزيع المساعدات.', status: 'closed' },
];

export const FEEDBACK_FORM_DATA: FeedbackForm[] = [
    { title: 'نموذج الشكاوى والمقترحات', href: '#' },
];

export const VOLUNTEERING_CHARTER_DATA: VolunteeringCharter[] = [
    { title: 'تحميل ميثاق العمل التطوعي', href: '#' },
];

export const BANK_ACCOUNTS: BankAccount[] = [
    { bankName: 'مصرف الراجحي', accountNumber: '353608010000787', iban: 'SA0880000353608010000787' },
];

export const TRIAL_BALANCES_DATA: TrialBalance[] = [
    { title: 'ميزان المراجعة - الربع الثالث 2023', href: '#' },
];

export const ACHIEVEMENTS_DATA: Stat[] = [
    { icon: HeartIcon, value: "سيتم الاعلان لاحقا", label: "متطوع" },
    { icon: LightBulbIcon, value: "سيتم الاعلان لاحقا", label: "برنامج نوعي" },
    { icon: UsersIcon, value: "سيتم الاعلان لاحقا", label: "مستفيد من البرامج" },
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