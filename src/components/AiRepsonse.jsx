import axios from "axios";
import Diseases from "./Diseases";
import Medications from "./Medications";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const AiResponse = ({ prompt }) => {
  const [ans, setAns] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  useEffect(() => {
    const fetchData = async () => {
      if (!prompt) return; // Exit if no prompt

      setLoading(true); // Start loading

      try {
        const response = await axios.post(import.meta.env.VITE_OLLAMA_API, {
          model: "qwen2:0.5b",
          prompt: prompt + "Predict what i might be suffering from",
          option: {
            temperature: 0,
            seed: 123
          },
          stream: false,
        });
        
        const result = response.data;
        console.log(result);
        setAns(result.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchData();
  }, [prompt]); // Dependency array ensures it runs only when `prompt` changes

  return (
    <div className="mt-5">
      {loading ? ( // Show loading while fetching
        <Loading />
      ) : (
        <>
          {ans ? (
            <>
              <p className="font-normal text-lg">Here's the AI prediction:</p>
              {/* Uncomment if needed */}
              {/* <Diseases /> */}
              {/* <Medications /> */}
              <p className="mt-6 bg-gray-600 p-4 rounded-md text-xl">{ans}</p>
            </>
          ) : (
            <p>No response yet.</p> // Optional: message if there's no answer
          )}
        </>
      )}
    </div>
  );
};

export default AiResponse;
