import React from 'react';
import { MyInput, MySelect } from '../../FormElements/MyFormElement';

function statusSubmit(e){
	e.preventDefault();
	let myform= document.querySelector('#status');
	if(myform.checkValidity()){

		let formData= new FormData(myform);
		let  allFormData = {};
		for (const data of formData.entries()){
			data[0]= data[0].replace(/ /g,'');
		 let newdata =  { [data[0]]: data[1] };
			allFormData = { ...allFormData, ...newdata };
			
		}
		console.log(allFormData);
	} 
	}
function Status() {
	return (
		<>
		<form id = 'status'>
			<MyInput name="Assigned Suppliers" width="300px" />
			<MySelect name="Referral Bounty" width="300px" />
			<MyInput name="Scheduled Close On" width="300px" />
			<div className="flex justify-center">
				<button className="p-10 m-10  bg-cyan-600 rounded-4 hover:bg-cyan-900 hover:text-white"  onClick={statusSubmit}>Create</button>
				<button className="p-10 m-10 bg-red-400 rounded-4 hover:bg-red-900 hover:text-white">Cancel</button>
			</div>
		
		</form>
	</>
	);
	
}

export default Status;
