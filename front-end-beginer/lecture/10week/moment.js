window.onload = () => {
    const cal = moment().calendar();
    const eleMoment = document.querySelector('#moment');
    eleMoment.innerHTML = `<h1>${cal}</h1>`;
}