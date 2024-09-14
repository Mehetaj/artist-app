# Art Institute of Chicago - Artworks Viewer

### Project Overview
This is a React application built with TypeScript and Vite that displays artworks from the Art Institute of Chicago API. The app features PrimeReact's `DataTable` component, which provides a dynamic, responsive table with server-side pagination. Users can browse through the artworks across different pages, select individual or multiple rows, and their selection persists even when switching between pages. The app ensures efficient data handling with API calls for each page and includes custom styling for a clean and responsive user interface.

### Features
- **Server-Side Pagination**: Each page change triggers a new API request, ensuring the app only loads the necessary data for the current page.
- **Row Selection with Persistence**: Users can select or deselect individual or multiple rows, and the selection remains intact even after navigating between pages.
- **Responsive Design**: The table and other elements adapt well across different screen sizes for an optimal user experience.
  
### Tech Stack
- **React** (with Vite and TypeScript)
- **PrimeReact** (DataTable component for table and pagination)
- **Axios** (for handling API requests)
- **CSS** (for custom styling and responsive design)

### API Reference
This project retrieves data from the Art Institute of Chicago's public API:
- **API Endpoint**: `https://api.artic.edu/api/v1/artworks?page=1`
  
The following fields are displayed in the table:
- `title`
- `place_of_origin`
- `artist_display`
- `inscriptions`
- `date_start`
- `date_end`

### How to Run the Project Locally

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/react-art-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-art-app
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to:
    ```
    http://localhost:3000
    ```

### Live Demo
You can view the live application by following this link:  
👉 [Live Demo](https://react-art-app.vercel.app/)

### Future Enhancements
- Implement sorting and filtering functionalities for the artworks.
- Improve the user experience by adding more interactive features like search and detailed view popups for selected artworks.

### License
This project is licensed under the MIT License.

---

This **README.md** provides a complete overview of your project, including features, setup instructions, and a link to the live demo. Feel free to adjust the content as needed!