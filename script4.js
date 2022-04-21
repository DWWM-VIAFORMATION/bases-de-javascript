let b1 = document.getElementById('b1');
b1.addEventListener('click', masquer);

function masquer()
{
let listParas = document.querySelectorAll('p');
for (para of listParas)
{
   // para.style.color = 'blue';
    if (para.style.display == 'block')
        {
            para.style.display= 'none';
        }
        else
        {
            para.style.display= 'block';
        }
        // para.style.display == 'block'?para.style.display = 'none':para.style.display = 'block'
        /**
         * switch()
         */
}
}
