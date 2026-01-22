import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const JobUpdate = ({ job, closeModal, addJobs, setAddJobs }) => {
  const axiosSecure = useAxiosSecure();
  const [updateData, setUpdateData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    image: "",
    budget: "",
    category: "",
    experienceLevel: "",
    clientName: "",
  });

  useEffect(() => {
    if (job) {
      setUpdateData({
        title: job.title,
        shortDescription: job.shortDescription,
        description: job.description,
        image: job.image,
        budget: job.budget,
        category: job.category,
        experienceLevel: job.experienceLevel,
        clientName: job.clientName,
      });
    }
  }, [job]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData({ ...updateData, [name]: value });
  };
  const handleUpdate = async (event) => {
  event.preventDefault();

  const res = await axiosSecure.patch(`/products/${job._id}`, updateData);

  if (res.data.modifiedCount > 0) {
    Swal.fire("Updated!", "Job updated successfully", "success");

    const updated = addJobs.map((j) =>
      j._id === job._id ? { ...j, ...updateData } : j
    );
    setAddJobs(updated);

    closeModal();
  }
};




  return (
    <div className="modal-box">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update Job
        </h2>
        <form onSubmit={handleUpdate} className="space-y-5">
  
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={updateData.title}
              onChange={handleChange}
              placeholder="Frontend Developer"
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              required
            />
          </div>

    
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Short Description
            </label>
            <input
              type="text"
              name="shortDescription"
              value={updateData.shortDescription}
              onChange={handleChange}
              placeholder="Brief summary..."
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              required
            />
          </div>


          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Description
            </label>
            <textarea
              name="description"
              value={updateData.description}
              onChange={handleChange}
              placeholder="Full job description..."
              rows="4"
              className="textarea textarea-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition resize-none"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="image"
              value={updateData.image}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              required
            />
          </div>

 
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              value={updateData.budget}
              onChange={handleChange}
              placeholder="300"
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              required
            />
          </div>

  
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Category
            </label>
            <select
              name="category"
              value={updateData.category}
              onChange={handleChange}
              className="select select-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              required
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Content Writer">Content Writer</option>
              <option value="Video Editor">Video Editor</option>
            </select>
          </div>

   
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={updateData.experienceLevel}
              onChange={handleChange}
              className="select select-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              required
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>


          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Client Name
            </label>
            <input
              type="text"
              name="clientName"
              value={updateData.clientName}
              onChange={handleChange}
              placeholder="Client or Company Name"
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              required
            />
          </div>

        
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              type="submit"
              className="btn btn-outline btn-primary w-full sm:w-auto flex-1 py-2 text-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>

      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={closeModal} type="button" className="btn btn-outline btn-warning">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default JobUpdate;
