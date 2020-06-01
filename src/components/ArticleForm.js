import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import * as yup from "yup";
import {Formik} from "formik";
import environment from "../../relay_env.js";
import Router from "next/router";
import {CreateAticleMutation as CreateArticleMutation} from "../mutations/CreateArticleMutation.js";
import {UpdateAticleMutation as UpdateArticleMutation} from "../mutations/UpdateArticleMutation.js";

const schema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
});

export default function ArticleForm(props) {
  const [creationMode, setCreationMode] = useState(props.article == null);
  const [article, setArticle] = useState(props.article || {
    title: "",
    content: "",
  });
  const [redirect, setRedirect] = useState(false);
  const [fatalError, setFatalError] = useState(null);

  async function submit(formValues, formik) {
    try {
      if (creationMode) {
        const res = await CreateArticleMutation.commit(environment, formValues)
        Router.push(`/article/${res.response.createArticle.article.id}`);
      } else {
        const res = await UpdateArticleMutation.commit(environment, formValues)
        Router.push(`/article/${res.response.updateArticle.article.id}`);
      }
    } catch (e) {
      console.log(e);
      setFatalError(e);
    } finally {
      formik.setSubmitting(false);
    }
  }
  let fatalErrorElement = <></>;
  if (fatalError) {
    fatalErrorElement = <div>Fatal error.</div>;
  }
  return (
    <Formik validationSchema={schema}
            onSubmit={submit}
            initialValues={article}>
      {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          isSubmitting,
        }) => (

        <Form noValidate onSubmit={handleSubmit}>
          {fatalErrorElement}
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text"
                          required
                          value={values.title}
                          name="title"
                          isInvalid={!!errors.title}
                          isValid={touched.title && !errors.title}
                          onBlur={handleBlur}
                          onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Content</Form.Label>
            <Form.Control value={values.content}
                          required
                          as="textarea"
                          rows="10"
                          name="content"
                          isInvalid={touched.content && !!errors.content}
                          isValid={touched.content && !errors.content}
                          onBlur={handleBlur}
                          onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              {errors.content}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary"
                  disabled={isSubmitting}
                  type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
