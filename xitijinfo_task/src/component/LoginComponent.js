import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';
import { loginMiddleware } from '../redux/user/userAction';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string().required('Required').email('Invalid email'),
  password: yup.string().required('Required'),
});

export const LoginComponent = () => {
  const dispatch = useDispatch();

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const onSubmit = (values) => {
    console.log('values', values);
    dispatch(loginMiddleware());
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-60">
      <Row>
        <Col>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <h2 className="text-center mb-4">Login</h2>
              <BootstrapForm.Group>
                <BootstrapForm.Label>Email</BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group>
                <BootstrapForm.Label>Password</BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </BootstrapForm.Group>
              <br />
              <div className="text-center">
                <Button variant="primary" onClick={clearLocalStorage} className="m-2">
                  Logout
                </Button>
                <Button variant="primary" type="submit" className="m-2">
                  Login
                </Button>
              </div>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};
