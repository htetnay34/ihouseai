import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export default async function handler(req, res) {
  if (!process.env.REPLICATE_API_KEY) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
    );
  }

  const prediction = await replicate.run(
    // Pinned to a specific version of Stable Diffusion
    // See https://replicate.com/stability-ai/stable-diffusion/versions
    "tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4",
{
    // This is the text prompt that will be submitted by a form on the frontend
    input: {
      image: req.body.image, // Utiliser la valeur de "url" ici
      structure: req.body.structure,
      prompt: req.body.prompt,
      scale: req.body.scale,
      a_prompt: req.body.a_prompt,
      n_prompt: req.body.n_prompt,
    },
}
 
);

  if (prediction?.error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: prediction.error }));
    return;
  }

  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
