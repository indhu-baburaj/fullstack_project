
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-logout when component mounts
    if (isAuthenticated) {
      logout();
    }
  }, [logout, isAuthenticated]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-xl">Successfully Logged Out</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            You have been successfully logged out of your account.
          </p>
          <div className="space-y-2">
            <Button onClick={handleGoHome} className="w-full">
              Go to Homepage
            </Button>
            <Button onClick={handleLogin} variant="outline" className="w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Login Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
