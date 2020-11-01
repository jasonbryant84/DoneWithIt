import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications()

        if(notificationListener) {
            // Updated from recording according to docs
            const subscription = Notifications.addNotificationReceivedListener(notificationListener)

            return () => subscription.remove();
        }
    }, [])    

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)       
            if(!permission.granted) return // always returns false on simulator/emulator
    
            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokensApi.register(token)
        } catch (error) {
            console.log('Error getting a push token', error)
        }
    }
}

export default useNotifications