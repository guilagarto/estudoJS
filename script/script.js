
        function calcularMelhorPreco(){

            //validar campos
            let precoAlcool = document.getElementById('alcool').value
            let precoGasolina = document.getElementById('gasolina').value

            if(precoAlcool != ""){
                if(precoGasolina != ""){   

                        /*Calcular se melhor que alcool ou gasolina 
                        --se valor do alcool / valor dagasolina >= 0.7 é melhor utilizar Gasolina
                        -- senão é melhor utilizar alcool*/ 

                        let resultado = precoAlcool / precoGasolina
                            if(resultado >=0.7){
                                document.getElementById('resultado').innerHTML=" melhor utilizar gasolina"
                              //  alert('melhor utilizar gasolina')
                            }else{
                               // alert('melhor utilizar alcool')
                                document.getElementById('resultado').innerHTML=" melhor utilizar alcool"
                            }


                }else{
                    alert("Preencha o preço da gasolina")
                }
            }else{
                alert('preencha o preço do alcool')
            }

            
        }


     function gerarFrasesMotivacionais(){
           const frases = [
            "Não limite os seus desafios. Desafie os seus limites.",
            "Viver cada dia como se fosse o último é uma ótima oportunidade para aprender a amar cada segundo do seu dia.",
            "Se o plano não funcionar, mude o plano, não a meta.",
            "Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.",
            "Que os seus sonhos te levem para onde o seu coração seja feliz.",
            "Para ter sucesso, você deve eliminar dúvidas, aceitar desafios e rejeitar qualquer negatividade externa",
            "O que você procura está procurando você.",
            "Uma meta é um sonho com um prazo.",
            "Tente mover o mundo - o primeiro passo será mover a si mesmo.",
            "Disciplina é a ponte entre metas e realizações."
        ]
   

        const numeroAleatorio = Math.floor(Math.random()*10)
        const frase = frases[numeroAleatorio]

        document.getElementById('frase').innerHTML = frase
    }


    let nomes = [
        "Guilherme",
        "whadmir",
        "Juit",
        "Amelie",
        "Cecilia",
        "João",
        "Guilherme",
        "Maria",
        "Kayke",
        "Paiva",
        "Larissa",
        "Laura",
        "Felipe"
    ]

    function carregarNomes(){

        let intensLista = ''
        for(indice in nomes){
            let nome = nomes[indice]
            intensLista +=
            `<li class="list-group-item">
            ${nome}
            </li>`
           // alert(intensLista)
        }
        document.getElementById('lista').innerHTML = intensLista


    }


      function pesquisarnomes(){

        let nomePesquisa =  document.getElementById('campoNome').value
        let intensLista =''

        for(indice in nomes){
            let nome = nomes[indice]
            if(nomePesquisa == nome){
                 intensLista +=`
            <li class="list-group-item">
            ${nome}
            </li>`

            }
        
        }
       document.getElementById('lista').innerHTML = intensLista

    }

