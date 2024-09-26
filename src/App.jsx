// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layout/Layout";
import Router from "./routers/Router";

function App() {
  return (
    <>
      <Layout>
        <Router />
        {/* <ReactQueryDevtools /> */}
      </Layout>
    </>
  );
}

export default App;
