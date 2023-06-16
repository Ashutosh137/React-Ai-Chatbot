const { Configuration, OpenAIApi } = require("openai");
// const OPENAI_API_KEY=""
const OPENAI_API_KEY = "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";
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const Friend = async (ask) => {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: ask,
    temperature: 0.1
  }).catch((err) => {
    console.log(err);
  });
  const data = await completion.data.choices[0].message;
  return data;
};

const Teacher = async (ask) => {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: ask,
    max_tokens: 10,
    temperature: 0.3
  }).catch((err) => {
    console.log(err);
  });
  const data = await completion.data.choices[0].message;
  console.log(data);
  return data;
};

const edit = async (ask) => {
  const openai = new OpenAIApi(configuration);
  const response = await openai.createEdit({
    model: "text-davinci-edit-001",
    input: ask,
    instruction: "Fix the spelling mistakes,and act as friend ",
  }).catch((err) => {
      console.log(err);
    });
  const data = await response.data.choices[0].text;
  return data;
}

export { Friend, Teacher, edit };