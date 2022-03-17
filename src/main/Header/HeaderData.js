let candidateChild = [
    // {
    //     id: "candidate",
    //     to: "/candidate",
    //     name: "demo1",
    // },
    
]
let customersChild = [
    {
        id: "customers",
        to: "/customers/add",
        name: "AddCustomers",
    },
    
]
let jobChild = [
    {
        id: "job",
        to: "/job/add",
        name: "AddJob",
    },
    
]

export let HeaderData = [
    {
        id: "candidate",
        to: "/candidate",
        name: "Candidate",
        Child: [...candidateChild]
    },
    {
        id: "jobs",
        to: "/Jobs",
        name: "Jobs",
        Child: [...jobChild]
    },
    {
        id: "customers",
        to: "/customers",
        name: "Customers",
        Child: [...customersChild]
    },
]