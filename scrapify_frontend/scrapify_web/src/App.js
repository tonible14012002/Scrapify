import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import NoHeaderLayout from "./layouts/NoHeaderLayout/index.js";
import { privateRoutes } from "./router/routes";
import AuthGuard from "./auth/AuthGuard";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <AuthGuard>
      <Routes>
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || DefaultLayout;
          return (
            <Route 
              key={index}
              path={route.path}
              element={
                <Layout>
                  <ScrollToTop>
                    <Page/>
                  </ScrollToTop>
                </Layout>
              }
            />
          )
        })}
        <Route
          path="*"
          element={
            <NoHeaderLayout>
            <div>
              not found
            </div>
            </NoHeaderLayout>
          }
        />
      </Routes>
    </AuthGuard>
  );
}

export default App;
