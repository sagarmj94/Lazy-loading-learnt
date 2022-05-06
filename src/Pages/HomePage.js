import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Banner from "../components/Banner/Banner";
// import CoinsTable from "../components/CoinsTable";
import ErrorFallback from './../components/ErrorBoundries';

const CoinsTable =React.lazy(()=>import("../components/CoinsTable"));

const Homepage = () => {



  return (
    <div>
      <Banner />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
      <Suspense fallback={<div>Loading...</div>}>
      <CoinsTable />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Homepage;
