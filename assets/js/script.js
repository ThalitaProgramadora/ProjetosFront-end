/*
Case sensitive = reconhece letras maiusculas e minusculas
por tag :getElementByTagName()
por Id:getElementById()
por Nome:getElementsByName()
por Classe:getElementsByClassName()
por Seletor:querySelector()
*/
//let nome = window.document.getElementById('nome')
/*
se for id coloca # se for classe . dentro do parenteses.
pode usar #assunto ou input#assunto 
*/
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
 /* 
 string é um array aqui.
 */

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.Value.length < 3){
        txtNome.innerHTML = 'nome inválido!!'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Inválido!!'
        txtNome.style.color = 'green'
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#email')
    if(email.Value.indexOf('@') -- -1){
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color =  'red'
    }
}