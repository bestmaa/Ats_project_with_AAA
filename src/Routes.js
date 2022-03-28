
import Demo from "./Demo";
import AddCustomer from "./main/Customer/AddCustomer";
import AddDepartmrnt from "./main/Department/AddDepartment";
import ViewDepartment from "./main/Department/ViewDepartment";
import AddJobs from "./main/jobs/Addjobs";
import PrimaryInfo from "./main/jobs/Component/PrimaryInfo";
// import AddCustomer from "./Main/Customers/AddCustomer";



export let Navigate = [
    {
        id: "demo",
        path: "/demo",
        element: <Demo />
    },
     {
         id: "jobs",
         path: "/job/add",
         element: <AddJobs />
     },
     {
         id: "primaryinfo",
         path: "/jobs/primaryinfo",
         element: <PrimaryInfo />
     },
     {
         id: "customers-add",
         path: "/customers/add",
         element: <AddCustomer />
     },
     {
         id: "departmrnt-add",
         path: "/department/add",
         element: <AddDepartmrnt />
     },
     {
         id: "departmrnt-view",
         path: "/department",
         element: <ViewDepartment />
     },

]
