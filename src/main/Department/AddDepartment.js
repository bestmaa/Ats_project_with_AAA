import React, { useState } from 'react'
import AlertMsg from '../FormElements/AlertMsg';
import { MyInput, MySelect, MyTextField } from '../FormElements/MyFormElement'
import MyLoader from '../FormElements/MyLoader';
import { Receive } from '../FormElements/MySomeFunction';

function AddDepartmrnt() {
    let [Color, setColor] = useState("black")
    let [Loader, setLoader] = useState(false)
    let [alertMsg, setAlertMsg] = useState(false)

    function formSubmit(e) {
        e.preventDefault();
        let myForm = document.querySelector('#AddDepartmrnt');
        if (myForm.checkValidity()) {
            setLoader(true)
            let formData = new FormData(myForm);
            let allFormData = {};
            for (const data of formData.entries()) {
                data[0] = data[0].replace(/ /g, '');
                // console.log(data[0], data[1]);
                let newdata = { [data[0]]: data[1] };
                allFormData = { ...allFormData, ...newdata };
            }
            // console.log(allFormData);
            let mynewData = { data: allFormData }
            // console.log("DATA",mynewData);
            Receive('api/add-departments', mynewData, 'POST').then(d => { console.log(d); setLoader(false) }).catch(e => {
                setAlertMsg(e.message + " ReTry")
                setLoader(false)
            })
            // dispatch(setCustomer(allFormData));
        } else {
            setAlertMsg("* indicates required fields")
            setColor("red")
        }
    }

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
                <form id="AddDepartmrnt">
                    <div className="flex flex-col">
                        <MyInput name="Add Department" use={true} width="300px" color={Color} />
                        <MySelect name="Parent Customer" data={[]} width="300px" />
                        <MyInput name="Account Manager" width="300px" />
                        <MyTextField name="Address" width="300px" />
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
                            onClick={formSubmit}
                            className="p-10 cursor-pointer m-10 "
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddDepartmrnt