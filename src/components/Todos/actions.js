export const actions = {
  ADD: (task) => {
    return { type: 'ADD', taskName: task };
  },
  DELETE: (taskId) => {
    return { type: 'DELETE', taskId }
  },
  EDIT: (payload) => {
    return { type: 'EDIT', taskPayload : payload}
  },
  COMPLETED: (taskId) => {
    return { type: 'COMPLETED', taskId}
  }
};
