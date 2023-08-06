let crypt = require('crypto');

function md5(string: string) {
  return crypt.createHash('md5').update(string).digest('hex');
}

export const crypto = {
  generateHash: md5,
};
