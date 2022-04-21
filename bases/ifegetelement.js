document.getElementById('p1').innerHTML="hello";
let paragraphe=document.getElementById('p1');
let x=5;
let y=6;
/*if (x<y)
{
    paragraphe.innerHTML="x est inférieur à y";
}
else
{
    paragraphe.innerHTML="x est supérieur ou egal à y";
}*/
paragraphe.innerHTML=(x<y)?"inferieur":"superieur ou egal";