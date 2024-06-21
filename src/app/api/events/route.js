import { google } from "googleapis";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const sheets = google.sheets("v4");
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const authClient = await auth.getClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = "Eventos!A:G";

  try {
    const response = await sheets.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId,
      range,
    });
    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return NextResponse.error(new Error("No data found"));
    }
    const events = rows.map((row) => ({
      date: row[0],
      title: row[1],
      description: row[2],
      city: row[3],
      time: row[4],
      organize: row[5],
      link: row[6],
    }));
    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.error(error);
  }
};
