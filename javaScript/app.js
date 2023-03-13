// lap 7 

let allEmployee =new Array();
function Employee(employeeID, employeeFullName, employeeDepartment, employeeLevel, employeeImg) {
    this.employeeID = employeeID;
    this.employeeFullName = employeeFullName;
    this.employeeDepartment = employeeDepartment;
    this.employeeLevel = employeeLevel;
    this.employeeImg = employeeImg;
    this.salary=this.employeeSalary();
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
    let collection=document.getElementById("employee");
    collection.style.gap="5%";
    let card=document.createElement("div");
    card.className="card";
    card.style.width="220px";
    card.style.backgroundColor="rgb(98, 98, 205)";
    card.style.padding="10px";
    card.style.color="white";
    let iimg=document.createElement("img");
    iimg.src=this.employeeImg;
    iimg.style.width="200px";
    iimg.style.height="150px";
    iimg.style.border="none";
    iimg.style.borderRadius="10px";
    let p1=document.createElement("p");
    p1.textContent=`Name: ${this.employeeFullName} - ID: ${this.employeeID}`;
    let p2=document.createElement("p");
    p2.textContent=`Departement: ${this.employeeDepartment} - Level: ${this.employeeLevel}`;
    let salary=document.createElement("p");
    salary.textContent=`${this.employeeSalary()}`;
    card.appendChild(iimg);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(salary);
    collection.appendChild(card);
}

// mainCode

const ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./img/Ghazi.jpg");
const lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "./img/Lana.jpg");
const tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./img/Tamara.jpg");
const safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./img/Safi.jpg");
const omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "./img/Omar.jpg");
const rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "./img/Rana.jpg");
const hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./img/Hadi.jpg");




// 
// 
// lab 08
function newLable(content){
    let lable=document.createElement('label');
    lable.textContent=content+"\t\t";
    form.appendChild(lable);
}
function newInput(label,type,name){
    let input=document.createElement('input');
    input.type=type;
    input.name=name;
    input.id=name;
    input.placeholder=label;
    input.required;
    form.appendChild(input);
}
function addSelect(arr,label,name){
    newLable(label);
    let select=document.createElement('select');
    select.name=name;
    for (const i of arr) {
        select.add(new Option(i));
    }
    form.appendChild(select);
}
function newImg(url){
    let img=document.createElement('img');
    img.src=url;
    return img;
}
function newButton(content,type,name){
    let button=document.createElement('button');
    button.textContent=content;
    button.type=type;
    button.name=name;
    return button;
}
function newRow(){
    let br=document.createElement('br');
    form.appendChild(br);
}

function uniqeId(){
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(".", ""));
    // this line from https://stackoverflow.com/questions/3231459/how-can-i-create-unique-ids-with-javascript 
}
let formID= document.getElementById('form1');
let form=document.createElement('form');
let optionList1=["Administration","Marketing","Development","Finance"];
let optionList2=["Junior","Mid-Senior","Senior"];
newInput("Full name","text","fName");
newRow(); newRow();
addSelect(optionList1,"Department","department");
newRow(); newRow();
addSelect(optionList2,"Level","level");
newRow(); newRow();
newInput("Your photo","file","photo");
newRow(); newRow();
form.appendChild(newButton("Send","submit","submit"));
newRow(); newRow();
formID.appendChild(form);



// submit part
function submitEvent(event){
    event.preventDefault();
    let name=event.target.fName.value;
    let dep=event.target.department.value;
    let level=event.target.level.value;
    let personalImg=event.target.photo.value;
    const newEmployee = [uniqeId(),name,dep,level,personalImg];
    console.log(personalImg);
    // The image does not exist due to a security issue that I could not solve
    const newEmployee1 = new Employee(newEmployee[0],newEmployee[1],newEmployee[2],newEmployee[3],newEmployee[4]);
    newEmployee1.render();
    let data=JSON.stringify(newEmployee);
    localStorage.setItem(`${newEmployee[0]}`,data);


}
form.addEventListener("submit",submitEvent);


// localStorage

function getItem(){
    allID=new Array();
    let items=localStorage.length;
    for (let i=0;i<items;i++){
        allID.push(localStorage.key(i));
    }
    allID.forEach(element => {
        oneItem=localStorage.getItem(element);
        oneItem=JSON.parse(oneItem);
        let convert;
        convert=new Employee(oneItem[0],oneItem[1],oneItem[2],oneItem[3],oneItem[4]);
    });
}


if(localStorage.getItem("employee")){
    localStorage.removeItem("employee");
    getItem();
}
else{
    getItem();
}


for (let i=0;i<allEmployee.length;i++){
    allEmployee[i].render();
}
console.log(allEmployee);
allEmp=JSON.stringify(allEmployee);
localStorage.setItem("employee",allEmp);