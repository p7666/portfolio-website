import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await API.get("/contact");
    setMessages(res.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await API.delete(`/contact/${id}`);
    fetchMessages();
  };

  return (
    <div className="container mt-4">
      <h2>Messages</h2>

      {messages.length === 0 && <p>No messages yet.</p>}

      {messages.map((msg) => (
        <div key={msg._id} className="card p-3 mb-3">
          <h5>{msg.name}</h5>
          <p><strong>Email:</strong> {msg.email}</p>
          <p>{msg.message}</p>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteMessage(msg._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
