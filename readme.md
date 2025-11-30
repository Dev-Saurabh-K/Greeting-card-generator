# Greeting Card Generator 🎨🎂

A Node.js command-line application that generates personalized birthday greeting cards as images. You can choose between pre-defined artistic templates or use Generative AI (Google Gemini) to create a unique design on the fly.

## ✨ Features

* **Dual Modes:**
    * **Template Mode:** Choose from 5 distinct pre-set designs (Normal, Elegant Dark Luxury, Soft Glassmorphism, Retro Pop Brutalist, Boho Arch).
    * **AI Mode:** Uses Google's Gemini models to generate a completely unique HTML/CSS design based on the recipient's details.
* **Image Export:** Automatically converts the generated HTML card into a high-quality PNG image using Puppeteer.
* **CLI Interface:** Interactive command-line prompts for easy data entry.
* **Cool ASCII Art:** Styled startup banner using Figlet.

## 🛠️ Prerequisites

* **Node.js**: Ensure you have Node.js installed (v18+ recommended).
* **Google Gemini API Key**: Required for the AI generation feature.

## 📥 Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd greeting-card-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Vk Configuration

1.  Create a `.env` file in the root directory of the project.
2.  Add your Google Cloud/Gemini API key to the file:

    ```env
    GOOGLE_API_KEY=your_actual_api_key_here
    ```

    > **Note:** You can get an API key from [Google AI Studio](https://aistudio.google.com/).

## 🚀 Usage

1.  **Start the application:**
    ```bash
    node index.js
    ```

2.  **Follow the on-screen prompts:**
    * The app will display a "Dev-Saurabh-K" and "Greeting Card Generator!" banner.
    * Select your generation mode:
        * Type `1` for **Template Mode**.
        * Type `2` for **AI Mode**.

3.  **Enter Details:**
    * **Your Name:** (Sender)
    * **Birthday Person's Name:** (Recipient)
    * **Date of Birth:** (e.g., 18/08/2005)

4.  **Output:**
    * The program will generate the card and save it as a PNG file in the current directory.
    * **Filename Format:** `card_[RecipientName]_[Index].png` (e.g., `card_SK_0.png`).

## 📁 Project Structure

```text
greeting-card-generator/
├── controllers/
│   ├── ai.text.controller.js  # Handles communication with Google GenAI SDK
│   └── img.controller.js      # Handles HTML to Image conversion using Puppeteer
├── templates/
│   └── img.template.js        # Contains the pre-defined HTML/CSS design functions
├── index.js                   # Main entry point and CLI logic
├── package.json               # Project dependencies and scripts
└── .env                       # Environment variables (API Key)


📦 Tech Stack
Runtime: Node.js

AI/LLM: Google GenAI SDK (gemini-2.5-flash)

Image Generation: Puppeteer (Headless Chrome)

CLI Inputs: readline-sync

Styling: Figlet (ASCII art) & Chalk

⚠️ Troubleshooting
Puppeteer Issues: If you encounter errors launching the browser, ensure your system has the necessary libraries for running Chrome/Chromium headlessly.

API Errors: If AI mode fails, check your internet connection and verify that your GOOGLE_API_KEY in the .env file is valid and has quota available.

📜 License
This project is licensed under the ISC License.