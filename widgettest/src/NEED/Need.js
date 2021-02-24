import React from 'react'
import { View, Text } from 'react-native'
import SharedGroupPreferences from 'react-native-shared-group-preferences'

const Need = () => {

    saveUserDataToSharedStorage()

 async function saveUserDataToSharedStorage() {
        try {
            const appGroupIdentifier = 'org.reactjs.native.example.widgettest';

            let myAppData = {
                c_name: "Regina Phalange",
                c_age: 28,
                c_email: "rphalange@gmail.com"
            };
            await SharedGroupPreferences.setItem("myAppData", myAppData, appGroupIdentifier)
            this.loadUsernameFromSharedStorage()
        } catch (errorCode) {
            console.log(errorCode)
        }
    }

    return (
        <View>
        </View>
    );
}

export default Need;