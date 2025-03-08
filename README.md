# Enhance the Existing **Movie Collection** Application

Add functionality to navigate to an "Add Movie" form. This task focuses exclusively on frontend development using **React** and **Vite**.

## Provided Components

- **MovieCard Component:** Displays individual movie details.
- **Dashboard Component:** Renders a list of `MovieCard` components.

## Tasks

### 1. Add "Add Movie" Button on Dashboard Page

- **Placement:** Position the "Add Movie" button prominently on the Dashboard page, preferably at the top or in a toolbar for easy access.
- **Functionality:** When clicked, the button should navigate the user to the "Add Movie" form page.

### 2. Create "Add Movie" Form Page

- **Form Fields:** Develop a form that includes the following input fields:
  - **Title** (Text Input)
  - **Director** (Text Input)
  - **Genre** (Select Dropdown)
  - **Release Year** (Number Input)
  - **Synopsis** (Textarea)
  - **Poster Image URL** (URL Input)
- **Buttons:**

  - **Submit:** To hypothetically add the movie (no actual functionality required).
  - **Cancel:** To navigate back to the Dashboard without adding a movie.

- **Routing:** Implement navigation between the Dashboard page and the "Add Movie" form using React Router or your preferred routing library.

### 3. Update Navigation Structure

- **Routing Setup:** Ensure that the application’s routing is set up to handle navigation to the new "Add Movie" form page. This may involve updating your `App.jsx` or main routing file.

---

# **How to Fork and Set Up Your Repository**

---

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.  
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:
       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```
       Replace `<your_github_repo_url>` with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:
       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```
  - **Option 2: Push Directly**
    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

---

## **3. Submission Instructions**

- Once your code is successfully pushed to GitHub:
  1. Copy the link to your GitHub repository.
  2. Submit the link on the assignment submission portal.  
     The link should follow this format:  
     **`https://github.com/<your_username>/<repository_name>`**

---

### **Example Submission**

If your GitHub username is `johnDoe` and the repository name is `assignment-repo`, the submission link would look like this:  
**`https://github.com/johnDoe/assignment-repo`**
