fetch('User.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.name);
    console.log(data.age);
  })
  .catch(error => {
    console.error('Error reading JSON file:', error);
  })
  .finally(
   console.clear());