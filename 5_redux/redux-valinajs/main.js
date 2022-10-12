import { addCount, substractCount } from "./actions/counter.js";
import { addTodo } from "./actions/todo.js";
import store from "./store.js";

// ======== COUNTER ========
// Truy cập vào các thành phần
const counterEl = document.getElementById("counter");
const btnAdd = document.getElementById("btn-add");
const btnSubtract = document.getElementById("btn-subtract");

// Tăng giá trị
btnAdd.addEventListener("click", () => {
    store.dispatch(addCount());
});

// Giảm giá trị
btnSubtract.addEventListener("click", () => {
    store.dispatch(substractCount());
});

// ======== TODO ========
// Truy cập vào các thành phần
const inputEl = document.getElementById("todo-input");
const btnAddTodo = document.getElementById("btn-add-todo");
const todoListEl = document.getElementById("todo-list");

// Hiển thị danh sách công việc
function renderTodo(listTodo) {
    if (listTodo.length == 0) {
        todoListEl.innerHTML =
            "<li>Không có công việc nào trong danh sách</li>";
    }

    let html = "";
    listTodo.forEach((todo) => {
        html += `<li>${todo.title}</li>`;
    });

    todoListEl.innerHTML = html;
}

// Thêm công việc mới
const handleAddTodo = () => {
    let title = inputEl.value;
    if (!title) {
        alert("Tiêu đề không được để trống");
        return
    }

    let newTodo = {
        id: store.getState().todos.length + 1,
        title
    }

    store.dispatch(addTodo(newTodo))

    inputEl.value = "";
}

inputEl.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        handleAddTodo();
    }
})
btnAddTodo.addEventListener("click", handleAddTodo)

// Lấy dữ liệu từ store và hiển thị ds ban đầu
renderTodo(store.getState().todos)

// Lắng nghe sự thay đổi từ store
store.subscribe(() => {
    const { counter, todos } = store.getState();

    counterEl.innerText = counter;
    renderTodo(todos)
});
