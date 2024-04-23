// let arraytaskList=[]
// $(document).ready(()=>{
//    $('#add-btn').click(()=>{
//     arraytaskList.push($('#input-task').val())
//     // console.log(arraytaskList);
//    let task=document.createElement('div')
//    task.classList.add('task')
//    let view=$('#view-task')

//    console.log(view);
//    })

// })

let addBtn = document.querySelector("#add-btn");
let inputTask = document.querySelector("#input-task");
let list=document.querySelector('.list')




addBtn.addEventListener('click',()=>{
  let li=document.createElement('li')
  li.innerHTML=inputTask.value
  list.appendChild(li)
  

  let deletebtn=document.createElement('i')
  deletebtn.classList.add('fa-solid')
  deletebtn.classList.add('fa-trash')
  deletebtn.classList.add('delete')
  li.append(deletebtn)
  let edit=document.createElement('i')
  edit.classList.add('fa-solid')
  deletebtn.classList.add('fa-pen')
  deletebtn.classList.add('edit')
  li.append(edit)

})



