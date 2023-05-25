import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signupMiddleware } from '../redux/user/userAction';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmpassword: '',
  gender: '',
};

const validationSchema = yup.object({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  email: yup.string().required('Required').email('Invalid Email'),
  password: yup.string().required('Required'),
  confirmpassword: yup.string().required('Required'),
  gender: yup.string().required('Required'),
});

export const SignupComponent = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    dispatch(signupMiddleware(values));
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-60">
        <Row>
          <Col>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ setFieldValue }) => (
                <Form>
                  <h2 className="text-center mb-4">Signup</h2>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>First Name</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter your firstname"
                    />
                    <ErrorMessage name="firstname" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Enter your lastname"
                    />
                    <ErrorMessage name="lastname" component="div" className="text-danger" />
                  </BootstrapForm.Group>

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

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Enter your password again"
                    />
                    <ErrorMessage name="confirmpassword" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Gender</BootstrapForm.Label>
                    <div>
                      <label>
                        <Field type="radio" name="gender" value="male" />
                        Male
                      </label>
                    </div>
                    <div>
                      <label>
                        <Field type="radio" name="gender" value="female" />
                        Female
                      </label>
                    </div>
                    <ErrorMessage name="gender" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                  <br />

                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

