function call()
{
    a=window.prompt("Input number of rows") ;
    b=window.prompt("Input number of columns") ;
    for(var i=0;i<a;i++)
    {
        var x=document.getElementById("table") ;
        var row=x.insertRow(i) ;
        for(var j=0;j<b;j++)
        {
            var col=row.insertCell(j) ;
            col.id=String(i)+String(j) ;
        }
    }
    var boxes= document.querySelectorAll('td');
  console.log(boxes);
     boxes.forEach((link)=>{
     link.addEventListener("click",function(){
           //console.log(link.id);
           console.log(link.classList) ;
       link.classList.toggle("white");
 })
});
      
}

