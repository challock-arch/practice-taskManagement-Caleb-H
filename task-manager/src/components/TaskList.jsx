import { Link, Outlet } from "react-router-dom"

export const dummyTasks = [
    {
        id: 1,
        title: "Laundry",
        description: "Wash, Dry, and Fold Laundry."
    },
    {
        id: 2,
        title: "Dishes",
        description: "Run the dishwasher and put away dishes when done."
    },
    {
        id: 3,
        title: "Sweep and Mop",
        description: "Sweep and Mop living Room and kitchen."
    },
    {
        id: 4,
        title: "Bathrooms",
        description: "Clean bathroom sink, toilet, and shower."
    },
    {
        id: 5,
        title: "Trash",
        description: "Take Trash to dumpster out back."
    }
];

const TaskList = () => {

    return (
        <>
            <h1>
                Task List:
            </h1>
            <ol>
            {dummyTasks.map((task, index) => (
                <div className="task-card" key={index}>
                    <li>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                    </li>
                </div>
            ))};
            </ol>
            <Outlet />
        </>
    )
};

export default TaskList;