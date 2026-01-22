import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";


const MyAcceptedTasks = () => {
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
 const [pageLoading, setPageLoading] = useState(true);
 
  useEffect(() => {
    axiosSecure.get("/accepted-jobs")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err))
      .finally(() => setPageLoading(false) );
  }, []);


  const handleDone = (id) => {
    axiosSecure.delete(`/accepted-jobs/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
  
          setTasks(tasks.filter(task => task._id !== id));
        }
      })
      .catch(err => console.error(err));
  };


  const handleCancel = (id) => {
    axiosSecure.delete(`/accepted-jobs/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
     
          setTasks(tasks.filter(task => task._id !== id));
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">My Accepted Tasks</h2>
    {
      pageLoading ? (
        <div className="flex justify-center items-center my-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
      ): (
         !tasks.length ? (
        <p className="text-gray-500">No accepted tasks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map(task => (
            <div key={task._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">      
              <div>
                <img src={task.image} alt={task.title} className="w-full h-40 object-cover rounded" />
                <h3 className="LatoSemibold text-xl font-bold mt-2">{task.title}</h3>
                <p className="text-gray-700 LatoRegular">{task.description}</p>
                <p className=" LatoRegular text-gray-900 font-semibold mt-1">Budget: ${task.budget}</p>
                <p className="text-gray-600 text-sm LatoRegular">Client: {task.clientName}</p>
                <p className="text-gray-600 text-sm LatoRegular">Time: {task.createdAt}</p>
              </div>

              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={() => handleDone(task._id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1"
                >
                  ✅ DONE
                </button>
                <button
                  onClick={() => handleCancel(task._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
                >
                  ❌ CANCEL
                </button>
              </div>
            </div>
          ))}
        </div>
      )
      )
    }
     
    </div>
  );
};

export default MyAcceptedTasks;
