import { getReq } from '../api/axios';


const TaskListing = () => {

  const getAllTasks = async () => {
    const response = await getReq('')
  }
  return (
    <div>
      TaskListing
    </div>
  )
}

export default TaskListing
