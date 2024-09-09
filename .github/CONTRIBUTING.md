# Contributing to DApp Template
First of all, thank you for your interest in contributing to the DApp Template project! Your involvement helps make this open-source project better for everyone.

The following is a guide to help you contribute effectively. These steps will ensure the project remains organized and easy to maintain.

- Table of Contents
  - Code of Conduct
  - How to Contribute
    - Reporting Bugs
    - Suggesting Features
    - Submitting Pull Requests
  - Development Setup
  - Style Guidelines
  - Commit Message Guidelines
    
# Code of Conduct
By participating in this project, you agree to abide by the Code of Conduct. Please make sure to review it so that we can maintain a welcoming environment for all contributors.

## How to Contribute
There are several ways you can contribute to the project:

### Reporting Bugs
If you find a bug, please help us by reporting it in the GitHub Issues. Before submitting, ensure that:

  1. The bug hasn’t already been reported.
  2. You are using the latest version of the project.

Please provide the following information in your report:
- A clear and descriptive title
- Steps to reproduce the bug
- Expected and actual behavior
- Screenshots (if applicable)
- Environment (OS, browser, version)
- Suggesting Features
  
If you have ideas for new features or improvements, feel free to open an issue in the GitHub Issues section. Please provide:

- A clear and detailed description of the feature.
- The reason why you think this feature would be useful.
- Any relevant examples or links for reference.

## Submitting Pull Requests

We welcome pull requests (PRs) from everyone. Before submitting your PR, please follow these guidelines:

- Fork the repository and clone it locally.
- Create a new branch for your feature or bug fix
  
```SH
git checkout -b feature/my-feature
```

- Ensure your changes do not break existing tests.
- Follow the style guidelines mentioned below.
- Write a clear and concise commit message.
- Push your changes to your branch
```SH
git push origin feature/my-feature
```
- Open a pull request (PR) and explain your changes in detail.
  
## Pull Request Guidelines

- Ensure your PR description explains the problem and the solution.
- If the PR fixes an issue, reference it in the description (e.g., "Fixes #123").
- Be patient! Reviewers will respond as soon as possible.

## Development Setup
To set up the project locally for development, follow these steps:

Fork the repository and clone it to your local machine.
- Install the necessary dependencies:
```bash
npm install
```
- Set up environment variables by creating a .env file and filling in the required fields (refer to README.md).
- Set up the database:
```bash
npx prisma migrate dev --name init
```
- Start the development server:
```bash
npm run dev
```
If you plan on making database changes, use Prisma migrations and ensure that the schema remains consistent.

## Style Guidelines
### Code Style
This project follows a clean and consistent code style to ensure readability and maintainability. Here are some key points to follow:

- TypeScript: Always use TypeScript types and interfaces.
- Linting: Use ESLint for linting the project. Run lint checks before submitting a PR:
```bash
npm run lint
```
- Formatting: The project uses Prettier for consistent code formatting. Please run Prettier before committing:
```bash
npm run format
```
- Comments: Write clear comments where necessary, especially for complex code.
  
## File and Folder Structure
Organize files and folders meaningfully:

- Components: Place reusable React components in the src/components/ directory.
- Pages: Define pages for Next.js in the src/pages/ directory.
- Hooks: Custom React hooks should go in the src/hooks/ directory.
- Database: Prisma-related files are stored in the prisma/ folder.
  
## Commit Message Guidelines
Clear and concise commit messages help in keeping track of changes. Follow these rules when writing commit messages:

- Use the present tense ("Add feature" not "Added feature").
- Capitalize the subject line.
- Limit the subject line to 50 characters.
- Separate the subject from the body with a blank line.
- Reference issues and pull requests liberally.
  
Example commit message:

```sql
Copy code
Add feature to integrate new Amoy Network

- Implement Amoy Network API for transaction signing
- Add unit tests for the new hooks
Fixes #123
```

## Need Help?
If you need any help or clarification regarding the contribution process, feel free to reach out by opening an issue in the GitHub Issues section.

By following these guidelines, we ensure that the project remains consistent, maintainable, and welcoming to new contributors. We appreciate every contribution, no matter how big or small!

This CONTRIBUTING.md provides a structured and clear guide for anyone looking to contribute to your project. It covers the necessary aspects of reporting bugs, making feature suggestions, setting up the project, and submitting pull requests, which ensures a smooth contribution process.
