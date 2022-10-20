'use strict'

function calcular() {
  let nome = document.querySelector('#nome')
  let preco_cota = Number(document.querySelector('#preco_cota').value)
  let cotas_mes = Number(document.querySelector('#cotas_mes').value)
  let rendimento_cota = Number(document.querySelector('#rendimento_cota').value)
  let ano = Number(document.querySelector('#anos').value)
  let rendi_mes
  let sla
  let rendimento_total
  let quan_cotas

  for (let i = 0; i < 12; i++) {
    quan_cotas += cotas_mes
    rendi_mes = quan_cotas * rendimento_cota

    if (rendi_mes >= preco_cota) {
      if (rendi_mes / preco_cota >= 1) {
        sla = rendi_mes / preco_cota
        sla.toFixed(1)
        quan_cotas += sla
      }

    }

    rendimento_total += rendi_mes

  }

  console.log(
}