import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    let contacts = JSON.parse(await fs.readFile(PATH_DB));
    contacts = contacts.filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(
      'Thanos snapped his fingers. Random contacts have been removed from the database.',
    );
  } catch (error) {
    console.error('Error executing Thanos:', error);
  }
};

await thanos();
