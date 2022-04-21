let divParent = document.getElementById("listepara");


for (let i=0;i<20;i++)
{   
    console.log('iteration n°'+(i+1));
    let paragraphe = document.createElement("p");
    let puissanceDeux = Math.pow(2,i);
    paragraphe.innerHTML=`2^<sup>${i}</sup> = ${puissanceDeux}` ;
    divParent.appendChild(paragraphe);
}
let i =0;
while(i<20)
{
    console.log('iteration n°'+(i+1));
    let paragraphe = document.createElement("p");
    let puissanceDeux = Math.pow(2,i);
    paragraphe.innerHTML=`2^<sup>${i}</sup> = ${puissanceDeux}` ;
    divParent.appendChild(paragraphe);
    i=i+1;
}
i=0;
do
{
    console.log('iteration n°'+(i+1));
    let paragraphe = document.createElement("p");
    let puissanceDeux = Math.pow(2,i);
    paragraphe.innerHTML=`2^<sup>${i}</sup> = ${puissanceDeux}` ;
    divParent.appendChild(paragraphe);
    i=i+1;
}
while (i<20)
