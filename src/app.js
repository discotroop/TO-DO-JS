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
        return "tbd";
    },

    getNotes: function () {
        return "tbd";
    },

    getChecklist: function () {
        return "might do later"
    },  

    createTodo: function () {
        return {
            title: this.getTitle(),
            description: this.getDescription(),
            dueDate: this.getDate(),
            priority: this.getPriority(),
            notes: this.getNotes(),
            checklist: this.getChecklist(),
            };
        },
    buildTodo: function () {
        return this.todos.push(this.createTodo());
    }
}

export {app};

// console versions first.

// needs to export and array of objects that make up the to do list.
    // objects need data - corresponds to index
    // 

// needs factory function/constructor to build objects.
