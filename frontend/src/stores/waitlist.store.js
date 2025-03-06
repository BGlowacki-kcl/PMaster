const saveUser = async (email, newsletter = false) => {
    if (!email) {
        return { success: false, message: "Please provide an email" };
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/waitlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, newsletter }),
        });

        // Try to parse JSON safely
        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            return { success: false, message: "Invalid response from server" };
        }

        if (!response.ok) {
            return { success: false, message: data.message || "Something went wrong" };
        }

        return data;
    } catch (error) {
        console.error("Error saving user:", error);
        return { success: false, message: "Network error. Please try again." };
    }
};

export default saveUser;
