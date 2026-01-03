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

  const recipientName = "Sattu❤️";
  const senderName = "Sukku💖";

  const message = `Happy Birthday mere pyare se baby ❤️🎂

Bhagwan kare aapka ye saal aur aane wala har saal
aapke liye khushhiiiiii😆 aur success leke aaye
Aap jo bhi chaho zindagi mai wo aapko mile,waise to mai aapse aaj bahut gussa thi par ekdam se yaad aaya mere pyare baby ka birthday hai aur ab mai usse kaise gussa reh sakti hu to gussa iske baad se continue hoga pr aap mere liye bht special ho to jitna special mujhse ho sakta h mai aapko karwaungi feel mere mature cadet baki bas aise hi haste raho ghumte raho,
aur hamesha khush raho 😘✨
Mai hamesha aapke sath rahungi agar aap thode se kam chalak banoge mere sath

 I love you ❤️`;

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