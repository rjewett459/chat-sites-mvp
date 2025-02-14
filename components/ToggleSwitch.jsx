import { useState } from "react";
import "./ToggleSwitch.css"; // Make sure you import the CSS file

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="plane-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div>
        <span className="street-middle"></span>
        <span className="cloud"></span>
        <span className="cloud two"></span>
        <div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18"></path>
            <path d="M12 3v18"></path>
          </svg>
        </div>
      </div>
    </label>
  );
}
