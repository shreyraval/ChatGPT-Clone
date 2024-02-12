import OpenAI from "openai";

const openai = new OpenAI({ apikey: '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' });

export async function sendMsgToOpenAI(message) {
  try {
    const res = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.data.choices[0].text;
  } catch (error) {
    console.error(error);
    throw error;
  }
}