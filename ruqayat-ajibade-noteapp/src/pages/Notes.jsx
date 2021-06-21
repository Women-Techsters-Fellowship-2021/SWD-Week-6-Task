import { useContext } from "react";
import { AppContext } from "../components/appStateProvider";
// import { useState } from "react";
import Card from "../components/card";

export default function Notes() {
    const context = useContext(AppContext);
    
    return (
        <div className="notes-container">
        {context.state.notes.map((item) => (
            <Card key={item.id} item={item} />
        ))}
        </div>
    );
};