/* 
Sala 06 - participantes:

Allan Cardoso
Ezio Roberto Lorenzetti
Filipe Campos Fontes
Murilo Alex Aparecido da Silva */

let contaBancaria = {
    numConta: 1234567890 ,
    tipoConta: 1 ,//1 é Conta Corrente e 2 Conta Poupança
    saldo: 0.0 ,//decimal number
    titConta: 'Nome Sobrenome' ,
}

console.log(`Núm Conta: ${contaBancaria.numConta}`, contaBancaria.tipoConta, contaBancaria.saldo, contaBancaria.titConta)

function ContaBancaria(mConta,mTipoConta,mSaldo,mTitular) {
    this.conta = mConta;
    this.tipoConta = mTipoConta;
    this.saldo = mSaldo;
    this.titular = mTitular;
}

let conta1 = new ContaBancaria(2222,'1',500,'Nome Sobrenome');

console.log(conta1.conta);
console.log(conta1.tipoConta);
console.log(conta1.saldo);
console.log(conta1.titular); 

function ContaBancaria(mConta,mTipoConta,mSaldo,mTitular) {
    this.conta = mConta;
    this.tipoConta = mTipoConta;
    this.saldo = mSaldo;
    this.titular = mTitular;
}

let conta1 = new ContaBancaria(5486273622,'1',27771,'Abigael Natte');
let conta2 = new ContaBancaria(1183971869,'2',8675,'Ramon Connell');
let conta3 = new ContaBancaria(9582019689,'2',27363,'Jarret Lafuente');
let conta4 = new ContaBancaria(1761924656,'2',32415,'Ansel Ardley');
let conta5 = new ContaBancaria(7401971607,'2',18789,'Jacki Shurmer');
let conta6 = new ContaBancaria(630841470,'1',28776,'Jobi Mawtus');
let conta7 = new ContaBancaria(4223508636,'1',2177,'Thomasin Latour');
let conta8 = new ContaBancaria(185979521,'2',25994,'Lonnie Verheijden');
let conta9 = new ContaBancaria(3151956165,'1',7601,'Alonso Wannan');
let conta10 = new ContaBancaria(2138105881,'2',33196,'Bendite Huggett');

let banco = {
    cliente: lista
}