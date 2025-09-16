# String Calculator - React.js Implementation

A complete implementation of the String Calculator TDD Kata using React.js, TypeScript, and Vitest for testing.

## 🚀 Features

This String Calculator supports all the requirements from the TDD Kata:

### ✅ Basic Functionality

- **Empty string** returns `0`
- **Single number** returns the number itself
- **Multiple numbers** separated by commas return their sum
- **Any amount of numbers** can be processed

### ✅ Advanced Features

- **Newline support**: Numbers can be separated by newlines (`\n`) instead of commas
- **Custom delimiters**: Support for single character delimiters (`//;\n1;2;3`)
- **Multiple delimiters**: Support for multiple custom delimiters (`//[*][%]\n1*2%3`)
- **Long delimiters**: Support for delimiters of any length (`//[***]\n1***2***3`)
- **Negative validation**: Throws exceptions for negative numbers with clear error messages
- **Large number filtering**: Numbers greater than 1000 are ignored

## 🛠️ Technology Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Vitest** - Modern testing framework
- **CSS3** - Modern styling with gradients and animations

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd string-calculator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧪 TDD Testing

This project follows Test-Driven Development (TDD) methodology with comprehensive test coverage:

### TDD Process

- **RED** 🔴 - Write failing tests first
- **GREEN** 🟢 - Write minimal code to pass tests
- **REFACTOR** 🔵 - Improve code while keeping tests green

### Test Coverage

- ✅ **100% test coverage** for all requirements
- ✅ **Edge cases** thoroughly tested
- ✅ **Error scenarios** properly handled
- ✅ **TDD progression** documented in test file

### Running Tests

```bash
# Run tests in watch mode (TDD development)
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### TDD Documentation

See [TDD_APPROACH.md](./TDD_APPROACH.md) for detailed TDD methodology and implementation steps.

## 📋 Usage Examples

### Basic Usage

```typescript
import { StringCalculator } from "./StringCalculator";

const calculator = new StringCalculator();

// Basic operations
calculator.add(""); // Returns: 0
calculator.add("1"); // Returns: 1
calculator.add("1,2"); // Returns: 3
calculator.add("1,2,3,4,5"); // Returns: 15
```

### Advanced Usage

```typescript
// Newline support
calculator.add("1\n2,3"); // Returns: 6

// Custom delimiters
calculator.add("//;\n1;2;3"); // Returns: 6

// Multiple delimiters
calculator.add("//[*][%]\n1*2%3"); // Returns: 6

// Long delimiters
calculator.add("//[***]\n1***2***3"); // Returns: 6

// Numbers > 1000 are ignored
calculator.add("2,1001,3"); // Returns: 5

// Negative numbers throw exceptions
calculator.add("1,-2,3"); // Throws: "negatives not allowed -2"
```

## 🎨 UI Features

The application includes a beautiful, modern UI with:

- **Interactive input field** for testing different scenarios
- **Real-time calculation** with error handling
- **Example buttons** for quick testing of all features
- **Responsive design** that works on all devices
- **Modern styling** with gradients and smooth animations
- **Clear error messages** for invalid inputs

## 🏗️ Project Structure

```
src/
├── StringCalculator.ts      # Main calculator class
├── StringCalculator.test.ts # Comprehensive test suite
├── App.tsx                  # React UI component
├── App.css                  # Styling for the UI
├── index.css               # Global styles
└── test/
    └── setup.ts            # Test configuration
```

## 🧪 Test Coverage

The test suite covers all scenarios including:

- ✅ Basic functionality (empty string, single number, multiple numbers)
- ✅ Newline support
- ✅ Custom delimiters (single character and multiple)
- ✅ Long delimiters
- ✅ Negative number validation
- ✅ Numbers greater than 1000
- ✅ Edge cases and error handling
- ✅ Complex scenarios with mixed delimiters

## 🚀 Running the Application

1. **Development Mode**:

   ```bash
   npm run dev
   ```

   Opens the app at `http://localhost:5173`

2. **Build for Production**:

   ```bash
   npm run build
   ```

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## 📝 Implementation Details

### StringCalculator Class

The `StringCalculator` class is the core of the application and includes:

- **`add(numbers: string): number`** - Main method that processes the input string
- **`parseDelimiters(input: string)`** - Parses custom delimiter definitions
- **`parseMultipleDelimiters(delimiterSection: string)`** - Handles multiple delimiter parsing
- **`splitNumbers(numberString: string, delimiters: string[])`** - Splits numbers using all delimiters
- **`escapeRegex(delimiter: string)`** - Escapes special regex characters

### Error Handling

The calculator provides clear error messages for:

- Invalid delimiter formats
- Negative numbers (with specific numbers listed)
- Multiple negative numbers (all listed in the error message)

### Performance Considerations

- Uses efficient regex patterns for delimiter splitting
- Properly escapes special regex characters
- Handles edge cases like empty strings and whitespace
- Filters large numbers efficiently

## 🎯 TDD Approach

This implementation follows Test-Driven Development principles as required by the Incubyte assessment:

### TDD Methodology

1. **RED** 🔴 - Write failing tests first
2. **GREEN** 🟢 - Implement minimal code to make tests pass
3. **REFACTOR** 🔵 - Improve code while keeping tests green

### TDD Benefits Demonstrated

- **Better design** - Tests drive better API design
- **Confidence** - Safe refactoring with test safety net
- **Documentation** - Tests serve as living documentation
- **Quality** - Forces consideration of edge cases

### Implementation Steps

1. **Basic Requirements** - Empty string, single number, multiple numbers
2. **Newline Support** - Handle `\n` as delimiter
3. **Custom Delimiters** - Support `//delimiter\n` syntax
4. **Advanced Delimiters** - Multiple and long delimiters
5. **Error Handling** - Negative number validation
6. **Edge Cases** - Large numbers, whitespace, empty sequences

### Test Coverage

- **100% coverage** for all requirements
- **Edge cases** thoroughly tested
- **Error scenarios** properly handled
- **TDD progression** documented in test file

The comprehensive test suite ensures all functionality works correctly and provides confidence for future changes.

## 📄 License

This project is part of the Incubyte TDD Assessment.

---

**Built with using React.js, TypeScript, and modern web technologies**
