let app = { 
    todos: ["todo one", "todo two", "todo three"],
    
    // getTodos: function () {
    // let currentTodos = todos;
    // return currentTodos;
    // },

    buildTodo: function () {
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

        return todos.push(createToDo());
    }
}

export {app};

// console versions first.

// needs to export and array of objects that make up the to do list.
    // objects need data - corresponds to index
    // 

// needs factory function/constructor to build objects.
