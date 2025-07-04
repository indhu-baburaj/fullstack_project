
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Book, User, MessageSquare, Calendar, FileText, LogOut, Shield, GraduationCap, Users, BarChart3, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const studentNavItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/courses', label: 'Courses', icon: Book },
    { path: '/dashboard', label: 'Dashboard', icon: Calendar },
    { path: '/assignments', label: 'Assignments', icon: FileText },
    { path: '/forums', label: 'Forums', icon: MessageSquare },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const teacherNavItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/teacher-dashboard', label: 'Dashboard', icon: Calendar },
    { path: '/courses', label: 'Courses', icon: Book },
    { path: '/assignments', label: 'Assignments', icon: FileText },
    { path: '/forums', label: 'Forums', icon: MessageSquare },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const adminNavItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/admin-dashboard', label: 'Dashboard', icon: Calendar },
    { path: '/admin/manage-courses', label: 'Courses', icon: Book },
    { path: '/admin/manage-teachers', label: 'Teachers', icon: GraduationCap },
    { path: '/admin/manage-students', label: 'Students', icon: Users },
    { path: '/admin/assignments-overview', label: 'Assignments', icon: FileText },
    { path: '/admin/reports', label: 'Reports', icon: BarChart3 },
  ];

  const getNavItems = () => {
    if (!isAuthenticated) return [];
    
    switch (user?.role) {
      case 'admin':
        return adminNavItems;
      case 'teacher':
        return teacherNavItems;
      case 'student':
      default:
        return studentNavItems;
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">EduVerse</span>
            </Link>
          </div>
          
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-8">
              {getNavItems().map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">
                  Welcome, {user?.name} ({user?.role})
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/auth">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
