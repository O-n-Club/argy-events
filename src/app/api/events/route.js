import { google } from "googleapis";
import { NextResponse } from "next/server";
export const revalidate = 0;

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
  const range = process.env.GOOGLE_SHEETS_RANGE;

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
      startDate: row[0],
      endDate: row[1],
      title: row[2],
      description: row[3],
      city: row[4],
      time: row[5],
      organize: row[6],
      link: row[7],
    }));
    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.error(error);
  }
};
