// const formulario = document.querySelector('.login__form')
// const inputs = document.querySelectorAll('.form__input');
// const messageEmail = document.querySelector('.message-email');
// const messagePass = document.querySelector('.message-password');
// const messageName = document.querySelector('.message-name');
// const buttonMensaje = document.querySelector('.button-mensaje');

// const expresiones = {
//     nombre: /^(\s)*[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*(\s)*$/,
//     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
// }

// const campos = {
//     nombre: false,
//     correo: false,
//     password: false
// }

// const validarForm = (e) => {
//     switch (e.target.name) {
//         case 'email':
//             if (!expresiones.correo.test(e.target.value)) {
//                 messageEmail.style.display = 'block';
//                 campos.correo = false;
//             }
//             else {
//                 messageEmail.style.display = 'none';
//                 campos.correo = true;
//             }
//             break;

//         case 'password':
//             if (!expresiones.password.test(e.target.value)) {
//                 messagePass.style.display = 'block';
//                 campos.password = false;
//             }
//             else {
//                 messagePass.style.display = 'none';
//                 campos.password = true;
//             }
//             break;

//         case 'name':
//             if (!expresiones.nombre.test(e.target.value)) {
//                 messageName.style.display = 'block';
//                 campos.nombre = false;
//             }
//             else {
//                 messageName.style.display = 'none';
//                 campos.nombre = true;
//             }
//             break;

//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarForm);
//     input.addEventListener('blur', validarForm);
// })

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
// });
