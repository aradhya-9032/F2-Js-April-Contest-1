

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((employee) => {
        if(employee.profession === 'developer'){
            console.log(employee)
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee) => {
        if(employee.profession === 'developer'){
            console.log(employee)
        }
    })
  }
  function addData() {
    //Write your code here, just console.log
    const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(newEmployee)
  }
  function removeAdmin() {
    //Write your code here, just console.log
    const otherEmployees = arr.filter((employee) => { 
      return employee.profession !== 'admin'
    })
    console.log(otherEmployees)
  }

  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 1, name: "Hepzi", age: "28", profession: "developer" },
        { id: 2, name: "Asher", age: "22", profession: "developer" },
        { id: 3, name: "Rohan", age: "30", profession: "admin" },
    ]
    const concantArray = []
    arr.forEach((emp) => {
    concantArray.push(emp)
    })

    newArr.forEach((emp) => {
        concantArray.push(emp);
    })
    console.log(concantArray)
  }