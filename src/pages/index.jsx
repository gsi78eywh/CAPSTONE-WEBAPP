import React, { useState } from "react";

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Demo credentials: user: admin, pass: password
		if (username === "admin" && password === "password") {
			setIsLoggedIn(true);
			setError("");
		} else {
			setError("Invalid username or password");
			setIsLoggedIn(false);
		}
	};

	if (isLoggedIn) {
		return <div>Welcome, {username}! You are logged in.</div>;
	}

	return (
		<div style={{ maxWidth: 300, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div style={{ marginTop: 10 }}>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				{error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
				<button type="submit" style={{ marginTop: 15, width: "100%" }}>Login</button>
			</form>
		</div>
	);
}
heker