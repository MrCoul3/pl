import { observer } from "mobx-react";
import style from "./style.module.css";
import { PLAYER_STATUSES } from "../../enums/PlayerStatuses";
import { Button } from "@mui/material";
import React from "react";

interface INavPanel {
  status: PLAYER_STATUSES;
  action(): void;
}

export const NavigationPanel = observer((props: INavPanel) => {
  return (
    <>
      <div className={style.navigationPanel}>
        <Button onClick={props.action}>
          {props.status === PLAYER_STATUSES.pause ? "Play" : "Pause"}
        </Button>
      </div>
    </>
  );
});
