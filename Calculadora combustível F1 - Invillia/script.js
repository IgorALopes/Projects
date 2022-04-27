function reabastecer() {
    let kml = 1.3
    let voltas = document.getElementById('numvoltas')
    let totalVoltas = document.getElementById('totalvoltas')
    let res = document.getElementById('res')
    let circuito = document.getElementById('circuito')

    let v = Number(voltas.value)
    let tV = Number(totalVoltas.value)
    let kmC = Number(circuito.value)

    voltasLitros = v * kml
    litros = (voltasLitros * kmC) / 1000
    abastecimento = tV / v

        if (litros > 82) {
            window.alert(`A capacidade de armazenamento do veículo de 82 litros foi excedido (${litros}). Para a realização das voltas pretendidas, favor fornecer uma quantidade menor.`)
        }

    res.innerHTML = `Serão necessários, no mínimo, ${litros} litros para realizar as ${v} voltas desejadas antes do próximo reabastecimento. Serão necessários ${Math.round(abastecimento)} reabastecimentos para completar a corrida.`
}