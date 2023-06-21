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
    temperature: 0.1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    instruction:"Act as a friend and be chill while talking",
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
    temperature: 0.3,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    instruction:"Act as a teacher and give solution to problem asked if the talk is not related to teacher then say i am a teacher not your friend",
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
