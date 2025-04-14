import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

// components
import MainLayout from "../components/layout/MainLayout.tsx";

// pages
import Clients from "../pages/clients/Clients.tsx";
import Visits from "../pages/visits/Visits.tsx";
import Reports from "../pages/reports/Reports.tsx";
import Caregivers from "../pages/caregivers/Caregivers.tsx";

const rootRoute = createRootRoute();

const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "mainLayout",
  component: MainLayout,
  // beforeLoad: authGuard,
});

const homeRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: Clients,
});

const visitsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/visits",
  component: Visits,
});

const reportsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/reports",
  component: Reports,
});

const caregiverRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/caregiver",
  component: Caregivers,
});

const clientsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/clients",
  component: Clients,
});

const router = createRouter({
  context: { user: null },
  routeTree: rootRoute.addChildren([
    mainLayoutRoute.addChildren([
      homeRoute,
      visitsRoute,
      reportsRoute,
      caregiverRoute,
      clientsRoute,
    ]),
  ]),
});

export default router;
