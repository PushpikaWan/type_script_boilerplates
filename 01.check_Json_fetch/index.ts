import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	userId: string;
	title: string;
	completed: boolean;
}

axios.get(url).then((response) => {
	const todo = response.data as Todo;
	consoleLogTodo(todo.id, todo.title);
});

const consoleLogTodo = (id: number, title: string) => {
	console.log(
		`Todo with Id : ${id}
     and Title : ${title}`
	);
};
