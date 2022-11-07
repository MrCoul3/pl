import { Player } from "./component/Player/Player";
import { RecordList } from "./component/RecordList/RecordList";
import React, { useEffect, useState } from "react";
import { IRecordData } from "./interfaces/IRecordData";
import { FlexContainer } from "./component/FlexContainer/FlexContainer";
import LeftSideMenu from "./component/LeftSideMenu/LeftSideMenu";

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

  const [isDown, setDown] = useState<boolean | null>();
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function effect() {
      window.addEventListener("mouseup", () => {
        setDown(false);
      });
    }
    // effect();
    return () => {
      effect();
    };
  }, []);

  useEffect(() => {
    console.log(isDown);
    window.addEventListener("mouseup", () => {
      setDown(false);
    });
    window.addEventListener("mousemove", (e) => {
      if (isDown === true) {
        setWidth(e.clientX);
      } else {
        // setWidth((prevState) => prevState)
      }
    });
  }, [isDown]);

  useEffect(() => {
    console.log("width", width);
  }, [width]);

  return (
    <FlexContainer jContent="space-between">
      <LeftSideMenu
        // width={width}

        onDown={() => setDown(true)}
        onClick={() => {}}
      />
      <Player input={records} />
      <RecordList onClick={(e, record) => onClick(e, record)} />
    </FlexContainer>
  );
};
