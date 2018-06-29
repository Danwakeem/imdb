const fs = require('fs')

const request = () => new Promise((resolve) => {
  const html = fs.readFileSync('./__mocks__/html/tt3659388.html');
  resolve(html);
});

export default request
