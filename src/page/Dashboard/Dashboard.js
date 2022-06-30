import React, { useState } from "react";
import ChartData from "./Charts/ChartData";
import DemoMixPro from "./Charts/ChartData3";
import DemoLine from "./Charts/ChartData_two";

import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="container-fluid py-4">
      <div className="row dashboard">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">weekend</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Today's Money</p>
                <h4 className="mb-0">$53k</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0">
                <span className="text-success text-sm font-weight-bolder">
                  +55%
                </span>
                than last week
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">person</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Today's Users</p>
                <h4 className="mb-0">2,300</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0">
                <span className="text-success text-sm font-weight-bolder">
                  +3%
                </span>
                than last month
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">person</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">New Clients</p>
                <h4 className="mb-0">3,462</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0">
                <span className="text-success text-sm font-weight-bolder">
                  -2%
                </span>
                than yesterday
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">weekend</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Sales</p>
                <h4 className="mb-0">$$103,430</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0">
                <span className="text-success text-sm font-weight-bolder">
                  +5%
                </span>
                than yesterday
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-charts">
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <div className="card z-index-2">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <ChartData />
                </div>
              </div>
              <div className="card-body">
                <h6 className="mb-0">Website Views</h6>
                <p className="text-sm ">Last Campaign Performance</p>
                <div className="d-flex">
                  <i className="material-icons text-sm my-auto me-1">
                    {" "}
                    schedule
                  </i>
                  <p className=""> campaign sent 2 days ago </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <div className="card z-index-2">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div className="bg-gradient-success shadow-primary border-radius-lg py-3 pe-1">
                  <DemoMixPro />
                </div>
              </div>
              <div className="card-body">
                <h6 className="mb-0">Daily Sales</h6>
                <p className="text-sm ">(+15%) increase in today sales.</p>
                <div className="d-flex">
                  <i className="material-icons text-sm my-auto me-1">
                    {" "}
                    schedule
                  </i>
                  <p className=""> updated 4 min ago</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <div className="card z-index-2">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div className="bg-gradient-dark shadow-primary border-radius-lg py-3 pe-1">
                  <DemoLine />
                </div>
              </div>
              <div className="card-body">
                <h6 className="mb-0">Completed Tasks</h6>
                <p className="text-sm ">Last Campaign Performance.</p>
                <div className="d-flex">
                  <i className="material-icons text-sm my-auto me-1">
                    {" "}
                    schedule
                  </i>
                  <p className=""> just updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
