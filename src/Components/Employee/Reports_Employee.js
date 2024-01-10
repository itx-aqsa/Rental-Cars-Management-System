import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import "../../Reports.css";
import { useNavigate } from "react-router-dom";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./Document";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { ReservationContext, CustomerContext, AlertContext } from "../../Context/AllContexts";

const Reports_Employee = () => {
  const navigate = useNavigate();

  const [selectedReport, setSelectedReport] = useState("");
  const [selectedEmailCustomer, setSelectedEmailCustomer] = useState("")
  const [isShown, setSsShown] = useState(false);

  const Context = useContext(ReservationContext);
  const alertcontext = useContext(AlertContext)

  const { showAlert, setShowAlert, alertData, setAlertData } = alertcontext
  const customercontext = useContext(CustomerContext);
  const {
    confirmedReservations,
    setConfirmedReservations,
    fetchAllConfirmedReservations,
  } = Context;
  const { customers, setCustomers, fetchAllCustomers } = customercontext;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllCustomers();
      fetchAllConfirmedReservations();
    } else {
      setShowAlert(true);
        setAlertData({
          severity: "error",
          message: "You have to Logged In into the system!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
      navigate("/Login");
    }
  }, []);

  const dropdownFunction = (event) => {
    setSelectedReport(event.target.value);
    if (event.target.value === "Report for all Customer Reservations") {
      setSsShown(true);
    } else if (event.target.value === "Report for all Confirmed Reservations") {
      setSsShown(false);
    }
    // alert(selectedReport);
  };

  const dropdownselectcustomer = (event) => {
    // alert(selectedReport);
    setSelectedEmailCustomer(event.target.value)
    // alert(event.target.value);
  };

  const generatePDF = () => {};

  const GenerateReport = (e) => {
    e.preventDefault();
    // ReactPDF.renderToStream(<MyDocument />);
    const pdfDoc = new jsPDF();

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(18);

    // Add content to the PDF
    pdfDoc.text("Confirmed Reservations", 70, 22);

    // Draw a border around the content
    const pageWidth = pdfDoc.internal.pageSize.width;
    const pageHeight = pdfDoc.internal.pageSize.height;
    pdfDoc.rect(10, 10, pageWidth - 20, pageHeight - 20); // Adjust the coordinates and size as needed

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(14);

    pdfDoc.text(
      `Total Reservations:   ${confirmedReservations.length}`,
      20,
      35
    );

    const displayFields = [
      "customer",
      "vehicle",
      "startDate",
      "endDate",
      "totalCost",
    ];

    const fieldDisplayNameMap = {
      customer: "Customer",
      vehicle: "Vehicle No.",
      startDate: "Start Date",
      endDate: "End Date",
      totalCost: "Total Cost",
    };

    const headers = displayFields.map((field) => fieldDisplayNameMap[field]);
    const tableData = confirmedReservations.map((reservation) =>
      displayFields.map((header) => {
        if (reservation[header].plateNumber) {
          return reservation[header].plateNumber;
        } else if (reservation[header].name) {
          return reservation[header].name;
        } else {
          return reservation[header];
        }
      })
    );

    // Add table to the PDF
    pdfDoc.autoTable({
      head: [headers],
      body: tableData,
      startY: 40,
    });

    // Save the PDF or open it in a new tab
    pdfDoc.save("report.pdf");

    setShowAlert(true);
        setAlertData({
          severity: "success",
          message: "Report Generated Successfully!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
  };

  const GenerateCustomerReservationsReport = (e) => {
    e.preventDefault();

    const requiredCustomer = customers.filter((cust)=>{
      return cust.email === selectedEmailCustomer
    })

    const customerReservations = confirmedReservations.filter((reservation)=>{
      return reservation.customer._id == requiredCustomer[0]._id
    })


    const pdfDoc = new jsPDF();

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(18);

    pdfDoc.text("Customer Reservations", 70, 22);

    const pageWidth = pdfDoc.internal.pageSize.width;
    const pageHeight = pdfDoc.internal.pageSize.height;
    pdfDoc.rect(10, 10, pageWidth - 20, pageHeight - 20);

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(14);

    pdfDoc.text(`Total Reservations:   ${customerReservations.length}`, 20, 35);

    const displayFields = [
      "customer",
      "vehicle",
      "startDate",
      "endDate",
      "totalCost",
    ];

    const fieldDisplayNameMap = {
      customer: "Customer Name",
      vehicle: "Vehicle No.",
      startDate: "Start Date",
      endDate: "End Date",
      totalCost: "Total Cost",
    };

    const headers = displayFields.map((field) => fieldDisplayNameMap[field]);
    const tableData = customerReservations.map((reservation) =>
      displayFields.map((header) => {
        if (reservation[header].plateNumber) {
          return reservation[header].plateNumber;
        } else if (reservation[header].name) {
          return reservation[header].name;
        } else {
          return reservation[header];
        }
      })
    );

    // // Add table to the PDF
    pdfDoc.autoTable({
      head: [headers],
      body: tableData,
      startY: 40,
    });

    // // Save the PDF or open it in a new tab
    pdfDoc.save("report.pdf");

    setShowAlert(true);
        setAlertData({
          severity: "success",
          message: "Report Generated Successfully!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
  };

  return (
    <div>
      <h2
        style={{ marginLeft: "4%", textAlign: "center", marginBottom: "80px" }}
      >
        Reports
      </h2>
      <form action="">
        <div className="Name_Field">
          <h4 className="reportaddreport_label">Select Report</h4>
          <select
            // value={this.state.selectedOption}
            onChange={dropdownFunction}
            className="name_input"
          >
            <option value="" disabled selected>
              Select the Report Type
            </option>
            <option value="Report for all Confirmed Reservations">
              Report for all Confirmed Reservations
            </option>
            <option value="Report for all Customer Reservations">
              Report for all Customer Reservations
            </option>
          </select>
        </div>

        {isShown && (
          <div className="Name_Field">
            <h4 className="reportselectcustomer_label">Select Customer</h4>
            <select
              // value={this.state.selectedOption}
              onChange={dropdownselectcustomer}
              className="name_input"
              required
            >
              <option value="" disabled selected>
                Select the Customer Email Address
              </option>
              {
                customers.map((cust)=>{
                  return (
                    <option value={cust.email}>{cust.email}</option>
                  )
                })
              }
            </select>
          </div>
        )}

        <div className="buttonaddreport" style={{ marginTop: "100px" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "6%",
              paddingRight: "6%",
              borderRadius: "5px",
              textTransform: "uppercase",
            }}
            onClick={() => {
              navigate("/employee");
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "4%",
              paddingRight: "4%",
              borderRadius: "5px",
              textTransform: "uppercase",
            }}
            onClick={(e)=>{
              if(selectedReport === 'Report for all Confirmed Reservations'){
                GenerateReport(e);
              }
              else if(selectedReport === 'Report for all Customer Reservations'){
                GenerateCustomerReservationsReport(e)
              }
            }}
          >
            Generate Report
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reports_Employee;
