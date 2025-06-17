
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'programming',
    'data-science',
    'design',
    'business',
    'marketing',
  ];

  const courses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      instructor: 'Dr. Sarah Johnson',
      category: 'programming',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 1250,
      rating: 4.8,
      price: '$299',
      description: 'Master modern web development with React, Node.js, and databases.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Prof. Michael Chen',
      category: 'data-science',
      level: 'Beginner',
      duration: '10 weeks',
      students: 980,
      rating: 4.9,
      price: '$249',
      description: 'Learn data analysis, visualization, and machine learning with Python.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'UX/UI Design Masterclass',
      instructor: 'Emma Wilson',
      category: 'design',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 650,
      rating: 4.7,
      price: '$199',
      description: 'Create beautiful and user-friendly interfaces with modern design principles.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop',
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Lisa Rodriguez',
      category: 'marketing',
      level: 'Beginner',
      duration: '6 weeks',
      students: 750,
      rating: 4.6,
      price: '$149',
      description: 'Build effective digital marketing campaigns across multiple channels.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Course Catalog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive collection of courses designed to advance your skills and career.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Input
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category.replace('-', ' ')}
            </Button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="mb-2">
                  {course.category.replace('-', ' ')}
                </Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription>By {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Duration:</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Students:</span>
                  <span>{course.students}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Rating:</span>
                  <span>⭐ {course.rating}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{course.price}</span>
                <Button>Enroll Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No courses found matching your criteria.</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Courses;
