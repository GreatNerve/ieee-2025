import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes/public.routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
