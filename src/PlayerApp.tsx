import { MainPlayerFrame } from "./component/MainPlayerFrame/MainPlayerFrame";
import { RecordList } from "./component/RecordList/RecordList";
import React, { useState } from "react";
import { PlayerInstance } from "./models/PlayerInstance";

export const PlayerApp = () => {
  const [players, setPlayers] = useState<any>([]);

  function onClick(e: React.MouseEvent) {
    console.log((e.target as HTMLButtonElement).value);
    setPlayers((prevState: any) => [
      ...prevState,
      new PlayerInstance((e.target as HTMLButtonElement).value),
    ]);
  }

  return (
    <>
      <MainPlayerFrame input={players} />
      <RecordList onClick={(e) => onClick(e)} />
    </>
  );
};
