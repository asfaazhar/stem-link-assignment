const manupa = {
    name: "Manupa",
    age: 23,
  };
  
  const todoCreateButton = document.querySelector(".todo__create__button"); //add button
  const todoInput = document.querySelector(".todo__input"); //input text field
  const todoContainer = document.querySelector(".todo__container"); //whole container-all todoItems
  
  const todoValues = [];
  let todoElements = []; //only strings
  
  todoCreateButton.addEventListener("click", () => {
    const value = todoInput.value; //retrieves adding text value
    if (value === "") {
      return; // Return if input is empty; returning inside the console - js
    }
    
    todoValues.push(value); //wrap inside array
    console.log(todoValues); 
    todoInput.value = ""; //making array empty; clear input field
  
    todoElements = todoValues.map((val) => { //html strings
      return `<div class="todo__item">
            <div class="todo__item__left">
              <input type="checkbox" id="completed" name="completed" />
              <span>${val}</span>
            </div>
            <div class="todo__item__right">
              <svg
                class="todo__delete__button"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trash"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </div>
          </div>`;
    });
    console.log(todoElements.join(" ")); //returning all todo items
    todoContainer.innerHTML = todoElements.join(" "); // Update container content
  });
  

  todoItem = document.querySelector(".todo__item");


  // error coming as not function needed a function

    const todoDeleteButton = document.querySelectorAll(".todo__delete__button");
    todoDeleteButton.foreach((button, index) => {
      button.addEventListener("click", () => {
        todoValues.splice(index, 1);
        // function cretaing to do - recheck
      });
    })

  //   button.addEventListener("click", () => {
  //     todoValues.splice(index, 1);
  //     todoItem.remove();
  //     // button.parentElement.parentElement.remove();
  //   });
  // });






    // const todoDeleteButton = document.querySelector(".todo__delete__button"); // bin icon
    // let todoItem = document.querySelector(".todo__container");

  // const todoDeleteButton = document.querySelector(".todo__delete__button");todoDeleteButton.addEventListener("click", () => deleteItem(index));
  // todoInput.removeChild(deleteItem);

      // function deleteItem(index) {
      //   todoContainer.splice(index, 1).forEach(index => {
      //     map(index)
      //   });
      // }




      // todoContainer.array.forEach(index => {
      //   todoDeleteButton.addEventListener("click", () => deleteItem(index));
      // });

      // todoDeleteButton.addEventListener("click", () => deleteItem(index));
      // todoItem.remove();

  // //removing todo Item without displaying


    // function deleteItem(index) {
    //   // todoDeleteButton.addEventListener("click");
    //   // todoContainer.array.forEach(index);
    //   todoItem.remove();
    // }

  // function deleteItem() {
  //   todoInput.splice(index, 1);
  // }


  