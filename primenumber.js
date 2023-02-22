let number= 13;
let count = 0;
for(let i=2;i<=Math.sqrt(number);i++){
 if(num%i==0){
count++;
}
}
if(count==0){

console.log("prime");
}
else{
console.log("not a prime");
}