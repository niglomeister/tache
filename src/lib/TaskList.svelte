<script>
    import Task from './Task.svelte'
    import NewTaskForm from './NewTaskForm.svelte'
    import {onMount} from 'svelte'
    import { pb} from './pocketbase'


    export let tasks = []

    onMount(async () => {
        const res = await pb.collection("tasks").getList(1,50, {
            sort: '-created',
            expand: 'needed',
        })
        tasks = res.items
        pb.collection("tasks").subscribe("*", ({action, record}) => {
            if (action == 'create'){
                tasks = [record, ...tasks]
            }
            if (action == 'delete'){
                tasks = tasks.filter(t => t.id !== record.id)
            }
        })
    })
    
    let adding_task = false
    export function add_task(){
        adding_task = !adding_task
    }
</script>


add task below --/>
<button on:click={add_task}>
    + ({tasks.length})
</button>
{#if adding_task}
 <NewTaskForm tasks={tasks} bind:adding_task/>
{/if}
<div id="task_list">
    {#each tasks as task (task.id)}
        <Task task={task}/> 
    {/each }
</div>
