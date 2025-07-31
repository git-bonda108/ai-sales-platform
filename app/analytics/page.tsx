
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockDashboardData } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";
import { BarChart3, TrendingUp, Users, Target, DollarSign, Clock, Brain, Activity, Zap, Award } from 'lucide-react';

export default function AnalyticsPage() {
  const { dealsByStage, monthlyMetrics } = mockDashboardData;

  // Calculate conversion rates
  const totalDeals = dealsByStage.reduce((sum, stage) => sum + stage.count, 0);
  const conversionRates = dealsByStage.map(stage => ({
    ...stage,
    conversionRate: Math.round((stage.count / totalDeals) * 100)
  }));

  // Performance indicators
  const performanceMetrics = [
    { label: 'Sales Velocity', value: '+34%', change: 'increase', icon: Zap, color: 'text-blue-600' },
    { label: 'Deal Quality Score', value: '8.7/10', change: 'increase', icon: Award, color: 'text-purple-600' },
    { label: 'AI Adoption Rate', value: '94%', change: 'increase', icon: Brain, color: 'text-green-600' },
    { label: 'Response Time', value: '1.2s', change: 'decrease', icon: Clock, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BarChart3 className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sales Analytics</h1>
            <p className="text-gray-600 mt-1">
              Comprehensive insights and performance metrics
            </p>
          </div>
        </div>
      </div>

      {/* Performance KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className="mt-2">
                  <Badge 
                    className={`${
                      metric.change === 'increase' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {metric.change === 'increase' ? '↑' : '↓'} Trending {metric.change === 'increase' ? 'up' : 'down'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deal Stage Conversion */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>Deal Stage Conversion</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversionRates.map((stage, index) => (
                <div key={stage.stage} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {stage.stage.replace('-', ' ')}
                    </span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900">{stage.count} deals</span>
                      <div className="text-xs text-gray-500">{formatCurrency(stage.value)}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 flex-1">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === 0 ? 'bg-blue-500' :
                          index === 1 ? 'bg-green-500' :
                          index === 2 ? 'bg-yellow-500' :
                          index === 3 ? 'bg-orange-500' : 'bg-purple-500'
                        }`}
                        style={{ width: `${stage.conversionRate}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8">{stage.conversionRate}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span>Revenue Growth Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2">
                {monthlyMetrics.map((month, index) => {
                  const maxRevenue = Math.max(...monthlyMetrics.map(m => m.revenue));
                  const height = (month.revenue / maxRevenue) * 100;
                  const isGrowth = index > 0 ? month.revenue > monthlyMetrics[index - 1].revenue : true;
                  
                  return (
                    <div key={month.month} className="flex flex-col items-center space-y-2">
                      <div className="w-full h-24 bg-gray-100 rounded flex items-end justify-center">
                        <div 
                          className={`w-8 rounded-t transition-all duration-300 ${
                            isGrowth ? 'bg-green-500' : 'bg-red-500'
                          }`}
                          style={{ height: `${Math.max(height, 10)}%` }}
                        ></div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-medium text-gray-700">{month.month}</div>
                        <div className="text-xs text-gray-500">{formatCurrency(month.revenue)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-sm text-gray-600 pt-4 border-t">
                <span>Growth Rate: <span className="text-green-600 font-medium">+18.2%</span></span>
                <span>Trend: <span className="text-green-600 font-medium">Positive</span></span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Efficiency */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-purple-600" />
              <span>Sales Efficiency</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Time to First Response</span>
                <span className="text-sm font-medium text-gray-900">4.2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Follow-up Rate</span>
                <span className="text-sm font-medium text-gray-900">87%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Meeting Show Rate</span>
                <span className="text-sm font-medium text-gray-900">91%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Proposal Win Rate</span>
                <span className="text-sm font-medium text-gray-900">73%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Impact Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-blue-600" />
              <span>AI Impact</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Calls Analyzed</span>
                <span className="text-sm font-medium text-gray-900">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Insights Generated</span>
                <span className="text-sm font-medium text-gray-900">3,421</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Actions Recommended</span>
                <span className="text-sm font-medium text-gray-900">892</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="text-sm font-medium text-gray-900">88.9%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-orange-600" />
              <span>Team Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Top Performer</span>
                <span className="text-sm font-medium text-gray-900">Alex Johnson</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Deal Size</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(94500)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Team Quota Attainment</span>
                <span className="text-sm font-medium text-gray-900">112%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">AI Tool Adoption</span>
                <span className="text-sm font-medium text-gray-900">94%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
