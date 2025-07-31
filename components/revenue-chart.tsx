
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDashboardData } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function RevenueChart() {
  const data = mockDashboardData.monthlyMetrics;
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const minRevenue = Math.min(...data.map(d => d.revenue));
  const range = maxRevenue - minRevenue;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Monthly Revenue Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4">
            {data.map((item, index) => {
              const height = range > 0 ? ((item.revenue - minRevenue) / range) * 100 : 50;
              const isGrowth = index > 0 ? item.revenue > data[index - 1].revenue : true;
              
              return (
                <div key={item.month} className="flex flex-col items-center space-y-2">
                  <div className="w-full h-32 bg-gray-100 rounded flex items-end justify-center">
                    <div 
                      className={`w-8 rounded-t transition-all duration-300 ${
                        isGrowth ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ height: `${Math.max(height, 10)}%` }}
                    ></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-700">{item.month}</div>
                    <div className="text-xs text-gray-500">{formatCurrency(item.revenue)}</div>
                    <div className="text-xs text-gray-400">{item.deals} deals</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Growth: <span className="text-green-600 font-medium">+18%</span></span>
              <span>Avg: {formatCurrency(data.reduce((acc, d) => acc + d.revenue, 0) / data.length)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
