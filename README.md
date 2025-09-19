# 📝 Trello Clone (Fullstack Project with Next.js & Supabase)

A fullstack **Kanban board application** inspired by Trello, built to learn how to **design, scale, and maintain** a modern web application.  
This project demonstrates my skills in **frontend (React/Next.js, TailwindCSS)** and **backend (Supabase/PostgreSQL, authentication, API routes)**.

---

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, TailwindCSS, ShadCN/UI  
- **Backend:** Supabase (PostgreSQL, Auth, Row Level Security)  
- **State Management:** React Query / Server Actions (Next.js)  
- **Auth:** Supabase Auth (email/password, OAuth)  
- **Deployment:** Vercel (frontend) + Supabase (backend, free tier)  

---

## 📊 Database ERD

```mermaid
erDiagram
    USERS ||--o{ BOARDS : owns
    USERS ||--o{ TASKS : creates
    BOARDS ||--o{ COLUMNS : contains
    COLUMNS ||--o{ TASKS : contains

    USERS {
        uuid id PK
        text email
        text name
        timestamp created_at
    }

    BOARDS {
        uuid id PK
        uuid owner_id FK
        text title
        timestamp created_at
    }

    COLUMNS {
        uuid id PK
        uuid board_id FK
        text title
        int position
    }

    TASKS {
        uuid id PK
        uuid column_id FK
        uuid creator_id FK
        text title
        text description
        int position
        timestamp created_at
    }
