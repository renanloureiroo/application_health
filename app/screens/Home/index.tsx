import React, { useRef, useState } from "react";
import { Button, View, ViewStyle } from "react-native";
import RecordScreen from "react-native-record-screen";
import BackgroundTimer from "react-native-background-timer";
import Video from "react-native-video";

import { WebView } from "react-native-webview";

function HomeScreen() {
  const [recording, setRecording] = useState(false);
  const [url, setUrl] = useState("");
  const [paused, setPaused] = useState(true);

  const html = `
  <video id="video" width="100%" height="auto" ${paused ? "" : "autoplay"}>
    <source src="${url}" type="video/mp4" />
  </video>
  <script>
    const video = document.getElementById('video');
    window.ReactNativeWebView.postMessage(JSON.stringify({
      duration: video.duration,
      paused: video.paused,
    }));
    video.onplay = () => {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        duration: video.duration,
        paused: video.paused,
      }));
    };
    video.onpause = () => {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        duration: video.duration,
        paused: video.paused,
      }));
    };
  </script>
`;

  const startRecording = async () => {
    try {
      const result = await RecordScreen.startRecording({
        fps: 60,
        mic: false,
      });

      setRecording(true);
      console.log(result);
      BackgroundTimer.start(); // you should start the background timer
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      console.log("stop recording");
      const result = await RecordScreen.stopRecording();

      setUrl(result.result.outputURL);

      BackgroundTimer.stop(); // you should stop the background timer
    } catch (error) {
      console.log(error);
    } finally {
      setRecording(false);
    }
  };
  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {url && (
        <View style={[$content]}>
          <WebView
            source={{ html }}
            style={$backgroundVideo}
            javaScriptEnabled={true}
          />
          <Button
            title={paused ? "Play" : "Pause"}
            onPress={onPlayPausePress}
          />
        </View>
      )}

      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}
const $content: ViewStyle = {
  width: "100%",
  height: "90%",
  backgroundColor: "black",
  padding: 16,
  borderRadius: 8,
};
const $backgroundVideo: ViewStyle = {
  backgroundColor: "black",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const $controls: ViewStyle = {
  flexDirection: "row",
  gap: 16,
  alignItems: "center",
  justifyContent: "center",
};

export { HomeScreen };
