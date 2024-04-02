import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { NavBarLink } from "./components/NavBarLink";
// Importing the UserProvider context provider which provides data and logic from that data related to the user.
import { UserProvider } from "./themes/UserTheme";
// Importing the ProfileProvider context provider which provides data and logic from that data related to the profile of the user.
import { BookProvider } from "./themes/BookTheme";
import { NavBarLinkProtected } from "./components/NavBarLinkProtected";

export const App = () => {
  return (
    <>
      <UserProvider>
        <BookProvider>
          <BrowserRouter>
            <NavBarLinkProtected />
            <div className="card">
              <Routes>{routes}</Routes>
            </div>
          </BrowserRouter>
        </BookProvider>
      </UserProvider>
    </>
  );
};
