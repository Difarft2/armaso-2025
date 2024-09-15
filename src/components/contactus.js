import "../css/contactus.css";

const ContactCard = ({ title, contacts }) => {
  return (
    <div className="contact-card">
    
    <div className="contact-list">
      <div className="contact-item">
        <div className="contact-name">
          <img src="line-icon.png" alt="Line" />
          <span>halizaapalwan (Liza)</span>
        </div>
        <div className="contact-info">
          <a href="https://wa.me/081922" className="contact-button">
            <img src="whatsapp-icon.png" alt="WhatsApp" />
            081922 (Terate)
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
};

function App() {
  const onlineContacts = [
    { name: 'Liza', icon: 'line-icon.png', phone: '085198359684' },
  ];

  const offlineContacts = [
    { name: 'Anindya', icon: 'line-icon.png', phone: '082337081505' },
    { name: 'Kore', icon: 'line-icon.png', phone: '082312708285' },
  ];

  return (
    <div className="App">
      <h1>Contact Person</h1>
      <ContactCard title="Contact Person Penyisihan NLC Online" contacts={onlineContacts} />
      <ContactCard title="Contact Person Penyisihan NLC Offline" contacts={offlineContacts} />
    </div>
  );
}

export default App;
