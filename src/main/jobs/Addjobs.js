import React from "react";
import { MyInput, MySelect } from "../FormElements/MyFormElement";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PrimaryInfo from "./Component/PrimaryInfo";
import SecondaryInfo from "./Component/SecondaryInfo";
import CustomerInfo from "./Component/CustomerInfo";
import Status from "./Component/Status";
import { Receive } from "../FormElements/MySomeFunction";

function AddJobs() {
  function formSubmit(e) {
    e.preventDefault();
    let myform = document.querySelector("#demo");
    if (myform.checkValidity()) {
      let formData = new FormData(myform);
      let allFormData = {};
      for (const data of formData.entries()) {
        data[0] = data[0].replace(/ /g, "");
        let newdata = { [data[0]]: data[1] };
        allFormData = { ...allFormData, ...newdata };
      }
      let data = { data: allFormData };
      Receive("api/add-job-postings", data, "POST").then((d) => console.log(d));
    }
  
  }


  return (
    <form id="addjobs">
      <div
        className="shadow-4 p-10 rounded-6 flex flex-col"
        style={{ width: "95%", marginRight: "auto", marginLeft: "auto" }}
      >
        <h2 className="text-center border-b-1 m-10">Add Job Posting </h2>
        <div className="flex justify-between bg-slate-700 text-grey-50 p-5 rounded-6 bg-opacity-75 m-10">
          <h4>All Details:</h4>
          <i className="text-10">
            <b className="text-red-900">*</b>indicates required fields
          </i>
        </div>

        <div className="p-10">
          <MySelect name="Customer Name" data={[]} width="300px" />
          <MyInput name="Referenc Code" width="300px" />
          <MyInput name="Job Title" width="300px" use={true} />
          <hr className="p-10" />
          <Tabs>
            <TabList>
              <Tab>Primary Info</Tab>
              <Tab>Secondary Info</Tab>
              <Tab>Customer Info</Tab>
              <Tab>Status</Tab>
              <Tab>Custom Fields</Tab>
            </TabList>

            <TabPanel forceRender={true}>
              <PrimaryInfo />
            </TabPanel>
            <TabPanel forceRender={true}>
              <SecondaryInfo />
            </TabPanel>
            <TabPanel forceRender={true}>
              <CustomerInfo />
            </TabPanel>
            <TabPanel forceRender={true}>
              <Status />
            </TabPanel>
            <TabPanel forceRender={true}>
              <h2>Custom Fields</h2>
            </TabPanel>
          </Tabs>
          <button
           className="  p-4 m-4 bg-red-400 rounded-4 hover:bg-red-900 hover:text-white" 
           
           onClick={formSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddJobs;
