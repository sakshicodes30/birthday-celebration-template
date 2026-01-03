import { useEffect, useState } from "react";
import "./MessageCard.css";

function MessageCard({ isActive }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShow(true);
    }
  }, [isActive]);

  if (!show) return null;

  const recipientName = "Mere pyare Baby";
  const senderName = "Sakshi";

  const message = `Happy Birthday mere pyare se baby ❤️🎂

Bhagwan kare aapka ye saal aur aane wala har saal
aapke liye khushhiiiiii😆 aur success leke aaye
Aap jo bhi chaho zindagi mai wo aapko mile,
Bas aise hi haste raho ghumte raho,
aur hamesha khush raho 😘✨`;

  return (
    <div className="message-card">
      <h2>For {recipientName} 💙</h2>
      <p className="message-text" style={{ whiteSpace: "pre-line" }}>
        {message}
      </p>
      <p className="sender">— {senderName}</p>
    </div>
  );
}

export default MessageCard;