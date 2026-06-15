const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..', '..', 'dist', 'server');
if (fs.existsSync(dir)) {
  fs.rmSync(dir, { recursive: true, force: true });
  console.log('Removed server bundle folder:', dir);
} else {
  console.log('Server bundle folder not found, skipping removal.');
}
