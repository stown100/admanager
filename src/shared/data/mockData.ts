// Centralized mock data for the entire application
export interface CampaignData {
  key: string;
  name: string;
  platform: string;
  status: "active" | "paused" | "draft";
  budget: number;
  spent: number;
  impressions: string;
  clicks: string;
  ctr: string;
  cpc: string;
  conversions: number;
  roi: string;
}

export interface PlatformData {
  key: string;
  platform: string;
  platformEmoji: string;
  impressions: number;
  clicks: number;
  ctr: number;
  spend: number;
  roi: number;
  status: string;
  trend: "up" | "down" | "stable";
}

export interface MetricData {
  title: string;
  value: string;
  trend: {
    value: string;
    isPositive: boolean;
    isNeutral?: boolean;
  };
  description: string;
}

export interface PerformanceData {
  name: string;
  impressions: number;
  clicks: number;
  spend: number;
  conversions: number;
}

export interface CreativeData {
  key: string;
  name: string;
  type: string;
  platform: string;
  status: string;
  impressions: string;
  clicks: string;
  ctr: string;
  engagement: string;
  performance: string;
  thumbnail: string;
}

// Campaign data
export const campaignData: CampaignData[] = [
  {
    key: "1",
    name: "Summer Sale Campaign",
    platform: "Meta Ads",
    status: "active",
    budget: 2500,
    spent: 1847,
    impressions: "45,230",
    clicks: "1,208",
    ctr: "2.67%",
    cpc: "$1.53",
    conversions: 89,
    roi: "3.2x",
  },
  {
    key: "2",
    name: "Brand Awareness Q3",
    platform: "Google Ads",
    status: "paused",
    budget: 5000,
    spent: 3421,
    impressions: "89,540",
    clicks: "2,337",
    ctr: "2.61%",
    cpc: "$1.46",
    conversions: 156,
    roi: "2.8x",
  },
  {
    key: "3",
    name: "Product Launch",
    platform: "TikTok Ads",
    status: "active",
    budget: 1200,
    spent: 892,
    impressions: "23,120",
    clicks: "742",
    ctr: "3.21%",
    cpc: "$1.20",
    conversions: 67,
    roi: "4.1x",
  },
  {
    key: "4",
    name: "Holiday Promotions",
    platform: "Meta Ads",
    status: "draft",
    budget: 3800,
    spent: 0,
    impressions: "0",
    clicks: "0",
    ctr: "0%",
    cpc: "$0",
    conversions: 0,
    roi: "0x",
  },
  {
    key: "5",
    name: "Retargeting Campaign",
    platform: "Google Ads",
    status: "active",
    budget: 1800,
    spent: 1234,
    impressions: "34,560",
    clicks: "892",
    ctr: "2.58%",
    cpc: "$1.38",
    conversions: 145,
    roi: "3.5x",
  },
];

// Platform comparison data
export const platformData: PlatformData[] = [
  {
    key: "1",
    platform: "Meta Ads",
    platformEmoji: "🔷",
    impressions: 1200000,
    clicks: 24000,
    ctr: 2.0,
    spend: 8500,
    roi: 3.2,
    status: "Active",
    trend: "up",
  },
  {
    key: "2",
    platform: "Google Ads",
    platformEmoji: "🟢",
    impressions: 800000,
    clicks: 16000,
    ctr: 2.0,
    spend: 6200,
    roi: 2.8,
    status: "Active",
    trend: "down",
  },
  {
    key: "3",
    platform: "TikTok Ads",
    platformEmoji: "⚫",
    impressions: 400000,
    clicks: 5200,
    ctr: 1.3,
    spend: 3800,
    roi: 4.1,
    status: "Active",
    trend: "up",
  },
];

