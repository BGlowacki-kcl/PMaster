import { apiRequest } from "./helpers";

const saveUser = async (email, newsletter = false) => {
  if (!email) {
    return { success: false, error: "Please provide an email" };
  }

  return await apiRequest("/api/waitlist", {
    method: "POST",
    body: { email, newsletter },
  });
};

export default saveUser;
