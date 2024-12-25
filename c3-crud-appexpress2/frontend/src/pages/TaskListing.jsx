import { useEffect } from "react";
import { getReq } from "../api/axios";
// import cors from "cors"; // Remove this
import { useDispatch, useSelector } from 'react-redux';
import { addTask, getAllTask } from '../../store/features/TaskReducer';

// import dotenv from 'dotenv';

// dotenv.config();

// const base_uri = process.env.BASE_URI;

const TaskListing = () => {

  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state?.tasks);
  console.log(allTasks);
  

  const getAllTasks = async () => {
    try {
      // const response = await getReq(`${base_uri}/tasks`);
      const response = await getReq("/tasks");
      const data = response?.data?.data;
      dispatch(getAllTask(data));

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, [])

  return <div>
    <div>
      {allTasks?.task?.length === 0 ? 'Np tasks found!': 
      <table>
        <tr>
          <th>Title</th>
          <th>Discription</th>
          <th>Due Date</th>
        </tr>
        {allTasks?.task.map((item) => {
          return (
            <tr>
              <td>{item?.title}</td>
              <td>{item?.discription}</td>
              <td>{item?.due_date}</td>
            </tr>
          )
        })}
        </table>}
    </div>
  </div>;
};

export default TaskListing;
