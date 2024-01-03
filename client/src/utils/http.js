import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

export const sendMessage = async ({ email, message }) => {
  // Basic validation
  console.log(email, message);
  if (!email || !message) {
    console.error('Email and message are required.');
    return; // Stop execution if validation fails
  }

  try {
    const response = await fetch('http://localhost:3000/api/v1/form/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.msg);
    } else {
      console.error(
        'Failed to send message:',
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
