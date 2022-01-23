const allinput=document.querySelectorAll("input");
const textarea=document.querySelector("textarea");
const options=document.querySelectorAll("option");
 
const items=document.getElementsByName('disease');
const s = document.getElementsByTagName('option');
const ops = document.getElementsByName('gender');
  
const sbtbtn=allinput[allinput.length-1];
sbtbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<allinput.length;i++){
        if(allinput[i].type!="checkbox" && allinput[i].type!="radio"){
        const k=JSON.stringify(allinput[i].value);
        console.log(k);
        }
    }
     
     
        
        
         
    var selectedItems="";
        for(var i=0; i<items.length; i++){
            if(items[i].type=='checkbox' && items[i].checked){
                    selectedItems+=items[i].value+" , ";
                }
            }
            console.log(JSON.stringify( selectedItems));

     for(let i=0;i<s.length;i++){
         if(s[i].selected){
             console.log(JSON.stringify( s[i].value));
         }
     }
      
     var rate_value;
     for(var i = 0; i < ops.length; i++){
         if(ops[i].checked){
             rate_value = ops[i].value;
         }
         console.log(rate_value);
     }
    
     console.log(JSON.stringify(textarea.value));
     
        
    })  
 
   