//Vamos criar um sistema que armazena informações de livros para que seja possível gerenciar: deverá ser possível buscar livros pela categoria.
//Me recomenda livros pra ler? Deverá listar livros que já foram lidos e que são recomendados

const livros = require('./database')

const read = require('readline-sync')
const leia = require('readline-sync')

livros.sort((a,b) => a.paginas - b.paginas)

const verLivrosPorCategoria = read.question('Voce gostaria de ler um livro? (S/N)')

if(verLivrosPorCategoria.toLocaleUpperCase() == 'S'){
    console.log('Essas sao as opcoes disponíveis de acordo com categoria:')
    console.log('Romance', 'Drama', 'Auto-ajuda', 'Acao')

    const qualCategoria = read.question('Qual e a categoria desejada?')

    const categoria = livros.filter(livro => livro.categoria == qualCategoria && livro.recomenda == true)

    console.table(categoria)

} else {
    console.log('Aqui esta a lista de livros')
    console.table(livros)
}

const naoRecomendado = leia.question('Temos tambem livros que nao recomendamos, gostaria de ver? (S/N)')

if(naoRecomendado.toLocaleUpperCase() == 'S'){
    console.log('Esses sao os que nao recomendamos, mas vai que voce gosta;)')
    
    const recomenda = livros.filter(chato => chato.recomenda == false)
    console.table(recomenda)
  
} else {
    console.log('Boa Leitura')
}

