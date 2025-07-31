
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDashboardData } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function PipelineChart() {
  const data = mockDashboardData.dealsByStage.map(stage => ({
    stage: stage.stage.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    deals: stage.count,
    value: stage.value
  }));

  const maxDeals = Math.max(...data.map(d => d.deals));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Pipeline by Stage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.stage} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{item.stage}</span>
                <div className="text-right">
                  <span className="text-sm font-semibold text-gray-900">{item.deals} deals</span>
                  <div className="text-xs text-gray-500">{formatCurrency(item.value)}</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(item.deals / maxDeals) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
