import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Asset/logo.png";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState(default_image);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;
  console.log("API Key:", apiKey);

  const generateImage = async () => {
    if (!inputRef.current.value) {
      return;
    }
    setLoading(true);

    try {
      const requestBody = {
        prompt: inputRef.current.value,
        n: 1,
        size: "512x512",
      };

      console.log("Request Body:", requestBody);

      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error details:", errorDetails);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);

      if (data && data.data && data.data[0] && data.data[0].url) {
        setImageUrl(data.data[0].url);
      } else {
        console.error("Unexpected response structure:", data);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI image <span>generator</span>
      </div>
      <div className="img-loading">
        <img src={imageUrl} alt="Generated" />
        <div className={loading ? "loading-bar" : "loading-bar-full"}></div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="원하는 이미지를 설명하세요"
        />
        <div className="generate-btn" onClick={generateImage}>Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
