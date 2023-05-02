import {google} from 'googleapis';
import dotenv from 'dotenv';
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config(); 

interface ContactInfo {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const credentials = {
    type: process.env.GOOGLE_CREDENTIALS_TYPE,
    project_id: process.env.GOOGLE_CREDENTIALS_PROJECT_ID,
    private_key_id: process.env.GOOGLE_CREDENTIALS_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_CREDENTIALS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CREDENTIALS_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CREDENTIALS_CLIENT_ID,
    auth_uri: process.env.GOOGLE_CREDENTIALS_AUTH_URI,
    token_uri: process.env.GOOGLE_CREDENTIALS_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_CREDENTIALS_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_CREDENTIALS_CLIENT_CERT_URL,
  };

    const SHEET_ID = process.env.SHEET_ID;
    const RANGE = 'A2:Z1000';
    
    const appendToSheet = async (credentials: any, contactInfo: ContactInfo) => {
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

  const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body as ContactInfo;

        try {
            await appendToSheet(credentials, { name, email, phone, message });
            res.status(200).send('Contact info submitted successfully');
        } catch (err) {
            console.error('Error submitting contact info:', err);
            res.status(500).send('Error submitting contact info');
        }
    }
  };

  export default handler;