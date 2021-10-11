import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPages";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import UsersPage from "../pages/admin/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import roles from "../helpers/roles";
import routes from "../helpers/routes";

export default function AppRouter() {
  return (
    // <Router>

    <Switch>
      <PublicRoute exact path={routes.home} component={HomePage} />
      <PublicRoute exact path={routes.login} component={LoginPage} />
      <PublicRoute exact path={routes.register} component={RegisterPage} />
      <PrivateRoute exact path={routes.account} component={AccountPage} />
      <PrivateRoute exact path={routes.projects} component={ProjectsPage} />
      <PrivateRoute exact path={routes.project()} component={ProjectPage} />
      <PrivateRoute
        hasRole={roles.admin}
        exact
        path={routes.admin.users}
        component={UsersPage}
      />

      <Route exact path="*" component={NotFoundPage} />
    </Switch>

    //</Router>
  );
}
