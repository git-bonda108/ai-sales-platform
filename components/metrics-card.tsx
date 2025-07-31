
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  iconName: keyof typeof Icons;
  description?: string;
}

export function MetricsCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  iconName,
  description 
}: MetricsCardProps) {
  const Icon = Icons[iconName] as React.ComponentType<{ className?: string }>;
  
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {change && (
          <p className={cn(
            "text-xs flex items-center space-x-1 mt-1",
            changeType === 'increase' && "text-green-600",
            changeType === 'decrease' && "text-red-600",
            changeType === 'neutral' && "text-gray-600"
          )}>
            <span>{change}</span>
          </p>
        )}
        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
