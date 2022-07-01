let n=5;
let count=1;
let string="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        string+=count;
        count++;
        string+=" ";
    }
    string+="\n";    
}
console.log(string);