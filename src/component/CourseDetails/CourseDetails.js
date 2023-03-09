import React from "react";
import "./CourseDetails.css";

const CourseDetails = ()=> {
  

  return (
    <div className="course__details">
      <div className="img__container--d">
        <img
          className="course__img--d"
          src={}
          alt={}
        />
      </div>

      <div className="course__content--d">
        <span className={X ? "course__status--d" : ""}>
          {X ? "Hot" : null}
        </span>

        <h3 className="course__title--d">{}</h3>
        <p className="course__desc--d">{}</p>
        <span className="course__price--d">{} $</span>

        <div className='catigories--d'>
          {x.map(() => (
            <p>{}</p>
          ))}
        </div>
        <p className="course__students--d">{} students enrolled</p>
        <p className="course__date--d">published: {}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
