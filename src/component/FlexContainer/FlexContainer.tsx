import * as React from 'react';

interface IProps {
  children?: string | React.ReactNode;
  gap?: string;
  padding?:string;
  margin?:string;
  width?: string;
  height?: string;
  overflow?:string;
  flexWrap?:any;
  jContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  fDirection?:'column' | 'row';
  onClick?(): void;
}
export const FlexContainer = (props: IProps) => {
  const styles = {
    padding: props.padding,
    margin: props.margin,
    width: props.width,
    overflow: props.overflow,
    height: props.height,
    display: "flex",
    gap: props.gap,
    justifyContent: props.jContent,
    alignItems: props.alignItems,
    flexDirection: props.fDirection,
    flexWrap: props.flexWrap
  };

  return (
      <div onClick={props.onClick} style={{ ...styles}}>
        {props.children}
      </div>
  );
};
