import { ScrollView, TextInput, View, findNodeHandle } from "react-native";

interface FocusTextInputParams {
  elementRef: React.RefObject<TextInput | View>;
  scrollRef: React.RefObject<ScrollView>;
  extraScrollHeight?: number;
}

export const focusTextInput = ({
  elementRef,
  scrollRef,
  extraScrollHeight = 0,
}: FocusTextInputParams) => {
  const nodeHandle = findNodeHandle(elementRef.current);
  elementRef.current?.measure((x, y, width, height, pageX, pageY) => {
    setTimeout(() => {
      scrollRef.current
        .getScrollResponder()
        .scrollResponderScrollNativeHandleToKeyboard(
          nodeHandle,
          height + extraScrollHeight,
          true
        );
    }, 50);
  });
};
