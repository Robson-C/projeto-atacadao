window.onload = function () {
    mudouTamanho()
} 

function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

function mudouTamanho(){
    if (window.innerWidth >= 701){
        burguer.style.display = 'none'
        itens.style.display = 'none'
    }else{
        burguer.style.display = 'block'
    }
}

function escolhi(){
    itens.style.display = 'none'
}

