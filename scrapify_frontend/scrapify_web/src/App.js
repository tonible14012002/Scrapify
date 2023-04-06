import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import NoHeaderLayout from "./layouts/NoHeaderLayout/index.js";
import { privateRoutes, publicRoutes } from "./router/routes";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/authContext";
import AuthGuard from "./auth/AuthGuard";
import { SyncProvider } from "./context/SyncContext";

function App() {

  return (
      <AuthProvider>
        <SyncProvider>
          <Routes>
            {privateRoutes.map((route, index) => {
              const Page = route.component
              const Layout = route.layout || DefaultLayout
              return (
                <Route 
                  key={index}
                  path={route.path}
                  element={
                    <AuthGuard>
                      <Layout>
                        <ScrollToTop>
                          <Page/>
                        </ScrollToTop>
                      </Layout>
                    </AuthGuard>
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
        </SyncProvider>
      </AuthProvider>
  );
}

export default App;
