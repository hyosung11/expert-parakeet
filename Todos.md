# Todos for the Project

## Features

1. group conferences based on specialty
   Multichoice box: cardiology / Pediatric / ....
    => Get all the unique values from the "specialty" field
      Work on the list we got from the get request (so far, we get "name" and "start_date") (select distinct values in an object = push in an array of values)  $
      Do another request ("SELECT DISTINCT(specialty) FROM conference")  $$
   Choose one category
     either launches a query or it filters the existing query and just displays the category

   - [x] Make a select button in pug with the options of the button using the unique specialties list
   - [x] Render capitalized specialties on the welcome page
   - [x] Create default value for drop down menu.
   - [ ] Filter the specialties

2. create admin user
   1. login
   2. password
   3. create congress (interface to input the data), full CRUD

"SELECT DISTINCT(specialty) FROM conference";

```sql
  /* Returns a promise that resolves to a sorted list of all the todo lists
  together with their todos. The list is sorted by completion status and
  title (case-insensitive). The todos in the list are unsorted. */
  async sortedTodoLists() {
    const ALL_TODOLISTS =
      "SELECT * FROM todolists WHERE username = $1 ORDER BY lower(title) ASC";
    const ALL_TODOS = "SELECT * FROM todos WHERE username = $1";

    let resultTodoLists = dbQuery(ALL_TODOLISTS, this.username);
    let resultTodos = dbQuery(ALL_TODOS, this.username);
    let resultBoth = await Promise.all([resultTodoLists, resultTodos]);

    let allTodoLists = resultBoth[0].rows;
    let allTodos = resultBoth[1].rows;
    if (!allTodoLists || !allTodos) return undefined;

    allTodoLists.forEach(todoList => {
      todoList.todos = allTodos.filter(todo => {
        return todoList.id === todo.todoList_id;
      });
    });

    return this._partitionTodoLists(allTodoLists);
  }
```

### PEDAC

Problem

Examples

Data Structure

Algorithm

Code
