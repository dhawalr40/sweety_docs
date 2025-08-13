const API_BASE = "/api/v1";

function getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
}

export function login(email, password) {
    return fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    }).then(res => res.json());
}

export function signup(email, password, passwordConfirmation) {
    return fetch(`${API_BASE}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, password_confirmation: passwordConfirmation }),
    }).then(res => res.json());
}

export function getReadings() {
    return fetch(`${API_BASE}/blood_glucose_readings`, {
        method: "GET",
        headers: getAuthHeaders(),
    }).then(res => res.json());
}
