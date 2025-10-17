import React, { useState } from "react";

const Travel = () => {
  const cityTasks = {
    Delhi: [
      "Visit India Gate", "Explore Red Fort", "Try Paranthas at Chandni Chowk",
      "Visit Lotus Temple", "Shop at Connaught Place", "Explore Qutub Minar",
      "Take a rickshaw ride in Old Delhi", "Visit Humayun's Tomb",
      "Watch a light show at Akshardham Temple", "Explore Hauz Khas Village"
    ],
    Mumbai: [
      "Walk on Marine Drive", "Visit Gateway of India", "Try Mumbai's Vada Pav",
      "Explore Elephanta Caves", "Relax at Juhu Beach", "Shop at Colaba Causeway",
      "Visit Siddhivinayak Temple", "Take a ferry to Alibaug",
      "Watch a play at Prithvi Theatre", "Explore Dharavi Slum Tour"
    ],
    Bangalore: [
      "Visit Lalbagh Botanical Garden", "Explore Cubbon Park", "Try Filter Coffee",
      "Visit Bangalore Palace", "Walk around MG Road", "Enjoy nightlife at Indiranagar",
      "Explore Bannerghatta National Park", "Check out Wonderla Amusement Park",
      "Eat at VV Puram Food Street", "Visit ISKCON Temple"
    ],
    Chennai: [
      "Relax at Marina Beach", "Explore Fort St. George", "Try South Indian Dosa",
      "Visit Kapaleeshwarar Temple", "Watch a movie at Sathyam Cinemas",
      "Go shopping at T Nagar", "Enjoy sunset at Besant Nagar Beach",
      "Visit Guindy National Park", "Explore Valluvar Kottam", "Take a trip to Mahabalipuram"
    ],
    Kolkata: [
      "See Howrah Bridge", "Explore Victoria Memorial", "Try Rosogolla",
      "Visit Dakshineswar Kali Temple", "Walk around Park Street",
      "Experience the tram ride", "Visit Indian Museum", "Eat Kathi Rolls",
      "Watch a cricket match at Eden Gardens", "Explore College Street"
    ],
    Hyderabad: [
      "Visit Charminar", "Eat Hyderabadi Biryani", "Explore Golconda Fort",
      "Walk around Hussain Sagar Lake", "Check out Ramoji Film City",
      "Visit Salar Jung Museum", "Shop at Laad Bazaar", "Try Irani Chai",
      "Explore Chowmahalla Palace", "Visit Nehru Zoological Park"
    ],
    Pune: [
      "Visit Shaniwar Wada", "Explore Aga Khan Palace", "Try Misal Pav",
      "Trek to Sinhagad Fort", "Enjoy nightlife at Koregaon Park",
      "Walk in Pune Okayama Friendship Garden", "Visit Parvati Hill",
      "Explore Raja Dinkar Kelkar Museum", "Shop at FC Road", "Relax at Mulshi Dam"
    ],
    Jaipur: [
      "Explore Amer Fort", "Visit Hawa Mahal", "Try Dal Baati Churma",
      "Shop at Johri Bazaar", "Visit City Palace", "Take an elephant ride at Nahargarh",
      "See the Jantar Mantar", "Try Lassi at Lassiwala", "Watch a folk dance at Chokhi Dhani",
      "Explore Jaigarh Fort"
    ],
    Ahmedabad: [
      "Visit Sabarmati Ashram", "Try Gujarati Thali", "Explore Adalaj Stepwell",
      "Visit Kankaria Lake", "Check out Sidi Saiyyed Mosque", "Walk on Riverfront",
      "Eat at Manek Chowk", "Explore Akshardham Temple", "Visit Science City",
      "Enjoy street food at Law Garden"
    ],
    Goa: [
      "Relax at Baga Beach", "Try Goan Fish Curry", "Visit Dudhsagar Waterfalls",
      "Explore Aguada Fort", "Go on a casino cruise", "Experience nightlife at Tito’s",
      "Do water sports at Calangute Beach", "Visit Basilica of Bom Jesus",
      "Enjoy a bike ride to Chapora Fort", "Shop at Anjuna Flea Market"
    ],
    Varanasi: [
      "Take a boat ride on Ganges", "Attend Ganga Aarti at Dashashwamedh Ghat",
      "Explore Kashi Vishwanath Temple", "Try Banarasi Paan", "Visit Sarnath",
      "Walk through the old city", "Enjoy Banarasi Silk Shopping",
      "Experience sunrise at Assi Ghat", "Visit Ramnagar Fort", "Eat Malaiyyo"
    ],
    Amritsar: [
      "Visit Golden Temple", "Watch Wagah Border Ceremony", "Try Amritsari Kulcha",
      "Explore Jallianwala Bagh", "Walk around Hall Bazaar", "Taste Lassi at Ahuja",
      "Visit Durgiana Temple", "Explore Maharaja Ranjit Singh Museum",
      "Enjoy street food at Kesar Da Dhaba", "Shop for Punjabi Juttis"
    ],
    Udaipur: [
      "Visit City Palace", "Explore Lake Pichola", "Try Dal Baati Churma",
      "Check out Fateh Sagar Lake", "Experience the vintage car museum",
      "Watch the sunset at Sajjangarh Fort", "Shop at Hathi Pol Bazaar",
      "Enjoy a boat ride at Lake Palace", "Explore Bagore Ki Haveli", "Visit Jag Mandir"
    ],
    Shimla: [
      "Walk on The Ridge", "Explore Mall Road", "Try Himachali Dham",
      "Visit Jakhoo Temple", "Ride the Kalka-Shimla Toy Train", "Explore Kufri",
      "Visit Christ Church", "Check out Viceregal Lodge", "Enjoy snowfall at Mashobra",
      "Trek to Chadwick Falls"
    ],
  };

  const [selectedCity, setSelectedCity] = useState("");
  const [tasks, setTasks] = useState([]);
  const [addedTasks, setAddedTasks] = useState(new Set());
  const [customTask, setCustomTask] = useState("");

  const handleCityChange = (e) => setSelectedCity(e.target.value);

  const addTask = (task) => {
    if (!addedTasks.has(task)) {
      setTasks([...tasks, task]);
      setAddedTasks(new Set([...addedTasks, task]));
    }
  };

  const removeTask = (taskToRemove) => {
    const updated = tasks.filter((t) => t !== taskToRemove);
    setTasks(updated);
    const updatedSet = new Set(addedTasks);
    updatedSet.delete(taskToRemove);
    setAddedTasks(updatedSet);
  };

  const addCustomTask = () => {
    const trimmed = customTask.trim();
    if (trimmed && !addedTasks.has(trimmed)) {
      setTasks([...tasks, trimmed]);
      setAddedTasks(new Set([...addedTasks, trimmed]));
      setCustomTask("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center py-10 bg-gradient-to-tr from-gray-900 to-blue-900 text-white transition-all duration-500">
      <div className="max-w-2xl w-full bg-black p-6 rounded-xl shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center mb-6">Location-Based To-Do</h1>

        {/* City Selector */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-800">Select Your City:</label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-3 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          >
            <option value="">--Select--</option>
            {Object.keys(cityTasks).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>


        {/* City Suggestions */}
        {selectedCity && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">Things to do in {selectedCity}:</h2>
            <div className="space-y-3">
              {cityTasks[selectedCity].map((task) => (
                <div
                  key={task}
                  className="flex justify-between items-center bg-[#031E04] p-3 rounded-md hover:bg-[#0a3309] transition"
                >
                  <span>{task}</span>
                  <button
                    onClick={() => addTask(task)}
                    disabled={addedTasks.has(task)}
                    className={`px-3 py-1 rounded-md ${addedTasks.has(task)
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                      }`}
                  >
                    {addedTasks.has(task) ? "Added" : "Add"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Your To-Do List */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3">Your To-Do List</h2>
          {tasks.length === 0 ? (
            <p className="text-gray-400">No tasks added yet.</p>
          ) : (
            <ul className="space-y-2">
              {tasks.map((task) => (
                <li
                  key={task}
                  className="flex justify-between items-center bg-[#031E04] p-3 rounded-md hover:bg-[#0a3309] transition"
                >
                  {task}
                  <button
                    onClick={() => removeTask(task)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md"
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Add Custom Task */}
        <div>
          <h3 className="text-lg font-bold mb-2">Add Your Own Task</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your task..."
              value={customTask}
              onChange={(e) => setCustomTask(e.target.value)}
              className="flex-1 p-3 rounded-md text-black"
            />
            <button
              onClick={addCustomTask}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
