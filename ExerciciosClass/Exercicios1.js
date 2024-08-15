class Pizza {
    constructor(sabor, cheese, recheio){
        this.sabor = sabor
        this.cheese = cheese
        this.recheio = recheio
    }
    pedidos(){
        console.log(`Olá, quero uma pizza de ${this.sabor} com ${this.cheese} e recheio ${this.recheio}`);
    }
}

const user = new Pizza("Frango", "Queijo prado", "Doce");

user.pedidos()
