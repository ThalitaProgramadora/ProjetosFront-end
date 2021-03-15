/*
Case sensitive = reconhece letras maiusculas e minusculas
por tag :getElementByTagName()
por Id:getElementById()
por Nome:getElementsByName()
por Classe:getElementsByClassName()
por Seletor:querySelector()
*/
let nome = window.document.getElementById('nome')
/*
se for id coloca # se for classe . dentro do parenteses.
pode usar #assunto ou input#assunto 
*/
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
 /* 
 string é um array aqui.
 */
function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.Value.length < 3){
        txt.innerHTML = 'nome inválido!!'
    }
}