import React from "react"

const bodyStyle = {
    margin: "auto",
    width: "500px"
};

const userRow = {
    paddingBottom: "10px"
}

class UserApp extends React.Component {
    render() {
        return (
            <div style={bodyStyle}>
                <h1>Users</h1>
                <div id="user-list">
                    <div style={userRow}>
                        <div><span>Name:</span> <span>John Smith</span></div>
                        <div><span>Email:</span> <span>john@smith.org</span></div>
                    </div>
                    <div style={userRow}>
                        <div><span>Name:</span> <span>Jane Smith</span></div>
                        <div><span>Email:</span> <span>jane@smith.org</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserApp;
