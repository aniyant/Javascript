//         async function fetchData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     // Process the data
//     console.log(data);
//   } catch (error) {
//     console.error('There was a problem with the fetch operation:', error);
//   }
// }
// fetchData();
const getUserData = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          reject('Failed to fetch user data');
        }
        resolve(response.json());
      })
      .catch(error => reject(error));
  });
  
  getUserData.then(data => {
    // Process user data
    console.log(data);
  }).catch(error => {
    console.error('Error fetching user data:', error);
  });
  