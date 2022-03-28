import React, { useState } from "react";
import AlertMsg from "../FormElements/AlertMsg";
import { MyInput, MySelect, MyTextField } from "../FormElements/MyFormElement";
import MyLoader from "../FormElements/MyLoader";
import { Receive } from "../FormElements/MySomeFunction";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import * as yup from "yup";

function AddDepartmrnt() {
  let [Color, setColor] = useState("black");
  let [Loader, setLoader] = useState(false);
  let [alertMsg, setAlertMsg] = useState(false);

  let formData=[{name:"Add Department"},{name:"Account Manager"}]

  let formik = useFormik({
    initialValues: {
      AddDepartment: "",
      AccountManager: "",
      Address:""
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: yup.object({
      AddDepartment: yup.string().required(),
    }),
  });

  return (
    <>
      {Loader && <MyLoader />}
      {alertMsg && <AlertMsg Msg={alertMsg} close={() => setAlertMsg(false)} />}
      <div className="shadow-6 lg:w-1/2 sm:w-full ml-auto mr-auto p-20">
        <h2 className="text-center border-b-1 m-10">Add Department </h2>
        <div className="flex justify-between bg-slate-700 rounded-lg text-yellow-100 p-5 rounded-6 bg-opacity-75 m-10">
          <h4>Department Details:</h4>
          <i className="text-10">
            <b className="text-red">*</b>indicates required fields
          </i>
        </div>
        <form id="AddDepartmrnt" onSubmit={formik.handleSubmit}>
          {/* {console.log(Boolean(formik.errors.AddDepartment))} */}
          {/* {console.log(formik.handleBlur())} */}
          <div className="flex flex-col">
            <TextField
              fullWidth
              label="Add Department"
              name="AddDepartment"
              onBlur={formik.handleBlur}
              error={formik.touched.AddDepartment && Boolean(formik.errors.AddDepartment)}
              
              helperText={formik.errors.AddDepartment}
              value={formik.values.AddDepartment}
              onInput={formik.handleChange}
            />

            <MySelect name="Parent Customer" data={[]} width="300px" />
            <TextField
              fullWidth
              label="Account Manager"
              name="AccountManager"
              value={formik.values.AccountManager}
              onInput={formik.handleChange}
            />
            <TextField
              fullWidth
              label="Address"
              name="Address"
              helperText={formik.errors.Address}
              value={formik.values.Address}
              onBlur={formik.handleBlur}
              error={formik.touched.Address && Boolean(formik.errors.Address)}
              onInput={formik.handleChange}
            />
            
            {/* <MyTextField name="Address" width="300px" /> */}
            <MyInput name="City" width="300px" />
            <MyInput name="Email Id" width="300px" />
            <MyInput name="Telephone 1" width="300px" />
            <MyInput name="Telephone 2" width="300px" />
            <MyInput name="Postal Code" width="300px" />
            <MyInput name="Web URL" width="300px" />
            <MySelect name="Job Sector" width="300px" />
            <MyInput name="Segment" width="300px" />
            <MyInput name="Skill" width="300px" />
            <MyInput name="Internal Customer Code" width="300px" />
            <MyTextField name="Internal Info" width="300px" />
            <MyTextField name="Customer Profile" width="300px" />
            <MyInput name="Guarantee Period" width="300px" />
            <MyInput name="Payout Percentage" width="300px" />
            <MyInput name="Payout Terms" width="300px" />
            <MyInput name="Customer Contact" width="300px" />
            <input
              type="submit"
              value="Create"
              className="p-10 cursor-pointer m-10 "
            />
          </div>
        </form>
      </div>
    </>
  );
}



export default AddDepartmrnt;
