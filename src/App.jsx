import { TextField } from "@mui/material";
import "./App.css";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React, { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import logo from './img/logo.png'

function App() {
  // fullname
  const [fullName, setfullName] = useState("'");
  const [aDDress, setaDDress] = useState("");
  const [mobNum, setmobNum] = useState("");
  const [emailId, setemailId] = useState("");
  // const [dob, setdob] = useState(0);

  const [isFullnameInvalid, setIsFullnameInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isMobileNumberInvalid, setIsmobileNumberInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleInputValidationforname = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^[A-Za-z\s.]*$/));
    if (!!value.match(/^[A-Za-z\s.]*$/)) {
      // valid
      if (name == "fullName") {
        setfullName(value);
        setIsFullnameInvalid(false);
      }
    } else {
      // invalid
      if (name == "fullName") {
        setfullName(value);
        setIsFullnameInvalid(true);
      }
    }
  };

  const handleInputValidationforaddress = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^[A-Za-z\d\s,]*$/));
    if (!!value.match(/^[A-Za-z\d\s,()]*$/)) {
      // valid
      if (name == "aDDress") {
        setaDDress(value);
        setIsAddressInvalid(false);
      }
    } else {
      if (name == "aDDress") {
        setaDDress(value);
        setIsAddressInvalid(true);
      }
    }
  };
  const handleInputValidationfornumber = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^\d{10,}$/));
    if (!!value.match(/^\d{10,}$/)) {
      if (name == "mobNum") {
        setmobNum(value);
        setIsmobileNumberInvalid(false);
      }
    } else {
      if (name == "mobNum") {
        setmobNum(value);
        setIsmobileNumberInvalid(true);
      }
    }
  };
  const handleInputValidationformail = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^[a-z\d\@.]*$/));
    if (!!value.match(/^[a-z\d\@.]*$/)) {
      // valid
      if (name == "emailId") {
        setemailId(value);
        setIsEmailInvalid(false);
      }
    } else {
      // invalid
      if (name == "emailId") {
        setemailId(value);
        setIsEmailInvalid(true);
      }
    }
  };
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update state when date is selected
  };
  const [gender, setGender] = useState(""); // State to store selected gender

  const handleGenderChange = (event) => {
    setGender(event.target.value); // Update state when gender is selected
  };
  const [Course, setCourse] = useState("");
  const handleCourseChange = (event) => {
    setCourse(event.target.value); // Update state when course is selected
  };

  const isFormIncomplete = !gender || !selectedDate || !Course;

  const DetailsUpload = () => {
    alert("Upload Completed!!!");
  };
  // course
  // const [course, SetCourse] = React.useState("");

  // const handleChange = (event) => {
  //   setCourse(event.target.value);
  // };
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleReset = () => {
    setCourse("");
    setGender("");
    setSelectedDate(null);
    setfullName("");
    setIsFullnameInvalid(false);
    setaDDress("");
    setIsAddressInvalid(false);
    setmobNum("");
    setIsmobileNumberInvalid(false);
    setemailId("");
    setIsEmailInvalid(false);
  };

  return (
    <div className="page">
      <div className="main-container">
        <img style={{width:'160px',paddingTop:'30px',paddingLeft:'20px'}} src={logo} alt="" />
        <h4 className="text-center mb-4 mt-3" style={{ color: "grey" }}>STUDENT
          REGISTRATION FORM
        </h4>
        <div className="container">
          <div className="container-items">
            <div>
              <TextField
                inputProps={{ style: { textTransform: "uppercase" } }}
                name="fullName"
                value={fullName}
                onChange={(e) => handleInputValidationforname(e.target)}
                className="w-100 mt-4"
                id="fullname"
                label="Full Name"
                variant="outlined"
              />
            </div>
            {isFullnameInvalid && (
              <div className=" text-danger fw-bolder">Invalid Name!!</div>
            )}
            <div>
              <TextField
                name="aDDress"
                value={aDDress}
                onChange={(e) => handleInputValidationforaddress(e.target)}
                className="w-100 mt-5"
                id="Address"
                label="Address"
                variant="outlined"
              />
            </div>
            {isAddressInvalid && (
              <div className=" text-danger fw-bolder">Invalid Address!!</div>
            )}
            <div>
              <TextField
                name="mobNum"
                value={mobNum}
                onChange={(e) => handleInputValidationfornumber(e.target)}
                className="w-100 mt-5"
                id="mobile"
                label="Mobile"
                variant="outlined"
              />
            </div>
            {isMobileNumberInvalid && (
              <div className=" text-danger fw-bolder">
                Invalid Mobile Number!!
              </div>
            )}
            <div>
              <TextField
                name="emailId"
                value={emailId}
                onChange={(e) => handleInputValidationformail(e.target)}
                className="w-100 mt-5"
                id="email"
                label="Email"
                variant="outlined"
              />
            </div>
            {isEmailInvalid && (
              <div className=" text-danger fw-bolder">Invalid Email!!</div>
            )}
          </div>
          <div className="container-items">
            {/* Datepicker */}
            <div>
              <h6 className="mt-2">Date of Birth</h6>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className=" w-100"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(props) => <input {...props} readOnly />}
                />
              </LocalizationProvider>
            </div>
            {/* Gender */}
            <div className="mt-3 text-center">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  className="mb-3 text-center"
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {/* course */}
            <div className="mt-4">
              <FormControl className="w-100 ">
                <InputLabel id="demo-simple-select-autowidth-label">
                  Course
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={Course}
                  onChange={handleCourseChange}
                  autoWidth
                  label="Course"
                >
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={21}>Computer Science</MenuItem>
                  <MenuItem value={22}>Commerce</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* button */}
            <div className="mt-4">
              <button
                disabled={
                  isAddressInvalid ||
                  isEmailInvalid ||
                  isFullnameInvalid ||
                  isMobileNumberInvalid ||
                  isFormIncomplete
                }
                type="submit"
                onClick={handleShow}
                className="btn btn-warning me-2 w-100 mb-2"
              >
                Register
              </button>
              <button
                onClick={handleReset}
                className="btn btn-primary border-dark mt-2 w-100"
              >
                Reset
              </button>
            </div>
            {/* modal */}
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Data Stored Successfully!!!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="Details">
                  <div className="Heading">
                    <h5 className="fullname">Full Name</h5>
                    <h5 className="fullname">Adress</h5>
                    <h5 className="fullname">Mobile</h5>
                    <h5 className="fullname">Email</h5>
                    <h5 className="fullname">Date of Birth</h5>
                    <h5 className="fullname">Gender</h5>
                    <h5 className="fullname">Course</h5>
                  </div>
                  <div className="fillers">
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {fullName}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {aDDress}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {mobNum}
                    </h6>
                    <h6 className="ps-3 content">{emailId}</h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {selectedDate ? selectedDate.format("DD-MM-YYYY") : ""}{" "}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {gender}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {Course === 20
                        ? "Biology"
                        : Course === 21
                        ? "Computer Science"
                        : Course === 22
                        ? "Commerce"
                        : ""}
                    </h6>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    handleClose();
                    handleReset();
                    DetailsUpload();
                  }}
                  variant="primary"
                >
                  Upload
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
