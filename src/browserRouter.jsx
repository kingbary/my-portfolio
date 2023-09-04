import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/_index";
import Projects from "./routes/_project";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/my-portfolio" element={<Root />}>
      <Route path="projects" element={<Projects />} />
    </Route>
  )
);
