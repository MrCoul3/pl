import { Player } from "./component/Player/Player";
import { RecordList } from "./component/RecordList/RecordList";
import React, { useState } from "react";
import { IRecordData } from "./interfaces/IRecordData";

export const PlayerApp = () => {
  const [records, setRecords] = useState<Array<IRecordData>>([
    {
      name: "id_1.mp4",
      duration: 144160, //  2.24sec
      startTime: 1664575200000, // 01:00:00 01.10
      id: "123456sdfg",
    },
  ]);

  function onClick(e: React.MouseEvent, record: IRecordData) {
    setRecords((prevState) =>
      prevState.find((state) => state.id === record.id)
        ? prevState.filter((state) => state.id !== record.id)
        : [...prevState, record]
    );
  }

  return (
    <>
      <Player input={records} />
      <RecordList onClick={(e, record) => onClick(e, record)} />
    </>
  );
};
