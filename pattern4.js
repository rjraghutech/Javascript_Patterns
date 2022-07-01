var n=3;
let count=1;
let string = "";
for(let i=1;i<=n;i++)
{
    for(let j=n;j>i;j--)
    {
        string += "  ";
    }
    for(let k=0;k<i*2-1;k++)
    {
        string += count;
        count++;
        string+=" ";
    }string += "\n";
}
//count=1;
for(let i=1;i<=n-1;i++)
{
    for(let j=0;j<i;j++)
    {
        string += "  ";
    }
    for(let k=(n-i)*2-1;k>=1;k--)
    {
        string += count;
        count--;
        string+=" ";
    }string += "\n";
}
console.log(string);