import { v4 as uuidV4 } from "uuid";

type Task = {
  id:string,
  title:string,
  completed:boolean,
  createdAt: Date,
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

form?.addEventListener("submit", (e) => {
  console.log("Before submitting");
  
  e.preventDefault();
  
  console.log("After submitting");
    if(input?.value == "" || input?.value == null) return;
    
    const newTask = {
        id: uuidV4(),
        title: input.value,
        completed:false,
        createdAt : new Date()
    }

    addListItem(newTask);
});

function addListItem(task: Task){
  console.log("addListItem is called");
  
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

