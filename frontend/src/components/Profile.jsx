import React, { useState } from "react";

function ProfileSettings() {
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file change event
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Function to handle file upload
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch(
                "http://localhost:3000/api/profile/upload-profile-picture",
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!response.ok) {
                throw new Error("Failed to upload profile picture");
            }
            console.log("Profile picture uploaded");
            // Update UI or state to display the new profile picture
        } catch (error) {
            console.error("Error uploading profile picture:", error);
            // Handle error
        }
    };

    return (
        <div>
            <h2>Profile Settings</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload Profile Picture</button>
            {/* Additional UI elements for displaying current profile picture and other settings */}
        </div>
    );
}

export default ProfileSettings;
