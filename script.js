
const btn=document.querySelector("#adduser");
const btntext=btn.innerText;
const input=document.querySelector("#input");
const display=document.querySelector("#display");
const savechange=document.querySelector("#savechange");
let task=[];
let edit_id=[];


//get the data from the local storage
let getdata=localStorage.getItem('name');
if(getdata!==null){
    
    task=JSON.parse(getdata); //parse method is used to convert string into object
}
//Display info
const displayinfo=()=>{
    let html='';
    task.map((ele,i)=>{
        html+=`<tr>
        <th scope="row">${i+1}</th>
        <td>${ele.name}</td>
        <td><button class="btn btn-warning text-bold m-1" onclick=editinfo(${i})>Edit</button>
        <button class="btn btn-danger text-bold" onclick=deleteinfo(${i})>Delete</button></td>

      </tr>`;

    })
     display.innerHTML=html;

 }

//displayinfo();// calling display info function
//add event lister to the save button
btn.addEventListener('click',()=>{
      const name=input.value;

     if(edit_id!==null){
        //edit update
         task.splice(edit_id,1,{'name': name});
        edit_id=null;
       
     }else
     {
        //add
        task.push({'name': name})
     }
     
    input.value=' '; 
    saveinfo(task);
    btn.innerText=btntext;
});



//save info 
 const saveinfo=(task)=>{
    let data=JSON.stringify(task);// task is convert to string with the help of the stringfy
    localStorage.setItem('name', data);
    displayinfo();

 }

 

 //Edit info
 const editinfo=(id)=>{
    edit_id=id;// store the id
    input.value=task[id].name; 
    btn.innerText=" Save Change";
    
 }

 
 //Delete info 
 const deleteinfo=(id)=>{

    task.splice(id,1);
    saveinfo(task);
   
 }

 //delete All
  
   let deleteall=document.getElementById("delall")

   deleteall.addEventListener("click",function(){
      // alert("i am work")
      task=[];
      saveinfo();
   })