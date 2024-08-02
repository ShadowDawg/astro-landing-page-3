import { db } from '../../firebase'; // Ensure correct path
import { collection, addDoc } from 'firebase/firestore';


export default async function POST(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Basic validation
    if (!email || typeof email !== 'string' || !email.match(/^\S+@\S+\.\S+$/)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
      // Add email to Firestore 'waitlist' collection
      const docRef = await addDoc(collection(db, 'email_waitlist'), { email });
      return res.status(200).json({ id: docRef.id });
    } catch (error) {
      console.error('Error adding document: ', error);
      return res.status(500).json({ error: 'Failed to join the waitlist' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}