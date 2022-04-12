import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent} />
      <Button
        title="Add Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});
