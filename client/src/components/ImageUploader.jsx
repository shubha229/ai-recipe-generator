import { useState, useRef } from "react";
import { useRecipe } from "../context/RecipeContext";

function ImageUploader() {
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);

  const { analyzeImage, loading } = useRecipe();

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setPreview(e.target.result);
    };

    reader.readAsDataURL(file);

    analyzeImage(file);
  };

  return (
    <div className="image-uploader">
      <div
        className={`drop-zone ${
          dragActive ? "drag-active" : ""
        } ${preview ? "has-preview" : ""}`}
        onClick={() => fileInputRef.current?.click()}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFile(e.dataTransfer.files[0]);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
      >
        <div className="drop-zone-glow"></div>

        {preview ? (
          <>
            <img
              src={preview}
              alt="preview"
              className="preview-image"
            />

            <div className="preview-overlay">
              <span>Upload Another Image</span>
            </div>
          </>
        ) : (
          <div className="drop-zone-content">
            <div className="upload-circle">
              📸
            </div>

            <h3>Drop your food image here</h3>

            <p>
              AI will identify ingredients and generate recipes
            </p>

            <button
              type="button"
              className="browse-btn"
            >
              Choose Image
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFile(e.target.files[0])
          }
          className="file-input"
        />
      </div>

      {loading && (
        <div className="ai-analyzing">
          <div className="spinner"></div>
          <span>Analyzing ingredients with AI...</span>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;