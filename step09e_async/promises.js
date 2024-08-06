// // PROMISES STAND ALONE
const returnedMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Money Returned.')
        reject("failure");
    }, 3000);
});
// METHOD CHAINING
// returnedMoney.then().carch()
returnedMoney
    .then((value) => {
    console.log(value);
    console.log("Thank you for returning money.");
})
    .catch((value) => {
    console.log(value);
    console.log("sorry i am enable to returned money.");
})
    .finally(() => {
    console.log("Ayenda paise nahe doga!!! :D");
});
//WASING CALLBACK KO PROMISE K THROUGH BNANA
function washing() {
    console.log("washing started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing done...");
        }, 5000);
    });
}
function soaking() {
    console.log("soaking started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("soaking done....");
        }, 3000);
    });
}
function drying() {
    console.log("drying started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("drying done....");
        }, 2000);
    });
}
// washing()
//   .then((value) => {
//     console.log(value);
//     return soaking();
//   })
//   .then((value) => {
//     console.log(value);
//     return drying();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); //lazmi lagty he cathch safe way he
// washing().then().then().then;
// ASYNC + AWAIT best way
async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
}
runWashingMachine();
// ---------------------------------------------------------------------
function delay(milisecond) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, 3000);
    });
}
delay(1000)
    .then(() => {
    console.log('the delay is over.');
})
    .catch((error) => {
    console.error('something went wrong:', error);
})
    .finally(() => {
    console.log('this is always execute.');
});
export {};
