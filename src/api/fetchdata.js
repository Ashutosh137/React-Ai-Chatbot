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
<<<<<<< HEAD
    temperature: 0.5,
    instruction:"you are a friend of 12 year old student named ashutosh who want to interact with you in its free time"
=======
    temperature: 0.1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    instruction:"Act as a friend and be chill while talking",
>>>>>>> e5a9f2cb3b4283cb8a3c00c3773a3ea03e006b72
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
<<<<<<< HEAD
    temperature: 0.4,
    // instruction:"you are a teacher of 12 year old student who want to interact with you in its study time"

=======
    max_tokens: 10,
    temperature: 0.3,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    instruction:"Act as a teacher and give solution to problem asked if the talk is not related to teacher then say i am a teacher not your friend",
>>>>>>> e5a9f2cb3b4283cb8a3c00c3773a3ea03e006b72
  }).catch((err) => {
    console.log(err);
  });
  const data = await completion.data.choices[0].message;
  console.log(data);
  return data;
};

<<<<<<< HEAD
export {Teachers,Friends};
=======
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
>>>>>>> e5a9f2cb3b4283cb8a3c00c3773a3ea03e006b72
