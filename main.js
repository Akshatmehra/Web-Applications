var  studentname=[];
function submit(){

    var display_array=[];
    for (var j=1; j<=4 ;j++)
    {
        var student=document.getElementById("sb"+j).value;
        console.log(student);
        studentname.push(student);

    }
    var length=studentname.length;
    console.log(length);
    for (var k=0;k<length;k++)
    {
        display_array.push("name-"+studentname[k]);
    }
    document.getElementById("displaynamewithcommas").innerHTML=display_array;
    var removecommas=display_array.join("");

    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
    

    document.getElementById("bs").style.display="none"
document.getElementById("bsort").style.display="inline-block"

}
function sort()
{
    studentname.sort();
    var displaysort=[];

    var length=studentname.length;
    console.log(length);
    for (var k=0;k<length;k++)
    {
        displaysort.push("name-  "+studentname[k]+" ");
    }
    document.getElementById("displaynamewithcommas").innerHTML=displaysort;
    var removecommas=displaysort.join("");

    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
    
}
