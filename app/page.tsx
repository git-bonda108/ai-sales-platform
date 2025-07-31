
import { Suspense } from 'react';
import { MetricsCard } from '@/components/metrics-card';
import { RecentActivity } from '@/components/recent-activity';
import { PipelineChart } from '@/components/pipeline-chart';
import { RevenueChart } from '@/components/revenue-chart';
import { mockDashboardData } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';
import { Activity } from 'lucide-react';

function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-32 bg-gray-200 rounded-lg"></div>
    </div>
  );
}

export default function Dashboard() {
  const {
    totalContacts,
    activeDeals,
    monthlyRevenue,
    avgDealSize,
    winRate,
    avgSalesCycle,
    aiInsightsGenerated,
    userSatisfactionScore
  } = mockDashboardData;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
            <p className="text-gray-600 mt-1">
              AI-powered sales insights and performance analytics
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Activity className="h-4 w-4 text-green-500" />
            <span>System Operational</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Contacts"
          value={totalContacts.toLocaleString()}
          change="+12% from last month"
          changeType="increase"
          iconName="Users"
          description="Active prospects in pipeline"
        />
        <MetricsCard
          title="Active Deals"
          value={activeDeals}
          change="+5 new this week"
          changeType="increase"
          iconName="Target"
          description="Deals in progress"
        />
        <MetricsCard
          title="Monthly Revenue"
          value={formatCurrency(monthlyRevenue)}
          change="+18% vs last month"
          changeType="increase"
          iconName="DollarSign"
          description="Current month performance"
        />
        <MetricsCard
          title="Avg Deal Size"
          value={formatCurrency(avgDealSize)}
          change="+8% improvement"
          changeType="increase"
          iconName="TrendingUp"
          description="Deal value trending up"
        />
      </div>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Win Rate"
          value={`${winRate}%`}
          change="+5% improvement"
          changeType="increase"
          iconName="Target"
          description="Deals closed successfully"
        />
        <MetricsCard
          title="Sales Cycle"
          value={`${avgSalesCycle} days`}
          change="-8 days faster"
          changeType="increase"
          iconName="Clock"
          description="Average time to close"
        />
        <MetricsCard
          title="AI Insights"
          value={aiInsightsGenerated}
          change="+23 this week"
          changeType="increase"
          iconName="Brain"
          description="Generated insights"
        />
        <MetricsCard
          title="User Rating"
          value={`${userSatisfactionScore}/5.0`}
          change="+0.3 improvement"
          changeType="increase"
          iconName="ThumbsUp"
          description="Platform satisfaction"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<LoadingSkeleton />}>
          <PipelineChart />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>
          <RevenueChart />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Platform Highlights */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900">AI-Powered Analysis</p>
                    <p className="text-sm text-blue-700">Automated transcript processing and insight generation</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900">Performance Gains</p>
                    <p className="text-sm text-green-700">25% faster deal cycles with AI insights</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-medium text-purple-900">CRM Integration</p>
                    <p className="text-sm text-purple-700">Seamless data sync and automated updates</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="font-medium text-orange-900">Continuous Learning</p>
                    <p className="text-sm text-orange-700">Model improves with every interaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<LoadingSkeleton />}>
            <RecentActivity />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
