### AI_Image_Generation_App_Using_DALL-E

This web application utilizes OpenAI's DALL-E model to generate unique and creative images based on user input. DALL-E is a powerful AI model that can generate images from textual descriptions, allowing users to explore a wide range of creative possibilities.

## Technologies Used:
1. Node.js, Express.js, MongoDB, and React.js together form the powerful MERN stack
2. Tailwind: The most popular CSS framework nowadays
3. OpenAI's DALL-E model: A deep learning model that generates images from text input
4. Cloudinary: A cloud-based image storage service.

<img width="505" alt="image" src="https://github.com/fahad-ui/AI_Image_Generation_App_Using_DALL-E/assets/75291621/b033bd3e-97a7-4743-bf6b-864d47167812">
<img width="930" alt="image" src="https://github.com/fahad-ui/AI_Image_Generation_App_Using_DALL-E/assets/75291621/ab0d8527-6912-46b4-aad4-71579aa08074">

## Features
- User-friendly web interface for inputting text descriptions and generating corresponding images.
- Integration with OpenAI's DALL-E model to generate images based on user input.
- Ability to save and download generated images for future use.

## Usage
1. Enter a descriptive text prompt in the input field provided.
2. Click on the "Generate" button to initiate the image generation process.
3. Wait for the AI model to process your request and generate an image based on the text prompt.
4. Once the image is generated, you can save it to your local machine by clicking on the "Download" button.

 ### After clonning the project and if you want to run it, then you need to create a .env file under server and add credentials
MONGODB_URL = "mongodb+srv://<Username>:<Password>@cluster0.6apneoo.mongodb.net/?retryWrites=true&w=majority"
OPENAI_API_KEY = ""
CLOUDINARY_CLOUD_NAME = ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_API_SECRET=""

## Important Note:
You need to purchase credits from openai dall-e to generate images or else you may face the below error :
SyntaxError: Unexpected token 'B', "Billing ha"... is not valid JSON
