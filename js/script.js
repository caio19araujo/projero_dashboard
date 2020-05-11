/*FUNÇÕES PARA MUDAR O PADDING QUANDO A BARRA LATERAL APARECER OU DESAPARECER*/
$(".collapse").on('show.bs.collapse', function(){
    
	let screenWidth = screen.width;
	if(screenWidth >= 1000){
    	document.querySelector('div.container-fluid').style.paddingLeft ="250px"
    } 
});

$(".collapse").on('hidden.bs.collapse', function(){
    document.querySelector('div.container-fluid').style.paddingLeft ="15px" 
});

function verificaTamanho(){
	let screenWidth = screen.width;
    let ativo = document.querySelector('button.btn').ariaExpanded
	if(screenWidth >= 1000 && ativo == true){
    	document.querySelector('div.container-fluid').style.paddingLeft ="250px"
    }
    else{
    	document.querySelector('div.container-fluid').style.paddingLeft ="15px" 
    } 
}

