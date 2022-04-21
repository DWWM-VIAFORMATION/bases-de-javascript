function executerOpen()
{
    fenetre = window.open('','','height=500,width=500');
}

function executerClose()
{
    fenetre.close();
}
function executerResizeBy()
{
    fenetre.resizeBy(128,128);
}

function executerResizeTo()
{
    fenetre.resizeTo(100,100);
}

let fenetre ;

let boutonOpen = document.getElementById('open');
boutonOpen.addEventListener('click',executerOpen);


let boutonClose = document.getElementById('close');
//boutonClose.addEventListener('click',executerClose);
boutonClose.addEventListener('click',function (param1)
                                        {
                                            console.log(param1);
                                            console.log(param2);
                                            fenetre.close();
                                        }
);

let boutonResizeTo = document.getElementById('resizeTo');
boutonResizeTo.addEventListener('click',executerResizeTo);

let boutonResizeBy = document.getElementById('resizeBy');
boutonResizeBy.addEventListener('click',executerResizeBy)

