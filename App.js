//Validations used: 1. Numeric validation for phone number
// 2. Maxlength validation for phone number

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

import { sendEmail, emailSender } from "./sendEmail";

const App = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#D6E6FF"]} style={styles.container}>
      <KeyboardAvoidingScrollView>
        <View>
          <Text style={{ alignSelf: "center", marginTop: 30 }}>
            Fill Your Data Here!
          </Text>
        </View>
        <View style={{ alignSelf: "center", marginTop: 50 }}>
          <View>
            <Text style={styles.userText}>Name</Text>
            <TextInput
              style={styles.entryBox}
              placeholder=""
              type="text"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>Email</Text>
            <TextInput
              style={styles.entryBox}
              placeholder="xyz@abc.com"
              type="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>PhoneNumber</Text>
            <TextInput
              style={styles.entryBox}
              placeholder="+91"
              KeyboardType="numeric"
              maxLength={10}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>Message</Text>
            <TextInput
              style={styles.entryBox}
              placeholder=""
              type="text"
              value={message}
              onChangeText={(text) => setMessage(text)}
            />
          </View>
        </View>

        <TouchableOpacity
        //onPress={emailSender(name, email, phoneNumber, message)}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DFB", "#073270"]}
            style={styles.linearGradientText}
          >
            <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
              Submit
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </KeyboardAvoidingScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  text: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "800",
  },

  innerContainer: {
    flexDirection: "row",
    marginTop: 15,
    alignSelf: "center",
  },

  entryBox: {
    borderRadius: 6,
    borderColor: "#6B737A",
    padding: 10,
    borderWidth: 2,
    marginVertical: 10,
    width: 300,
  },
  linearGradient: {
    padding: 15,
    margin: 30,
    flex: 1,
    marginLeft: 30,
    borderRadius: 22,
  },

  linearGradientText: {
    marginVertical: 20,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
  linearGradientbutton: {
    padding: 10,
    paddingHorizontal: 40,
    margin: 15,
    borderRadius: 22,
    alignSelf: "center",
  },

  userText: {
    left: 10,
    backgroundColor: "#EAF2FF",
    alignSelf: "flex-start",
    position: "absolute",
    zIndex: 5,
  },
});

export default App;
