# TDD Approach - String Calculator Kata

## Overview

This document outlines the Test-Driven Development (TDD) approach used to implement the String Calculator Kata as required by the Incubyte assessment.

## TDD Methodology

### Red-Green-Refactor Cycle

The implementation follows the classic TDD cycle:

1. **RED** 🔴 - Write a failing test
2. **GREEN** 🟢 - Write minimal code to make the test pass
3. **REFACTOR** 🔵 - Improve code while keeping tests green

## Implementation Steps

### Step 1: Basic Requirements

**RED**: Started with the simplest test case - empty string should return 0

```typescript
it("should return 0 for empty string", () => {
  // Test implementation
});
```

**GREEN**: Implemented basic add function to handle empty string

```typescript
if (numbers === "") {
  return 0;
}
```

**REFACTOR**: Extracted parsing logic into separate functions

### Step 2: Single Number

**RED**: Added test for single number input

```typescript
it("should return the number for single input", () => {
  // Test for "1" should return 1
});
```

**GREEN**: Extended parsing to handle single numbers
**REFACTOR**: Improved number parsing logic

### Step 3: Multiple Numbers

**RED**: Added test for comma-separated numbers

```typescript
it("should return sum for two numbers", () => {
  // Test for "1,5" should return 6
});
```

**GREEN**: Implemented comma splitting and summation
**REFACTOR**: Created reusable number parsing functions

### Step 4: Newline Support

**RED**: Added test for newline delimiters

```typescript
it("should handle newlines between numbers", () => {
  // Test for "1\n2,3" should return 6
});
```

**GREEN**: Extended delimiter support to include newlines
**REFACTOR**: Created flexible delimiter parsing system

### Step 5: Custom Delimiters

**RED**: Added test for custom delimiter syntax

```typescript
it("should support single character delimiter", () => {
  // Test for "//;\n1;2" should return 3
});
```

**GREEN**: Implemented custom delimiter parsing
**REFACTOR**: Extracted delimiter parsing into separate functions

### Step 6: Advanced Delimiters

**RED**: Added tests for complex delimiter scenarios

- Multiple delimiters: `//[*][%]\n1*2%3`
- Long delimiters: `//[***]\n1***2***3`

**GREEN**: Extended delimiter system to handle brackets and multiple delimiters
**REFACTOR**: Created regex-based delimiter parsing

### Step 7: Negative Number Validation

**RED**: Added test for negative number handling

```typescript
it("should throw error for single negative number", () => {
  // Test for "1,-2,3" should throw error
});
```

**GREEN**: Implemented negative number detection and error throwing
**REFACTOR**: Created comprehensive error handling system

### Step 8: Numbers Greater Than 1000

**RED**: Added test for large number filtering

```typescript
it("should ignore numbers greater than 1000", () => {
  // Test for "2,1001,3" should return 5
});
```

**GREEN**: Implemented filtering for numbers > 1000
**REFACTOR**: Optimized filtering logic

## TDD Benefits Demonstrated

### 1. Test Coverage

- **100% test coverage** for all requirements
- **Edge cases** thoroughly tested
- **Error scenarios** properly handled

### 2. Code Quality

- **Clean, readable code** with clear separation of concerns
- **Modular design** with reusable functions
- **Error handling** built-in from the start

### 3. Refactoring Safety

- **Confidence to refactor** knowing tests will catch regressions
- **Incremental improvements** without breaking functionality
- **Code evolution** guided by tests

## React Integration

### Custom Hook Approach

The implementation uses a custom React hook (`useStringCalculator`) that:

- **Encapsulates** all calculation logic
- **Provides** clean state management
- **Enables** easy testing with `renderHook`
- **Maintains** separation between UI and business logic

### Testing Strategy

- **Unit tests** for the hook using `@testing-library/react`
- **Integration tests** for the complete component
- **Edge case testing** for all scenarios

## Commit Strategy

### TDD-Compliant Commits

Each commit follows the TDD cycle:

```bash
# RED phase
git commit -m "RED: Add failing test for empty string"

# GREEN phase
git commit -m "GREEN: Implement basic add function for empty string"

# REFACTOR phase
git commit -m "REFACTOR: Extract number parsing logic"
```

### Commit History

The Git history shows:

- **Clear progression** through TDD steps
- **Small, focused commits** for each change
- **Descriptive messages** explaining the TDD phase

## Code Evolution

### Initial Implementation

Started with simple string splitting and basic arithmetic.

### Refactoring Steps

1. **Extracted parsing logic** into separate functions
2. **Created delimiter system** for flexible parsing
3. **Added error handling** for negative numbers
4. **Implemented filtering** for large numbers
5. **Optimized performance** with efficient algorithms

### Final Architecture

- **`useStringCalculator`** - Main business logic hook
- **`StringCalculator`** - React component for UI
- **Helper functions** - Parsing, validation, and calculation utilities
- **Comprehensive tests** - Full test coverage

## Lessons Learned

### TDD Advantages

1. **Better design** - Tests drive better API design
2. **Confidence** - Safe refactoring with test safety net
3. **Documentation** - Tests serve as living documentation
4. **Quality** - Forces consideration of edge cases

### React-Specific Benefits

1. **Hook testing** - Easy unit testing with `renderHook`
2. **State management** - Clean separation of concerns
3. **Component isolation** - Business logic separated from UI
4. **Reusability** - Hook can be used in multiple components

## Conclusion

This implementation demonstrates:

- ✅ **Complete TDD methodology** with Red-Green-Refactor cycles
- ✅ **Comprehensive test coverage** for all requirements
- ✅ **Modern React patterns** with custom hooks
- ✅ **Clean, maintainable code** with clear separation of concerns
- ✅ **Proper error handling** and edge case management
- ✅ **Documentation** of the TDD process and decisions

The String Calculator Kata is fully implemented following TDD best practices, providing a solid foundation for future development and maintenance.
