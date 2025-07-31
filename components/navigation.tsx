
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Users, 
  Settings, 
  Brain,
  Home
} from 'lucide-react';

const navItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home
  },
  {
    title: 'AI Assistant',
    href: '/chat',
    icon: MessageSquare
  },
  {
    title: 'Transcripts',
    href: '/transcripts',
    icon: FileText
  },
  {
    title: 'CRM Integration',
    href: '/crm',
    icon: Users
  },
  {
    title: 'Training Pipeline',
    href: '/training',
    icon: Brain
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">AI Sales</span>
            <span className="text-xs text-gray-500">Platform Demo</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <Icon 
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                )} 
              />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
            AJ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
            <p className="text-xs text-gray-500">Sales Representative</p>
          </div>
          <Settings className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
