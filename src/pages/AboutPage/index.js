import source from './task.md';

const TaskPage = () => {
  return <article dangerouslySetInnerHTML={{ __html: source }}></article>;
};

export default TaskPage;
