let todos = ["todo one", "todo two", "todo three"];

export function getToDos () {
    let currentTodos = todos;
    console.log(currentTodos);
    return currentTodos;
}

export function buildToDo() {
    function getTitle() {
        console.log("title test");
    }

    function getDescription() {
        console.log("description");
    }

    function getDate() {
        console.log("date/time");
        // use Date.now and a library to parse time
    }

    function getPriority() {
        console.log("high priority");
    }

    function getNotes() {
        console.log("notes");
    }

    function getChecklist() {
        console.log("checklist?");
    }
    
    function createToDo() {
        return {
          title: getTitle(),
          description: getDescription(),
          dueDate: getDate(),
          priority: getPriority(),
          notes: getNotes(),
          checklist: getChecklist(),
        };
    }
     
    console.log(Date.now());
    console.log(todos);
    return todos.push(createToDo());
}



// console versions first.

// needs to export and array of objects that make up the to do list.
    // objects need data - corresponds to index
    // 

// needs factory function/constructor to build objects.
