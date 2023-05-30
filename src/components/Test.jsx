import { useState } from "react";

export const Test = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Testing</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-white"
      />
    </div>
  );
};
