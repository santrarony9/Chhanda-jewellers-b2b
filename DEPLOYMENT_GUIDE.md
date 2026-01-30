# Chhanda Jewellers - Deployment & Database Guide

## 1. Setting up the Database (MongoDB)

Your application uses **MongoDB**. Most shared hosting providers (like Hostinger/HostGator) **do not** provider a built-in MongoDB database (they usually provide MySQL).

**The Solution:** You must use a cloud database provider. **MongoDB Atlas** is the official, free (and easiest) option.

### Step-by-Step Setup:
1.  Go to **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)** and sign up for a free account.
2.  Create a **New Project** (name it "Chhanda").
3.  Click **Build a Database** and select the **M0 FREE** tier.
4.  **Create a Database User**:
    *   Username: `admin`
    *   Password: `securepassword123` (Make sure to save this!)
5.  **Network Access**:
    *   Click "Back" or go to "Network Access" in the sidebar.
    *   Click **Add IP Address**.
    *   Select **Allow Access from Anywhere** (`0.0.0.0/0`). (This allows your hosting server to connect).
6.  **Get Connection String**:
    *   Go to "Database" -> Click **Connect**.
    *   Select **Drivers** (Node.js).
    *   **Copy the connection string**. It looks like:
        `mongodb+srv://admin:<password>@cluster0.xyz.mongodb.net/?retryWrites=true&w=majority`
    *   **Important**: Replace `<password>` with the actual password you created in step 4.

---

## 2. Configuring Hostinger / Hosting Panel

Now you need to tell your hosting server about this database.

1.  Log in to your Hosting Panel (Hostinger/cPanel etc.).
2.  Go to your **Website Dashboard** or **Node.js Application** settings.
3.  Look for **Environment Variables** or `.env` configuration.
4.  Add the following variables (copy values from your `.env.example` file):

| Variable | Value |
| :--- | :--- |
| `MONGODB_URI` | The connection string you copied from MongoDB Atlas (with the password filled in). |
| `NEXTAUTH_SECRET` | A long random string (e.g., run `openssl rand -base64 32` or just smash your keyboard randomly). |
| `NEXTAUTH_URL` | Your actual domain name (e.g., `https://chhandajewellers.com`). |

---

## 3. Deployment Steps

Since you are deploying via **GitHub**:

1.  Ensure your GitHub repository is connected to your hosting.
2.  **Build Command**: `npm run build`
3.  **Start Command**: `npm start`
4.  **Install Command**: `npm install`

Once deployed, your application will automatically connect to the MongoDB Atlas database you set up.

### Troubleshooting
*   **"Connection Error"**: Check if you replaced `<password>` in the connection string and enabled "Allow Access from Anywhere" in MongoDB Network Access.
*   **"500 Error"**: Check if `NEXTAUTH_SECRET` is set.
