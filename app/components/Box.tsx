import React, { FC, ReactNode } from "react";
import { ScrollView, View, ScrollViewProps, ViewProps } from "react-native";

interface BoxProps {
  scroll?: boolean;
  children?: ReactNode;
}

export const Box: FC<BoxProps & (ScrollViewProps | ViewProps)> = (props) => {
  const { scroll = false, children, ...rest } = props;

  const Component = scroll ? ScrollView : View;

  return <Component {...rest}>{children}</Component>;
};
