import { lazy, Suspense } from "react";
import {
  CALCULATE_PAGE,
  DASHBOARD_PAGE,
} from "../../Components/constant/pageConstant";
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const Calculate = lazy(() => import("../Calculate/Calculate"));

export default ({ page }) => {
  switch (page?.type) {
    case DASHBOARD_PAGE:
      return (
        <Suspense fallback="">
          <Dashboard page={page}/>
        </Suspense>
      );
    case CALCULATE_PAGE:
      return (
        <Suspense fallback="">
          <Calculate page={page} />
        </Suspense>
      );
    default:
      return (
        <Suspense fallback="">
          <h1>NotFoun Page</h1>
        </Suspense>
      );
  }
};
