import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes/public.routes.jsx";
import LatestEvents from "./components/Sections/Home/LatestEvents/LatestEvents.jsx";
function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
      <LatestEvents />
    </BrowserRouter>
  );
}

export default App;
