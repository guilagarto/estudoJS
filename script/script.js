
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