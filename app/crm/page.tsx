
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockContacts } from "@/lib/mockData";
import { formatDate, formatCurrency, getDealStageColor, getPriorityColor } from "@/lib/utils";
import { Users, RefreshCcw, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function CRMPage() {
  const handleSync = () => {
    alert('CRM sync functionality would connect to your actual CRM system here.');
  };

  const totalDealValue = mockContacts.reduce((sum, contact) => sum + contact.dealValue, 0);
  const activeDeals = mockContacts.filter(c => !['closed-won', 'closed-lost'].includes(c.dealStage)).length;
  const wonDeals = mockContacts.filter(c => c.dealStage === 'closed-won').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CRM Integration</h1>
              <p className="text-gray-600 mt-1">
                AI-enhanced contact management and deal tracking
              </p>
            </div>
          </div>
          <Button onClick={handleSync} className="flex items-center space-x-2">
            <RefreshCcw className="h-4 w-4" />
            <span>Sync CRM</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{mockContacts.length}</p>
                <p className="text-sm text-gray-600">Total Contacts</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{activeDeals}</p>
                <p className="text-sm text-gray-600">Active Deals</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{wonDeals}</p>
                <p className="text-sm text-gray-600">Won Deals</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalDealValue)}</p>
                <p className="text-sm text-gray-600">Total Pipeline</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contacts List */}
      <Card>
        <CardHeader>
          <CardTitle>Contact List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockContacts.map((contact) => (
            <div key={contact.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.role}</p>
                    <p className="text-sm text-gray-500">{contact.company}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge className={getDealStageColor(contact.dealStage)}>
                        {contact.dealStage.replace('-', ' ')}
                      </Badge>
                      <Badge className={getPriorityColor(contact.priority)}>
                        {contact.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{formatCurrency(contact.dealValue)}</p>
                  <p className="text-sm text-gray-500">Last: {formatDate(contact.lastInteraction)}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
