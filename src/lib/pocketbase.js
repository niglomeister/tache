import PocketBase from 'pocketbase'
import { writable } from 'svelte/store'

export const pb = new PocketBase("http://127.0.0.1:8090")

export const currentTasks = writable(pb.authStore.model)

pb.authStore.onChange((auth) => {
    console.log("authstore", auth)
    currentTasks.set(pb.authStore.model) 
})