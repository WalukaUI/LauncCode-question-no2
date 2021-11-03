
//----Launch code qustion recap-----------------------------------------

let array=[]

function balance(balanceToPay){
var balanceBy100=balanceToPay*100
const initialBalance=parseInt(balanceBy100)
var balance=balanceToPay*100
let quarters=balance/25

if(quarters >= 1){
  let quart=parseInt(quarters)
  var balance=balance-(25*quart)
  array.push(quart)
  let dimes=balance/10
    if(dimes >= 1){
        let dime=parseInt(dimes)
        var balance=balance-(10*dime)
        array.push(dime)
        let nikles=balance/5
        
        if(nikles >= 1){
            console.log("lll");
            let nikle=parseInt(nikles)
            var balance=balanceToPay-(5*nikle)
            array.push(nikle)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennie=parseInt(pennies)
            array.push(pennie);
        }
        else{
            array.push(0)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennie=parseInt(pennies)
            array.push(pennie)
        }
    }else{
        let dime=parseInt(dimes)
        var balance=balance-(10*dime)
        array.push(dime)
        let nikles=balance/5
        if(nikles >= 1){
            let nikle=parseInt(nikles)
            var balance=balanceToPay-(5*nikle)
            array.push(nikle)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennie=parseInt(pennies)
            array.push(pennie);
        }
        else{
            array.push(0)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennie=parseInt(pennies)
            array.push(pennie)
        }

    }
}else{
    array.push(0)
    let dimes=balance/10

    if(dimes >= 1){
        let dime=parseInt(dimes)
        var balance=balance-(10*dime)
        array.push(dime)
        let nikles=balance/5
        if(nikles >= 1){
            let nikle=parseInt(nikles)
            var balance=balanceToPay-(5*nikle)
            array.push(nikle)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennie=parseInt(pennies)
            array.push(pennie);
        }
        else{
            array.push(0)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennie=parseInt(pennies)
            array.push(pennie)
        }
    }else{
        let dime=parseInt(dimes)
        var balance=balance-(10*dime)
        array.push(dime)
        let nikles=balance/5
        if(nikles >= 1){
            let nikle=parseInt(nikles)
            var balance=balanceToPay-(5*nikle)
            array.push(nikle)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennie=parseInt(pennies)
            array.push(pennie);
        }
        else{
            array.push(0)
            let pennies=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennie=parseInt(pennies)
            array.push(pennie)
        }
    }
  }
}
//call function here---------------------------

balance(1.01);


console.log(["qt","dim","nkl","peni"])
console.log(array);