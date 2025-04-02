/**
 * @fileoverview Main application component that handles routing configuration
 * and route rendering. This component serves as the top-level router for the
 * application, managing navigation between different pages.
 * 
 * @module App
 */

import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

/**
 * Main application component that initializes routing and renders routes.
 * 
 * @component
 * @returns {JSX.Element} The main application component with configured routes
 */
function App() {
  const routeConfig = defineRouteConfig();

  return (
    <Routes>
      {renderRoutes(routeConfig)}
    </Routes>
  );
}

/**
 * Defines the routing configuration for the application.
 * Contains all available routes and their corresponding components.
 * 
 * @returns {Array<{path: string, element: JSX.Element}>} Array of route configurations
 */
function defineRouteConfig() {
  return [
    { path: "/", element: <Landing /> },
  ]
}

/**
 * Renders Route components based on the provided route configuration.
 * Maps through the route config array and creates corresponding Route elements.
 * 
 * @param {Array<{path: string, element: JSX.Element}>} routeConfig - Array of route configurations
 * @returns {Array<JSX.Element>} Array of Route components
 */
function renderRoutes(routeConfig) {
  return routeConfig.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    />
  ));
}

export default App;
