import { Link, useParams } from "react-router";
import { dummyTasks } from "./TaskList";

const TaskDetail = () => {
    const { id } = useParams();

    return (
        <>
        {dummyTasks[id-1] ? (
            <>
            <h1>Task Details:</h1>
            <Link to="/">Back to Task List</Link>
            <h2>{dummyTasks[id-1].title}</h2>
            <p>{dummyTasks[id-1].description}</p>
            </>
        ) : (
            <>
            <h1>Task Not Found</h1>
            <Link to="/">Back to Task List</Link>
            </>
        )}
            </>
    )
}

export default TaskDetail;