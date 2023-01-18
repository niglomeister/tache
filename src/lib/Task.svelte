<script>
    import app from '../main'
    export let task
</script>

<div>
    <span> {task.name} / </span>
    <span> Urgence: {task.urgency} </span>
    <span> Importance: {task.importance} </span>
    {#if task.expand?.needed?.length > 0}
        <span> Necessite : 
            {#each task.expand.needed as needed_task}
                {needed_task.name},&nbsp
            {/each}
        </span>
    {/if}
    {#if task.completed} 
    fait: <input type='checkbox' name='scales' checked>
    {:else}
        fait: <input type='checkbox' name='scales'>
    {/if}
</div>