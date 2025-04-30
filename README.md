# Decking Calculator
> ⚠️ This project is designed to work alongside an existing Magento 2 instance and requires some manual data mapping and KeystoneJS setup.  
> It is intended as a functional prototype or reference implementation — not a plug-and-play solution.  
> For questions about setting it up or adapting it to your system, feel free to reach out.

## Description
A web application designed to help users estimate the materials and costs required for decking projects.  
Built using **Next.js**, **React**, and **KeystoneJS** for fast, scalable, and user-friendly interactions.

## Key Technologies
- Next.js
- React
- Node.js
- KeystoneJS
- GraphQL API

## Features
- Dynamic decking size input and real-time cost calculation
- Modular frontend components for easy customisation
- Admin backend for managing pricing rules and user submissions
- Optimised API integrations for smooth data handling

## Installation / Usage
The decking calculator works alongside a valid Magento environment. In the nextjs .env file, add your Magento url and ensure this Magento envrionment allows the nextjs url to connect to GraphQL. 
I use a cors settings and a Magento module `Graycore_Cors` with the following configuration in `app/etc/env.php`
` 'system' => [
        'default' => [
            'web' => [
                'graphql' => [
                    'cors_allowed_origins' => 'http://localhost:3001',
                    'cors_allowed_methods' => 'GET,OPTIONS,POST',
                    'cors_allowed_headers' => '*'
                ]
            ]
        ]
    ]`

## Magento Configuration
The Decking Calculator requires a valid Magento 2 environment and a working GraphQL endpoint.
In the Next.js .env file, add your Magento URL like so:

```bash 
MAGENTO_GRAPHQL_ENDPOINT=http://your-magento-site/graphql
```
Magento must allow the frontend origin (typically http://localhost:3001) to connect via CORS.
This project uses the Graycore_Cors Magento module.

Example app/etc/env.php CORS config:
```php
'system' => [
    'default' => [
        'web' => [
            'graphql' => [
                'cors_allowed_origins' => 'http://localhost:3001',
                'cors_allowed_methods' => 'GET,OPTIONS,POST',
                'cors_allowed_headers' => '*'
            ]
        ]
    ]
]
```

## Setup Instructions
### Clone the repo
bash
Copy
Edit
git clone https://github.com/digitalrisedorset/decking-calculator.git
cd decking-calculator
### Start the Keystone Backend
```bash
cd keystone-backend
npm install
npx keystone dev
```
Ensure Keystone is seeded with the required schema/data.
Access the backend at: http://localhost:3000

### Start the Next.js Frontend (in a separate terminal)
```bash
cd decking-calculator/nextjs-frontend
npm install
npm run dev
```
Access the frontend at: http://localhost:3001

### Status
This project is a working proof-of-concept.
It requires setup effort and is not production-ready without Magento and Keystone integration work.

For demo, experimentation, or as a base for future development.

