let n=13;
let flag=0
for(let i=2; i*i<=n;i++){
    if(n%i == 0){
        flag=1;
        break
        console.log("not prime")
    }
    

}    if(flag==1){
    console.log('not prime')
}
else{

    console.log("prime number");
}   
