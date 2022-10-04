import React from "react";
import { IRecordData } from "../../interfaces/IRecordData";
import { Button } from "@mui/material";
import {FlexContainer} from "../FlexContainer/FlexContainer";

export interface IProps {
  onClick(e: React.MouseEvent, record: IRecordData): void;
}

export const RecordList = (props: IProps) => {
  const uri = "Videos/";
  return (
    <FlexContainer  fDirection="column" margin="20px" >
      {[
        {
          name: "id_1.mp4",
          duration: 144160, //  2.24sec
          startTime: 1664575200, // 01:00:00 01:10
          id: "123456sdfg",
        },
        {
          name: "id_2.mp4",
          duration: 122120, // 2.021 sec
          startTime: 1664575320, // 01:02:00 01:10
          id: "643211dkig",
        },
        {
          name: "id_2.mp4",
          duration: 122120, // 2.021 sec
          startTime: 1664575320, // 01:02:00 01:10
          id: "643211dkig",
        },
        {
          name: "id_2.mp4",
          duration: 122120, // 2.021 sec
          startTime: 1664575320, // 01:02:00 01:10
          id: "643211dkig",
        },
        {
          name: "id_2.mp4",
          duration: 122120, // 2.021 sec
          startTime: 1664575320, // 01:02:00 01:10
          id: "643211dkig",
        },
        // "id_2.mp4",
        // "id_3.mp4",
        // "id_4.mp4",
        // "id_5.mp4",
        // "id_6.mp4",
      ].map((record) => (
        <Button
          key={record.id}
          color="info"
          variant="outlined"
          value={uri + record.name}
          onClick={(e) => props.onClick(e, record)}
          style={{ width: "150px", height: "100px" }}
        >
          {record.name}
        </Button>
      ))}
    </FlexContainer>
  );
};
