import bcrypt from "bcryptjs";

const encrypt = async (value) => {
  const salt = 10;
  const hash = await bcrypt.hash(value, salt);
  return hash;
};

const compare = async (password, savedPass) => {
  const comparePass = bcrypt.compare(password, savedPass);
  return comparePass;
};

export default { encrypt, compare };
