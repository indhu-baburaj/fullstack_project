
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Users, 
  AlertCircle,
  CheckCircle2,
  Clock,
  Trash2,
  Settings
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Notifications = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'assignment',
      title: 'New Assignment Submitted',
      message: 'Alice Johnson submitted "React Components Assignment"',
      time: '5 minutes ago',
      read: false,
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Bob Smith sent you a message about the JavaScript course',
      time: '1 hour ago',
      read: false,
      icon: MessageSquare,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'system',
      title: 'Course Update',
      message: 'Your "Web Development" course has been approved by admin',
      time: '2 hours ago',
      read: true,
      icon: CheckCircle2,
      color: 'text-emerald-600'
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Upcoming Deadline',
      message: 'JavaScript Quiz deadline is tomorrow',
      time: '1 day ago',
      read: true,
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      id: 5,
      type: 'student',
      title: 'New Student Enrollment',
      message: '3 new students enrolled in your React course',
      time: '2 days ago',
      read: true,
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  const getFilteredNotifications = () => {
    switch (activeTab) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'assignments':
        return notifications.filter(n => n.type === 'assignment');
      case 'messages':
        return notifications.filter(n => n.type === 'message');
      default:
        return notifications;
    }
  };

  const markAsRead = (id: number) => {
    // In a real app, this would update the notification status
    console.log(`Marking notification ${id} as read`);
  };

  const deleteNotification = (id: number) => {
    // In a real app, this would delete the notification
    console.log(`Deleting notification ${id}`);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Bell className="h-8 w-8" />
            Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </h1>
          <p className="text-gray-600">Stay updated with your latest activities</p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <Settings className="h-4 w-4 mr-2" />
          Notification Settings
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread {unreadCount > 0 && `(${unreadCount})`}
          </TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {getFilteredNotifications().length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Bell className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notifications</h3>
                <p className="text-gray-600">You're all caught up!</p>
              </CardContent>
            </Card>
          ) : (
            getFilteredNotifications().map((notification) => (
              <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50/50' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`p-2 rounded-full bg-gray-100`}>
                        <notification.icon className={`h-4 w-4 ${notification.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm">{notification.title}</h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => markAsRead(notification.id)}
                          className="h-8 w-8 p-0"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteNotification(notification.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Mark All as Read
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Notification Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;
