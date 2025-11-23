import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { CiDeliveryTruck } from "react-icons/ci";
const DashBoardLayout = () => {
    return (
      <div className="w-11/12 mx-auto drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">Navbar Title</div>
          </nav>
          {/* Page content here */}
          <Outlet />
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-16 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow mr-50">
              {/* List item */}
              <li>
                <Link
                  to="/"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </Link>
              </li>

              <li data-tip="Payments History">
                <span>
                  <NavLink
                    to="/dashboard/mypercels"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Percles"
                  >
                    <CiDeliveryTruck className="my-1.5 inline-block size-4" />

                    <span className="is-drawer-close:hidden">My Percles</span>
                  </NavLink>
                </span>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip=" Payments History"
                >
                  <svg
                    fill="#000000"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    className="my-1.5 inline-block size-5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M97.28,269.454v38.533H76.268c-7.068,0-12.8,5.731-12.8,12.8c0,7.069,5.732,12.8,12.8,12.8H97.28v9.494 c0,7.069,5.732,12.8,12.8,12.8c7.068,0,12.8-5.731,12.8-12.8v-10.46c24.818-3.843,41.244-18.936,41.244-39.329v-8.174 c0-20.393-16.426-35.488-41.244-39.331v-38.533h21.012c7.068,0,12.8-5.731,12.8-12.8c0-7.069-5.732-12.8-12.8-12.8H122.88v-9.494 c0-7.069-5.732-12.8-12.8-12.8c-7.068,0-12.8,5.731-12.8,12.8v10.523c-24.517,4.027-41.244,19.615-41.244,40.01v7.432 C56.036,250.516,72.462,265.612,97.28,269.454z M122.88,271.871c8.85,2.134,15.644,6.597,15.644,13.245v8.174 c0,6.647-6.794,11.11-15.644,13.244V271.871z M81.636,222.693c0-6.87,6.879-11.572,15.644-13.853v34.528 c-8.85-2.134-15.644-6.597-15.644-13.244V222.693z"></path>{" "}
                            <path d="M499.2,115.2H12.8C5.732,115.2,0,120.931,0,128v256c0,7.069,5.732,12.8,12.8,12.8h486.4c7.068,0,12.8-5.731,12.8-12.8 V128C512,120.931,506.268,115.2,499.2,115.2z M486.4,371.2H25.6V140.8h460.8V371.2z"></path>{" "}
                            <path d="M218.24,215.68h131.84c7.068,0,12.8-5.731,12.8-12.8c0-7.069-5.732-12.8-12.8-12.8H218.24c-7.068,0-12.8,5.731-12.8,12.8 C205.44,209.949,211.172,215.68,218.24,215.68z"></path>{" "}
                            <path d="M218.24,266.88H438.4c7.068,0,12.8-5.731,12.8-12.8c0-7.069-5.732-12.8-12.8-12.8H218.24c-7.068,0-12.8,5.731-12.8,12.8 C205.44,261.149,211.172,266.88,218.24,266.88z"></path>{" "}
                            <path d="M438.4,292.48h-74.24c-7.068,0-12.8,5.731-12.8,12.8c0,7.069,5.732,12.8,12.8,12.8h74.24c7.068,0,12.8-5.731,12.8-12.8 C451.2,298.211,445.468,292.48,438.4,292.48z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>

                  <span className="is-drawer-close:hidden">
                    Payments History
                  </span>
                </NavLink>
              </li>
              {/* List item */}
              <li>
                <NavLink
                  to="/dashboard/approve-riders"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Approve Riders"
                >
                  {/* Settings icon */}

                  <svg
                    fill="#000000"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    className="my-1.5 inline-block size-5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M376.608,176.569H261.832c-10.499,0-19.011,8.512-19.011,19.011v12.522l32.246,5.165 c19.328,3.096,32.535,21.34,29.438,40.668c-2.39,14.923-13.991,26.716-28.868,29.348c-2.029,0.359-4.103,0.541-6.164,0.541 c-1.879,0-3.775-0.151-5.637-0.45l-21.016-3.367v30.348c0,10.499,8.512,19.011,19.011,19.011h114.775 c10.499,0,19.011-8.512,19.011-19.011V195.58C395.619,185.081,387.107,176.569,376.608,176.569z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M272.783,227.522l-71.944-11.524l-23.723-52.043l31.446,38.659l15.608,2.5v-55.358c0-16.287-13.203-29.49-29.49-29.49 h-52.59c-16.287,0-29.49,13.203-29.49,29.49v151.54l9.544,76.98L80.741,478.767c-5.063,12.287,0.794,26.351,13.081,31.413 c12.29,5.064,26.352-0.799,31.413-13.081l43.812-106.339c1.579-3.834,2.142-8.012,1.631-12.126l-7.529-60.729h18.688l6.775,51.876 l-23.966,113.169c-2.753,13.001,5.554,25.771,18.554,28.524s25.772-5.556,28.524-18.554l24.819-117.191 c0.565-2.663,0.672-5.402,0.32-8.101l-11.815-90.466l-44.307-7.097c-16.653-2.664-26.257-16.224-27.709-23.49l-12.038-60.296 l26.195,57.47c2.927,6.419,8.87,10.947,15.835,12.062l83.096,13.31c10.296,1.65,20.129-4.482,23.328-14.169 C293.536,242.566,285.55,229.567,272.783,227.522z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle
                            cx="168.617"
                            cy="63.533"
                            r="43.655"
                          ></circle>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M415.544,77.355H278.451c-9.684,0-17.535,7.851-17.535,17.535v47.823c0,9.684,7.851,17.535,17.535,17.535h137.093 c9.684,0,17.535-7.851,17.535-17.535V94.89C433.079,85.206,425.228,77.355,415.544,77.355z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M353.302,0H308.92c-4.655,0-8.428,3.773-8.428,8.428V52.81c0,4.655,3.774,8.428,8.428,8.428h44.382 c4.655,0,8.428-3.773,8.428-8.428V8.428C361.73,3.773,357.957,0,353.302,0z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <span className="is-drawer-close:hidden">Riders</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashBoardLayout;