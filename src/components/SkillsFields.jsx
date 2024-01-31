import { Field, FieldArray } from "formik";
import { Col, Row, Space, Button, Typography, Layout } from "antd";
import React from "react";
import CustomInput from "./costumInput";

const SkillsField = ({ values }) => (
  <FieldArray name="skills">
    {({ push, remove }) => (
      <>
        <Row>
          <Col>
            <h4>Skills</h4>
          </Col>
        </Row>
        {values.skills.map((_, index) => (
          <div key={index}>
            <Typography>skills: {index + 1}</Typography>
            <Field
              title="Start"
              name={`skills[${index}].skil`}
              type="text"
              as={CustomInput}
            />

            <Button onClick={() => remove(index)}>Remove</Button>
          </div>
        ))}
        <Space direction="horizontal">
          <Button
            onClick={() =>
              push({
                skill: "",
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

export default SkillsField;
