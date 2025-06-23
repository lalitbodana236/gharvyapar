# GharvyparUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


##  🎨 GharVypar – UI/UX Design Plan
##  🧭 1. Navigation Bar (Top Header)
Element	Description
Logo	GharVypar logo (top-left), clickable to home
Dashboard	Redirect to role-specific dashboard (Owner or Tenant)
My Properties	For Owners – list & manage their properties
Units	For Owners – register/view/manage units
Tenants	Tenant list, document verification, rental history
Payments	Rent & utility billing/payment history
AI Inspection	View inspection results, upload move-in/out videos
Notifications	Bell icon with unread indicators (rent due, maintenance alert)
Profile Icon	Dropdown: My Profile, Switch Role, Settings, Logout

🧱 2. Sidebar (For Role-Specific Features – Owner/Tenant)
Owner View:
🏠 Properties

🧱 Units

👤 Tenants

💳 Rent & Utility Billing

📹 AI Video Inspections

📄 Documents (KYC, lease agreements)

🔔 Alerts & Maintenance Tickets

Tenant View:
📄 My Documents (upload/verify)

💵 Pay Rent & Bills

📆 Payment History

📹 Upload Inspection Video

📝 Lease Agreement

🛠 Raise Maintenance Request

🛂 3. Owner Registration Page
Fields:
Field	Type
Full Name	Text
Email	Email
Phone Number	Text
Aadhaar / PAN	Upload
Password	Password
Confirm Password	Password
Role	Preselected as OWNER
Submit Button	Action

✅ On submit: create user, upload documents, mark role as OWNER.

🏘 4. Property Registration Form (Owner Panel)
Fields:
Field	Type
Property Name	Text
Address Line 1	Text
Address Line 2	Text (optional)
City	Dropdown
State	Dropdown
Zip Code	Text
Type	Dropdown (HOUSE, BUILDING, PG, COMMERCIAL)
Total Floors	Number
Ownership Proof	File Upload
Submit Button	Action

🧱 5. Unit Registration Form (Nested under Property)
Once a property is created, allow the owner to add multiple units.

Fields:
Field	Type
Unit Number	Text (e.g., Flat 101, Shop A1)
Unit Type	Dropdown (FLAT, SHOP, ROOM)
Category	Dropdown (RESIDENTIAL, COMMERCIAL)
Area (sqft)	Number
Components	Multi-select with checkboxes (BEDROOM, KITCHEN, TOILET, etc.)
Shared Facility	Checkbox per component
Monthly Rent	Number
Status	Pre-filled as VACANT
Submit Button	Action

📦 Bonus: Smart Dashboard Components
Owner Dashboard:
📊 Card: Total Properties

🧱 Card: Total Units

💸 Card: Monthly Rent Collected

⚠️ Card: Pending Payments

📋 Table: Latest Maintenance Requests

📹 Latest AI Reports: clickable thumbnails

Tenant Dashboard:
🏘 Current Residence

💳 Next Rent Due Date

📄 Document Verification Status

🔁 Lease Renewal Countdown

📹 Upload Video Button

🧠 Design Recommendations
Use Tailwind CSS or Bootstrap 5 for consistent responsive UI

Use React or Angular for frontend (Angular v19 if you're continuing that stack)

Implement role-based routing

Include toast messages / success banners for UX clarity
