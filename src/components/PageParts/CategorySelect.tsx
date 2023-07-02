import { useState } from "react";

export default function CategorySelect({ items, name, onChange }: any) {
  return (
    <select
      onChange={(e) => {
        if (onChange) onChange(e.target.value);
      }}
      name={name}
      defaultValue={""}
      disabled={!items.length}
      className="input_outline"
    >
      <option value="" className="capitalize">
        Select {name}
      </option>
      {items.map((category) => {
        const { id, name } = category;
        return (
          <option key={id} value={id}>
            {name}
          </option>
        );
      })}
    </select>
  );
}
