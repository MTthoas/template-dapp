# Express API with Prisma and PostgreSQL

This API allows you to manage users connecting with an Ethereum address via Prisma and PostgreSQL.

## Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a file `.env`and fill it with your PostgreSQL database information:

   ```env
   POSTGRES_URL="..."
   POSTGRES_PRISMA_URL="..."
   POSTGRES_URL_NO_SSL="..."
   POSTGRES_URL_NON_POOLING="..."
   POSTGRES_USER="..."
   POSTGRES_HOST="..."
   POSTGRES_PASSWORD="..."
   POSTGRES_DATABASE="..."
   ```

4. Initialize Prisma and database:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Start the server:

   ```bash
   npm run start
   ```

## Endpoints

- `POST /api/users/login': The login or registration of a user with an Ethereum address.

### Body expected:

```json
{
  "ethAddress": "0x123..."
}
```
