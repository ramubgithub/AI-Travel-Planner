const {
  GoogleGenerativeAI
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

class AIService {
  async generateItinerary(data) {
    try {
      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.0-flash"
        });

      const prompt = `
Generate a ${data.days}-day travel itinerary.

Destination: ${data.destination}

Budget: ${data.budgetType}

Interests:
${data.interests.join(", ")}

Return ONLY valid JSON.

{
  "days":[
    {
      "day":1,
      "activities":[
        "Activity 1",
        "Activity 2",
        "Activity 3"
      ]
    }
  ]
}
`;

      const result =
        await model.generateContent(
          prompt
        );

      let text =
        result.response.text();

      text = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      try {
        return JSON.parse(text);
      } catch {
        return {
          days: [
            {
              day: 1,
              activities: [
                text
              ]
            }
          ]
        };
      }
    } catch (error) {
      console.log(
        "Gemini Generate Error:",
        error.message
      );

      return {
        days: [
          {
            day: 1,
            activities: [
              "Explore city center",
              "Visit famous landmarks",
              "Enjoy local cuisine"
            ]
          },
          {
            day: 2,
            activities: [
              "Museum visit",
              "Shopping district",
              "Evening cultural show"
            ]
          },
          {
            day: 3,
            activities: [
              "Outdoor adventure",
              "Local market tour",
              "Sunset viewpoint"
            ]
          }
        ]
      };
    }
  }

  async regenerateDay(
    destination,
    interests,
    dayNumber
  ) {
    try {
      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.0-flash"
        });

      const prompt = `
Regenerate Day ${dayNumber}
for a trip to ${destination}.

Interests:
${interests.join(", ")}

Return only activities in JSON.

{
  "day": ${dayNumber},
  "activities": []
}
`;

      const result =
        await model.generateContent(
          prompt
        );

      let text =
        result.response.text();

      text = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      return JSON.parse(text);
    } catch (error) {
      console.log(
        "Regenerate Error:",
        error.message
      );

      return {
        day: dayNumber,
        activities: [
          "Visit tourist attractions",
          "Try local food",
          "Explore cultural sites"
        ]
      };
    }
  }
}

module.exports =
  new AIService();