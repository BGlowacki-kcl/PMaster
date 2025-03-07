const saveUser = async (email, newslatter = false) => {
    if(!email) {
        return { success: false, message: "Please provide email" };
    }
    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"email": email, "newsletter": newslatter}),
        });
        console.log(response);
        // if(!response.ok) {
        //     return { success: false, message: "Unexpected server response" };
        // }
        
        try {
            const data = await response.json();
            return data;
        } catch (e) {
            return { success: false, message: "Wrong format of data"};
        }
    } catch (error) {
        return { success: false, message: "Internal server error" };
    }
}

export default saveUser;