export const storedTodoItems = (state) => {
  return state.todoItems;
}
export const getCount = (state) => {
  return state.count;
}
export const reverseHeaderText = (state) => {
  return state.headerText.split('').reverse().join('');
}