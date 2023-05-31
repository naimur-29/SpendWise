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

// importing local components:
import { Unauthorized } from "./components/Unauthorized";
import { SideBar } from "./components/SideBar";
import { Loading } from "./components/Loading";

// importing pages:
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";
import Histories from "./pages/Histories";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

// importing context providers:
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  // create router:
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Loading isWithoutSidebar>
            <Unauthorized>
              <Root />
            </Unauthorized>
          </Loading>
        }
      >
        {/* Dashboard Route */}
        <Route
          index
          element={
            <Loading duration={1000}>
              <Dashboard />
            </Loading>
          }
        />
        {/* Incomes Route */}
        <Route
          path="incomes"
          element={
            <Loading duration={1000}>
              <Incomes />
            </Loading>
          }
        />
        {/* Expenses Route */}
        <Route
          path="expenses"
          element={
            <Loading duration={1000}>
              <Expenses />
            </Loading>
          }
        />
        {/* Histories Route */}
        <Route
          path="histories"
          element={
            <Loading duration={1000}>
              <Histories />
            </Loading>
          }
        />

        {/* Error Routes */}
        <Route
          path="*"
          element={
            <Loading duration={1000}>
              <Error />
            </Loading>
          }
        />
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
