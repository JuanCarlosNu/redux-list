import React from "react";
import lodash from "lodash";

import courses from "../../data/courses.json";
import CourseItem from "../CourseItem/CourseItem.js";
import "./CourseList.css";
import CourseForm from "../CoursesForm/CourseForm.js";

class CourseList extends React.Component {
  constructor() {
    super();

    this.state = {
      courses,
      inputSearch: "",
      sortTerm: "",
      sortOrder: "asc"
    };
  }

  handleInput = event => { 
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const filterd = this.state.courses.filter(c =>
      c.title.toLowerCase().includes(this.state.inputSearch.toLocaleLowerCase())
    );

    const sorted = lodash.orderBy(
      filterd,
      [this.state.sortTerm],
      [this.state.sortOrder]
    );

    return (
      <div className="itemList">
        <CourseForm
          filterd={filterd}
          inputSearch={this.state.inputSearch}
          handleInput={this.handleInput}
        />
        <div className="courses">
          {sorted.length === 0
            ? "not items found"
            : sorted.map(course => (
                <CourseItem key={course.id} course={course} />
              ))}
        </div>
      </div>
    );
  }
}

export default CourseList;
