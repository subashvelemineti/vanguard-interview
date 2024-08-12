import { useState } from "react";
import './ProfileCardCSS.css';

export function ProfileCard() {

    const[profile, setProfile] = useState({
        name:'Subash',
        email:'subash@gmail.com',
        bio:'about myself'
    });
    const [isEditing, setIsEditing] = useState(false);
    const[tempProfile, setTempProfile] = useState({...profile});

    const toggleEditMode= () => {
        if(isEditing) {
            setTempProfile({...profile});
        }
        setIsEditing(!isEditing);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTempProfile({
            ...tempProfile,
            [name]: value
        });
    };

    const saveChanges = () => {
        //Display a confirmation dialog before saving the changes
        setProfile({...tempProfile});
        setIsEditing(false);
    }

    const cancelChanges = () => {
        setProfile({...profile});
        setTempProfile({...profile});
        setIsEditing(false);
    }

    return (
        <div className="profile-card-container">
            {isEditing ? (
                <div>
                    <div className="name-container">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={tempProfile.name}
                                onChange={handleInputChange} />
                        </label>
                    </div>
                    <div className="email-container">
                        <label>
                            Email:
                            <input
                            type="email"
                            name="email"
                            value={tempProfile.email}
                            onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="Bio-container">
                        <label>
                            Bio:
                            <input
                                type="text"
                                name="bio"
                                value={tempProfile.bio}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <button onClick={saveChanges}>
                        Save
                    </button>
                    <button onClick={cancelChanges}>
                        Cancel
                    </button>
                    </div>
            ): (
                <div>
                    <div>
                        <strong> Name: </strong> {profile.name}
                    </div>
                    <div>
                        <strong> Email: </strong> {profile.email}
                    </div>
                    <div>
                        <strong> Bio: </strong> {profile.bio}
                    </div>
                    <button onClick={toggleEditMode}>Edit</button>
                </div>
            )}
        </div>
    );
}


// Requirements:
//  
// 1. Profile Card:
//    - Display a card with the user's name, email, and bio.
//    - Provide a button to toggle between "view" mode and "edit" mode.
//  
// 2. Edit Mode:
//    - In "edit" mode, replace the text fields with input fields pre-filled with the current profile data.
//    - Provide "Save" and "Cancel" buttons.
//    - If the user clicks "Save," update the profile information with the new data.
//    - If the user clicks "Cancel," revert any changes and return to "view" mode.
//  
// 3. View Mode:
//    - In "view" mode, display the profile information as plain text.
//  
// 4. State Management:
//    - Use React's `useState` hook to manage the profile data and the mode (view/edit).
//  
// Bonus:
//    - Display a confirmation dialog before saving the changes.
//    - Add basic form validation (e.g., email format check).
//  
// Expected Deliverables:
//  
// - A single React component that includes the required functionality.
// - Minimal styling to differentiate between view and edit modes.
// - Clean and modular code.