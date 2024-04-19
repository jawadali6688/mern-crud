import React, { useState, useEffect } from "react";
import Nav from "./Nav";

function ShowStudents() {
  const [students, setStudents] = useState([
    {
      name: "",
      reg: "",
      semester: "",
      cgpa: "",
    },
  ]);
  const [message, setMessage] = useState(false);
  function showData() {
    try {
      fetch( "https://eportal.iub.edu.pk/admissions/applications", {
        method: "GET",
      }).then((allData) => {
        allData.json().then((data) => {
          setStudents(data);
        });
      });
    } catch {
      setMessage(true);
      console.log("Error While Fetching Data", Error);
    }
  }
  useEffect(() => {
    showData();
  }, []);

  function deleteData(id) {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      }).then((allData) => {
        allData.json().then((data) => {
          setStudents(data);
        });
      });
    } catch {
      setMessage(true);
      console.log("Error While Fetching Data", Error);
    }
  }

  return (
    <>
      <Nav />
      <div className="showStudentsBox">
        <h1 className="headingOfShowStudents">
          Student's List
        </h1>
        {message ? <h1>No Data fetched</h1> : ""}

        <table className="studentsList">
          <tbody>
            <tr>
              <th>SR.</th>
              <th>Name</th>
              <th>Registration</th>
              <th>Semester</th>
              <th>CGPA</th>
              <th>Action</th>
            </tr>
            {students?.map((data, i) => {
              return (
                <tr key={i} className="newRowOfTable">
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>{data.reg}</td>
                  <td>{data.semester}</td>
                  <td>{data.cgpa}</td>
                  <td className="actionSpace">
                    <button className="editBtn">Edit</button>
                    <button
                      className="deleteBtn"
                      onClick={() => deleteData(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowStudents;
