import React from 'react';
import { Typography, Box, List, ListItem } from '@mui/material';
import SectionWrapper from '../../../../components/animations/SectionWrapper';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

const Blog1: React.FC = () => {
  return (
    <SectionWrapper>
      <CenterWrapper>
        <Box sx={{ margin: '0 auto' }}>
          {/* Title */}
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Getting Started with React: A Beginner’s Practice Session
          </Typography>
          <Typography color="text.secondary" variant="caption">
            Published on 17 May 2024
          </Typography>
          <Typography sx={{ my: 1, color: 'text.secondary' }} variant="body2">
            Quick Approach to getting started with ReactJS
          </Typography>

          {/* Introduction */}
          <Typography variant="body1" sx={{ mb: 2 }}>
            Today, I’ll guide you through a React.js practice session aimed at beginners. This session is designed to be
            concise and focused, so we won’t be delving into advanced topics like hooks, component-based structures, or prop
            passing in depth. Instead, I assume you already have a basic understanding of these concepts, including the
            useState hook, components, prop passing, basic functions (arrow or normal), and HTML.
          </Typography>

          {/* Overview */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            In this session, we will build a simple app, starting with a basic counter application and gradually adding more
            complexity. This hands-on approach will help you clarify some common doubts and provide a practical understanding
            of working with React.
          </Typography>

          {/* Prerequisites */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Prerequisites
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
            <ListItem sx={{ display: 'list-item' }}>Basic knowledge of React (hooks, components, prop passing)</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Basic understanding of HTML and CSS</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Familiarity with JavaScript functions</ListItem>
          </List>

          {/* Let's Get Started: Counter App */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Let’s Get Started: Counter App
          </Typography>

          {/* Step 1: Setting Up */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Step 1: Setting Up
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            First, we need to set up our project using Vite. Run the following command in your terminal to create a new Vite
            project with React:
          </Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              overflowX: 'auto',
              mb: 2,
            }}
          >
            <code>npm create vite@latest</code>
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Navigate to your project directory and install the dependencies:
          </Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              overflowX: 'auto',
              mb: 2,
            }}
          >
            <code>
              cd my-react-app
              <br />
              npm install
              <br />
              npm run dev
            </code>
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Now, delete the existing code in <code>App.js</code> or <code>App.tsx</code> and set up a basic counter app with
            two buttons (Increment and Decrement) and a {'<p>'} or {'<h1>'} tag to display the counter.
          </Typography>

          {/* Counter App Description */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Counter App Description
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
            <ListItem>Two Buttons: Increment and Decrement</ListItem>
            <ListItem>Display: A paragraph or heading tag to show the counter value</ListItem>
          </List>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Implement the logic to increment and decrement the counter. Once done, your basic counter app should be
            functional.
          </Typography>

          {/* Step 2: Enhancing the Counter */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Step 2: Enhancing the Counter
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Now, let’s enhance our counter functionality. Instead of incrementing/decrementing by 1, we will allow users to
            specify the increment and decrement values using input fields.
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
            <ListItem>Add Two Number Input Fields: One for the increment value and one for the decrement value</ListItem>
            <ListItem>Update Buttons: Use the specified values to adjust the counter</ListItem>
          </List>
          <Typography variant="body1" sx={{ mb: 2 }}>
            For example, if the increment input field has a value of 10 and the decrement input field has a value of 5,
            clicking the increment button should increase the counter by 10, and the decrement button should decrease it by
            5.
          </Typography>

          {/* Step 3: Saving Counter Records */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Step 3: Saving Counter Records
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Next, we’ll add the functionality to save counter records in an array, similar to a todo list. We will create two
            stateful variables: <strong>positiveRecords</strong> and <strong>negativeRecords</strong>.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            - <strong>Positive Records:</strong> Store positive counter values
            <br />- <strong>Negative Records:</strong> Store negative counter values
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Add a “Save Record” button to save the current counter value to the appropriate array. Display these records
            below the counter app, mapping them side by side with titles “Positive Records” and “Negative Records”.
          </Typography>

          {/* Step 4: Deleting Records and Exporting Data */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Step 4: Deleting Records and Exporting Data
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Finally, we will add the ability to delete individual records. Additionally, we will implement a feature to
            export counter records to a <code>records.json</code> file.
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
            <ListItem>Delete Functionality: Add a delete button next to each record to remove it from the list</ListItem>
            <ListItem>
              Export Data: To export data to a JSON file, you might need some external libraries or additional knowledge. I
              recommend researching this online, as this practice session focuses on hands-on learning.
            </ListItem>
          </List>

          {/* Conclusion */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Conclusion
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            By the end of this session, you’ll have built a functional React app with increment/decrement logic, customizable
            input fields, record saving, deletion, and data exporting capabilities. This project should solidify your
            understanding of basic React concepts and give you practical experience in building a small application. This
            project looks simple, but it can become challenging—have hope and patience.
          </Typography>
        </Box>
      </CenterWrapper>
    </SectionWrapper>
  );
};

export default Blog1;
