import {create_header} from './header'
import './css/content.css'
import Swal from 'sweetalert2'

create_header();

function search_bar() {
    const project = []
    const content = document.getElementById('content')
    
    function create_content() {
        const left_hand_side = document.createElement('div');
        const right_hand_side = document.createElement('div');
        left_hand_side.id = 'new-projects';
        right_hand_side.id = 'project-display';
        right_hand_side.innerHTML = 'hello world'
        const title_of_left = document.createElement('h3')
        title_of_left.innerHTML = 'Existing Projects:'
        left_hand_side.appendChild(title_of_left);
        
        function create_left_btn() {
            const ul = document.createElement('ul');
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.id = 'create-project-btn';
            btn.innerHTML = '+ Add Project';
            li.appendChild(btn);
            ul.appendChild(li);
            left_hand_side.appendChild(ul)


           

            btn.addEventListener('click', () => {
                Swal.fire({
                    title: 'Name your project:',
                    html: '<input id="project-input" class="swal2-input">',
                    confirmButtonText: '<button type="button" id="project-submit" aria-label="" style="display: inline-block; padding: 0; background-color: none;">Submit</button>',
                })
                const prbtn = document.getElementById('project-submit');
                prbtn.addEventListener('click', () => {
                    const item_btn = document.createElement('button')
                    let project_value = document.getElementById('project-input').value;
                    item_btn.innerHTML = project_value;
                    btn.before(item_btn)
                })
                
            })
        }

        create_left_btn();


        content.appendChild(left_hand_side);
        content.appendChild(right_hand_side);
    }

    create_content();
}



export {search_bar}