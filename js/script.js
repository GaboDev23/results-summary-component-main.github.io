const aceptar = document.getElementById('aceptar');
const result = document.getElementById('result');
const percent = document.getElementById('percent');
const icon = document.querySelectorAll('.icon');
const componentName = document.querySelectorAll('.component-name');
const reaction = document.getElementById('reaction');
const memory = document.getElementById('memory');
const verbal = document.getElementById('verbal');
const visual = document.getElementById('visual');

fetch('data.json')
.then(data => {
    return data.json();
})
.then(res => {
    console.log(res);
    console.log(res[1]);
});

aceptar.addEventListener('click', () => {
    fetch('data.json')
    .then(data => {
        return data.json();
    })
    .then(res => {
        result.textContent = 76;
        percent.textContent = '65%';
        for (const i in res) {
            console.log(componentName);
            console.log(res[i].icon);
            icon[i].src = res[i].icon;
            icon[i].style.opacity = 1;
            componentName[i].textContent = res[i].category
        }

        reaction.textContent = res[0].score;
        memory.textContent = res[1].score;
        verbal.textContent = res[2].score;
        visual.textContent = res[3].score;
    });
});