//node.js
//const momnet = require('moment');
import moment from 'moment'

window.onload = () => {
    const cal = moment().calendar();
    const eleMoment = document.querySelector('#moment');
    eleMoment.innerHTML = `<h1>${cal}</h1>`;
}