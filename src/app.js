let app = { 
    todos: [],

    getTitle: function () {
        let title = document.querySelector("#title");
        let result = title.innerText;
        return result;
    },

    getDescription: function () {
        let description = document.querySelector("#description");
        let result = description.innerText;
        return result;
    },

    getDate: function () {
        return "tbd";
    },

    getPriority: function () {
        let priority = document.querySelector("#priority");
        let priorityText = priority.selectedOptions[0].innerText;
        return priorityText;
        },

    getPriorityValue: function () {
        let priority = document.querySelector("#priority");
        let optionValue = priority.selectedOptions[0].value;
        console.log(optionValue);
        return optionValue;
        },

    createTodo: function () {
        return {
            title: this.getTitle(),
            description: this.getDescription(),
            dueDate: this.getDate(),
            priority: this.getPriority(),
            priorityValue: this.getPriorityValue(),
            };
        },
    buildTodo: function () {
        return this.todos.push(this.createTodo());
    },

    deleteTodo: function (index) {
        this.todos.splice(index, 1);
    }
}

export {app};

// console versions first.

// needs to export and array of objects that make up the to do list.
    // objects need data - corresponds to index
    // 

// needs factory function/constructor to build objects.
