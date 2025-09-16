import { useState, useCallback } from "react";

/**
 * Parses custom delimiters from the input string
 * @param input - Input string that may contain delimiter definitions
 * @returns Object containing delimiters array and the actual number string
 */
const parseDelimiters = (
  input: string
): {
  delimiters: string[];
  numberString: string;
} => {
  // Default delimiters
  let delimiters = [",", "\n"];
  let numberString = input;

  // Check if input starts with custom delimiter definition
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    if (delimiterEndIndex === -1) {
      throw new Error("Invalid delimiter format");
    }

    const delimiterSection = input.substring(2, delimiterEndIndex);
    numberString = input.substring(delimiterEndIndex + 1);

    // Parse single character delimiter
    if (delimiterSection.length === 1) {
      delimiters = [delimiterSection, "\n"];
    } else {
      // Parse multiple delimiters with brackets
      delimiters = parseMultipleDelimiters(delimiterSection);
      delimiters.push("\n"); // Always include newline
    }
  }

  return { delimiters, numberString };
};

/**
 * Parses multiple delimiters from bracket notation
 * @param delimiterSection - Section containing delimiter definitions
 * @returns Array of delimiter strings
 */
const parseMultipleDelimiters = (delimiterSection: string): string[] => {
  const delimiters: string[] = [];
  const regex = /\[([^\]]+)\]/g;
  let match;

  while ((match = regex.exec(delimiterSection)) !== null) {
    delimiters.push(match[1]);
  }

  return delimiters;
};

/**
 * Splits number string using multiple delimiters
 * @param numberString - String containing numbers
 * @param delimiters - Array of delimiter strings
 * @returns Array of number strings
 */
const splitNumbers = (numberString: string, delimiters: string[]): string[] => {
  // Create regex pattern that matches any of the delimiters
  const escapedDelimiters = delimiters.map((d) => escapeRegex(d));
  const pattern = new RegExp(escapedDelimiters.join("|"), "g");

  return numberString.split(pattern);
};

/**
 * Escapes special regex characters in delimiter strings
 * @param delimiter - Delimiter string to escape
 * @returns Escaped delimiter string
 */
const escapeRegex = (delimiter: string): string => {
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

/**
 * Custom React hook for String Calculator functionality
 * Provides state management and calculation logic for the calculator
 */
export const useStringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");
  const [error, setError] = useState("");

  /**
   * Calculates the sum of numbers from the input string
   * @param numbers - String containing numbers with various delimiters
   * @returns Sum of the numbers
   * @throws Error if negative numbers are found
   */
  const add = useCallback((numbers: string): number => {
    // Handle empty string
    if (numbers === "") {
      return 0;
    }

    // Parse delimiters and numbers
    const { delimiters, numberString } = parseDelimiters(numbers);

    // Split numbers using all delimiters
    const numberArray = splitNumbers(numberString, delimiters);

    // Convert to numbers and validate
    const numbersList = numberArray
      .map((num) => num.trim())
      .filter((num) => num !== "")
      .map((num) => parseInt(num, 10))
      .filter((num) => !isNaN(num)); // Filter out NaN values

    // Check for negative numbers
    const negativeNumbers = numbersList.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negatives not allowed ${negativeNumbers.join(", ")}`);
    }

    // Filter out numbers > 1000 and sum
    return numbersList
      .filter((num) => num <= 1000)
      .reduce((sum, num) => sum + num, 0);
  }, []);

  /**
   * Handles the calculation process with error handling
   */
  const handleCalculate = useCallback(() => {
    try {
      setError("");
      const calculatedResult = add(input);
      setResult(calculatedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResult("");
    }
  }, [add, input]);

  /**
   * Clears all state values
   */
  const handleClear = useCallback(() => {
    setInput("");
    setResult("");
    setError("");
  }, []);

  /**
   * Sets input value (for example buttons)
   */
  const setInputValue = useCallback((value: string) => {
    setInput(value);
  }, []);

  return {
    input,
    result,
    error,
    setInput,
    handleCalculate,
    handleClear,
    setInputValue,
  };
};
