
var setorAtual = 'loja'
var reg = new RegExp(setorAtual, "g")

function escolheSetor(valor) {
    setorAtual = valor;
    
    let result = document.getElementById("itens-lateral").innerHTML;
    result = result.replace(reg, setorAtual);
    document.getElementById("itens-lateral").innerHTML = result;

    let result2 = document.getElementById("itens").innerHTML;
    result2 = result2.replace(reg, setorAtual);
    document.getElementById("itens").innerHTML = result2;
    


    reg = new RegExp(setorAtual, "g")
}



