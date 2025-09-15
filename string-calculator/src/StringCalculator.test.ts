import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useStringCalculator } from "./hooks/useStringCalculator";

/**
 * String Calculator TDD Kata Tests
 *
 * This test suite demonstrates the Test-Driven Development (TDD) approach
 * following the Red-Green-Refactor cycle as required by Incubyte assessment.
 *
 * TDD Process:
 * 1. RED: Write a failing test
 * 2. GREEN: Write minimal code to make it pass
 * 3. REFACTOR: Improve code while keeping tests green
 */

describe("String Calculator TDD Kata", () => {
  describe("Step 1: Basic Requirements", () => {
    it("should return 0 for empty string", () => {
      // RED: This test should fail initially
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(0);
    });

    it("should return the number for single input", () => {
      // RED: This test should fail initially
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(1);
    });

    it("should return sum for two numbers", () => {
      // RED: This test should fail initially
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,5");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });
  });

  describe("Step 2: Multiple Numbers", () => {
    it("should handle any amount of numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,2,3,4,5");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(15);
    });

    it("should handle large amount of numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,1,1,1,1,1,1,1,1,1");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(10);
    });
  });

  describe("Step 3: Newline Support", () => {
    it("should handle newlines between numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1\n2,3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });

    it("should handle multiple newlines", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1\n2\n3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });

    it("should handle mixed delimiters", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,2\n3,4");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(10);
    });
  });

  describe("Step 4: Custom Delimiters", () => {
    it("should support single character delimiter", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("//;\n1;2");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(3);
    });

    it("should support different single character delimiters", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("//|\n1|2|3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });

    it("should support delimiters of any length", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("//[***]\n1***2***3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });

    it("should support multiple delimiters", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("//[*][%]\n1*2%3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });
  });

  describe("Step 5: Negative Number Validation", () => {
    it("should throw error for single negative number", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,-2,3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.error).toBe("negatives not allowed -2");
      expect(result.current.result).toBe("");
    });

    it("should throw error for multiple negative numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,-2,-3,4");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.error).toBe("negatives not allowed -2, -3");
      expect(result.current.result).toBe("");
    });

    it("should throw error for all negative numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("-1,-2,-3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.error).toBe("negatives not allowed -1, -2, -3");
      expect(result.current.result).toBe("");
    });
  });

  describe("Step 6: Numbers Greater Than 1000", () => {
    it("should ignore numbers greater than 1000", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("2,1001,3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(5);
    });

    it("should handle multiple large numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,2000,3,3000");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(4);
    });

    it("should handle boundary case of 1000", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1000,1001,2000");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(1000);
    });
  });

  describe("Step 7: Complex Scenarios", () => {
    it("should handle mixed delimiters with newlines", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("//;\n1;2\n3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });

    it("should handle empty numbers in sequence", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("1,,3");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(4);
    });

    it("should handle complex multiple delimiters", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("//[***][---][###]\n1***2---3###4");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(10);
    });
  });

  describe("Step 8: Edge Cases", () => {
    it("should handle only delimiters", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput(",,,");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(0);
    });

    it("should handle whitespace around numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput(" 1 , 2 , 3 ");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(6);
    });

    it("should handle zero values", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("0,0,0");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(0);
    });

    it("should handle very large numbers", () => {
      const { result } = renderHook(() => useStringCalculator());

      act(() => {
        result.current.setInput("999,1000,1001,2000");
      });

      act(() => {
        result.current.handleCalculate();
      });

      expect(result.current.result).toBe(1999);
    });
  });

  describe("TDD Refactoring Tests", () => {
    it("should maintain functionality after refactoring", () => {
      const { result } = renderHook(() => useStringCalculator());

      // Test multiple scenarios to ensure refactoring didn't break anything
      const testCases = [
        { input: "", expected: 0 },
        { input: "1", expected: 1 },
        { input: "1,2", expected: 3 },
        { input: "1\n2,3", expected: 6 },
        { input: "//;\n1;2", expected: 3 },
        { input: "//[***]\n1***2***3", expected: 6 },
        { input: "2,1001,3", expected: 5 },
      ];

      testCases.forEach(({ input, expected }) => {
        act(() => {
        result.current.setInput(input);
      });

      act(() => {
        result.current.handleCalculate();
      });
        expect(result.current.result).toBe(expected);
      });
    });
  });
});
