import { useEffect } from "react";
import { Platform } from "react-native";
import messaging from "@react-native-firebase/messaging";

export default function useFCMToken(onTokenReady) {
  useEffect(() => {
    const init = async () => {
      try {
        if (Platform.OS === "ios") {
          await messaging().requestPermission();
        }

        const token = await messaging().getToken();
        onTokenReady && onTokenReady(token);
      } catch (e) {
        console.log("FCM token error:", e);
      }
    };

    init();

    const unsubscribe = messaging().onTokenRefresh(token => {
      onTokenReady && onTokenReady(token);
    });

    return () => unsubscribe();
  }, []);
}
