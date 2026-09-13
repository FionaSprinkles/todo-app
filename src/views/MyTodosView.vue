<script setup>
    import MyTodos from '@/components/MyTodos.vue';
</script>

<template>
    <main>
        <MyTodos/>
        
        <RouterLink to="/">
            Todo
        </RouterLink>
    </main>
</template>