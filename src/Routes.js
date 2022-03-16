
import Demo from "./Demo";
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
         path: "/jobs",
         element: <AddJobs />
     },
     {
         id: "primaryinfo",
         path: "/jobs/primaryinfo",
         element: <PrimaryInfo />
     }

]
