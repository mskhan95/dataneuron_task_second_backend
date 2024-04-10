# DataNeuron Backend API

The DataNeuron Backend API provides a simple interface to add, update, and track data entries, along with counting the operations performed. This document outlines the available endpoints and how to interact with them.

## Base URL

The API is currently deployed at: https://dataneuron-m6yg.onrender.com

## Endpoints

1. **Get Data**
   - Endpoint: `/`
   - Method: GET
   - Description: Fetches all the data entries from the backend.
   - Response: An array of data objects.

2. **Create Data**
   - Endpoint: `/create`
   - Method: POST
   - Description: Adds a new data entry.
   - Body:
     ```json
     {
       "name": "Sample data"
     }
     ```
   - Response: msg of successfull Added.

3. **Update Data**
   - Endpoint: `/update/${id}`
   - Method: PATCH
   - Description: Update the Existing data.
   - Body:
     ```json
     {
       "name": "Updated data", 
     }
     ```
   - Response: The updated data object.

4. **Get Count**
   - Endpoint: `/count`
   - Method: GET
   - Description: Retrieves the count of add and update operations performed.
   - Response: Get the updated Counts of operations.
     ```json
     {
       "addCount": 0,
       "updateCount": 0
     }
     ```

## Backend GitHub

The backend for this project is deployed on Render and can be accessed [here](https://github.com/mskhan95/dataneuron_task_second_backend).

This setup ensures a seamless flow for managing and tracking data entries through a simple and intuitive API.
