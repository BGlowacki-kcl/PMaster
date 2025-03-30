import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {

  const routeConfig = defineRouteConfig();

  return (
    <Routes>
      {renderRoutes(routeConfig)}
    </Routes>
	);
}

function defineRouteConfig() {
  return [
    { path: "/", element: <Landing /> },
  ]
}

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
