import { useEffect } from "react";
import { getReq } from "../api/axios";
// import cors from "cors"; // Remove this
import { useDispatch, useSelector } from "react-redux";
import { addTask, getAllTask } from "../../store/features/TaskReducer";
import { useNavigate } from "react-router-dom";

// import dotenv from 'dotenv';

// dotenv.config();

// const base_uri = process.env.BASE_URI;

const TaskListing = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state?.tasks);
  console.log(allTasks);
  const navigate = useNavigate()

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
  }, []);

  return (
    <div>
      <button onClick={() => navigate('/add')}>Add task +</button>
      <div>
        {allTasks?.task?.length === 0 ? (
          "No tasks found!"
        ) : (
          <table>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
            </tr>
            {allTasks?.task.map((item) => {
              return (
                <tr>
                  <td>{item?.title}</td>
                  <td>{item?.description}</td>
                  <td>{item?.due_date}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};

export default TaskListing;
