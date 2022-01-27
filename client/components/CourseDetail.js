import React from "react";

function CourseDetail() {
    return (
        <main>
            <React.Fragment>
                <div className="actions--bar">
                    <div className="wrap">
                    <React.Fragment>
                        <a className="button" href={`/courses/${param.id}/update`}>Update Course</a>
                        <a className="button" href={"/"}></a>
                    </React.Fragment>
                    <a className="button button--secondary" href={'/'}>Return to course list</a>
                    </div>
                </div>

                <div className="wrap">
                    <h2>Course Detail</h2>
                    <form>
                        <div className="main--flex">
                            <div>
                                <h3 className="course--detail--title">Course</h3>
                                <h4 className="course--name">{course.title}</h4>
                                <p></p>
                            </div>
                            <div>
                                <h3 className="course--detail--title">Estimated Time</h3>
                                <p></p>

                                <h3 className="course--detail--title">Materials Needed</h3>
                                <ul></ul>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        </main>
    )
}

export default CourseDetail;