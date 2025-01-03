import { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Asset/logo.png";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState(default_image);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;

  const validateInput = (inputValue) => {
    if (!inputValue) {
      console.error("Input is empty");
      return false;
    }
    return true;
  };

  const createRequestBody = (prompt) => ({
    model: "dall-e-3",    
    prompt,
    n: 1,
    size: "1024x1024",
  });

  const handleApiResponse = async (response) => {
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error detail:", errorDetails);
      throw new Error(`HTTP error! status ${response.status}`);
    }

    const data = await response.json();
    if (data?.data?.[0]?.url) {
      return data.data[0].url;
    } else {
      console.error("Unexpected response structure", data);
      throw new Error("Unexpected response structure");
    }
  };

  const generateImage = async () => {
    const inputValue = inputRef.current?.value;

    if (!validateInput(inputValue)) return;

    setLoading(true);

    try {
      const requestBody = createRequestBody(inputValue);

      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      const imageUrl = await handleApiResponse(response);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error generating image", error);
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
        <img style={{ borderRadius: 100 }} src={imageUrl} alt="Generated" />
        <div className={loading ? "loading-bar" : "loading-bar-full"}></div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="원하는 이미지를 설명하세요"
        />
        <div className="generate-btn" onClick={generateImage}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
