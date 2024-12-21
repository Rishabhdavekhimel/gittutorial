Duolingo:- Language Learning Platform
![website page](https://github.com/user-attachments/assets/15aa59cb-5199-4e15-9c07-8ac5d356fa6b)

Here’s a revised and polished version of your setup instructions, tailored for inclusion in a GitHub repository:

Project Setup Instructions
Follow these steps to set up the project on your local machine:

Prerequisites
Ensure Git and Node.js are installed on your system.
You can download Git from Git's official website.
Download Node.js from Node.js official website.
Steps to Set Up
1. Clone the Repository
Clone this repository to your local machine:---
bash
Copy code
git clone <repository-url>  

2. Configure Environment Variables
Create a .env file in the root directory with the following content:---

.env
Copy code
# Disable Next.js telemetry  
NEXT_TELEMETRY_DISABLED=1  

# Clerk authentication keys  
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  

# Database connection  
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/lingo?sslmode=require"  

# Stripe API keys  
STRIPE_API_SECRET_KEY= XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  

# Public app URL  
NEXT_PUBLIC_APP_URL=http://localhost:3000  

# Clerk admin user IDs (comma-separated for multiple admins)  
CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, user_xxxxxxxxxxxxxxxxxxxxxx"  

3.Obtain Required Keys:---
Clerk Authentication Keys
Log in to your Clerk Dashboard.
Navigate to the settings or API keys section.
Copy the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY.

Neon Database URI
Access your database provider's dashboard (e.g., Neon, PostgreSQL).
Locate the connection string and replace <user>, <password>, <host>, and <port> with your actual credentials.
Append ?sslmode=require at the end for SSL requirements.

Stripe API Key and Webhook Secret
Log in to your Stripe Dashboard.
Navigate to API keys and webhooks settings.
Copy the STRIPE_API_SECRET_KEY and STRIPE_WEBHOOK_SECRET.

5. Install Dependencies:---
Install project dependencies using either of the following commands:
bash
Copy code
npm install --legacy-peer-deps  

5. Seed the Database:---
Run the seed script to populate the database:
bash
Copy code
npm run db:push && npm run db:prod  
This script runs a TypeScript file (scripts/prod.ts) and seeds the database with the required challenges data.

6. Verify Database Data:---
Check your database to confirm the challenges data has been successfully seeded.

7. Start the Application:---
Run the application using one of the following commands:
bash
Copy code
npm run dev  
  
Notes
Replace placeholder values (e.g., <user>, <password>, <repository-url>) with actual values.
Keep your .env file secure and do not expose it publicly. Use .gitignore to prevent committing it to the repository.
For deployment, update NEXT_PUBLIC_APP_URL to the URL of your deployed application.

Now you're all set! 🎉 Start using the application and enjoy the features.

![img3](https://github.com/user-attachments/assets/d59dd804-4757-4742-8dd2-93179c293216)
![img2](https://github.com/user-attachments/assets/283cfdfe-90e4-4a92-be08-62b2e5a96d72)
