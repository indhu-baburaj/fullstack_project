
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  AlertCircle, 
  UserCheck, 
  GraduationCap,
  Settings,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Active Courses", value: "156", change: "+5%", icon: BookOpen, color: "text-green-600" },
    { title: "Course Completion", value: "87%", change: "+3%", icon: TrendingUp, color: "text-purple-600" },
    { title: "Support Tickets", value: "23", change: "-8%", icon: AlertCircle, color: "text-red-600" }
  ];

  const userBreakdown = [
    { role: "Students", count: 2456, percentage: 86 },
    { role: "Teachers", count: 234, percentage: 8 },
    { role: "Admins", count: 157, percentage: 6 }
  ];

  const recentActivities = [
    { action: "New course created", user: "Dr. Sarah Johnson", time: "2 hours ago", type: "course" },
    { action: "User registration spike", user: "System", time: "4 hours ago", type: "users" },
    { action: "Server maintenance completed", user: "IT Team", time: "6 hours ago", type: "system" },
    { action: "New teacher verified", user: "Prof. Michael Chen", time: "8 hours ago", type: "verification" }
  ];

  const topCourses = [
    { name: "Introduction to Web Development", students: 1250, completion: 89 },
    { name: "Data Science Fundamentals", students: 980, completion: 76 },
    { name: "Digital Marketing Strategy", students: 750, completion: 92 },
    { name: "Python Programming", students: 650, completion: 84 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">WAcademy system overview and management</p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          System Settings
        </Button>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} from last month</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="courses">Course Management</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  User Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userBreakdown.map((user, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{user.role}</span>
                      <span>{user.count} ({user.percentage}%)</span>
                    </div>
                    <Progress value={user.percentage} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Top Performing Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCourses.map((course, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{course.name}</span>
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Completion Rate</span>
                      <span>{course.completion}%</span>
                    </div>
                    <Progress value={course.completion} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent System Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600">by {activity.user}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">User Management</h2>
            <div className="flex gap-2">
              <Button variant="outline">Export Data</Button>
              <Button>Add User</Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <UserCheck className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">User Management Interface</h3>
                <p className="text-gray-600">Advanced user management tools will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Course Management</h2>
            <div className="flex gap-2">
              <Button variant="outline">Course Analytics</Button>
              <Button>Review Pending</Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <GraduationCap className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Course Management Tools</h3>
                <p className="text-gray-600">Comprehensive course oversight and management interface</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Server Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-600 font-semibold">All Systems Operational</div>
                <p className="text-sm text-gray-600 mt-2">Uptime: 99.9%</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Database Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-600 font-semibold">Healthy</div>
                <p className="text-sm text-gray-600 mt-2">Response time: 45ms</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Storage Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-yellow-600 font-semibold">78% Used</div>
                <Progress value={78} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
