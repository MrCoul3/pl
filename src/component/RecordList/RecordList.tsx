import React from "react";

export interface IProps {
  onClick?(e: React.MouseEvent): void;
}

export const RecordList = (props: IProps) => {
  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
      {["id_1", "id_2", "id_3"].map((record) => (
        <button value={record} onClick={props.onClick} style={{ width: "150px", height: "100px" }}>{record}</button>
      ))}
    </div>
  );
};
