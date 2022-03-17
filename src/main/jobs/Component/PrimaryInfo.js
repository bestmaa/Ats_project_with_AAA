import { MyInput, MySelect, MyTextField } from '../../FormElements/MyFormElement';
import React  from 'react';
		function PrimaryInfo(){
	     return (
                 <>
			<MyTextField name="Job Description" use={true} width="300px" />
			<MyTextField name="Key Skills" use={true} width="300px" />
			{/* <input type="file" id="myfile" name="myfile" style={{ marginLeft: '250px' }} /> */}
			<MyTextField name="Desired Candidate Profile" width="300px" />
			<MyInput name="Locations" use={true} width="300px" />
			<MyInput name="Number Of Openings" use={true} width="300px" />
			<div className="flex flex-row">
				<b className="p-10" style={{ width: '300px' }}>
					Required Experience
				</b>
				<MySelect name="Min" data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
				<MySelect name="Max" data={[1, 2, 3, 4, 5, 6]} />
			</div>
			<div className="flex flex-row">
				<b className="p-10" style={{ width: '300px' }}>
					Salary Range
				</b>
				<select className="p-10" name="salaryType">
					<option>INR</option>
					<option>USD</option>
				</select>
				<input type="text" placeholder="Min" className="p-10 ml-20" name="salaryMin" />
				<input type="text" placeholder="Max" className="p-10 ml-20" name="salaryMax" />
				<select className="p-10  ml-20" name="salaryMonthOrAnnum">
					<option>per annum</option>
					<option>per month</option>
				</select>
			</div>
			<MySelect name="Job Owners" data={['demo1', 'demo2']} width="300px" />
			<MySelect name="Assigned Users" data={['Any', 'demo2']} width="300px" />
			<MySelect name="Workflow" data={['demo1', 'demo2']} width="300px" />
			<MySelect name="Assessment Template" data={['demo1', 'demo2']} width="300px" />
		</>
	);
			};
export default PrimaryInfo;