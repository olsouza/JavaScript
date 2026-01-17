// const h1 = document.querySelector('.container h1');

// function getSemanaDia (semanaDia) {
//     const diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//     return diaSemana[semanaDia];
// //     let diaSemanaTexto;

// //     switch (semanaDia) {
// //     case 0:
// //         diaSemanaTexto = 'Domingo';
// //         break;
// //     case 1:
// //         diaSemanaTexto = 'Segunda-feira';
// //         break;
// //     case 2:
// //         diaSemanaTexto = 'Terça-feira';
// //         break;
// //     case 3:
// //         diaSemanaTexto = 'Quarta-feira';
// //         break;
// //     case 4:
// //         diaSemanaTexto = 'Quinta-feira';
// //         break;
// //     case 5:
// //         diaSemanaTexto = 'Sexta-feira';
// //         break;
// //     case 6:
// //         diaSemanaTexto = 'Sábado';
// //         break;
// //     default:
// //         diaSemanaTexto = '';
// //  }
// // return diaSemanaTexto;
// }

// function getMes (mes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return meses[mes];
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
// const semanaDia = data.getDay();
// const diaSemanaTexto = getSemanaDia(semanaDia);
// const mes = data.getMonth();
// const mesTexto = getMes(mes);

// return (
//     `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// );
// }

// const data = new Date();
// h1.classList.add('horario');
// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.classList.add('horario');

//  const opcoes = {
//      dateStyle: 'full',
//      timeStyle: 'short'
//  };

h1.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'});