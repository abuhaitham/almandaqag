import type React from 'react';
import type { Page } from './App';

export interface NavLink {
  label: string;
  href: string;
  id: Page;
  subLinks?: NavLink[];
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string; // Changed to string to accommodate text like "50K"
  label: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
}

export interface NewsArticle {
  image: string;
  title: string;
  date: string;
}

export interface BoardMember {
  image?: string;
  name: string;
  position?: string;
}

export interface DocumentLink {
  title: string;
  href: string;
}

// Generic Document Types
export type PolicyDocument = DocumentLink;
export type AnnualReport = DocumentLink;
export type FinancialStatement = DocumentLink;
export type MeetingMinute = DocumentLink;
export type TransparencyDocument = DocumentLink;
export type GovernanceGuide = DocumentLink;
export type Plan = DocumentLink;
export type System = DocumentLink;
export type Regulation = DocumentLink;
export type Committee = DocumentLink;
export type QuarterlyReport = DocumentLink;
export type Budget = DocumentLink;
export type VolunteeringCharter = DocumentLink;
export type FinancialRegulation = DocumentLink;
export type FeedbackForm = DocumentLink;
export type Form = DocumentLink;
export type TrialBalance = DocumentLink;


export interface EvaluationResult {
  year: string;
  score: number;
  href: string;
}

export interface BasicDataItem {
  label: string;
  value: string;
}

export interface GeneralAssemblyMember {
    name: string;
}

export interface VolunteeringOpportunity {
    title: string;
    description: string;
    status: 'open' | 'closed';
}

export interface BankAccount {
    bankName: string;
    accountNumber: string;
    iban: string;
}

export interface FoundingMember {
    name: string;
}

export interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface WebsiteVisit {
  id: number;
  page: string;
  user_agent: string;
  ip_address: string;
  referrer: string | null;
  session_id: string;
  created_at: string;
}

export interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: number;
  pageViews: { [key: string]: number };
  dailyVisits: Array<{ date: string; visits: number; uniqueVisitors: number }>;
  hourlyVisits: Array<{ hour: number; visits: number }>;
  topPages: Array<{ page: string; visits: number; percentage: number }>;
  deviceTypes: Array<{ type: string; count: number; percentage: number }>;
  referrers: Array<{ referrer: string; count: number; percentage: number }>;
}
