import React, { useEffect, useState } from "react";
import { getReadings } from "../services/api";

export default function Dashboard() {
    const [readings, setReadings] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/login"; // redirect if not logged in
            return;
        }

        getReadings().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setReadings(data);
            }
        });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Your Blood Glucose Readings</h2>
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {readings.map((r) => (
                    <li key={r.id}>
                        {r.reading_date} - {r.time_slot} - {r.value} mg/dl
                    </li>
                ))}
            </ul>
        </div>
    );
}
