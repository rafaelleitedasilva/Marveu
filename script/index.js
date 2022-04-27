function Esconde(){
  $('div.Index').hide()
  $('div.Personagens').hide()
  $('div.Jogos').hide()
  $('div.HQs').hide()
  $('div.Filmes').hide()
}

function MostrarIndex() {
    $('div.Index').show()
    $('div.Personagens').hide()
    $('div.Jogos').hide()
    $('div.HQs').hide()
    $('div.Filmes').hide()
  }

  function EsconderIndex() {
    $('div.Index').hide()
  }

  function MostrarPersonagens() {
    $('div.Personagens').show()
    $('div.Index').hide()
    $('div.HQs').hide()
    $('div.Jogos').hide()
    $('div.Filmes').hide()
  }

  function EsconderPersonagens() {
    $('div.Personagens').hide()
  }

  function MostrarFilmes() {
    $('div.Filmes').show()
    $('div.Jogos').hide()
    $('div.HQs').hide()
    $('div.Index').hide()
    $('div.Personagens').hide()
  }

  function EsconderFilmes() {
    $('div.Filmes').hide()
  }

  function MostrarHQs() {
    $('div.HQs').show()
    $('div.Personagens').hide()
    $('div.Index').hide()
    $('div.Jogos').hide()
    $('div.Filmes').hide()
  }

  function EsconderHQs() {
    $('div.HQs').hide()
  }
  
  function MostrarJogos() {
    $('div.Jogos').show()
    $('div.HQs').hide()
    $('div.Index').hide()
    $('div.Filmes').hide()
    $('div.Personagens').hide()
  }

  function EsconderJogos() {
    $('div.Jogos').hide()
  }