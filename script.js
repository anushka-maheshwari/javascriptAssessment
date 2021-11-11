const inputBox = document.getElementById("name");
const inputBox2=document.getElementById("email");
const submitBtn = document.querySelector(".form button");
const users=document.querySelector(".users");
const url=' https://reqres.in/api/users';
let result="";
let c=0;

var array=[]
inputBox.onkeyup=()=>{
    array[0]=inputBox.value;
}

inputBox2.onkeyup=()=>{
    array[1]=inputBox2.value;
    if(array[0]!="" && array[1] !="" && array.length===2)
    {
        submitBtn.classList.add("active"); 
    }
}


fetch(url)
  .then(res => res.json())
  .then(res =>{
      console.log(res.data)
      //res.data.map((user,i) => {result+=`<li>User ${i+1} ${user.first_name} ${user.last_name} ${user.email}</li>`;c=i+1}); 
      users.innerHTML=result;
      submitBtn.addEventListener("click",()=>{
      c+=1;
      fetch(url,{method:'POST',headers: {
             'Content-Type': 'application/json'
              },body:JSON.stringify({"name": array[0],"email": array[1]})}).then((result)=>result.json()).then((result)=>localStorage.setItem("user",JSON.stringify(result)))  
              users.innerHTML+=`<li>User ${c} ${array[0]} ${array[1]}</li> `
            
              
  
})
});



