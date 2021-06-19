//Problem 1
//Write a JavaScript function to check whether an `input` is an array or not
function is_array(x)
{
    return Array.isArray(x) ;
}
console.log(is_array('123er'));
console.log(is_array([1, 2, 4, 0]));


//Problem 2
//Write a JavaScript function to clone an array
function array_Clone(x)
{
y=[...x] ;
return y ;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Problem 3
//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(x,y=1)
{  
    var temp=[] ;
  for(let i=0;i<y;i++)
  { if(i>=x.length)
      break ;
     temp.push(x[i]) ;
  }
  return temp ;
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Problem 4
//Write a simple JavaScript program to join all elements of the following array into a string.
function join(x)
{
    a=x.join(',') ;
    b=x.join('+') ;
    console.log('"'+a+'"') ;
    console.log('"'+b+'"') ;
    
}
join( ["Red", "Green", "White", "Black"]) ;

//Problem 5
// Write a JavaScript program to find the most frequent item of an array
function billy(y){
    var x= {} ;
    for(var i=0;i<y.length;i++)
    {
        if(x[y[i]])
        {
            x[y[i]]++ ;
        }
        else
        x[y[i]]=1 ;
    } 
    var ans=0 ;
    var sol ;
    for(var i=0;i<y.length;i++)
    {  if(x[y[i]]>ans)
        {ans=x[y[i]] ;
            sol=y[i] ;}
    } 
    console.log(sol+' ('+ans+' times)') ;
    
}

billy([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) ;