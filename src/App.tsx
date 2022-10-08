import React, { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "./App.css";

interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}
const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?user=dapelu",
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?user=sergio_serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);
  return (
    <div className="App">
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
