/**
 * APP - Flex
 * @autor Ryan Rodrigues
 */

//declaração de variaveis
let etanol, gasolina

function calcular(){
    //entrada de dados(input)
    etanol = frmFlex.inputEtanol.value
    gasolina = frmFlex.inputGasolina.value
   // console.log(etanol)
   // console.log(gasolina)    
   if (etanol < 0.7 * gasolina) {
    document.getElementById('status').src="img/etanol.png"
   } else {
    document.getElementById('statu').src="img/gasolina.png"
   } 

    return false
}