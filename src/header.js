import './css/header.css'

function create_header() {
    function create_search() {
        const title_div = document.createElement('div');
        title_div.id = 'title-div';
        const title = document.createElement('h2')
        title.id = 'title';
        title.innerHTML = 'Todoify';
        title_div.appendChild(title);
        document.getElementById('header_to_do').appendChild(title_div);
    
    }

    create_search();
}

export {create_header}