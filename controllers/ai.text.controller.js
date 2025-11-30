import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
configDotenv();

// ⚠️ SECURITY WARNING: Never hardcode API keys in client-side code or public repos.
// Use environment variables (process.env.GEMINI_API_KEY) instead.
const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_API_KEY});

async function aiGenerateGreeting(name, bname, dob) {
  const prompt = `
  You are a creative frontend designer.
  Create a unique HTML/CSS birthday greeting card based on the following user details:
  - Sender Name: ${name}
  - Birthday Person Name: ${bname}
  - Date of Birth: ${dob}

  Requirements:
  1. The container div MUST have id="card".
  2. The container dimensions MUST be width: 1920px and height: 1080px.
  3. Use inline CSS only. Make it colorful and visually appealing.
  4. Return the result strictly as a JSON object.
  5. give id="card" to the main greeting card div.

  Output Format:
  {
    "designName": "Creative name for this design",
    "designHtml": "<div id='card'>...content...</div>",
  }
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Changed to a currently stable model version
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      // OPTIONAL: Enforce JSON output at the API level for better reliability
      config: {
        responseMimeType: "application/json",
      },
    });

    // --- FIX IS HERE ---
    // 1. Extract the text from the response object
    const rawText = response.text; 
    
    // 2. Clean the markdown if necessary (though JSON mode usually handles this)
    const cleanJson = rawText.replace(/```json|```/g, "").trim();

    // 3. Parse
    const cardData = JSON.parse(cleanJson);

    // console.log("Design Name:", cardData.designName);
    // console.log("HTML Content:", cardData.designHtml);
    
    return cardData;

  } catch (error) {
    console.error("Failed to generate or parse AI response:", error);
  }
}

// aiGenerateGreeting("Saurabh", "SK", "18/08/2005");

export{aiGenerateGreeting};