import React from "react";
import { useRef, useState } from "react";
import Nav from "./Nav";

function AddStudents() {
  const name = useRef();
  const reg = useRef();
  const semester = useRef();
  const cgpa = useRef();
  const [data, setData] = useState({
    name: "",
    reg: "",
    semester: "",
    cgpa: "",
  });
  const [message, setMessage] = useState(false);
  const [err, setErr] = useState(false);
  const [emt, setEmt] = useState(false);

  function addData() {
    let nameValue = name.current.value;
    let regValue = reg.current.value;
    let semesterValue = semester.current.value;
    let cgpaValue = cgpa.current.value;
    if (
      nameValue == "" ||
      regValue == "" ||
      semesterValue == "" ||
      cgpaValue == ""
    ) {
      setEmt(true);
      setTimeout(() => {
        setEmt(false);
      }, 1000);
    } else {
      try {
        fetch("https://jawad.free.beeceptor.com/users", {
          method: "Post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameValue,
            reg: regValue,
            semester: semesterValue,
            cgpa: cgpaValue,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              setErr(true);
            } else {
              response.json();
            }
          })
          .then(() => {
            setMessage(true);
            setTimeout(() => {
              setMessage(false);
            }, 3000);
            setTimeout(() => {
              name.current.value = "";
              reg.current.value = "";
              semester.current.value = "";
              cgpa.current.value = "";
            });
          })
          .catch((error) => {
            console.log("Error", error);
          });
      } catch {
        setErr(true);
      }
    }
  }

  return (
    <>
      <Nav />
      <>
        {emt ? (
          <div className="emptyBox">Please Fill out the Form First!</div>
        ) : (
          ""
        )}
        <div className="addStudentsBox">
          <h1 className="headingOfAddStudents">Add Student</h1>
          {message ? <h4 className="showMsg">Data Sended Succesfully</h4> : ""}
          {err ? <h4>Data Sended Succesfully</h4> : ""}
          <div className="addingData">
            <input
              className="inputField"
              type="text"
              placeholder="Name"
              ref={name}
              required
            />
            <input
              className="inputField"
              type="text"
              placeholder="Registration Number"
              ref={reg}
              required
            />
            <input
              className="inputField"
              type="number"
              placeholder="Semester"
              ref={semester}
              required
            />
            <input
              className="inputField"
              type="text"
              placeholder=" CGPA"
              ref={cgpa}
              required
            />
            <button className="addBtn" onClick={addData}>
              Add Student
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default AddStudents;
