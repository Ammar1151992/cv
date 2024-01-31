import { Field, FieldArray } from "formik";
import { Col, Row, Space, Button, Typography, Layout } from "antd";
import React from "react";
import CustomInput from "./costumInput";

const UniversityFielda = ({ values }) => (
  <FieldArray name="universityfield">
    {({ push, remove }) => (
      <>
        {values.universityfield.map((_, index) => (
          <div key={index}>
            <Row>
              <Col>
                <h4>Education</h4>
              </Col>
            </Row>
            <Typography>Unviversity name</Typography>

            <Field
              title="Unviversity"
              name={`universityfield[${index}].unversityName`}
              type="text"
              as={CustomInput}
            />
            <Space direction="horizontal">
              <Typography>Enrolled</Typography>
              <Field
                title="Start"
                name={`universityfield[${index}].enrolled`}
                type="date"
                as={CustomInput}
              />
              <Typography>Graduated</Typography>

              <Field
                title="End"
                name={`universityfield[${index}].end`}
                type="date"
                as={CustomInput}
              />
              <Field
                type="checkbox"
                name={`universityfield[${index}].undergraduate`}
              />
              <Typography>Undergraduate</Typography>
            </Space>
            <Button onClick={() => remove(index)}>Remove</Button>
          </div>
        ))}
        <Space direction="horizontal">
          <Button
            onClick={() =>
              push({
                unversityName: "",
                enrolled: "",
                end: "",
                undergraduate:""
              })
            }
          >
            Add more
          </Button>
        </Space>
      </>
    )}
  </FieldArray>
);

export default UniversityFielda;
