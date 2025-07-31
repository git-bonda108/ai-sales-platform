
// Mock data for AI Sales-Enablement Platform Demo

export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  industry: string;
  lastInteraction: string;
  dealValue: number;
  dealStage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  priority: 'high' | 'medium' | 'low';
  avatar: string;
}

export interface CallTranscript {
  id: string;
  contactId: string;
  date: string;
  duration: number;
  participants: string[];
  transcript: string;
  aiInsights: {
    sentiment: 'positive' | 'neutral' | 'negative';
    keyTopics: string[];
    nextSteps: string[];
    concerns: string[];
    opportunities: string[];
    coachingTips: string[];
  };
  outcome: string;
  dealImpact: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// Mock CRM Contacts
export const mockContacts: Contact[] = [
  {
    id: 'c1',
    name: 'Sarah Chen',
    email: 'sarah.chen@techcorp.com',
    company: 'TechCorp Industries',
    role: 'VP of Engineering',
    phone: '+1 (555) 123-4567',
    industry: 'Technology',
    lastInteraction: '2024-01-28',
    dealValue: 125000,
    dealStage: 'proposal',
    priority: 'high',
    avatar: 'https://i.pinimg.com/originals/95/48/61/95486188fbf36520e34fc2ec41b4523f.jpg'
  },
  {
    id: 'c2',
    name: 'Michael Rodriguez',
    email: 'm.rodriguez@financeco.com',
    company: 'FinanceCo Solutions',
    role: 'Chief Technology Officer',
    phone: '+1 (555) 234-5678',
    industry: 'Financial Services',
    lastInteraction: '2024-01-25',
    dealValue: 89000,
    dealStage: 'negotiation',
    priority: 'high',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'c3',
    name: 'Emily Thompson',
    email: 'emily.t@retailplus.com',
    company: 'RetailPlus Group',
    role: 'Director of Operations',
    phone: '+1 (555) 345-6789',
    industry: 'Retail',
    lastInteraction: '2024-01-22',
    dealValue: 67000,
    dealStage: 'qualification',
    priority: 'medium',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'c4',
    name: 'David Kim',
    email: 'david.kim@healthtech.io',
    company: 'HealthTech Innovations',
    role: 'Product Manager',
    phone: '+1 (555) 456-7890',
    industry: 'Healthcare',
    lastInteraction: '2024-01-20',
    dealValue: 156000,
    dealStage: 'prospecting',
    priority: 'medium',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'c5',
    name: 'Lisa Martinez',
    email: 'lisa.martinez@manufact.com',
    company: 'Manufacturing Solutions Ltd',
    role: 'Operations Manager',
    phone: '+1 (555) 567-8901',
    industry: 'Manufacturing',
    lastInteraction: '2024-01-30',
    dealValue: 234000,
    dealStage: 'closed-won',
    priority: 'high',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face'
  }
];

// Mock Call Transcripts
export const mockTranscripts: CallTranscript[] = [
  {
    id: 't1',
    contactId: 'c1',
    date: '2024-01-28',
    duration: 45,
    participants: ['Alex Johnson (Sales Rep)', 'Sarah Chen (TechCorp)'],
    transcript: `Alex Johnson: Hi Sarah, thanks for taking the time to meet with me today. I know you're busy with the Q1 engineering roadmap.

Sarah Chen: Of course, Alex. I'm interested to hear more about how your platform could help us streamline our sales operations. We've been struggling with disconnected data between our CRM and our product usage analytics.

Alex Johnson: That's exactly what we specialize in. Our AI platform ingests data from multiple sources - CRM, email, call recordings, even product usage logs - and creates a unified view of customer interactions. For a company like TechCorp, this could mean 25-30% faster deal cycles.

Sarah Chen: That sounds promising. We currently have sales reps manually updating Salesforce after every customer call, and honestly, the data quality is inconsistent. How does your system handle that?

Alex Johnson: Great question. Our platform automatically transcribes and analyzes sales calls, extracting key insights like customer sentiment, pain points, and next steps. It then automatically updates your CRM with structured data and suggests personalized follow-up actions.

Sarah Chen: Interesting. What about integration complexity? We're already using Salesforce, HubSpot for marketing, and our own customer portal.

Alex Johnson: We have pre-built connectors for all those platforms. Typically, we can have you up and running in 2-3 weeks with full integration. The platform learns your specific sales process and terminology over time, becoming more accurate with each interaction.

Sarah Chen: And what about data privacy? We handle sensitive customer information and have strict compliance requirements.

Alex Johnson: Security is paramount for us. The platform can be deployed completely on-premises or in your private cloud. Your data never leaves your infrastructure, and we support all major compliance frameworks including SOC2 and GDPR.

Sarah Chen: That addresses my main concern. What would the next steps look like if we wanted to move forward?

Alex Johnson: I'd love to set up a technical deep-dive with your team next week. We can walk through a live demo with your actual data structure and show you exactly how the integrations would work. Would Tuesday or Wednesday work better for you?

Sarah Chen: Tuesday afternoon would be perfect. Can you include our IT security team in that conversation?

Alex Johnson: Absolutely. I'll send over some technical documentation beforehand and include our solutions engineer in the meeting. This is going to be a great fit for TechCorp.`,
    aiInsights: {
      sentiment: 'positive',
      keyTopics: ['CRM Integration', 'Data Quality', 'Security Compliance', 'Sales Process Automation'],
      nextSteps: ['Schedule technical deep-dive for Tuesday', 'Send technical documentation', 'Include IT security team', 'Prepare live demo with customer data'],
      concerns: ['Integration complexity', 'Data privacy and compliance'],
      opportunities: ['25-30% faster deal cycles', 'Automated CRM updates', 'Improved data quality'],
      coachingTips: [
        'Excellent job addressing security concerns proactively',
        'Good quantification of benefits (25-30% faster cycles)',
        'Consider mentioning ROI calculator for next meeting',
        'Strong close with specific next steps'
      ]
    },
    outcome: 'Technical demo scheduled',
    dealImpact: 'Advanced to technical evaluation stage'
  }
];

// Dashboard Analytics Data
export const mockDashboardData = {
  totalContacts: 127,
  activeDeals: 23,
  monthlyRevenue: 847000,
  avgDealSize: 94500,
  winRate: 73,
  avgSalesCycle: 45,
  aiInsightsGenerated: 156,
  userSatisfactionScore: 4.4,
  recentActivity: [
    { type: 'call', contact: 'Sarah Chen', company: 'TechCorp', time: '2 hours ago', value: '$125K' },
    { type: 'email', contact: 'Michael Rodriguez', company: 'FinanceCo', time: '5 hours ago', value: '$89K' },
    { type: 'insight', contact: 'Emily Thompson', company: 'RetailPlus', time: '1 day ago', value: '$67K' },
    { type: 'update', contact: 'David Kim', company: 'HealthTech', time: '2 days ago', value: '$156K' }
  ],
  dealsByStage: [
    { stage: 'prospecting', count: 8, value: 456000 },
    { stage: 'qualification', count: 6, value: 289000 },
    { stage: 'proposal', count: 4, value: 378000 },
    { stage: 'negotiation', count: 3, value: 267000 },
    { stage: 'closed-won', count: 2, value: 390000 }
  ],
  monthlyMetrics: [
    { month: 'Sep', revenue: 625000, deals: 18 },
    { month: 'Oct', revenue: 734000, deals: 21 },
    { month: 'Nov', revenue: 689000, deals: 19 },
    { month: 'Dec', revenue: 812000, deals: 24 },
    { month: 'Jan', revenue: 847000, deals: 23 }
  ]
};

// Training Pipeline Sample Data
export const mockTrainingPipeline = {
  dataIngested: {
    totalTranscripts: 1247,
    totalEmails: 3456,
    totalCrmRecords: 2891,
    lastUpdated: '2024-01-30T08:30:00Z'
  },
  processingStatus: {
    queued: 23,
    processing: 7,
    completed: 1217,
    failed: 0
  },
  modelPerformance: {
    currentVersion: 'v2.3.1',
    accuracy: 88.9,
    latency: 0.8,
    lastTraining: '2024-01-28T02:00:00Z',
    nextTraining: '2024-02-04T02:00:00Z'
  },
  feedbackStats: {
    totalFeedback: 456,
    positiveRating: 87.2,
    improvements: 23,
    corrections: 12
  }
};

// Mock chat messages for demo
export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Hello! I\'m your AI sales assistant. I can help you analyze customer interactions, provide insights on deals, and suggest next best actions. What would you like to know?',
    timestamp: new Date().toISOString()
  }
];
