
//----Launch code qustion recap-----------------------------------------

let array=[]

function balance(bal){
var initialBalance=bal*100
var balance=bal*100
let qq=balance/25

if(qq >= 1){
  let quart=parseInt(qq)
  var balance=balance-(25*quart)
  array.push(quart)
  let dd=balance/10
    if(dd >= 1){
        let dime=parseInt(dd)
        var balance=balance-(10*dime)
        array.push(dime)
        let nn=balance/5
        if(nn >= 1){
            let nikle=parseInt(nn)
            var balance=bal-(5*nikle)
            array.push(nikle)
            let pp=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennies=parseInt(pp)
            array.push(pennies);
        }
        else{
            array.push(0)
            let pp=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennies=parseInt(pp)
            array.push(pennies)
        }
    }else{
        let dime=parseInt(dd)
        var balance=balance-(10*dime)
        array.push(dime)
        let nn=balance/5
        if(nn >= 1){
            let nikle=parseInt(nn)
            var balance=bal-(5*nikle)
            array.push(nikle)
            let pp=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennies=parseInt(pp)
            array.push(pennies);
        }
        else{
            array.push(0)
            let pp=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennies=parseInt(pp)
            array.push(pennies)
        }

    }
}else{
    array.push(0)
    let dd=balance/10

    if(dd >= 1){
        let dime=parseInt(dd)
        var balance=balance-(10*dime)
        array.push(dime)
        let nn=balance/5
        if(nn >= 1){
            let nikle=parseInt(nn)
            var balance=bal-(5*nikle)
            array.push(nikle)
            let pp=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennies=parseInt(pp)
            array.push(pennies);
        }
        else{
            array.push(0)
            let pp=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennies=parseInt(pp)
            array.push(pennies)
        }
    }else{
        let dime=parseInt(dd)
        var balance=balance-(10*dime)
        array.push(dime)
        let nn=balance/5
        if(nn >= 1){
            let nikle=parseInt(nn)
            var balance=bal-(5*nikle)
            array.push(nikle)
            let pp=initialBalance-((25 *array[0])+(10 *array[1])+(5 *array[2]))
            let pennies=parseInt(pp)
            array.push(pennies);
        }
        else{
            array.push(0)
            let pp=initialBalance-((25 *array[0])+(10 *array[1]))
            let pennies=parseInt(pp)
            array.push(pennies)
        }
    }
  }
}
//call function here---------------------------

balance(2.11);


console.log(["qt","dim","nkl","peni"])
console.log(array);