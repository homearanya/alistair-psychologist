import React from "react";
import UpcomingCourse from "./UpcomingCourse";

export default function UpcomingCourses() {
  return (
    // <section className="ls section_padding_top_100 section_padding_bottom_100 columns_padding_25">
    <section>
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-10 col-sm-push-1"> */}
          <div className="col-sm-8 col-sm-push-2">
            <UpcomingCourse />
            <UpcomingCourse />
            <UpcomingCourse />
          </div>
        </div>
      </div>
    </section>
  );
}
