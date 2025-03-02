const saveUser = async (email, newslatter = false) => {
    if(!email) {
        return { success: false, message: "Please provide email" };
    }
    try {
        const response = await fetch('/api/waitlist/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"email": email, "newsletter": newslatter}),
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        return { success: false, message: "Internal server error" };
    }
}

export default saveUser;