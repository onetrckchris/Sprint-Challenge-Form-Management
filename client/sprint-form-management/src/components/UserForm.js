import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({touched, errors}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div>
            <Form>
                <Field type="text" name="username" placeholder="Username" autoComplete="off" />
                <p>{touched.username && errors.username}</p>
                <Field type="password" name="password" placeholder="Password" autoComplete="off" />
                <p>{touched.password && errors.password}</p>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default withFormik({
    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required().min(6),
        password: Yup.string().required().min(6)
    }),
    handleSubmit(values, formikBag) {
        formikBag.resetForm();
        console.log(values);
        axios.post('http://localhost:5000/api/register', values)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                formikBag.props.history.push('/food');
            })
            .catch(error => console.log(error))
    }
})(UserForm);