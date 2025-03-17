var valor = 100;
function calcularFrete() {
    
    if (valor <= 50) {
        console.log("Frete não disponível");
    } else if ( valor < 199.99) {
        console.log("Frete com custo adicional");
    } else {
        console.log("Frete grátis");
    }
}
calcularFrete();