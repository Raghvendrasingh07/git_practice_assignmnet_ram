function checkprime(number){ 
 
 var counter = 0;
 for(let i = 1; i <=number; i++){
    
   if(number%i==0){
     counter++
   }
 
 }
 if(counter==2){
 
   console.log(i,"Yes Prime");
 
 }else{
   console.log(i,'Not Prime');
 } 
}


checkprime(11);