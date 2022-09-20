function checkprime(num){
 
 Var factor = 0;
 for(let i = 1; i <=num; i++){
    
   if(num%i==0){
     factor++
   }
 
 }
 if(factor==2){
 
   console.log(i,"Yes Prime");
 
 }else{
   console.log(i,'Not Prime');
 } 
}


checkprime(11);