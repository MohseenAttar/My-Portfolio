export const LIMITS = {
  name: 80,
  email: 254,
  messageMin: 10,
  messageMax: 1000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact({ name, email, message }) {
  const errors = {};
  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  if (!cleanName) {
    errors.name = 'Please enter your name.';
  } else if (cleanName.length > LIMITS.name) {
    errors.name = `Name must be ${LIMITS.name} characters or fewer.`;
  }

  if (!cleanEmail) {
    errors.email = 'Please enter your email address.';
  } else if (cleanEmail.length > LIMITS.email || !EMAIL_PATTERN.test(cleanEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!cleanMessage) {
    errors.message = 'Please write a message.';
  } else if (cleanMessage.length < LIMITS.messageMin) {
    errors.message = `Please write at least ${LIMITS.messageMin} characters.`;
  } else if (cleanMessage.length > LIMITS.messageMax) {
    errors.message = `Message must be ${LIMITS.messageMax} characters or fewer.`;
  }

  return errors;
}
