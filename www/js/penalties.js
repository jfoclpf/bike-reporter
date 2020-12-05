/* eslint camelcase: off */
/* eslint no-var: "off" */
/* global app, $ */

app.penalties = (function (thisModule) {
  // campos "description" e "law_article" devem ser condicentes gramaticalmente com a mensagem que será gerada
  // exemplo: "a viatura" + description + ", em violação" + law_article

  var penalties = {
    ultrapassagem_menos_1_5m: {
      select: 'Ultrapassagem a menos de 1,5 metros',
      description: 'efetuou uma ultrapassagem sem guardar a distância lateral mínima de 1,5 m',
      law_article: 'da alínea e) do n.º 2 do art.º 38.º do Código da Estrada'
    },
    ocupacao_via_adjacente: {
      select: 'Ultrapassagem sem ocupar a via adjacente',
      description: 'efetuou uma ultrapassagem sem ocupar a via adjacente',
      law_article: 'do n.º 3 do art.º 38.º com referência à alínea u) do art.º 1 do Código da Estrada'
    },
    ciclovia: {
      select: 'Sobre ciclovia',
      description: 'encontrava-se sobre uma pista para velocípedes',
      law_article: 'da alínea f) do n.º 1 do art.º 49.º do Código da Estrada'
    }
  }

  function getPenalties () {
    return penalties
  }

  function populatesPenalties () {
    var keys = []
    for (var key in penalties) {
      if (Object.prototype.hasOwnProperty.call(penalties, key)) {
        keys.push(key)
      }
    }

    $('#penalties').append('<option></option>')
    for (var i = 0; i < keys.length; i++) {
      key = keys[i]
      $('#penalties').append(`<option value="${key}">${penalties[key].select}</option>`)
    }
  }

  function getSelectedPenaltyCode () {
    return $('#penalties').val()
  }

  function getShortDescription (code) {
    for (const key in penalties) {
      if (key === code) {
        return penalties[key].select
      }
    }
  }

  /* === Public methods to be returned === */
  thisModule.getPenalties = getPenalties
  thisModule.populatesPenalties = populatesPenalties
  thisModule.getSelectedPenaltyCode = getSelectedPenaltyCode
  thisModule.getShortDescription = getShortDescription

  return thisModule
})(app.penalties || {})
