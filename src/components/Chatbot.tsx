import { useState, useEffect } from 'react';
import { useGetAi } from "../hooks/useProduct";
  
const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [haveSent, setSent] = useState(false);
    const [prompt, setPrompt] = useState("");
    const { isFetching, data, error, refetch } = useGetAi(prompt);

    useEffect(() => {
        if (prompt) {
            refetch();
            setSent(true);
        }
    }, [prompt, refetch]);

    const handleButtonClick = () => {
        const textarea = document.querySelector("textarea");
        if (textarea === null) return;

        console.log(textarea.value);

        if (textarea === null) return;
        setPrompt(textarea.value);
        textarea.value = "";
    }

    if (!open) return (
        <button className="bg-Button text-white rounded-lg p-2 w-32 mt-2 fixed bottom-4 right-4 border-2 border-black" onClick={() => setOpen(true)}>Chat</button>
    );

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="rounded-lg border-2 border-black shadow-md bg-white fixed bottom-4 right-4 w-96 h-96">
            <button className="bg-Button text-white rounded-lg p-2 w-full" onClick={() => setOpen(false)}>Lukk</button>
            <textarea className="h-32 w-full p-2" placeholder="Skriv melding..."></textarea>
            <button className="bg-Button text-white rounded-lg p-2 w-full mt-2 mb-2" 
                onClick={handleButtonClick}
                >Send</button>
            <div>
                <h2 className="text-center text-xl border-b-2 border-Text">Svar</h2>
                <p className='p-4 pt-2'>{isFetching || !haveSent ? "Svar kommer her" :  data }</p>
            </div>
        </div>
    );
};

export default Chatbot;