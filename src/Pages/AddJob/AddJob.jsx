import React, { use, useEffect, useRef, useState } from "react";
import Container from "../../Components/Container/Container";
import { AuthConText } from "../../Context/AuthConText";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const AddJob = () => {
  const [addJobs, setAddJobs] = useState([]);
  const modalRef = useRef();

  const { user } = use(AuthConText);
  useEffect(() => {
    fetch("http://localhost:3000/add-job")
      .then((res) => res.json())
      .then((data) => {
        setAddJobs(data);
      });
  }, []);

  const handleModal = () => {
    modalRef.current.showModal();
  };
  const handleJobSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const title = event.target.title.value;
    const email = event.target.email.value;
    const photoUrl = event.target.photoUrl.value;
    const category = event.target.category.value;
    const summary = event.target.summary.value;

    const newJob = {
      title: title,
      postedBy: name,
      category: category,
      summary: summary,
      coverImage: photoUrl,
      userEmail: email,
    };
    fetch("http://localhost:3000/add-job", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          modalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "your post  done",
            showConfirmButton: false,
            timer: 1500,
          });

          newJob._id = data.insertedId;
          const newJobs = [...addJobs, newJob];
          setAddJobs(newJobs);
        }
      });
  };
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/add-job/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingAddJob = addJobs.filter(job => job._id !== _id);
              setAddJobs(remainingAddJob);
            }
          });
      }
    });
  };


  return (
    <div className="bg-gray-200 min-h-screen pt-12">
      <Container>
        <div className="flex justify-center items-center">
          <button onClick={handleModal} className="btn btn-outline btn-primary">
            Add Job
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Summary</th>
                <th>User Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {addJobs.map((addJob, index) => (
                <tr>
                  <th> {index + 1} </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={addJob.coverImage}
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
                  <td>{addJob.summary}</td>
                  <td>{addJob.userEmail}</td>
                  <th>
                    <div className="flex gap-2">
                      <button className="btn btn-ghost btn-xs"><FaEdit /></button>
                      <button
                        onClick={() => handleDelete(addJob._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <div className="card mx-auto w-full max-w-sm ">
              <div className="card-body">
                <h2 className="latoBold text-2xl text-center LatoRegular ">
                  Add Job
                </h2>
                <form onSubmit={handleJobSubmit}>
                  <fieldset className="fieldset">
                    <label className="label LatoSemibold text-lg">Name</label>
                    <input
                      type="text"
                      name="name"
                      readOnly
                      defaultValue={user?.displayName}
                      className="input LatoRegular lg"
                    />
                    <label className="label LatoSemibold text-lg">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="input LatoRegular lg"
                      placeholder="Job Title"
                      required
                    />
                    <label className="label LatoSemibold text-lg">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input LatoRegular lg"
                      defaultValue={user?.email}
                      readOnly
                    />
                    <label className="label LatoSemibold text-lg">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="photoUrl"
                      className="input LatoRegular lg"
                      placeholder="Photo URL"
                      required
                    />
                    <label className="label LatoSemibold text-lg">
                      Category
                    </label>
                    <select
                      className="select select-bordered LatoRegular lg"
                      name="category"
                      required
                    >
                      <option className="LatoSemibold text-lg" value="">
                        Select Category
                      </option>
                      <option
                        className="LatoRegular lg"
                        value="Web Development"
                      >
                        Web Development
                      </option>
                      <option className="LatoRegular lg" value="UI/UX Design">
                        UI/UX Design
                      </option>
                      <option
                        className="LatoRegular lg"
                        value="Digital Marketing"
                      >
                        Digital Marketing
                      </option>
                      <option className="LatoRegular lg" value="Logo Designer">
                        {" "}
                        Graphic Designer
                      </option>
                      <option className="LatoRegular lg" value="Cyber Security">
                        Cyber Security
                      </option>
                      <option className="LatoRegular lg" value="Content Writer">
                        Content Writer
                      </option>
                      <option className="LatoRegular lg" value="Video Editor">
                        Video Editor
                      </option>
                    </select>

                    <label className="label LatoSemibold text-lg">
                      Summary
                    </label>
                    <textarea
                      name="summary"
                      className="textarea textarea-bordered"
                      placeholder="Job Summary"
                      rows="3"
                      required
                    ></textarea>
                    <button className="btn btn-outline btn-primary mt-4 LatoRegular text-xl">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="LatoRegular text-xl btn btn-outline btn-primary">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </Container>
    </div>
  );
};

export default AddJob;
