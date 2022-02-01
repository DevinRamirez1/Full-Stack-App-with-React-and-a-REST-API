import React from "react";

function CreateCourse() {
    return(
        <main>
            <div className="wrap">
                <h2>Create Course</h2>
                <div className="validation--errors">
                    <h3>Validation Errors</h3>
                    <ul>
                        <li>Please provide a value for "Title"</li>
                        <li>Please provide a value for "Description"</li>
                    </ul>
                </div>
                <form> 
                <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input
                                id="courseTitle"
                                name="courseTitle"
                                type="text"
                            />
                            <p>By</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea
                                id="courseDescription"
                                name="courseDescription"
                            />
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input
                                id="estimatedTime"
                                name="estimatedTime"
                                type="text"
                            />

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea
                                id="materialsNeeded"
                                name="materitalsNeeded"
                            />
                        </div>
                    </div>
                    <button className="button" type="submit">Create Course</button><button className="button button--secondary" onClick={}>Cancel</button>
                </form>
            </div>
        </main>
    )
}

export default CreateCourse;