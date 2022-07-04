

function to_do_list(title, content, date, priority) {

    function find_new_projects(){
        const btn = document.getElementById('create-project-btn');
        const prbtn = document.getElementById('project-submit');
        prbtn.addEventListener('click', () => {
            const item_btn = document.createElement('button')
            let project_value = document.getElementById('project-input').value;
            item_btn.innerHTML = project_value;
            btn.before(item_btn)
            to_do_list();
            projects[count] = project_value;
            item_btn.id = count+'-project';
            count += 1;
        })
    }
    find_new_projects();
}

export {to_do_list}