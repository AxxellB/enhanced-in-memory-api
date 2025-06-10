# Enhanced Express TypeScript API

This is a basic Express.js REST API written in TypeScript. It supports adding items with a name, retrieving all stored items, retrieving a single item, updating a single item and
deleting a single ite.

## Requirements

- Node.js (v16 or later)
- npm

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AxxellB/simple-in-memory-api
cd simple-in-memory-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app in development

```bash
npm run dev
```

The app should start running on http://localhost:3000/

### 4. API Endpoints

GET `/items`

Example Response:

```bash
[
  {
    "id": "some-uuid",
    "name": "Test1"
  },
    {
    "id": "some-uuid",
    "name": "Test2"
  },
]
```

POST `/items`

Example Request Body:

```bash
{
  "name": "Test3"
}
```

Example Response:

```bash
{
    "id": "5cf51e64-0a7c-4a47-b94b-34457855e46f",
    "name": "Test3"
}
```

GET `/items/:id`

Example Response:

```bash
{
    "id": "some-uuid",
    "name": "Test1"
}
```

PUT `/items/:id`

Example Request Body:

```bash
{
  "name": "Test5"
}
```

Example Response:

```bash
{
    "id": "some-uuid",
    "name": "Test5"
}
```

DELETE `/items/:id`

Example Response:

```bash
{
    "message": "Item deleted successfully",
    "id": "some-uuid"
}
```

GET `/validate-and-fail`
(Strictly used for testing purposes of the error handling middleware)

Example Response:

```bash
{
    message: "Sorry! Something went wrong!"
}
```
