function SuggestionsList({ suggestions, onSelect }) {
  if (!suggestions?.length) return null;

  return (
    <section className="suggestions-list-container">
      <div className="section-title">
        <h2>✨ Recipe Suggestions</h2>
        <p>
          AI found some delicious ideas based on your ingredients
        </p>
      </div>

      <div className="suggestions-grid">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="suggestion-card"
            onClick={() => onSelect(suggestion.title)}
          >
            <div className="suggestion-glow"></div>

            <h4>{suggestion.title}</h4>

            <p>{suggestion.description}</p>

            <div className="suggestion-meta">
              {suggestion.difficulty && (
                <span
                  className={`difficulty-badge ${suggestion.difficulty.toLowerCase()}`}
                >
                  {suggestion.difficulty}
                </span>
              )}

              {suggestion.cookTime && (
                <span className="cook-time">
                  ⏱ {suggestion.cookTime}
                </span>
              )}
            </div>

            {suggestion.dietaryTags?.length > 0 && (
              <div className="recipe-tags">
                {suggestion.dietaryTags.map((tag, i) => (
                  <span key={i} className="diet-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuggestionsList;