import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import register from "../../services/register";

const validateFields = values => {
    const errors = {};

    if (!values.password) {
        errors.password = "Required password"
    }
    if (!values.username) {
        errors.username = "Required username"
    }
    if (values.password !== values.password_confirmation) {
        errors.password_confirmation = "Password confirmation doesn't match"
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 8 characters long"
    }
    return errors;
}


export default function Register() {
    const [registered, setRegistered] = useState(false);
    if (registered) {
        return <h4>Thanks for registering! 😁</h4>
    }

    return <>

        <Formik initialValues={{
            username: "",
            password: "",
            password_confirmation: ""
        }}
            validate={validateFields}

            onSubmit={(values, { setFieldError}) => {
                return register(values)
                .then(() => {
                setRegistered(true);
                })
                .catch(() => {
                              setFieldError("username", "There was an error");
                          });
            }}
        >
            {({ isSubmitting }) => (

                <Form className="form-log">

                    < Field
                        className="username-log"
                        type="text"
                        name="username"
                        placeholder="username"
                    />
                    <ErrorMessage name="username" component="small" className="form-error" />

                    < Field
                        className="password-log"
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                    <ErrorMessage name="password" component="small" className="form-error" />

                    < Field
                        className="password-log"
                        type="password"
                        name="password_confirmation"
                        placeholder="password confirmation"
                    />
                    <ErrorMessage name="password_confirmation" component="small" className="form-error" />

                    <button className="btn" type="submit" disabled={isSubmitting}>Sign Up</button>
                </Form>
            )}
        </Formik>
    </>

}

