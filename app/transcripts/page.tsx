
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockTranscripts, mockContacts } from "@/lib/mockData";
import { formatDate } from "@/lib/utils";
import { FileText, Upload, Brain, Clock, TrendingUp } from 'lucide-react';

export default function TranscriptsPage() {
  const handleUpload = () => {
    alert('File upload functionality would be implemented here with actual file processing and AI analysis.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Call Transcripts</h1>
              <p className="text-gray-600 mt-1">
                AI-powered analysis of sales calls and meetings
              </p>
            </div>
          </div>
          <Button onClick={handleUpload} className="flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Upload Transcript</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-gray-600">Total Transcripts</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">98.5%</p>
                <p className="text-sm text-gray-600">Analysis Accuracy</p>
              </div>
              <Brain className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">2.3s</p>
                <p className="text-sm text-gray-600">Avg Processing Time</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">87%</p>
                <p className="text-sm text-gray-600">Positive Sentiment</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Transcript */}
      <Card>
        <CardHeader>
          <CardTitle>Sample Transcript Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Sarah Chen - TechCorp Industries</h3>
                <p className="text-sm text-gray-600">January 28, 2024 • 45 minutes</p>
              </div>
              <div className="flex space-x-2">
                <Badge className="bg-green-100 text-green-800">Positive</Badge>
                <Badge className="bg-yellow-100 text-yellow-800">Proposal</Badge>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">AI Insights</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Strong interest in security and compliance features</li>
                <li>• Concerns about integration complexity addressed successfully</li>
                <li>• Next step: Technical deep-dive scheduled for Tuesday</li>
                <li>• Opportunity: 25-30% faster deal cycles mentioned</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
