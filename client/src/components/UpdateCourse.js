import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Form from "./Form";
import { Context } from "../Context";

function UpdateCourse() {
    const context = useContext(Context)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [author, setAuthor] = useState('');
    const [errors, setErrors] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        context.data.getCourse(id)
            .then(response => {
                if (response.course.userId === context.authenticatedUser.id) {
                    setTitle(response.course.title)
                    setDescription(response.course.description)
                    setEstimatedTime(response.course.estimatedTime)
                    setMaterialsNeeded(response.course.materialsNeeded)
                    setAuthor(`${response.course.User.firstName} ${response.course.User.lastName}`)
                } else {
                    navigate('/forbidden');
                }
            })
            .catch (error => {
                if (error.response.status === 404) {
                    navigate('/notfound');
                } else {
                    navigate('/error')
                }
            })
    }, [context, id, navigate]);

    const submit = () => {
        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId: context.authenticatedUser.userId
        };

        const emailAddress = context.authenticatedUser.emailAddress;
        const password = context.authenticatedUser.password;

        context.data.updateCourse(id, course, emailAddress, password)
            .then(() => {
                console.log('Course has been updated.')
                navigate(`/courses/${id}`)
            })
            .catch (error => {
                if (error.response.status === 401) {
                    navigate('/forbidden');
                } else if (error.response) {
                    setErrors(error.response.data.errors);
                } else {
                    navigate('/error')
                }
            });
    }

    const cancel = () => {
        navigate('/');
    }

    return(
        <React.Fragment>
            <div className="wrap">
                <h2>Update Course</h2>
                <Form
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText='Update Course'
                    elements={() => (
                        <div className="main--flex">
                            <div>
                                <input
                                    id="courseTitle"
                                    name="courseTitle"
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder='Course Title'
                                />

                                <p>By: {author}</p>
                                <textarea
                                    id="courseDescription"
                                    name="courseDescription"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder='Course Description'
                                />
                            </div>
                            <div>
                                <input
                                    id="estimatedTime"
                                    name="estimatedTime"
                                    type="text"
                                    value={estimatedTime}
                                    onChange={e => setEstimatedTime(e.target.value)}
                                    placeholder='Estimated Time'
                                />
                                <textarea
                                    id="materialsNeeded"
                                    name="materialsNeeded"
                                    value={materialsNeeded}
                                    onChange={e => setMaterialsNeeded(e.target.value)}
                                    placeholder='Materials Needed'
                                />
                            </div>
                        </div>
                    )}
                />
            </div>
        </React.Fragment>
    )
}

export default UpdateCourse;