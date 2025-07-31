
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDashboardData } from "@/lib/mockData";
import { Phone, Mail, Brain, FileEdit } from 'lucide-react';

const activityIcons = {
  call: Phone,
  email: Mail,
  insight: Brain,
  update: FileEdit,
};

const activityColors = {
  call: 'text-blue-600 bg-blue-100',
  email: 'text-green-600 bg-green-100',
  insight: 'text-purple-600 bg-purple-100',
  update: 'text-orange-600 bg-orange-100',
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockDashboardData.recentActivity.map((activity, index) => {
            const Icon = activityIcons[activity.type as keyof typeof activityIcons];
            const colorClass = activityColors[activity.type as keyof typeof activityColors];
            
            return (
              <div key={index} className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${colorClass}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.contact}
                  </p>
                  <p className="text-xs text-gray-500">
                    {activity.company} • {activity.time}
                  </p>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {activity.value}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
