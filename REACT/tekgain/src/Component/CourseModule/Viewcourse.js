import React, { useState } from "react";
import "./Viewcourse.modules.css";
const ViewCourse = () => {
  const initialValues = {
    courseId: "",
  };
  const [ViewCourse, setViewCourse] = useState(initialValues);

  const handleChange = (e) => {
    setViewCourse({ ...ViewCourse, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ViewCourse.courseId) return;
    console.log(ViewCourse);
    setViewCourse(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">View Course By Id</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>

          <input
            className="input-box"
            type="text"
            name="courseId"
            value={ViewCourse.courseId}
            onChange={handleChange}
          />
        </div>

        <br />
        <button class="btn btn-danger m-2">View Course</button>
      </form>
    </div>
  );
};
export default ViewCourse;