import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postReq } from "../api/axios";
import { addTask } from "../../store/features/TaskReducer";

export default function AddTask() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await postReq('/tasks/add', data);
    console.log(response);
    dispatch(addTask(response));
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}><br />
      <input type="text" {...register("title")} /><br />
      <input type="text" {...register("description")} /><br />
      <input type="date" {...register("exampleRequired",)} /><br />
      <input type="submit" />
    </form>
  );
}
