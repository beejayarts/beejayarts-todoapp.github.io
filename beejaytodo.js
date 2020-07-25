const addBtn = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteBtn = document.querySelector('.delete');
const inputField = document.querySelector('.search input');


addBtn.addEventListener('submit', (e)=>{
    e.preventDefault();
    //get the inputted string, trim it and convert to lowercase.
    let todo = addBtn.add.value.trim().toLowerCase();
    //check if there is actually an input.
    if(todo.length){
        generateHtml(todo);
        addBtn.reset();
    }
    
})

//to generate and insert html template
function generateHtml (todo){
 let html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
 <span>${todo}</span>
 <i class="far fa-trash-alt delete"></i>
</li>`;

list.innerHTML+=html;


}

//activating delete button

list.addEventListener('click', (ev)=>{
    if(ev.target.classList.contains('delete')){
        ev.target.parentElement.remove();

        };
        
    
});

//Filtering options out
inputField.addEventListener('keyup', (ev)=>{
let input = inputField.value.trim().toLowerCase();
filtered(input);
})

//the main filtering function
function filtered (input){
 Array.from(list.children).filter((arr)=>{
     return !arr.textContent.includes(input);
 }).forEach((arr)=>{
    arr.classList.add('filtered');
 });

 Array.from(list.children).filter((arr)=>{
    return arr.textContent.includes(input);
}).forEach((arr)=>{
   arr.classList.remove('filtered');
});
}
 