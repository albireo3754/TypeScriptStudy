import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(response => {
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  // ID is id, Title is title, finsied is completed
  // 따라서 type script가 필요한데 에러안만듬?
  logTodo(ID, title, finished)
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}