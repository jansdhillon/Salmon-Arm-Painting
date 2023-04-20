import express from 'express';
import cors from 'cors';
import { json } from 'express';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config(); 

const credentials = {
  type: process.env.GOOGLE_CREDENTIALS_TYPE,
  project_id: process.env.GOOGLE_CREDENTIALS_PROJECT_ID,
  private_key_id: process.env.GOOGLE_CREDENTIALS_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_CREDENTIALS_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.GOOGLE_CREDENTIALS_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CREDENTIALS_CLIENT_ID,
  auth_uri: process.env.GOOGLE_CREDENTIALS_AUTH_URI,
  token_uri: process.env.GOOGLE_CREDENTIALS_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_CREDENTIALS_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CREDENTIALS_CLIENT_CERT_URL,
};


const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT || 8000;

const SHEET_ID = '1HN-S7rh9ae1vml15OaiqNOc4Fpf2b7B5e9_GwC8ovMs';
const RANGE = 'A2:Z1000';

async function appendToSheet(credentials, contactInfo) {
  const { name, email, phone, message } = contactInfo;

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const values = [[name, email, phone, message]];

  const request = {
    spreadsheetId: SHEET_ID,
    range: RANGE,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: values,
    },
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log(`Appended to sheet: ${JSON.stringify(response.data.updates)}`);
    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
}

app.post('/save-contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await appendToSheet(credentials, { name, email, phone, message });
    res.status(200).send('Contact information saved successfully');
  } catch (error) {
    console.error('Error saving contact information:', error);
    res.status(500).send('Error saving contact information');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});