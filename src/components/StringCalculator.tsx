import React from "react";
import { useStringCalculator } from "../hooks/useStringCalculator";

/**
 * StringCalculator React Component
 * A complete calculator component that handles string-based number calculations
 * with support for various delimiters, negative number validation, and more.
 */
export const StringCalculator: React.FC = () => {
  const {
    input,
    result,
    error,
    setInput,
    handleCalculate,
    handleClear,
    setInputValue,
  } = useStringCalculator();

  const exampleInputs = [
    { label: "Empty string", value: "" },
    { label: "Single number", value: "5" },
    { label: "Two numbers", value: "1,2" },
    { label: "Multiple numbers", value: "1,2,3,4,5" },
    { label: "With newlines", value: "1\n2,3" },
    { label: "Custom delimiter", value: "//;\n1;2;3" },
    { label: "Multiple delimiters", value: "//[*][%]\n1*2%3" },
    { label: "Long delimiters", value: "//[***]\n1***2***3" },
    { label: "Numbers > 1000", value: "2,1001,3" },
    { label: "Negative numbers", value: "1,-2,3" },
    { label: "Multiple negatives", value: "1,-2,-3,4" },
  ];

  return (
    <div className="calculator">
      <div className="input-section">
        <label htmlFor="number-input">Numbers:</label>
        <textarea
          id="number-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers (e.g., 1,2,3 or //;\n1;2;3)"
          rows={3}
        />

        <div className="button-group">
          <button onClick={handleCalculate} className="calculate-btn">
            Calculate
          </button>
          <button onClick={handleClear} className="clear-btn">
            Clear
          </button>
        </div>
      </div>

      <div className="result-section">
        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result !== "" && !error && (
          <div className="result">
            <strong>Result:</strong> {result}
          </div>
        )}
      </div>

      <div className="examples">
        <h3>Example Inputs:</h3>
        <div className="example-grid">
          {exampleInputs.map((example, index) => (
            <button
              key={index}
              className="example-btn"
              onClick={() => setInputValue(example.value)}
            >
              <div className="example-label">{example.label}</div>
              <div className="example-value">"{example.value}"</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
