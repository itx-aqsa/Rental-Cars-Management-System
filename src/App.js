// import logo from './logo.svg';
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home_Page_Admin from "./Components/Admin/Home_Page_Admin";
import Home_Page_Employee from "./Components/Employee/Home_Page_Employee";
import Home_Page_Customer from "./Components/Customer/Home_Page_Customer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About_Us_Customer from "./Components/Customer/About_Us_Customer";
import Contact_Us_Customer from "./Components/Customer/Contact_Us_Customer";
import Help_Center_Customer from "./Components/Customer/Help_Center_Customer";
import Home_Section1_Customer from "./Components/Customer/Home_Section1_Customer";
import Home_Section2_Customer from "./Components/Customer/Home_Section2_Customer";
import Home_Section3_Customer from "./Components/Customer/Home_Section3_Customer";
import Dashboard_Admin from "./Components/Admin/Dashboard_Admin";
import Employees_Admin from "./Components/Admin/Employees_Admin";
import Vehicles_Admin from "./Components/Admin/Vehicles_Admin";
import Customers_Admin from "./Components/Admin/Customers_Admin";
import Bookings_Admin from "./Components/Admin/Bookings_Admin";
import Brands_Admin from "./Components/Admin/Brands_Admin";
import Feedbacks_Admin from "./Components/Admin/Feedbacks_Admin";
import Dashboard_Employee from "./Components/Employee/Dashboard_Employee";
import Reports_Employee from "./Components/Employee/Reports_Employee";
import Customers_Profile_Employee from "./Components/Employee/Customers_Profile_Employee";
import Reservations_Employee from "./Components/Employee/Reservations_Employee";
import Edit_Customer_Profile_Employee from "./Components/Employee/Edit_Customer_Profile_Employee";
import One_Vehicle_Page_Customer from "./Components/Customer/One_Vehicle_Page_Customer";
import Reservation_Vehicle_Customer from "./Components/Customer/Reservation_Vehicle_Customer";
import Add_Employee_Admin from "./Components/Admin/Add_Employee_Admin";
import Add_Brand_Admin from "./Components/Admin/Add_Brand_Admin";
import Add_Vehicle_Admin from "./Components/Admin/Add_Vehicle_Admin";
import Edit_Vehicle_Admin from "./Components/Admin/Edit_Vehicle_Admin";
import EmployeeState from "./Context/EmployeeContextState";
import BrandsState from "./Context/BrandContextState";
import VehiclesState from "./Context/VehicleContextState";
import CustomerState from "./Context/CustomerContextState";
import ReservationState from "./Context/ReservationsContextState";
import FeedbackState from "./Context/FeedbacksContextState";
import AlertState from "./Context/AlertContextState";
import FrontendLogContextState from "./Context/FrontendLogContextState";
import For_Payment_Stripe from "./Components/Customer/For_Payment_Stripe";
// import { useContext } from "react";
// import { AlertContext } from "./Context/AllContexts";
// import AlertBar from "./Components/Alert";

function App() {
  // const alertcontext = useContext(AlertContext)
  // const { alertData, showAlert, setShowAlert } = alertcontext

  return (
    <>
      <FrontendLogContextState>
        <AlertState>
          <CustomerState>
            <BrandsState>
              <VehiclesState>
                <EmployeeState>
                  <ReservationState>
                    <FeedbackState>
                      <Router>
                        {/* {showAlert&&<AlertBar />} */}
                        <Routes>
                          <Route
                            exact
                            path="/"
                            element={<Home_Page_Customer />}
                          >
                            <Route
                              exact
                              path="/"
                              element={
                                <>
                                  <Home_Section1_Customer />
                                  <Home_Section2_Customer />
                                  <Home_Section3_Customer />
                                </>
                              }
                            />
                            <Route
                              exact
                              path="/customer/aboutus"
                              element={
                                <>
                                  <About_Us_Customer />
                                  <Home_Section3_Customer />
                                </>
                              }
                            />
                            <Route
                              exact
                              path="/customer/contactus"
                              element={
                                <>
                                  <Contact_Us_Customer />
                                  <Home_Section3_Customer />
                                </>
                              }
                            />
                            <Route
                              exact
                              path="/customer/helpandpolicies"
                              element={
                                <>
                                  <Help_Center_Customer />
                                  <Home_Section3_Customer />
                                </>
                              }
                            />
                            <Route
                              exact
                              path="/customer/onevehiclepage"
                              element={
                                <>
                                  <One_Vehicle_Page_Customer />
                                  <Home_Section3_Customer />
                                </>
                              }
                            />
                            <Route
                              exact
                              path="/customer/reservationvehicle"
                              element={
                                <>
                                  <Reservation_Vehicle_Customer />
                                  <Home_Section3_Customer />
                                </>
                              }
                            />
                            {/* <Route
                          exact
                          path="/customer/reservationvehicle"
                          element={
                            <>
                              <For_Payment_Stripe />
                            </>
                          }
                        /> */}
                          </Route>
                          <Route exact path="/signup" element={<SignUp />} />
                          <Route exact path="/login" element={<Login />} />

                          <Route
                            exact
                            path="/admin"
                            element={<Home_Page_Admin />}
                          >
                            <Route
                              exact
                              path="/admin"
                              element={<Dashboard_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/employees"
                              element={<Employees_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/vehicles"
                              element={<Vehicles_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/customers"
                              element={<Customers_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/bookings"
                              element={<Bookings_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/brands"
                              element={<Brands_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/feedbacks"
                              element={<Feedbacks_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/addemployee"
                              element={<Add_Employee_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/addbrand"
                              element={<Add_Brand_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/addVehicle"
                              element={<Add_Vehicle_Admin />}
                            />
                            <Route
                              exact
                              path="/admin/editVehicle"
                              element={<Edit_Vehicle_Admin />}
                            />
                          </Route>

                          <Route
                            exact
                            path="/employee"
                            element={<Home_Page_Employee />}
                          >
                            <Route
                              exact
                              path="/employee"
                              element={<Dashboard_Employee />}
                            />
                            <Route
                              exact
                              path="/employee/reports"
                              element={<Reports_Employee />}
                            />
                            <Route
                              exact
                              path="/employee/customers"
                              element={<Customers_Profile_Employee />}
                            />
                            <Route
                              exact
                              path="/employee/reservations"
                              element={<Reservations_Employee />}
                            />
                            <Route
                              exact
                              path="/employee/editcustomer"
                              element={<Edit_Customer_Profile_Employee />}
                            />
                          </Route>
                        </Routes>
                      </Router>
                    </FeedbackState>
                  </ReservationState>
                </EmployeeState>
              </VehiclesState>
            </BrandsState>
          </CustomerState>
        </AlertState>
      </FrontendLogContextState>
    </>
  );
}

export default App;
