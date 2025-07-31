
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockTrainingPipeline } from "@/lib/mockData";
import { formatDate } from "@/lib/utils";
import { Brain, Database, Cog, CheckCircle, Clock, TrendingUp, Users, Star, Activity } from 'lucide-react';

export default function TrainingPage() {
  const { dataIngested, processingStatus, modelPerformance, feedbackStats } = mockTrainingPipeline;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Brain className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Training Pipeline</h1>
            <p className="text-gray-600 mt-1">
              Continuous learning and model improvement system
            </p>
          </div>
        </div>
      </div>

      {/* Data Ingestion Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{dataIngested.totalTranscripts.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Call Transcripts</p>
              </div>
              <Database className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{dataIngested.totalEmails.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Email Records</p>
              </div>
              <Database className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{dataIngested.totalCrmRecords.toLocaleString()}</p>
                <p className="text-sm text-gray-600">CRM Records</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{modelPerformance.accuracy}%</p>
                <p className="text-sm text-gray-600">Model Accuracy</p>
              </div>
              <Activity className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Processing Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cog className="h-5 w-5 text-blue-600" />
              <span>Processing Pipeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-900">Queued</p>
                  <p className="text-sm text-yellow-700">Waiting for processing</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                {processingStatus.queued} items
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Cog className="h-5 w-5 text-blue-600 animate-spin" />
                <div>
                  <p className="font-medium text-blue-900">Processing</p>
                  <p className="text-sm text-blue-700">Currently being analyzed</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                {processingStatus.processing} items
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-900">Completed</p>
                  <p className="text-sm text-green-700">Successfully processed</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                {processingStatus.completed.toLocaleString()} items
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-600" />
              <span>Model Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Current Version</p>
                <p className="text-lg font-semibold text-gray-900">{modelPerformance.currentVersion}</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="text-lg font-semibold text-gray-900">{modelPerformance.accuracy}%</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-lg font-semibold text-gray-900">{modelPerformance.latency}s</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Training Status</p>
                <p className="text-sm font-medium text-green-600">Active</p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Training:</span>
                <span className="text-gray-900">{formatDate(modelPerformance.lastTraining)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Next Training:</span>
                <span className="text-gray-900">{formatDate(modelPerformance.nextTraining)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-600" />
              <span>User Feedback</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{feedbackStats.positiveRating}%</p>
                <p className="text-sm text-green-700">Positive Rating</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{feedbackStats.totalFeedback}</p>
                <p className="text-sm text-blue-700">Total Feedback</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Recent Improvements</span>
                <Badge className="bg-green-100 text-green-800">
                  +{feedbackStats.improvements} this month
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Corrections Applied</span>
                <Badge className="bg-blue-100 text-blue-800">
                  {feedbackStats.corrections} corrections
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span>Training Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Data Processing</span>
                  <span className="text-gray-900">98.1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '98.1%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Model Training</span>
                  <span className="text-gray-900">92.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '92.5%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Validation</span>
                  <span className="text-gray-900">88.9%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '88.9%'}}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">Next milestone:</span> Accuracy target of 90% expected within 2 weeks
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
