import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export default async function handler(req, res) {
  // Specify the model identifier
  const modelIdentifier = "tencentarc/photomaker";

  const prediction = await replicate.predictions.get(modelIdentifier);

  if (prediction?.error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: prediction.error }));
    return;
  }

  res.end(JSON.stringify(prediction));
}
