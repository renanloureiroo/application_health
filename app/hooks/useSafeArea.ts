import { useSafeAreaInsets } from "react-native-safe-area-context";

export type Areas = "bottom" | "top" | "left" | "right";

export const useSafeArea = (areas: Areas[]) => {
  const insets = useSafeAreaInsets();

  const safeAreasStyles = areas.reduce(
    (acc, area) => {
      acc[`padding${area.charAt(0).toUpperCase()}${area.slice(1)}`] =
        insets[area];
      acc[`margin${area.charAt(0).toUpperCase()}${area.slice(1)}`] =
        insets[area];
      return acc;
    },
    {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
    }
  );

  return safeAreasStyles;
};
