import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import { TermsAndPolicy } from "../pages/TermsAndPolicy";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { CreateEvent } from "../pages/CreateEvent";
import { AdminPanel } from "../pages/AdminPanel";
import { Events } from "../pages/Events";
import { MyClubs } from "../pages/MyClubs";
import { MyProfile } from "../pages/MyProfile";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="size-full flex items-center justify-center"><SignUpForm /></div>} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/create-event" 
          element={
            <ProtectedRoute requiredRole="club_head">
              <CreateEvent />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPanel />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/events" 
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/clubs" 
          element={
            <ProtectedRoute>
              <MyClubs />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          } 
        />
        <Route path="/terms-and-policy" element={<TermsAndPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}