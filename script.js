const displayContent=(data)=>{
    output.value+=data
}
 const clearAll=()=>{
       output.value=""
 }
const  clear1=()=>{
    output.value=output.value.slice(0,-1)
}

const showResult=()=>{
    try{
        console.log("try block");
        
        output.value=eval(output.value)
    }
    catch(err){
        console.log("catch block");
        console.log(err);
        output.value=""
        output.placeholder="Invalid expression" 
    }
    finally{
        console.log("try block");
        console.log("task completed");
    }
}