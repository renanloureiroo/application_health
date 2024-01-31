import { forwardRef, useImperativeHandle, useRef, Ref, Component } from "react";
import {
  TextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
  View,
  ViewStyle,
  ScrollView,
  useWindowDimensions,
  LayoutRectangle,
  NativeMethods,
  Text,
  findNodeHandle,
} from "react-native";

interface InputProps extends RNTextInputProps {}

export const Input = forwardRef((props: InputProps, ref: Ref<TextInput>) => {
  const { ...rest } = props;
  const inputRef = useRef<TextInput>(null);
  const inputContainerRef = useRef<View>(null);

  useImperativeHandle(ref, () => inputRef.current as TextInput, [
    inputRef.current,
  ]);

  return (
    <View ref={inputContainerRef} style={$inputContainer}>
      <TextInput ref={inputRef} style={$input} {...rest} />
      <Text>Messagem de error</Text>
    </View>
  );
});

const $inputContainer: ViewStyle = {};

const $input: TextStyle = {
  padding: 16,
  fontSize: 16,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 4,
};
