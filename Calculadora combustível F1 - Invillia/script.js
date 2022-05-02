const round = (num, places) => {
	if (!("" + num).includes("e")) {
		return +(Math.round(num + "e+" + places)  + "e-" + places);
	} else {
		let arr = ("" + num).split("e");
		let sig = ""
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
	}
}

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
        window.alert(`A capacidade de armazenamento do veículo de 82 litros foi excedido em ${round(litros - 82, 3).toLocaleString('pt-BR')} litros. Favor estabelecer uma quantidade menor de voltas.`)
    } else {
        res.innerHTML = `Serão necessários, no mínimo, ${round(litros, 3).toLocaleString('pt-BR')} litros para realizar as ${v} voltas desejadas antes do próximo reabastecimento. Serão necessários ${Math.round(abastecimento)} reabastecimentos para completar a corrida.`
    }
}