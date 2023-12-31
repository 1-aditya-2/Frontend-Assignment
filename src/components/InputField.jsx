import { useState } from "react";
import Info from "./Info";

const InputField = ({
  label,
  required = false,
  placeholder = "",
  immutable = false,
  jsonKey,
  description,
}) => {
  const [data, setData] = useState();
  return (
    <div
      key={jsonKey}
      className="flex w-full items-center justify-between p-2 text-base"
    >
      <label htmlFor={jsonKey} className="flex items-center">
        {label}
        <span className="text-rose-600">{required ? "*" : ""}</span>
        {description && (
          <Info description={description} label={label} />
        )}
      </label>
      <input
        type="text"
        className="input input-bordered w-3/5 max-w-xs p-0 bg-blue-50"
        id={jsonKey}
        placeholder={placeholder}
        required={required}
        readOnly={immutable}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default InputField;
