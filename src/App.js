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

// importing pages:
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
        <Route index element={<h1>Overviews</h1>} />
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
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};
