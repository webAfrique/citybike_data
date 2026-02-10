import OpenAI from "openai";

// Initialize OpenAI API
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


type response = {
    completion: string,
    usage: OpenAI.Completions.CompletionUsage,
}

type row = { [key: string]: any };

// Function to generate SQL Query using OpenAI (chat-based)
export async function generateSQLQuery(userPrompt: string): Promise<response> {
    const messages: OpenAI.ChatCompletionMessageParam[] = [
        {
            role: "system",
            content: `
                You are an AI assistant that converts user queries into PostgreSQL SQL queries.
                The database has two tables:

                1. **stations**:
                   - fin_name (TEXT) - Finnish station name
                   - swe_name (TEXT) - Swedish station name
                   - address (TEXT) - Street address
                   - city (TEXT) - City name
                   - operator (TEXT) - Bike service provider
                   - capacity (INTEGER) - Bike slots available
                   - longitude (FLOAT), latitude (FLOAT) - GPS coordinates

                2. **journeys**:
                   - departure (TIMESTAMP) - Journey start time
                   - return (TIMESTAMP) - Journey end time
                   - departure_station_id (INTEGER, FOREIGN KEY)
                   - departure_station (TEXT) - Departure station name
                   - return_station_id (INTEGER, FOREIGN KEY)
                   - return_station (TEXT) - Return station name
                   - distance_m (INTEGER) - Distance in meters
                   - duration_sec (INTEGER) - Duration in seconds

                Convert the following **user query** into an accurate SQL query.
                **ONLY** return the SQL query as a string (not markdown), no explanations.
                Use ILIKE '%[text]%'to search for columns containing station names, city or address.
            `
        },
        { role: "user", content: userPrompt }
    ];

    const apiResponse = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages,
        max_completion_tokens: 150,
        temperature: 0, // Makes results more deterministic
    });

    //return response.choices[0].message.content.trim();
    return { completion: apiResponse.choices[0].message.content.trim(), usage: apiResponse.usage };
}

// Function to handle chat response

export async function getChatResponse(userQuery: string, dataFromDB: string): Promise<response> {
  
    // Build prompt dynamically
    const prompt = `
      The user asked: "${userQuery}"
      Based on the database, the result is: ${dataFromDB} journeys.
      Provide this information in a friendly and concise manner.
    `;
  
    // Get OpenAI response
    const openaiResponse = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are an AI assistant that provides information about bike rental journeys." },
            { role: "user", content: prompt }
        ],
        max_completion_tokens: 150,
        temperature: 0, // Makes results more deterministic
    });
  
    return { completion: openaiResponse.choices[0].message.content.trim(), usage: openaiResponse.usage };
}

// Normalize data from SQL query
// Expected return values: 
// empty array,
// array with 1 element that is the result of an operation such as SUM, COUNT, AVG, etc.
// array with 1 element that is an object with key-value pairs,
// array with multiple elements that are objects with key-value pairs,
// If the query returns no results, return 'No results found'
const operators = ["count", "sum", "avg", "min", "max"];

export function normalizeData(rows: Array<row>): any {
    switch (rows.length) {
        case 0:
            return 'No results found';
        case 1:
            const resultObj = rows[0];
            const [key, value]  = Object.entries(resultObj)[0];
            if (operators.includes(key)) {
                return key === null ? 'No results found' : value;
            }
        default:
            return rows;
    }
}