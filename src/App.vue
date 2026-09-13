<template>
  <nav>
    <RouterLink to="/addTodo">
      Add new
    </RouterLink>

    <RouterLink to="/">
      Let's go!
    </RouterLink>

    <RouterLink to="/myTodos">
      Todo's List
    </RouterLink>
  </nav>

  <RouterView />
</template>