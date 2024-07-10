let todoList=[
  {item:"Milk",dueDate:'4/10/2023'},
{item:"water",dueDate:'14/10/2023'}];

function addtodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems(){
 let containerelement=document.querySelector('.todo-container');
 let newHtml= '';
 for(let i=0; i <todoList.length; i++){
  // let item=todoList[i].item;
  // let dueDate=todoList[i].dueDate;
  let{item,dueDate}=todoList[i];

 newHtml += `
 
 <span>${item}</span>
 <span>${dueDate}</span>
 <button onclick="todoList.splice(${i},1);displayItems();" class="button-delete">Delete</button>

 ` }
 containerelement.innerHTML= newHtml;
}