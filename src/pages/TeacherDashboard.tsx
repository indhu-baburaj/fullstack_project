
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Clock,
  Settings,
  HelpCircle,
  Bell,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import TeacherStats from '@/components/dashboard/TeacherStats';
import QuickActions from '@/components/dashboard/QuickActions';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const recentActivity = [
    { type: "submission", message: "Alice Johnson submitted React Assignment", time: "2 hours ago", urgent: true },
    { type: "enrollment", message: "5 new students enrolled in JavaScript course", time: "4 hours ago", urgent: false },
    { type: "message", message: "Bob Smith asked a question in Web Dev course", time: "6 hours ago", urgent: false },
    { type: "deadline", message: "Node.js Quiz deadline in 2 days", time: "1 day ago", urgent: true }
  ];

  const upcomingTasks = [
    { title: "Grade JavaScript Assignments", due: "Today", priority: "high" },
    { title: "Prepare React Quiz", due: "Tomorrow", priority: "medium" },
    { title: "Update Course Material", due: "This Week", priority: "low" },
    { title: "Student Progress Review", due: "Next Week", priority: "medium" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-lg text-gray-600">Here's what's happening with your courses today.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => navigate('/notifications')} variant="outline" className="relative">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button onClick={() => navigate('/profile')}>
              <Settings className="h-4 w-4 mr-2" />
              Profile Settings
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <TeacherStats />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <QuickActions />

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${activity.urgent ? 'bg-red-500' : 'bg-blue-500'}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    {activity.urgent && (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Urgent</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <p className="text-xs text-gray-600">Due: {task.due}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Teaching Progress */}
            <Card>
              <CardHeader>
                <CardTitle>This Month's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Assignments Graded</span>
                    <span>28/35</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Course Completion</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Student Engagement</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/help')}>
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/support')}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
