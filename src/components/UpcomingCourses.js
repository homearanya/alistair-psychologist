import React from "react";

import UpcomingCourse from "./UpcomingCourse";
import FilteredCourses from "./FilteredCourses";

export default function UpcomingCourses() {
  return (
    <section>
      <div className="container">
        <div className="row mosaic-post">
          {/* <div className="col-sm-10 col-sm-push-1"> */}
          <div>
            <FilteredCourses upcomingCourse={UpcomingCourse} />
          </div>
        </div>
      </div>
    </section>
  );
}
