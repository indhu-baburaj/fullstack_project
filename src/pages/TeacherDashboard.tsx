
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Upload, 
  Plus, 
  Edit, 
  Eye,
  Calendar,
  TrendingUp,
  Clock,
  Award,
  Settings,
  HelpCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { title: "My Courses", value: "5", change: "+1 this month", icon: BookOpen, color: "text-blue-600" },
    { title: "Total Students", value: "247", change: "+12 this week", icon: Users, color: "text-green-600" },
    { title: "Assignments", value: "23", change: "3 pending review", icon: FileText, color: "text-purple-600" },
    { title: "Avg. Completion", value: "89%", change: "+5% this month", icon: TrendingUp, color: "text-orange-600" }
  ];

  const myCourses = [
    { id: 1, name: "Introduction to Web Development", students: 120, assignments: 8, completion: 85 },
    { id: 2, name: "Advanced JavaScript", students: 67, assignments: 12, completion: 78 },
    { id: 3, name: "React Fundamentals", students: 45, assignments: 6, completion: 92 },
    { id: 4, name: "Node.js Backend", students: 15, assignments: 10, completion: 88 }
  ];

  const recentSubmissions = [
    { student: "Alice Johnson", assignment: "JavaScript Functions", course: "Advanced JavaScript", submitted: "2 hours ago", status: "pending" },
    { student: "Bob Smith", assignment: "React Components", course: "React Fundamentals", submitted: "5 hours ago", status: "reviewed" },
    { student: "Carol Davis", assignment: "HTML Structure", course: "Web Development", submitted: "1 day ago", status: "graded" },
    { student: "David Wilson", assignment: "API Integration", course: "Node.js Backend", submitted: "1 day ago", status: "pending" }
  ];

  const upcomingDeadlines = [
    { title: "JavaScript Quiz", course: "Advanced JavaScript", date: "March 15, 2024", type: "quiz" },
    { title: "React Project", course: "React Fundamentals", date: "March 18, 2024", type: "project" },
    { title: "Final Exam", course: "Web Development", date: "March 25, 2024", type: "exam" }
  ];

  const handleCreateCourse = () => {
    // For now, show a placeholder - in real app would navigate to course creation
    alert('Course creation feature - Navigate to course creation page');
  };

  const handleUploadMaterials = () => {
    // For now, show a placeholder - in real app would navigate to materials upload
    alert('Materials upload feature - Navigate to materials upload page');
  };

  const handleViewCourse = (courseId: number) => {
    navigate(`/course/${courseId}`);
  };

  const handleEditCourse = (courseId: number) => {
    // For now, show a placeholder - in real app would navigate to course editing
    alert(`Edit course ${courseId} - Navigate to course editing page`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleUploadMaterials}
            className="w-full sm:w-auto"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Materials
          </Button>
          <Button 
            onClick={handleCreateCourse}
            className="w-full sm:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/profile')}
            className="w-full sm:w-auto"
          >
            <Settings className="h-4 w-4 mr-2" />
            Profile
          </Button>
        </div>
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
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="calendar">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>My Courses</CardTitle>
                  <CardDescription>Manage your active courses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{course.name}</h3>
                        <p className="text-sm text-gray-600">{course.students} students • {course.assignments} assignments</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Completion Rate</span>
                            <span>{course.completion}%</span>
                          </div>
                          <Progress value={course.completion} />
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleViewCourse(course.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleEditCourse(course.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-sm">{deadline.title}</h4>
                        <p className="text-xs text-gray-600">{deadline.course}</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {deadline.date}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/help')}
                  >
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help Center
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/settings')}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
              <CardDescription>Review and grade student assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSubmissions.map((submission, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{submission.assignment}</h4>
                      <p className="text-sm text-gray-600">by {submission.student} • {submission.course}</p>
                      <p className="text-xs text-gray-500">{submission.submitted}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        submission.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {submission.status}
                      </span>
                      <Button 
                        size="sm"
                        onClick={() => alert('Navigate to assignment review page')}
                      >
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Upload className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Course Materials</h3>
                <p className="text-gray-600 mb-4">Upload and manage course materials, videos, and resources</p>
                <Button onClick={handleUploadMaterials}>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Materials
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Teaching Schedule</h3>
                <p className="text-gray-600 mb-4">View your teaching schedule and upcoming classes</p>
                <Button onClick={() => alert('Navigate to calendar view')}>
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeacherDashboard;
