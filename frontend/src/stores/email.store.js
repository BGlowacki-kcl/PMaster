import { apiRequest } from "./helpers";

/**
 * Sends an email using the API.
 * @param {Object} emailData - The email data to send including recipient, subject, name, and body.
 * @returns {Promise<Object>} - The API response.
 */
const sendEmail = async (emailData) => {
  if (!validateEmail(emailData.email)) {
    return { success: false, error: "Invalid email address" };
  }

  return await apiRequest("/api/email", {
    method: "POST",
    body: emailData,
  });
};

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export default sendEmail;
