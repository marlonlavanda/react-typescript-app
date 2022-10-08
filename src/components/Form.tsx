import { useState } from "react";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });
  const handleSubmit = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />
        <input
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonths"
          onChange={handleChange}
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          value={inputValues.description}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <button>Save new Sub"</button>
      </form>
    </div>
  );
};

export default Form;
