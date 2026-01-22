import React, { use, useEffect, useRef, useState } from "react";
import Container from "../../Components/Container/Container";
import { AuthConText } from "../../Context/AuthConText";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import JobUpdate from "../../Components/JobUpdate/JobUpdate";

const AddJob = () => {
  const [addJobs, setAddJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [ pageLoading, setPageLoading] = useState(true);

  const modalRef = useRef();
  const updateOpenModal = useRef();
  const axiosSecure = useAxiosSecure();
  const { user} = use(AuthConText);

  useEffect(() => {
    axiosSecure
      .get("/products")
      .then((res) => setAddJobs(res.data))
      .catch((err) => console.error(err))
      .finally(() => setPageLoading(false));
  }, []);

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleJobSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newJob = {
      title: form.title.value,
      category: form.category.value,
      shortDescription: form.shortDescription.value,
      description: form.description.value,
      image: form.photoUrl.value,
      budget: parseInt(form.budget.value),
      experienceLevel: form.experienceLevel.value,
      clientName: form.clientName.value,
      userEmail: form.email.value,
      postedBy: form.name.value,
      createdAt: new Date().toISOString(),
    };

    axiosSecure
      .post("/products", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          newJob._id = res.data.insertedId;
          setAddJobs([...addJobs, newJob]);
          Swal.fire({
            icon: "success",
            title: "Job Posted Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          modalRef.current.close();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleModalUpdate = (job) => {
    setSelectedJob(job);
    updateOpenModal.current.showModal();
  };

  return (
    <div className="bg-gray-200 min-h-screen pt-12">
      <Container>
        <div className="flex justify-center items-center">
          <button onClick={handleModal} className="btn btn-outline btn-primary">
            Add Job
          </button>
        </div>
        {pageLoading ? (
          <div className="flex justify-center items-center my-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Summary</th>
                  <th>description</th>
                  <th>User Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {addJobs.map((addJob, index) => (
                  <tr key={addJob._id}>
                    <th> {index + 1} </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={addJob.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{addJob.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>{addJob.postedBy}</td>
                    <td>{addJob.category}</td>
                    <td>{addJob.shortDescription}</td>
                    <td>{addJob.description}</td>
                    <td>{addJob.userEmail}</td>
                    <th>
                      <div>
                        <button
                          onClick={() => handleModalUpdate(addJob)}
                          className="btn btn-ghost btn-xs"
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog ref={modalRef} className="modal">
          <div className="modal-box max-w-xl w-full p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4">Add New Job</h2>
            <form onSubmit={handleJobSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  readOnly
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Job Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Frontend Developer"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Short Description
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="Brief summary..."
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Full Description
                </label>
                <textarea
                  name="description"
                  placeholder="Full job description..."
                  rows="4"
                  required
                  className="textarea textarea-bordered w-full resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block font-semibold mb-1">Photo URL</label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="https://..."
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Category</label>
                <select
                  name="category"
                  required
                  className="select select-bordered w-full"
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
                <label className="block font-semibold mb-1">Budget ($)</label>
                <input
                  type="number"
                  name="budget"
                  placeholder="300"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Experience Level
                </label>
                <select
                  name="experienceLevel"
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Client Name</label>
                <input
                  type="text"
                  name="clientName"
                  placeholder="Client or Company Name"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                <button
                  type="submit"
                  className="btn btn-outline btn-primary w-full sm:w-auto flex-1 py-2 text-lg"
                >
                  Post Job
                </button>
                <button
                  type="button"
                  onClick={() => modalRef.current.close()}
                  className="btn btn-outline btn-warning w-full sm:w-auto flex-1 py-2 text-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>

        <dialog ref={updateOpenModal} className="modal">
          <JobUpdate
            job={selectedJob}
            closeModal={() => updateOpenModal.current.close()}
            setAddJobs={setAddJobs}
            addJobs={addJobs}
          ></JobUpdate>
        </dialog>
      </Container>
    </div>
  );
};

export default AddJob;
