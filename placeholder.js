// Fetch function

function FetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => dataFunc(data))
}


// Data working function

function dataFunc(load){
    const dataLoad = document.querySelector('.data-load')
    load.forEach(element => {
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        h3.innerHTML = `
            ${element.id}. ${element.title}
        `
        p.innerText = element.body

        div.appendChild(h3)
        div.appendChild(p)
       const datas =  dataLoad.appendChild(div)
        datas.classList.add('rong')
    });
}

FetchData()