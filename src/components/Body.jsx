import Login from "./Login";
import Browse from "./Browse";
import TermsAndConditions from "./pages/TermsAndConditions";
import HelpCenter from "./pages/HelpCenter";
import LegalNotices from "./pages/LegalNotices";
import Profile from "./pages/Profile";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/terms-and-conditions", element: <TermsAndConditions /> },
    { path: "/help-centre", element: <HelpCenter /> },
    { path: "/legal-notices", element: <LegalNotices /> },
    { path: "/profile", element: <Profile /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default body;
