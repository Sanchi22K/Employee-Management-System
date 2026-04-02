const employees = [
{
"id":1,
"firstName":"Aarav",
"email":"employee1@example.com",
"password":"123",
"taskCounts":{
"active":2,
"newTask":1,
"completed":1,
"failed":0
},
"tasks":[
{
"active":true,
"newTask":true,
"completed":false,
"failed":false,
"taskTitle":"Prepare report",
"taskDescription":"Compile monthly sales data",
"taskDate":"2024-10-10",
"category":"Reporting"
},
{
"active":true,
"newTask":false,
"completed":false,
"failed":false,
"taskTitle":"Client follow-up",
"taskDescription":"Send follow up emails to clients",
"taskDate":"2024-10-12",
"category":"Communication"
},
{
"active":false,
"newTask":false,
"completed":true,
"failed":false,
"taskTitle":"Team meeting",
"taskDescription":"Discuss project progress",
"taskDate":"2024-10-08",
"category":"Meetings"
}
]
},

{
"id":2,
"firstName":"Sneha",
"email":"employee2@example.com",
"password":"123",
"taskCounts":{
"active":1,
"newTask":0,
"completed":1,
"failed":0
},
"tasks":[
{
"active":true,
"newTask":false,
"completed":false,
"failed":false,
"taskTitle":"Database optimization",
"taskDescription":"Optimize queries for better performance",
"taskDate":"2024-10-11",
"category":"Database"
},
{
"active":false,
"newTask":false,
"completed":true,
"failed":false,
"taskTitle":"Design new feature",
"taskDescription":"Create mockups for the new feature",
"taskDate":"2024-10-09",
"category":"Design"
}
]
},

{
"id":3,
"firstName":"Rohan",
"email":"employee3@example.com",
"password":"123",
"taskCounts":{
"active":1,
"newTask":1,
"completed":0,
"failed":1
},
"tasks":[
{
"active":true,
"newTask":true,
"completed":false,
"failed":false,
"taskTitle":"API integration",
"taskDescription":"Integrate payment API",
"taskDate":"2024-10-12",
"category":"Development"
},
{
"active":false,
"newTask":false,
"completed":false,
"failed":true,
"taskTitle":"Server setup",
"taskDescription":"Setup staging server",
"taskDate":"2024-10-07",
"category":"IT"
}
]
},

{
"id":4,
"firstName":"Ananya",
"email":"employee4@example.com",
"password":"123",
"taskCounts":{
"active":2,
"newTask":1,
"completed":1,
"failed":0
},
"tasks":[
{
"active":true,
"newTask":true,
"completed":false,
"failed":false,
"taskTitle":"Write blog post",
"taskDescription":"Create article for company blog",
"taskDate":"2024-10-10",
"category":"Content"
},
{
"active":true,
"newTask":false,
"completed":false,
"failed":false,
"taskTitle":"SEO audit",
"taskDescription":"Analyze website SEO performance",
"taskDate":"2024-10-13",
"category":"Marketing"
},
{
"active":false,
"newTask":false,
"completed":true,
"failed":false,
"taskTitle":"Social media planning",
"taskDescription":"Schedule weekly posts",
"taskDate":"2024-10-08",
"category":"Marketing"
}
]
},

{
"id":5,
"firstName":"Karan",
"email":"employee5@example.com",
"password":"123",
"taskCounts":{
"active":2,
"newTask":2,
"completed":0,
"failed":0
},
"tasks":[
{
"active":true,
"newTask":true,
"completed":false,
"failed":false,
"taskTitle":"QA testing",
"taskDescription":"Test new application features",
"taskDate":"2024-10-11",
"category":"Testing"
},
{
"active":true,
"newTask":true,
"completed":false,
"failed":false,
"taskTitle":"Sprint planning",
"taskDescription":"Prepare next sprint tasks",
"taskDate":"2024-10-14",
"category":"Development"
}
]
}

];
 const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]

  export const setLocalStorage = () =>{
       localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
  }

   export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees, admin}
  }

