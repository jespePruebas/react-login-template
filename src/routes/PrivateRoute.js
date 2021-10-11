import { Redirect, Route, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

export default function PrivateRoute({ hasRole: role, ...props }) {
  const location = useLocation();
  const { hasRole, isLogged } = useAuth();

  /* Si e usario no existe y Si el rol  del usario es diferente del 
  rol q se indica en la ruta  redirige a homePage*/
  if (role && !hasRole(role)) return <Redirect to={routes.home} />;

  if (!isLogged())
    return (
      <Redirect to={{ pathname: routes.login, state: { from: location } }} />
    );

  return <Route {...props} />;
}
