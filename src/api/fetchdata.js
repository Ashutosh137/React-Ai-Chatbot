const { Configuration, OpenAIApi } = require("openai");
const OPENAI_API_KEY = "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";
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const Friends= async (ask) => {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: ask,
    temperature: 0.5,
    instruction:"you are a friend of 12 year old student named ashutosh who want to interact with you in its free time"
  }).catch((err) => {
    console.log(err);
  });
  const data = await completion.data.choices[0].message;
  return data;
};

const Teachers = async (ask) => {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: ask,
    temperature: 0.4,
    // instruction:"you are a teacher of 12 year old student who want to interact with you in its study time"

  }).catch((err) => {
    console.log(err);
  });
  const data = await completion.data.choices[0].message;
  console.log(data);
  return data;
};

export {Teachers,Friends};