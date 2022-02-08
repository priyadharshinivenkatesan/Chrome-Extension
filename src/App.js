import "./App.css";

function App() {
  return (
    <div class="dropdown">
      <h3 class="heading">
        <img class="iconImage" src="icon.png" alt="icon.png" /> <b>Maxis Crm</b>
      </h3>
      <p>Connect with maxis CRM!!</p>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
        Add to contacts
      </button>
      <br />
      <br />
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
        Add to Leads
      </button>
    </div>
  );
}

export default App;
