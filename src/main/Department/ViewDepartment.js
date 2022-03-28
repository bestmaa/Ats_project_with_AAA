import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Receive } from '../FormElements/MySomeFunction'
import MyTable from '../FormElements/MyTable'

function ViewDepartment() {
    const [TH, setTH] = useState(["SL", "Department Name", "Parent Customer ", "Account Manager", "Customer Entity", "Workflow ", "Rate Slabs", "Jobs", "Contacts", "Project", "Status", "Manage"])
    const [TB, setTB] = useState([])
    useEffect(() => {
        Receive('api/add-departments').then(d => {
            d.data.map((d, i) => {
                setTB(TB=>[...TB, { id: i + 1, name: d.attributes.AddDepartment }])
            })
        })
    }, [])
    console.log("tb",TB);
    return (
        <div className='flex justify-center flex-col items-center'>
            <Link to='/department/add' className='p-5 inline-block text-right border m-2 bg-slate-400 rou'>Add Department</Link>
            <MyTable TH={TH} TD={TB} />
        </div>
    )
}

export default ViewDepartment