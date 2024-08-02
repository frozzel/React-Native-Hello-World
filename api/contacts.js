import client from "./client";  // Import the client module


// Get all contacts

export const getContacts = async () => {
    try {
        const response = await client.get("hubspot/contacts");
        // console.log("Contacts: ", response);
        return response.data;
    }
    catch (error) {
        console.error("Error getting contacts: ", error);
        return error;  
    }
    };
