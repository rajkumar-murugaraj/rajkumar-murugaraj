const inputbox=document.getElementById("input-box");
     const listContainer=document.getElementById("listcontainer");

     function addTask(){
      if(inputbox.value===''){
        alert("you must write something!!");
      }
      else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=" x";
        li.appendChild(span);
      }
      inputbox.value='';
      savedata();
     }
     
     listContainer.addEventListener("click", function(e){
        if(e.target.tagName ==="SPAN"){
            e.target.parentElement.remove();
            savedata();
        }
      },false);

      function savedata(){
        localStorage.setItem("data",listContainer.innerHTML);
      }
      function showdata(){
        listContainer.innerHTML=localStorage.getItem("data");
      }
      showdata();
     
     function updateDateTime(){
        const now=new Date();
        const currentDateTime=now.toLocaleString();
        document.querySelector('#datetime').textContent=currentDateTime;                               
        }
        setInterval(updateDateTime, 1000);
