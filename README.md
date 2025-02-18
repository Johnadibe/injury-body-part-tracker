# Injury Reporting Form

This project is an interactive injury reporting form with a visual body chart. Users can mark injuries on a human body diagram, add details about each injury, and fill out additional information related to the incident.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Johnadibe/injury-body-part-tracker.git
   cd injury-body-part-tracker
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Click on body parts to add injuries
- View and edit injury details
- Responsive design
- Form sections for additional injury information

## How to Use

1. Click on a body part to add an injury. Fill out the injury details in the popup form.
2. Click on red indicators to view saved injury details.
3. Fill out the additional form sections for more information about the injury.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Project Structure

- `app/page.tsx`: Main component with the injury form logic
- `components/injury-form-modal.tsx`: Modal component for adding/editing injuries
