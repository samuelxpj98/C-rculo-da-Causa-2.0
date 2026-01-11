import { GoogleGenAI } from "@google/genai";

export const getDailyMission = async (): Promise<string> => {
  try {
    // Check if API key exists to avoid crash
    if (!process.env.API_KEY) {
        console.warn("API Key is missing. Returning fallback mission.");
        return "Ame o seu próximo";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Dê uma missão cristã curta, prática e criativa de exatamente 4 palavras para jovens adolescentes. Exemplo: 'Abrace seu irmão hoje'. Sem explicações, apenas a frase.",
    });
    return response.text || "Espalhe a luz hoje";
  } catch (error) {
    console.error("Error fetching mission:", error);
    return "Ame o seu próximo"; // Fallback mission
  }
};