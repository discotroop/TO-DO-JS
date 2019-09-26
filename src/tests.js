let testObj = {
    arr: ["one", "two"],
    func: function () {
        console.log(this.arr[1]);
    },
    extend: function () {
        this.arr.push("tests");
    }
}

export {testObj};