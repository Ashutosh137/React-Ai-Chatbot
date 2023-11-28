const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_APIKEY;
console.log(process.env.REACT_APP_OPENAI_APIKEY)
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const Friends = async (ask) => {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: ask,
    temperature: 0.1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,

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
    frequency_penalty: 0,
    presence_penalty: 0.6,

  }).catch((err) => {
    console.log(err);
  });
  const data = await completion.data.choices[0].message;
  console.log(data);
  return data;
};

export { Teachers, Friends };

