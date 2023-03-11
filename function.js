//challenge1
let birth ;
let future ;

function  birthyear() {
    let birthyear;
    let byear = prompt('Insert your year of birth');
        if (byear == null || byear == '') {
            birthyear = "";
            console.log("no year");
        } else { 
            birthyear = `Now your year of birth is ${byear} years.`;
            console.log(`now your year is ${byear} years.`);
            birth = byear;
        }
    document.getElementById("biyear").innerHTML = birthyear;
}


function futureyear() {
    let futureyear;
    let fyear = prompt('Insert future year');
        if (fyear == null || fyear == '') {
            futureyears = "";
            console.log("no future year");
        } else { 
            futureyear = `Now your future year is ${fyear} years.`;
            console.log(`Now your future year is ${fyear} years.`);
            future = fyear;
        }
    document.getElementById("fuyear").innerHTML = futureyear;
}


function calculatey() { 
    calyear = Number(future) - Number(birth);
    console.log(`Now your future age is ${calyear} years.`);
    calyear = (`Now your future age is ${calyear} years.`);
    document.getElementById("Calyear").innerHTML = calyear;
}


let me = {
    NAME : 'Ruttipoom',
    TU : 'Chiang-Rai',
    Hobby : 'Excersice',
    
}

//challenge2

inFormation = (`Hi, my name is ${me.NAME}. I live in ${me.TU} and enjoy ${me.Hobby}.`);
console.log(`Hi, my name is ${me.NAME}. I live in ${me.TU} and enjoy ${me.Hobby}.`)

document.getElementById("sayME").innerHTML = inFormation;

//function down here isn't re-correct yet.
/*function aboutme() {
    inFormation = (`Hi, my name is ${me.NAME}. I live in ${me.TU} and enjoy ${me.Hobby}.`);
    document.getElementById("sayME").innerHTML = inFormation;
    console.log(`Hi, my name is ${me.NAME}. I live in ${me.TU} and enjoy ${me.Hobby}.`)
}*/

