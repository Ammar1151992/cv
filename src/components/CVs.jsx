import { Typography, Button } from "antd"; // Import Select from antd
import JobHistory from "./JobHistoryFields";
import CustomInput from "./costumInput";
import SkillsField from "./skillsFields";
import UniversityFielda from "./UniversityFields";
import { Formik, Form, Field } from "formik";
import { object, string, array, date, boolean } from "yup";


const validation= object({
  fullName: string().required('required'),
  email: string().email('Invalid email').required('required'),
  phoneNumber: string().required('required'),
  location: string().required('required'),
  historyArray: array(
    object({
      jobHistoryStart: date().required('required'),
      jobHistoryEnd: date().required('required'),
      description: string().required('required'),
    })
  ),
  skills: array(object().shape({
    skil: string().required('required')
  })),
  universityfield: array(object({
    unversityName:string().required('required'),
    enrolled: date().required('required'),
    end: date().required('required'),
    undergraduate: boolean().required('required').isTrue(),
  }))
})
const FormFields = () => {
  return (
    <>
      <div>
        <h1>Write Your CV in a special way</h1>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            location: "",
            historyArray: [
              {
                jobHistoryStart: '',
                jobHistoryEnd: "",
                description: "",
              },
            ],
            skills: [{
              skil: ""
            }],
            universityfield: [{
              unversityName: "",
              enrolled: "",
              end:"",
              undergraduate: false
            }]
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log("This is values", values);
            return new Promise((res) => setTimeout(res, 2500));
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <Typography>Full Name</Typography>
              <Field
                title="Full Name"
                name="fullName"
                type="text"
                as={CustomInput}
              />

              <Typography>Email</Typography>
              <Field title="Email" name="email" type="text" as={CustomInput} />

              <Typography>Phone Number</Typography>
              <Field
                title="Phone Number"
                name="phoneNumber"
                type="text"
                as={CustomInput}
              />

              <Typography>Location</Typography>
              <Field
                title="Location"
                name="location"
                type="text"
                as={CustomInput}
              />
              <UniversityFielda values={values}/>
              <JobHistory values={values} />
              <SkillsField values={values} />
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "saving" : "save"}
              </Button>
              <pre>{JSON.stringify({values}, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormFields;
