import { BrowserRouter, Routes } from "react-router";
import { PublicRoutes } from "./routes/public.routes.jsx";
import LatestEvents from "./components/Sections/Home/LatestEvents.jsx";
function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
      <LatestEvents />
    </BrowserRouter>
  );
}

export default App;
