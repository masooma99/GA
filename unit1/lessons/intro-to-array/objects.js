console.log('objects lesson')
const myStudent = {
    name: 'Ali',
    phoneNumber:33234567,
    course:'SEB'
}

console.log(myStudent)

//accessing a key value pair
console.log(myStudent.name)
myStudent.course = 'Data Analytics'

console.log(myStudent)

myStudent['course'] = 'SEB';

console.log(myStudent)

//there is no email value in the object but this will create it 
myStudent.email = 'Ali@gmail.com'

console.log(myStudent)

const teacher1 = {
    teacherName: 'Zaid',
    teacherTaught: 'Software Engineering',
    hobby: 'cooking'
}

console.log(
    `Hello my name is ${teacher1.teacherName}, I teach ${teacher1.teacherTaught} and my hobby is ${teacher1.hobby}`
)




const companyData = {
  name: "TechNova Corp",
  founded: 2012,
  departments: [
    {
      name: "Engineering",
      manager: {
        name: "Alice Johnson",
        age: 38,
        contact: {
          email: "alice.j@technova.com",
          phone: "555-0123",
          address: {
            city: "San Francisco",
            zip: 94107,
            coordinates: { lat: 37.7749, lng: -122.4194 }
          }
        }
      },
      employees: [
        {
          id: 101,
          name: "Bob Lee",
          role: "Full Stack Developer",
          skills: ["JavaScript", "React", "Node.js"],
          projects: [
            {
              name: "Project Atlas",
              budget: 120000,
              completed: false,
              tasks: [
                { title: "Build API", done: true },
                { title: "Create UI", done: false }
              ]
            },
            {
              name: "Project Pulse",
              budget: 80000,
              completed: true,
              performance: { bugsFixed: 32, commits: 200, hoursWorked: 450 }
            }
          ]
        },
        {
          id: 102,
          name: "Sara Kim",
          role: "DevOps Engineer",
          skills: ["AWS", "Docker", "Kubernetes"],
          certifications: [
            { name: "AWS Solutions Architect", year: 2020 },
            { name: "CKA", year: 2021 }
          ],
          projects: [
            {
              name: "Project Atlas",
              completed: false,
              environments: ["staging", "production"],
              servers: [
                { name: "staging-server-1", status: "active" },
                { name: "prod-server-2", status: "maintenance" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Marketing",
      manager: {
        name: "David Stone",
        age: 45,
        contact: {
          email: "david.s@technova.com",
          phone: "555-0456",
          address: {
            city: "New York",
            zip: 10001,
            coordinates: { lat: 40.7128, lng: -74.006 }
          }
        }
      },
      employees: [
        {
          id: 201,
          name: "Emily Chen",
          role: "SEO Specialist",
          campaigns: [
            {
              name: "AdBoost Q3",
              performance: { impressions: 120000, clicks: 8000, conversions: 1200 }
            },
            {
              name: "Brand Awareness 2025",
              performance: { impressions: 500000, clicks: 22000, conversions: 4500 }
            }
          ]
        }
      ]
    }
  ]
}

console.log(companyData.departments[1].manager.contact.email)


if(true){ //since it is always true then it'll run the code under it
    let myName = 'Aliaa';
    console.log(myName)
}
//console.log(myName) //it'll not work bec it's outside the {}