// importing libraries:
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

// importing stylesheets:
import "./App.css";

// temp:
import { auth } from "./services/firebaseApi";

// importing local components:
import { Unauthorized } from "./components/Unauthorized";
import { SideBar } from "./components/SideBar";

// importing pages:
import Overview from "./pages/Overview";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";
import Histories from "./pages/Histories";

// importing context providers:
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Unauthorized>
            <Root />
          </Unauthorized>
        }
      >
        <Route index element={<Overview />} />
        <Route path="incomes" element={<Incomes />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="histories" element={<Histories />} />

        <Route
          path="profile"
          element={
            <h1 className="flex justify-center w-full h-full bg-white">
              Profile Page!
            </h1>
          }
        />

        <Route path="*" element={<h1>404 page not found!</h1>} />
      </Route>
    )
  );

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;

const Root = () => {
  return (
    <section className="relative flex justify-end">
      <SideBar />
      <Outlet />
    </section>
  );
};
