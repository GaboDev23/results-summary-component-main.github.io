const aceptar = document.getElementById('aceptar');

aceptar.addEventListener('click', () => {
    fetch('data.json')
    .then(data => {
        return data.json();
    })
    .then(res => {
        console.log(res);
    })
});