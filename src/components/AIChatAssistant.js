import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import { styles } from "../styles/AppStyles";

const AIChatAssistant = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const fetchAIResponse = async () => {
    if (!input) return;

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🤖 Ask AI for Content Ideas</Text>
      <TextInput style={styles.input} placeholder="Enter topic or keyword" value={input} onChangeText={setInput} />
      <TouchableOpacity style={styles.button} onPress={fetchAIResponse}>
        <Text style={styles.buttonText}>Generate AI Suggestion</Text>
      </TouchableOpacity>
      <View style={styles.responseContainer}>
        <Text style={styles.responseText}>{response}</Text>
      </View>
    </ScrollView>
  );
};

export default AIChatAssistant;
