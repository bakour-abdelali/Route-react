import { useLocation } from "react-router-dom";

interface IProps {}

const Contact = ({}: IProps) => {
  const location = useLocation();
  const state = location.state;

  console.log("State from location:", state); // Check if the state is null or contains data
  console.log("State from location:", location); // Check if the state is null or contains data

  return (
    <div className="block rounded-lg bg-blue-500 p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form>
         <div>{state.email}</div> 
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Your message"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-secondary-1 text-white p-2 rounded-md hover:bg-secondary-2 dark:bg-secondary-dark dark:hover:bg-secondary-darker"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
