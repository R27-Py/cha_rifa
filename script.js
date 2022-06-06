function sorteio(){
    const min = document.getElementById("minimo").value;
    const max = document.getElementById("maximo").value;
    let congratulations = document.getElementById("parabens").value;
  
    let sort = Math.floor(Math.random() * Math.floor(max));

    while(sort < min){
  
        sort = Math.floor(Math.random() * Math.floor(max));
       
    }
    //const resultado = "Número: 9 - Roberta Moreira";
    
    
    //document.getElementById("resultado").innerHTML = sort;

    document.getElementById("parabens").innerHTML = "Resultado: " + sort + " Parabéns...";
    
    //document.getElementById("parabens").innerHTML = sort,"Sortear Novamente";

}

