
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Users, Calendar, Award } from 'lucide-react';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'Dr. Sarah Johnson',
      students: 1250,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Prof. Michael Chen',
      students: 980,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      instructor: 'Lisa Rodriguez',
      students: 750,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    },
  ];

  const stats = [
    { icon: Book, label: 'Active Courses', value: '150+' },
    { icon: Users, label: 'Students Enrolled', value: '25,000+' },
    { icon: Calendar, label: 'Hours of Content', value: '5,000+' },
    { icon: Award, label: 'Completion Rate', value: '94%' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to EduVerse</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your gateway to quality education. Learn from industry experts, collaborate with peers, 
          and advance your career with our comprehensive learning platform.
        </p>
        <div className="space-x-4">
          <Button size="lg" variant="secondary">
            Explore Courses
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
            Start Learning
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Featured Courses */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <Button variant="outline">View All Courses</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>By {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">{course.students} students</span>
                  <span className="text-sm font-medium">⭐ {course.rating}</span>
                </div>
                <Button className="w-full">Enroll Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Latest Announcements</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">New AI-Powered Learning Paths Available</CardTitle>
              <CardDescription>March 15, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p>We're excited to introduce personalized learning paths powered by AI to help you achieve your goals faster.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Spring Semester Registration Open</CardTitle>
              <CardDescription>March 10, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Registration for spring semester courses is now open. Don't miss out on our new courses in AI and Machine Learning.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
