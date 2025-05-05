// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashboard';
import UserDashboard from './Pages/UserDashboard';
import ProjectView from './Pages/ProjectView';
import { useAuth } from './Pages/AuthContext';

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="./login" />;
  if (role && user.role !== role) return <Navigate to="../login" />;
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="./login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>
            <ProjectView />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
