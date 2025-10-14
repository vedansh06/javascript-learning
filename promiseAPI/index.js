const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
   setTimeout(() => resolve("P2 Success") , 1000)
//todo setTimeout(() => reject("P2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
//! setTimeout(() => resolve("P3 Success"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);

});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });



  const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P4 Success"), 3000);
});

const p5 = new Promise((resolve, reject) => {
   setTimeout(() => resolve("P5 Success") , 1000)
//todo setTimeout(() => reject("P5 Fail"), 1000);
});

const p6 = new Promise((resolve, reject) => {
//! setTimeout(() => resolve("P6 Success"), 2000);
  setTimeout(() => reject("P6 Fail"), 2000);

});

Promise.allSettled([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });



  
  const p7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P7 Success"), 3000);
});

const p8 = new Promise((resolve, reject) => {
   setTimeout(() => resolve("P8 Success") , 5000)
//todo setTimeout(() => reject("P8 Fail"), 1000);
});

const p9 = new Promise((resolve, reject) => {
//! setTimeout(() => resolve("P9 Success"), 2000);
  setTimeout(() => reject("P9 Fail"), 2000);

});

Promise.race([p7, p8, p9])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });



  
  const p10 = new Promise((resolve, reject) => {
//*setTimeout(() => resolve("P10 Success"), 3000);
    setTimeout(() => reject("P10 Fail"), 3000);

});

const p11 = new Promise((resolve, reject) => {
//    setTimeout(() => resolve("P11 Success") , 5000)
 setTimeout(() => reject("P11 Fail"), 1000);
});

const p12 = new Promise((resolve, reject) => {
//! setTimeout(() => resolve("P12 Success"), 2000);
  setTimeout(() => reject("P12 Fail"), 2000);

});

Promise.any([p10, p11, p12])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors)
  });


