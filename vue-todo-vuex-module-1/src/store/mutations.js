const addOneItem = (state, data) => {
  let obj = {
    completed: false,
    item: data.todoItem
  }

  localStorage.setItem(data.todoItem, JSON.stringify(obj));

  state.todoItems.push(obj);
}
const clearAll = (state) => {
  state.todoItems=[];
  localStorage.clear();
}
const removeItem = (state, data) => {
  localStorage.removeItem(data.todoItem.item);
  state.todoItems.splice(data.index, 1);
}
const toggleItem = (state, data) => {
  localStorage.removeItem(data.todoItem.item);
  
  state.todoItems[data.index].completed = !state.todoItems[data.index].completed;
  localStorage.setItem(data.todoItem.item, JSON.stringify(data.todoItem));
}
const addCounter = (state) => {
  state.count++;
}

export { addOneItem, clearAll, removeItem, toggleItem, addCounter }
