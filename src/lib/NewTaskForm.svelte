<script>
    import {pb} from './pocketbase.js'

    export let tasks = []
    export let adding_task = false
    
    let warning = ''
    const task = {
        name : '',
        urgency: 0,
        importance: 0,
        needed: ['crllnb11e1w6f5g']
    }
    async function add_task() {
        if (task.name != ''){
        adding_task = !adding_task
        const added_task = await pb.collection('tasks').create(task)
        console.log(added_task)
        }
        else {
            warning = 'task name cannot be blank'
        }
    }

</script>

<div>
    <from on:submit|preventDefault>
    nom: <input type='text' bind:value={task.name}>
    urgence: <input type='number' bind:value={task.urgency}>
    importance: <input type='number' bind:value={task.importance}>
    necessite: <input list="task_names" bind:value={task.needed[0]}>
    <datalist id="task_names">
        {#each tasks as t (t.id)}
            <option value={t.id}>{t.name}</option>
        {/each}
    </datalist>
    <button on:click={add_task}>finit</button>
    </from>
</div>
<div>
    {warning}
</div>