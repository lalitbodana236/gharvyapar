
# GharVypar

**GharVypar** is a centralized, AI-powered property management system designed to streamline rent collection, utility billing, tenant onboarding/offboarding, document verification, and maintenance tracking across multiple properties and units.

---

## 🏗️ System Architecture (MVP)

![Architecture Diagram](./ERD_Property_Management_System.png)

**Microservices:**
- **API Gateway**: Routing and rate limiting
- **Auth-Service**: JWT-based authentication and role management
- **User-Service**: Manages owners and tenants
- **Property-Service**: Handles property and unit data
- **Payment-Service**: Rent and utility billing + payment tracking
- **Inspection-Service**: AI-powered video comparison for move-in/move-out
- **Document-Service**: Upload and verification (PAN, Aadhaar, etc.)
- **Notification-Service**: Email, SMS, WhatsApp alerts

**Databases:**
- PostgreSQL for structured data
- MongoDB / S3 for video and document storage

---

## 🧩 ERD (Entity Relationship Diagram)

![ERD Diagram](./ERD_Property_Management_System.png)

**Key Entities:**
- User (Owner or Tenant)
- Property (multiple per owner)
- Unit (multiple per property)
- Tenant (occupancy details)
- Payment (Rent & Utilities)
- Document (KYC, agreements)
- Inspection (AI reports for move-in/out)

---

## 🔁 GitHub Repo Structure (Modular)

```
gharvypar/
│
├── api-gateway/
├── auth-service/
├── user-service/
├── property-service/
├── payment-service/
├── inspection-service/
├── document-service/
├── notification-service/
├── frontend/
│   ├── tenant-portal/
│   └── owner-dashboard/
├── libs/
├── docker/
├── scripts/
├── infra/
└── README.md
```

---

## 🎯 Use Cases

- 🏠 Manage multiple properties, flats, and rooms from a single dashboard
- 💳 Rent and utility payment collection with history tracking
- 📄 Tenant KYC & document verification
- 🧠 AI-powered video comparison to assess property condition during move-in/out
- 🔁 Maintenance cost deduction from deposit post-inspection
- 📢 Notifications for due dates, invoices, and alerts
- 📬 Property listing for vacant units

---

## 🚀 Future Roadmap Highlights

- Tenant rating system and credit score
- Public property marketplace and scheduling
- Auto-generated legal lease templates
- Admin dashboard with analytics
- Integration with smart meters and GST invoicing

---

## 📌 Product Identity

- **Name**: GharVypar
- **Tagline**: "Simplifying home & rent management with AI"
- **Target Audience**: Independent landlords, housing societies, co-living operators, and tenants
