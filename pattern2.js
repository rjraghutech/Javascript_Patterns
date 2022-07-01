var n=5;
let string = "";
for(let i=1;i<=n;i++)
{
    for(let j=n;j>i;j--)
    {
        string += " ";
    }
    //console.log("*");
    for(let k=1;k<2*(i-1);k++)
    {
        //console.log(" ");
        if(i==1)
        {
            string += "*"; 
        }
        else{
            string += " ";
        }
    }string += "\n";
}
for(let i=1;i<=n-1;i++)
{
    for(let j=n;j>i;j--)
    {
        string += " ";
    }
    //console.log("*");
    for(let k=1;k<2*(i-1);k++)
    {
        //console.log(" ");
        if(i==1)
        {
            string += "*";
        }
        else{
            string += " ";
        }
    }string += "\n";
}
console.log(string);