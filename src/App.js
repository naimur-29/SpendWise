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
import { signOut } from "firebase/auth";
import { auth } from "./services/firebaseApi";

// importing local components:
import Unauthorized from "./components/Unauthorized";
import LandingPage from "./pages/LandingPage";
import { SideBar } from "./components/SideBar";

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
        <Route index element={<h1>Overview</h1>} />
        <Route path="incomes" element={<h1>Incomes</h1>} />
        <Route path="expenses" element={<h1>Expenses</h1>} />
        <Route path="histories" element={<h1>Recent Transactions</h1>} />
        <Route
          path="profile"
          element={
            <>
              <h1>User Profile</h1>
              <button
                onClick={async () => {
                  try {
                    await signOut(auth);
                    console.log("Logout Successful!");
                    window.location.reload();
                  } catch (error) {
                    console.log(error.message);
                  }
                }}
                className="px-12 py-2 bg-white"
              >
                Logout
              </button>
            </>
          }
        />
        <Route path="*" element={<h1>404 page not found!</h1>} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <UserContextProvider>
      <SideBar />
      <Outlet />
    </UserContextProvider>
  );
};
