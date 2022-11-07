import React from 'react';
import style from "./style.module.css";
interface IProps {
    onClick(): void
    onDown(): void
    width?: number | null
}
const LeftSideMenu = (props: IProps) => {

    return (
        <div style={{width: props.width + "px"}} onMouseDown={props.onDown} onClick={props.onClick} className={style.wrap}>

        </div>
    );
};

export default LeftSideMenu;
