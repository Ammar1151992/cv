import { Field, FieldArray } from "formik";
import { Col, Row, Space, Button, Typography,Layout} from 'antd';
import React from 'react'
import CustomInput from "./costumInput";



const JobHistory = ({values}) => (
    <FieldArray name="historyArray">
        {({ push, remove }) => (
            <>

                {values.historyArray.map((_, index) => (
                    <div key={index}>
                         <Row>
                            <Col>
                             <h4>Job History_{index + 1}</h4>
                            </Col>
                        </Row>
                        <Space direction="horizontal">
                            <Typography >Start Job</Typography>
                            <Field 
                                title="Start"
                                name={`historyArray[${index}].jobHistoryStart`}
                                type="date"
                                as={CustomInput}
                            />
                                <Typography>End Job</Typography>

                            <Field
                                title="End"
                                name={`historyArray[${index}].jobHistoryEnd`}
                                type="date"
                                as={CustomInput}
                            />
                        </Space>
                        <Typography>Job Description</Typography>

                        <Field
                            fullWidth
                            title="Job Description"
                            name={`historyArray[${index}].description`}
                            type="textarea"
                            as={CustomInput}
                        />
                       
                        <Button onClick={() => remove(index)}>Remove</Button>
                    </div>
                ))}
                <Space direction="horizontal">
                    <Button
                        onClick={() =>
                            push({
                                jobHistoryStart: "",
                                jobHistoryEnd: "",
                                description: "",
                            })
                        }
                    >Add more</Button>
                </Space>
            </>
        )}
    </FieldArray>
);

export default JobHistory;
