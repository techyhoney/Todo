// Initialise Data 

const cards = [
  {
    id: 'card-1',
    title: 'Task 1',   // Default Cards Array of object
  },
  {
    id: 'card-2',
    title: 'Task 2',
  },
  {
    id: 'card-3',
    title: 'Task 3',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',       // Default Lists
      title: 'To do',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'In Progress',
      cards: [],
    },
    'list-3': {
      id: 'list-3',
      title: 'Done',
      cards: [],
    },
  },
  listIds: ['list-1', 'list-2', 'list-3'],
};

export default data;
