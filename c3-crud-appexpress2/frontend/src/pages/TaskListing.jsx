import { getReq } from '../api/axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const base_uri = process.env.BASE_URI;

const TaskListing = () => {

  const getAllTasks = async () => {
    const response = await getReq('http://localhost:9000/tasks');
  }
  return (
    <div>
      TaskListing
    </div>
  )
}

export default TaskListing
