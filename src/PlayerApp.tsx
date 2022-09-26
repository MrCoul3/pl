import { MainPlayerFrame } from "./component/MainPlayerFrame/MainPlayerFrame";
import { RecordList } from "./component/RecordList/RecordList";
import React, {useEffect, useState} from "react";
import { PlayerInstance } from "./models/PlayerInstance";

export const PlayerApp = () => {
  const [players, setPlayers] = useState<Array<string>>([]);

  function onClick(e: React.MouseEvent) {
    const player = (e.target as HTMLButtonElement).value;
    setPlayers((prevState) =>
      prevState.includes(player)
        ? prevState.filter((state) => state !== player)
        : [...prevState, player]
    );
  }

  return (
    <>
      <MainPlayerFrame input={players} />
      <RecordList onClick={(e) => onClick(e)} />
    </>
  );
};
