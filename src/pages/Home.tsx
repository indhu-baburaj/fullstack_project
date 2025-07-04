
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Users, Calendar, Award, PlayCircle, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <LoggedInHome />;
  }

  return <LoggedOutHome />;
};

const LoggedOutHome = () => {
  const stats = [
    { icon: Book, label: 'Active Courses', value: '150+' },
    { icon: Users, label: 'Students Enrolled', value: '25,000+' },
    { icon: Calendar, label: 'Hours of Content', value: '5,000+' },
    { icon: Award, label: 'Completion Rate', value: '94%' },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'Dr. Sarah Johnson',
      students: 1250,
      rating: 4.8,
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Prof. Michael Chen',
      students: 980,
      rating: 4.9,
      duration: '10 weeks',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      instructor: 'Lisa Rodriguez',
      students: 750,
      rating: 4.7,
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to EduVerse</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Your gateway to quality education. Learn from industry experts, collaborate with peers, 
            and advance your career with our comprehensive learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="min-w-[160px]">
                Explore Courses
              </Button>
            </Link>
            <Link to="/auth">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 min-w-[160px]"
              >
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Featured Courses */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <Link to="/courses">
            <Button variant="outline">View All Courses</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                <CardDescription>By {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                  <span>{course.students} students</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <Link to="/auth">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of students who are advancing their careers with EduVerse
        </p>
        <Link to="/auth">
          <Button size="lg">Get Started Today</Button>
        </Link>
      </section>
    </div>
  );
};

const LoggedInHome = () => {
  const { user } = useAuth();

  const recentCourses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      progress: 75,
      nextLesson: 'JavaScript Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 45,
      nextLesson: 'Data Visualization',
      instructor: 'Prof. Michael Chen',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Web Development Project',
      course: 'Introduction to Web Development',
      dueDate: 'March 25, 2024',
      type: 'Assignment',
    },
    {
      id: 2,
      title: 'Data Analysis Quiz',
      course: 'Data Science Fundamentals',
      dueDate: 'March 28, 2024',
      type: 'Quiz',
    },
  ];

  const achievements = [
    { title: 'First Course Completed', icon: Award, earned: true },
    { title: 'Week Streak', icon: Calendar, earned: true },
    { title: 'Top Performer', icon: Star, earned: false },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-blue-100">Continue your learning journey</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Book className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-gray-600">Enrolled Courses</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">24h</div>
            <div className="text-sm text-gray-600">Hours Learned</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-gray-600">Certificates</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm text-gray-600">Avg. Grade</div>
          </CardContent>
        </Card>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">By {course.instructor}</p>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Next: {course.nextLesson}</span>
                        <Button size="sm">
                          <PlayCircle className="h-4 w-4 mr-1" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.id} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-sm">{deadline.title}</h4>
                    <p className="text-xs text-gray-600">{deadline.course}</p>
                    <p className="text-xs text-gray-500">{deadline.type}</p>
                  </div>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    {deadline.dueDate}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <achievement.icon 
                    className={`h-6 w-6 ${achievement.earned ? 'text-yellow-500' : 'text-gray-300'}`} 
                  />
                  <span className={`text-sm ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                    {achievement.title}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
