import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_API_KEY, // defaults to ,
  dangerouslyAllowBrowser: true,
});
console.log("API Key:", process.env.REACT_APP_OPEN_API_KEY);

export async function sendMesToOpenAI(messageT) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: messageT }],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0].message.content;
}
