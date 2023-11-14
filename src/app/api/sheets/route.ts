import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: Request, response: Response) => {
  const { name, email, message } = await request.json();

  try {
    // Authenticate the API using the service account credentials
    const auth = await google.auth.getClient({
      // Add your Google service account credentials here
      projectId: process.env.GOOGLE_PROJECT_ID,
      credentials: {
        type: process.env.GOOGLE_TYPE,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        token_url: process.env.GOOGLE_TOKEN_URI,
        universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const range = "Sheet1!A1:C1";
    const values = [[name, email, message]];

    // Create the Google Sheets API client
    const sheets = google.sheets({ version: "v4", auth });

    // Make a request to append the data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: values,
      },
    });

    // Return a JSON response with a success message
    return NextResponse.json({
      message: "Successfully submitted!",
      response: 201,
    });
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error:", error);

    // Return a JSON response with an error message
    return NextResponse.json({
      message: "Something went wrong!",
      response: 400,
    });
  }
};
