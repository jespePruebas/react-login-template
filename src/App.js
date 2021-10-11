import "./styles.css";
import AppRouter from "./routes/AppRoute";
import AuthProvider from "./auth/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layouts/Layout";

/* Component */
export default function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}
