let button = document.querySelector(".button")
        
button.onclick = sorteiaNumeros

        function sorteia() {

            return Math.round(Math.random() * 100)

        }

        function sorteiaNumeros() {

            let megaSena = []
            let numero = 1

            while(numero <= 6) {

                let numeroAleatorio = sorteia()
                let achou = false

                if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {

                    for(posicao = 0; posicao < megaSena.length; posicao++) {

                        if(megaSena[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }

                    if(achou == false) {

                        megaSena.push(numeroAleatorio)
                        numero++
                    }

                }
            }

            let resultado = document.querySelector("#container")
            let msg = document.querySelector("#msg");

            megaSena.sort((a, b) => a - b);
            resultado.innerHTML = megaSena[0] + ' - ' + megaSena[1] + ' - ' + megaSena[2] + ' - ' + megaSena[3] + ' - ' + megaSena[4] + ' - ' + megaSena[5]
            msg.innerHTML = "Bilhete Gerado Com Sucesso!"
        }