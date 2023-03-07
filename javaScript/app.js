function openNav() {
    document.getElementById("mopileNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mopileNav").style.width = "0";
}


// The lap 

let allEmployee = [];
function Employee(employeeID, employeeFullName, employeeDepartment, employeeLevel, employeeImg = null) {
    this.employeeID = employeeID;
    this.employeeFullName = employeeFullName;
    this.employeeDepartment = employeeDepartment;
    this.employeeLevel = employeeLevel;
    this.employeeImg = employeeImg;
    allEmployee.push(this);
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
Employee.prototype.employeeSalary= function () {
    if (this.employeeLevel == "Senior") {
        return (getRndInteger(1500, 2000) - (getRndInteger(1500, 2000)* (7.5/100)));
    }
    else if (this.employeeLevel == "Mid-Senior") {
        return (getRndInteger(1000, 1500) - (getRndInteger(1000, 1500) * (7.5/100)));
    }
    else if (this.employeeLevel == "Junior") {
        return (getRndInteger(500, 1000) - (getRndInteger(500, 1000) * (7.5/100)));
    }
}
Employee.prototype.render= function () {
    document.write(
        `<p>Employee Name : ${this.employeeFullName} </p> <br>`
    );
    document.write(
        `<p>Employee Salary : ${this.employeeSalary()} </p>`
    );
}

// mainCode

const ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
const lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
const tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
const safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
const omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
const rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
const hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
obj=[ghazi,lana,tamara,safi,omar,rana,hadi];
for (let i=0;i<obj.length;i++){
    document.write("<hr>");
    obj[i].render();
}
document.write("<hr>");