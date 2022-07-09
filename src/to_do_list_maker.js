import { create } from "lodash";

const projects = {};
let count = 0;

function to_do_list() {
    function find_new_projects(){
        const btn = document.getElementById('create-project-btn');
        const prbtn = document.getElementById('project-submit');

        function form_for_to_do() {
            const project_display = document.getElementById('project-display');
            const form_div = document.createElement('div');
            const create_to_do = document.createElement('button');
            const to_do_div = document.createElement('div');
            to_do_div.id = 'to_do_things';
            project_display.appendChild(to_do_div);
            create_to_do.innerHTML = 'Create New Task';
            form_div.appendChild(create_to_do);
            project_display.appendChild(form_div);
            create_to_do.addEventListener('click', () => {
                form_div.innerHTML = '';
                const create_form = document.createElement('form');
                create_form.action = 'post';
                const input_title = document.createElement('input');
                input_title.type = 'text';
                const title_label = document.createElement('label');
                title_label.for = 'title';
                title_label.innerHTML = 'Title: '
                create_form.appendChild(title_label);
                create_form.appendChild(input_title);
                form_div.appendChild(create_form);
                const date = document.createElement('input');
                date.type = 'date';
                const date_label = document.createElement('label');
                date_label.innerHTML = 'Date: ';
                const submit = document.createElement('button');
                submit.type = 'submit';
                submit.innerHTML = 'Submit';
                create_form.appendChild(title_label);
                create_form.appendChild(input_title);
                create_form.appendChild(date_label);
                create_form.appendChild(date);
                create_form.appendChild(submit);
                form_div.appendChild(create_form);
                
                submit.addEventListener('click', () => {
                    const to_do_projects = document.createElement('div');
                    const title_od = document.createElement('h4');
                    title_od.innerHTML = input_title.value;
                    to_do_projects.appendChild(title_od);
                    const date_od = document.createElement('h4');
                    date_od.innerHTML = date.value;
                    to_do_projects.appendChild(date_od);
                    to_do_div.appendChild(to_do_projects);
                    form_div.innerHTML = ''
                    form_div.appendChild(create_to_do);
                })
            })
        }

        prbtn.addEventListener('click', () => {
            const item_btn = document.createElement('button')
            let project_value = document.getElementById('project-input').value;
            item_btn.innerHTML = project_value;
            btn.before(item_btn)
            to_do_list();
            projects[count] = project_value;
            item_btn.id = count+'-project';
            count += 1;
            item_btn.addEventListener('click', () => {
                const project_display = document.getElementById('project-display');
                const create_title = document.createElement('h1');
                project_display.innerHTML = '';
                create_title.innerHTML = project_value;
                project_display.appendChild(create_title);
                form_for_to_do();
                item_btn.disabled = false;
                
            })
        })
    
    }
    find_new_projects();
}

export {to_do_list}