// Metrics overview data
export const metricsData: MetricData[] = [
  {
    title: "Total Impressions",
    value: "2.4M",
    trend: {
      value: "+12.5%",
      isPositive: true,
    },
    description: "Views across all campaigns",
  },
  {
    title: "Total Clicks",
    value: "45.2K",
    trend: {
      value: "+8.3%",
      isPositive: true,
    },
    description: "Engagement rate up",
  },
  {
    title: "Conversions",
    value: "1,847",
    trend: {
      value: "-2.1%",
      isPositive: false,
    },
    description: "Slightly down this week",
  },
  {
    title: "CTR",
    value: "2.89%",
    trend: {
      value: "+15.7%",
      isPositive: true,
    },
    description: "Above industry average",
  },
  {
    title: "Total Spend",
    value: "$12,847",
    trend: {
      value: "+5.2%",
      isPositive: true,
    },
    description: "Within budget limits",
  },
  {
    title: "Active Users",
    value: "8.9K",
    trend: {
      value: "0%",
      isPositive: true,
      isNeutral: true,
    },
    description: "Stable user base",
  },
  {
    title: "ROI",
    value: "284%",
    trend: {
      value: "+18.2%",
      isPositive: true,
    },
    description: "Return on investment",
  },
];

// Performance chart data
export const performanceData: PerformanceData[] = [
  {
    name: "Jan",
    impressions: 4000,
    clicks: 2400,
    spend: 2400,
    conversions: 120,
  },
  {
    name: "Feb",
    impressions: 3000,
    clicks: 1398,
    spend: 2210,
    conversions: 98,
  },
  {
    name: "Mar",
    impressions: 2000,
    clicks: 9800,
    spend: 2290,
    conversions: 156,
  },
  {
    name: "Apr",
    impressions: 2780,
    clicks: 3908,
    spend: 2000,
    conversions: 134,
  },
  {
    name: "May",
    impressions: 1890,
    clicks: 4800,
    spend: 2181,
    conversions: 142,
  },
  {
    name: "Jun",
    impressions: 2390,
    clicks: 3800,
    spend: 2500,
    conversions: 168,
  },
  {
    name: "Jul",
    impressions: 3490,
    clicks: 4300,
    spend: 2100,
    conversions: 189,
  },
];

// Creatives data
export const creativeData: CreativeData[] = [
  {
    key: "1",
    name: "Summer Sale Banner",
    type: "Image",
    platform: "Meta Ads",
    status: "active",
    impressions: "45K",
    clicks: "1.2K",
    ctr: "2.67%",
    engagement: "8.5%",
    performance: "excellent",
    thumbnail: "https://via.placeholder.com/100x60/1890ff/ffffff?text=Banner",
  },
  {
    key: "2",
    name: "Product Video Ad",
    type: "Video",
    platform: "TikTok Ads",
    status: "active",
    impressions: "67K",
    clicks: "2.1K",
    ctr: "3.13%",
    engagement: "12.3%",
    performance: "excellent",
    thumbnail: "https://via.placeholder.com/100x60/52c41a/ffffff?text=Video",
  },
  {
    key: "3",
    name: "Google Search Ad",
    type: "Text",
    platform: "Google Ads",
    status: "paused",
    impressions: "23K",
    clicks: "456",
    ctr: "1.98%",
    engagement: "5.2%",
    performance: "good",
    thumbnail: "https://via.placeholder.com/100x60/faad14/ffffff?text=Text",
  },
];

// Utility functions for data formatting
export const formatNumber = (value: number, suffix: string = "") => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M${suffix}`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K${suffix}`;
  }
  return `${value}${suffix}`;
};

export const formatCurrency = (value: number) => {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
};

// Calculate totals from campaign data
export const getTotalImpressions = () => {
  return campaignData.reduce((sum, campaign) => {
    const impressions = parseInt(campaign.impressions.replace(/,/g, ""));
    return sum + impressions;
  }, 0);
};

export const getTotalClicks = () => {
  return campaignData.reduce((sum, campaign) => {
    const clicks = parseInt(campaign.clicks.replace(/,/g, ""));
    return sum + clicks;
  }, 0);
};

export const getTotalSpend = () => {
  return campaignData.reduce((sum, campaign) => sum + campaign.spent, 0);
};

export const getTotalConversions = () => {
  return campaignData.reduce((sum, campaign) => sum + campaign.conversions, 0);
};
