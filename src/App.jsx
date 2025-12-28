import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import ManageItems from "./pages/ManageItems/ManageItems";
import Explore from "./pages/Explore/Explore";
import ManageCategories from "./pages/ManageCategory/ManageCategory";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login/login";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const location = useLocation();
  const { auth } = useContext(AppContext);

  const LoginRoute = ({ element }) => {
    return auth.token ? <Navigate to="/dashboard" replace /> : element;
  };

  const ProtectedRoute = ({ element, allowedRoles }) => {
    if (!auth.token) {
      return <Navigate to="/login" replace />;
    }
    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      return <Navigate to="/dashboard" replace />;
    }
    return element;
  };

  return (
    <div>
      {auth.token && <Menubar />}
      <Toaster />

      <Routes>
        {/* Root */}
        <Route
          path="/"
          element={
            auth.token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/explore"
          element={<ProtectedRoute element={<Explore />} />}
        />
        <Route
          path="/orders"
          element={<ProtectedRoute element={<OrderHistory />} />}
        />

        {/* Admin only */}
        <Route
          path="/category"
          element={
            <ProtectedRoute
              element={<ManageCategories />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute
              element={<ManageUsers />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />
        <Route
          path="/items"
          element={
            <ProtectedRoute
              element={<ManageItems />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />

        {/* Login */}
        <Route path="/login" element={<LoginRoute element={<Login />} />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
