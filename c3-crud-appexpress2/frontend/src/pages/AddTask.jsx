import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postReq } from "../api/axios";
import { addTask } from "../../store/features/TaskReducer";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await postReq('/tasks/add', data);
    if(response) {
      dispatch(addTask(response?.data?.data));
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}><br />
      <input type="text" {...register("title")} /><br />
      <input type="text" {...register("description")} /><br />
      <input type="date" {...register("due_date")} /><br />
      <input type="submit" /> 
    </form>
  );
}
