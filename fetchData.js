async function addUser(userData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error('Failed to add user');
    }

    const responseData = await response.json();
    console.log('User added successfully:', responseData);
  } catch (error) {
    console.error('Error adding user:', error.message);
  }
}

// Example usage:
const newUser = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
  // additional keys if any
};

addUser(newUser);

