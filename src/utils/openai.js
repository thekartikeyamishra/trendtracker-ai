import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const fetchTrendingTopics = async () => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4",
        messages: [{ role: "system", content: "Provide 5 trending topics on social media right now." }],
        max_tokens: 100
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content.trim().split('\n');
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    return ["Error fetching trends."];
  }
};

export const fetchContentIdeas = async (niche) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4",
        messages: [{ role: "system", content: `Give me 5 viral content ideas for a ${niche} influencer.` }],
        max_tokens: 100
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content.trim().split('\n');
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    return ["Error fetching ideas."];
  }
};
