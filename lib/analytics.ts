import { supabase } from './supabaseClient';
import type { WebsiteVisit, AnalyticsData } from '../types';

// Generate a unique session ID
const generateSessionId = (): string => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

// Get or create session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

// Track a page visit
export const trackPageVisit = async (page: string): Promise<void> => {
  try {
    const visitData: Omit<WebsiteVisit, 'id' | 'created_at'> = {
      page,
      user_agent: navigator.userAgent,
      ip_address: '',
      referrer: document.referrer || null,
      session_id: getSessionId()
    };

    const { error } = await supabase
      .from('website_visits')
      .insert([visitData]);

    if (error) {
      console.warn('Analytics tracking failed (check RLS policy for website_visits table):', error.message);
    }
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
};

// Get analytics data
export const getAnalyticsData = async (days: number = 30): Promise<AnalyticsData> => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    const startDateStr = startDate.toISOString().split('T')[0];

    // Get all visits for the period
    const { data: visits, error } = await supabase
      .from('website_visits')
      .select('*')
      .gte('created_at', startDateStr)
      .order('created_at', { ascending: true });

    if (error) throw error;

    const visitsData = visits || [];

    // Calculate basic stats
    const totalVisits = visitsData.length;
    const uniqueVisitors = new Set(visitsData.map(v => v.session_id)).size;

    // Page views
    const pageViews: { [key: string]: number } = {};
    visitsData.forEach(visit => {
      pageViews[visit.page] = (pageViews[visit.page] || 0) + 1;
    });

    // Daily visits
    const dailyVisitsMap = new Map<string, { visits: number; uniqueVisitors: Set<string> }>();
    visitsData.forEach(visit => {
      const date = visit.created_at.split('T')[0];
      if (!dailyVisitsMap.has(date)) {
        dailyVisitsMap.set(date, { visits: 0, uniqueVisitors: new Set() });
      }
      const dayData = dailyVisitsMap.get(date)!;
      dayData.visits++;
      dayData.uniqueVisitors.add(visit.session_id);
    });

    const dailyVisits = Array.from(dailyVisitsMap.entries())
      .map(([date, data]) => ({
        date,
        visits: data.visits,
        uniqueVisitors: data.uniqueVisitors.size
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    // Hourly visits
    const hourlyVisitsMap = new Map<number, number>();
    visitsData.forEach(visit => {
      const hour = new Date(visit.created_at).getHours();
      hourlyVisitsMap.set(hour, (hourlyVisitsMap.get(hour) || 0) + 1);
    });

    const hourlyVisits = Array.from(hourlyVisitsMap.entries())
      .map(([hour, visits]) => ({ hour, visits }))
      .sort((a, b) => a.hour - b.hour);

    // Top pages
    const topPages = Object.entries(pageViews)
      .map(([page, visits]) => ({
        page,
        visits,
        percentage: Math.round((visits / totalVisits) * 100)
      }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 10);

    // Device types
    const deviceTypesMap = new Map<string, number>();
    visitsData.forEach(visit => {
      const userAgent = visit.user_agent.toLowerCase();
      let deviceType = 'Desktop';
      if (userAgent.includes('mobile') || userAgent.includes('android')) {
        deviceType = 'Mobile';
      } else if (userAgent.includes('tablet') || userAgent.includes('ipad')) {
        deviceType = 'Tablet';
      }
      deviceTypesMap.set(deviceType, (deviceTypesMap.get(deviceType) || 0) + 1);
    });

    const deviceTypes = Array.from(deviceTypesMap.entries())
      .map(([type, count]) => ({
        type,
        count,
        percentage: Math.round((count / totalVisits) * 100)
      }))
      .sort((a, b) => b.count - a.count);

    // Referrers
    const referrersMap = new Map<string, number>();
    visitsData.forEach(visit => {
      if (visit.referrer) {
        try {
          const url = new URL(visit.referrer);
          const domain = url.hostname;
          referrersMap.set(domain, (referrersMap.get(domain) || 0) + 1);
        } catch {
          referrersMap.set('Direct', (referrersMap.get('Direct') || 0) + 1);
        }
      } else {
        referrersMap.set('Direct', (referrersMap.get('Direct') || 0) + 1);
      }
    });

    const referrers = Array.from(referrersMap.entries())
      .map(([referrer, count]) => ({
        referrer,
        count,
        percentage: Math.round((count / totalVisits) * 100)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      totalVisits,
      uniqueVisitors,
      pageViews,
      dailyVisits,
      hourlyVisits,
      topPages,
      deviceTypes,
      referrers
    };
  } catch (err) {
    console.error('Error fetching analytics data:', err);
    return {
      totalVisits: 0,
      uniqueVisitors: 0,
      pageViews: {},
      dailyVisits: [],
      hourlyVisits: [],
      topPages: [],
      deviceTypes: [],
      referrers: []
    };
  }
};
