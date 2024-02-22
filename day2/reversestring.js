let fname='kayathri';
let fn=fname.split("");
let rstring="";
function  reversestring()
{
for(let i=fn.length-1;i>=0;i--)
{
     rstring= rstring+ fn[i];
     //console.log(rstring);

}
console.log("reversed string is " + rstring);
}
reversestring()