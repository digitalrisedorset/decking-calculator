# Decking Calculator

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

```bash
git clone https://github.com/digitalrisedorset/decking-calculator.git
cd decking-calculator
cd keystone-backend
npm install
npx keystone dev
cd nextjs-frontend
npm install
npm run dev
