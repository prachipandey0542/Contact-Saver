import { Phone } from "lucide-react";
import { Trash } from "lucide-react";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [img, setImg] = useState("");
  const [task, setTask] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ name, contact, img });
    setTask(copyTask);

    setName("");
    setContact("");
    setImg("");
  }

  const deleteContact = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className="h-screen bg-[#72C0A8] p-5 overflow-auto">
      <form
        onSubmit={function (e) {
          submitHandler(e);
        }}
        className="h-70 bg-white flex flex-col gap-5 justify-start items-center p-5 rounded-2xl"
      >
        <input
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          type="text"
          placeholder="Enter Image URL"
          value={img}
          onChange={function (e) {
            setImg(e.target.value);
          }}
        />
        <input
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={function (e) {
            setName(e.target.value);
          }}
        />
        <input
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          type="tel"
          placeholder="Contact Number"
          value={contact}
          onChange={function (e) {
            setContact(e.target.value);
          }}
        />
        <button className="bg-[#327E80] active:scale-95 cursor-pointer hover:bg-[#286668] w-full outline-none text-white font-bold px-5 py-2 rounded">
          Save Contact
        </button>
      </form>

      <h1 className="text-3xl font-bold text-center mt-10 text-gray-700 uppercase">
        All Contacts
      </h1>

      {task.map(function (elem, idx) {
        return (
          <div
            key={idx}
            className="flex flex-col gap-5 justify-start items-center pt-5 rounded"
          >
            <div className="px-5 md:px-10 w-full font-bold py-5 bg-[#ffffff] outline-none rounded-2xl text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-10">
                <div
                  className="h-12 w-12 md:h-15 md:w-15 border-4 border-[#327E80] rounded-full shrink-0 bg-[url()] bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${elem.img})` }}
                ></div>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 text-center sm:text-left">
                  <h1 className="text-lg md:text-xl">{elem.name}</h1>
                  <h1 className="text-gray-400 font-medium">{elem.contact}</h1>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="shrink-0 cursor-pointer">
                  <Phone
                    size={25}
                    className="md:w-10 md:h-10"
                    color="#085912"
                    strokeWidth={3}
                  />
                </div>
                <div className="shrink-0 cursor-pointer">
                  <Trash
                    size={25}
                    onClick={() => {
                      deleteContact(idx);
                    }}
                    className="md:w-10 md:h-10"
                    color="#df1634"
                    strokeWidth={3}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
