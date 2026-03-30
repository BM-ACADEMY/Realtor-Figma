import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PropertyListingPage } from "./pages/PropertyListingPage";
import { PropertyDetailsPage } from "./pages/PropertyDetailsPage";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminProperties } from "./pages/admin/AdminProperties";
import { AdminAddProperty } from "./pages/admin/AdminAddProperty";
import { AdminLeads } from "./pages/admin/AdminLeads";
import { AdminSiteVisits } from "./pages/admin/AdminSiteVisits";
import { AdminSettings } from "./pages/admin/AdminSettings";
import { NotFound } from "./pages/NotFound";
import { AdminLayout } from "./layouts/AdminLayout";
import { MainLayout } from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "properties", Component: PropertyListingPage },
      { path: "properties/:id", Component: PropertyDetailsPage },
    ],
  },
  {
    path: "/admin",
    children: [
      { path: "login", Component: AdminLogin },
      {
        path: "",
        Component: AdminLayout,
        children: [
          { index: true, Component: AdminDashboard },
          { path: "properties", Component: AdminProperties },
          { path: "add-property", Component: AdminAddProperty },
          { path: "leads", Component: AdminLeads },
          { path: "site-visits", Component: AdminSiteVisits },
          { path: "settings", Component: AdminSettings },
        ],
      },
    ],
  },
  { path: "*", Component: NotFound },
]);