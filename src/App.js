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
import Profile from "./pages/Profile";

// importing context providers:
import { UserContextProvider } from "./contexts/UserContext";

function App() {
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
        <Route
          index
          element={
            <Loading duration={1000}>
              <Profile />
            </Loading>
          }
        />
        <Route
          path="incomes"
          element={
            <Loading duration={1000}>
              <Incomes />
            </Loading>
          }
        />
        <Route
          path="expenses"
          element={
            <Loading duration={1000}>
              <Expenses />
            </Loading>
          }
        />
        <Route
          path="histories"
          element={
            <Loading duration={1000}>
              <Histories />
            </Loading>
          }
        />

        <Route
          path="*"
          element={
            <Loading duration={1000}>
              <h3 className="flex min-h-screen w-full items-center justify-center bg-slate-300 text-3xl font-semibold text-red-700 md:w-[calc(100%-16rem)]">
                404 page not found!
              </h3>
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
