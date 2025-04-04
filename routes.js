export function registerRoutes(app, db) {
    app.post('/api/contact', async (req, res) => {
      try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
          return res.status(400).json({ message: 'All fields are required' });
        }
  
        const contact = {
          name,
          email,
          subject,
          message,
          created_at: new Date().toISOString()
        };
  
        console.log('Saving contact to MongoDB:', contact);
        await db.collection('contacts').insertOne(contact);
        console.log('Contact saved successfully:', contact);
        res.status(200).json({ message: 'Contact submitted successfully!' });
      } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Error submitting contact' });
      }
    });
  
    app.post('/api/register', async (req, res) => {
      try {
        console.log('Received registration request:', req.body); // Add this
        const { event_id, name, email, phone } = req.body;
        if (!event_id || !name || !email) {
          console.log('Validation failed: Missing required fields');
          return res.status(400).json({ message: 'Required fields missing' });
        }
  
        const registration = {
          event_id,
          name,
          email,
          phone: phone || null,
          created_at: new Date().toISOString()
        };
  
        console.log('Saving registration to MongoDB:', registration);
        const result = await db.collection('registrations').insertOne(registration);
        console.log('Registration saved successfully:', result.insertedId);
        res.status(200).json({ message: 'Successfully registered!' });
      } catch (error) {
        console.error('Error saving registration:', error);
        res.status(500).json({ message: 'Error registering for event' });
      }
    });
  }