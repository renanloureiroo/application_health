import { useEffect, useState, useRef } from "react";
import { Keyboard, TextInput } from "react-native";

export const useKeyboardAvoidingView = (extraScrollHeight: number) => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const focusedInputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardOffset(extraScrollHeight);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardOffset(0)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onFocus = (ref: React.RefObject<TextInput>) => {
    focusedInputRef.current = ref.current;
    console.log("focusedInputRef.current", focusedInputRef.current);
  };

  return { keyboardOffset, onFocus };
};
