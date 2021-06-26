for(var i=0;i<10;i++)
{
   var x=document.getElementById("table") ;
   var z=x.insertRow(i) ;
   for(var j=0;j<20;j++)
   {
      var u=z.insertCell(j) ;
      u.className="block" ;
      
   } 
   
}
var total_seats=0 ;
console.log(total_seats) ;
var box=document.querySelectorAll(".block") ;
box.forEach(link => {
    link.addEventListener('click',()=>{
        if((link.classList.contains('blocked')))
        {
            link.classList.remove('blocked') ;
            --total_seats ;
            link.classList.toggle("green");
        } 
        else
        {
            link.classList.add('blocked') ;
            link.classList.toggle("green");
            ++total_seats ;
        }
        console.log((link.classList.contains('blocked'))) ;
        document.getElementById("score").innerHTML=total_seats ;
    });
     
});

