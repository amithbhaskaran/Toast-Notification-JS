import Toast from "./Toast.js";

let count = 1;
document.querySelector('button').addEventListener('click', (e) => {
  let toast = new Toast({
    position: 'top-right',
    // text: 'Welcome New Toast..!',
    text: 'Toast' + ': ' + count,
    autoClose: 1000,
    canClose: true,
  });
  count++;
})

setTimeout(() => {
  console.log(count);
}, 4000);

// setTimeout(() => {
//   toast.update({
//     position: 'bottom-left',
//     text: 'Hello I am Updated',
//   })
// }, 2000);

// setTimeout(() => {
//   toast.remove()
// }, 1000);

// setTimeout(() => {
//   new Toast({
//     position: 'bottom-left',
//     text: 'Second Toast',
//   });
// }, 2000);

// let obj = {
//   'fname': 'Amith',
//   'lname': 'Bhaskaran',
//   'age': 20
// }
// let obj2 = {
//   'fname': 'First Name',
//   'lnames': 'Last Name',
//   'ages': 24
// }

// console.log(Object.entries({...obj, ...obj2}));

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(key);
//   console.log(value);
// })
