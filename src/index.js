document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('submit', ()=> {
    preventDefault()
  }, false)


  const clearList = document.getElementById('tasks')

document.getElementById('clearBTN').addEventListener('click', () => {
  clearList.remove()
})
  
});

