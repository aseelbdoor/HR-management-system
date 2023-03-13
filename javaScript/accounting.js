function collectDep(array){
    let department=Array();
    array.forEach(element => {
        if(!(department.includes(element.employeeDepartment))){
            department.push(element.employeeDepartment);
        }
    });
    return department;
}

function calculation(dep,array){
    let all=new Array();
    for(let i=0;i<dep.length;i++){
        let obj=new Object();
        let numberOfEmployee=0;
        let totalSalary=0;
        array.forEach(x => {
            if (x.employeeDepartment==dep[i]) {
                numberOfEmployee+=1;
                totalSalary+=x.salary;
            }
        });
        obj.employeeNumber=numberOfEmployee;
        obj.salaryAvg=totalSalary/numberOfEmployee;
        obj.salaryTotal=totalSalary;
        all.push(obj);
    }
    return all;
}
function newTd(content){
    let td=document.createElement("td");
    td.textContent=content;
    return td;
}

function Th(content){
    let th=document.createElement('th');
    th.textContent=content;
    return th;
}

function newRow(ty,content){
    let row=document.createElement('tr');
    content.forEach(element => {
        if(ty="td"){
            let td= newTd(element);
            row.appendChild(td);
        }
        else{
            let th= newTh(element);
            row.appendChild(th);
        }
    });
    return row;
}

let conactination = function (dep,array){
    let allArray=[];
    let footer=[];
    let totalNamberOfDepartment=0;
    let totalNumberOfEmployee=0;
    let totalSalary=0;
    let avgSalary=0;
    for(let i=0;i<dep.length;i++){
        let oneArray=new Array();
        totalNamberOfDepartment+=1;
        oneArray.push(dep[i]);
        totalNumberOfEmployee+=array[i].employeeNumber;
        oneArray.push(array[i].employeeNumber);
        avgSalary+=array[i].salaryAvg;
        oneArray.push(array[i].salaryAvg);
        totalSalary+=array[i].salaryTotal;
        oneArray.push(array[i].salaryTotal);
        allArray.push(oneArray);
    }
    footer.push(totalNamberOfDepartment);
    footer.push(totalNumberOfEmployee);
    footer.push(totalSalary);
    footer.push(avgSalary/totalNamberOfDepartment);
    allArray.push(footer);
    return allArray;
}

function render(array){
    array.forEach(element => {
        table.appendChild(newRow("td",element));
    });
}


let employee = localStorage.getItem("employee");
employee = JSON.parse(employee);

let allDepartment=collectDep(employee);
let info=calculation(allDepartment,employee);
let lastFormate=conactination(allDepartment,info);

let div=document.getElementById('accounting');
let table=document.createElement('table');
let hedars=["Department Name","Number of employees","Average salary","Total salary"];
table.appendChild(newRow('th',hedars));
render(lastFormate);

div.appendChild(table);

