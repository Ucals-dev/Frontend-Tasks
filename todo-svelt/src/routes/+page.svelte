<script lang="ts">
    import "../app.css";
    import { onMount } from 'svelte';
    import { faTrash } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    interface ITask{
        id: number;
        text: string;
        done: boolean;
    };
    
    let tasks:ITask[] = [];
    let newTask:string = '';

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:4000/api/todos'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            tasks = await response.json();
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    });

    const updateTask =  async (id:number,done:boolean)  =>{
    await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id, done: done}),
      }
    )
    .then(response => response.json())
    .then(data => tasks = data)
    .catch(error => console.error(error));
  } 

  const deleteTask =  async (id:number)  =>{
    await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: 'DELETE',
      }
    )
    .then(response => response.json())
    .then(data => tasks = data)
    .catch(error => console.error(error));
  } 

  const addTask =  async ()  =>{
    await fetch(`http://localhost:4000/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: newTask}),
      }
    )
    .then(response => response.json())
    .then(data =>{ tasks = data;
      newTask = '';
    })
    .catch(error => console.error(error));
  }

	$: remaining = tasks.filter((t) => !t.done).length;


</script>
<div class="flex flex-col items-center w-full">
    <h1 class="flex flex-row">Todos : {remaining} remaining</h1>

    {#each tasks as todo}
        <div class="flex flex-row self-start pl-5 w-full items-center">
            <input type="checkbox" bind:checked={todo.done} on:click={() => updateTask(todo.id, !todo.done)}/>
            <p class=" border-gray-400 rounded-lg border p-1 m-1 w-full" class:done={todo.done}>{todo.text}</p>
            <button  on:click={() => deleteTask(todo.id)}>
                <FontAwesomeIcon icon={faTrash} class="ml-1 cursor-pointer text-red-500"/>
            </button>
            
        </div>
    {/each}
    <div class="flex flex-row pt-1">
        <input type='text' bind:value={newTask} class='border-2 border-gray-400 border-opacity-50 rounded-lg p-1 '/>
        <button class='border-2 border-gray-400 rounded-lg p-1 ml-2' on:click={() => addTask()}>
          Add
        </button>
    </div>
</div>

