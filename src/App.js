import { Route, Routes } from "react-router-dom";
import "./App.css";
import GroupsProvider from "./components/Providers/GroupsProvider";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <GroupsProvider>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route key={Date.now()} {...route} />;
          })}
        </Routes>
      </Layout>
    </GroupsProvider>
  );
}

export default App;
