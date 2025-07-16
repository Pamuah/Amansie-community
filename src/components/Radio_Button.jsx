const EventTypeSelector = ({ setEventType }) => {
  const handleChange = (e) => {
    setEventType(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3 ">
      <h2 className="text-lg font-bold">Type of Event</h2>
      <div className="flex flex-row gap-6">
        {["Wedding", "Funeral", "Birthday", "Others"].map((type) => (
          <label key={type} className="flex items-center gap-2">
            <input
              type="radio"
              name="eventType"
              value={type}
              onChange={handleChange}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default EventTypeSelector;
