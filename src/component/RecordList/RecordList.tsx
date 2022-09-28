import React from "react";

export interface IProps {
  onClick?(e: React.MouseEvent): void;
}

export const RecordList = (props: IProps) => {

  const uri = "Videos/"
  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
      {["id_1.mp4", "id_2.mp4", "id_3.mp4", "id_4.mp4", "id_5.mp4", "id_6.mp4"].map((record) => (
        <button
          value={uri + record}
          onClick={props.onClick}
          style={{ width: "150px", height: "100px" }}
        >
          {record}
        </button>
      ))}
    </div>
  );
};
