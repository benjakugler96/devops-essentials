# DevOps Essentials 🚀

This repository contains the base code used in the **DevOps Essentials** course.  
It is a simple **React + Vite** application, served with **Nginx** inside a Docker container, and automatically deployed to **Google Cloud Run** via **GitHub Actions**.

---

## 📂 Repository Structure

- **`src/`** → React application source code.
- **`Dockerfile`** → Multi-stage build with Nginx to serve the app.
- **`.github/workflows/`** → GitHub Actions pipelines.
  - `verify.yml` → Lint + Tests (common step).
  - `develop.yml` → CI/CD for the `develop` branch.
  - `integration.yml` → CI/CD for the `integration` branch.

---

## 🔄 Branch Workflow

- **`develop`**

  - Runs linting and tests.
  - Builds the Docker image.
  - Pushes the image to Docker Hub with the tag: `develop`
  - Deploys the image to **Cloud Run** (development service).

- **`integration`**
  - Runs linting and tests.
  - Generates a new version using **release-it** (minor bump).
  - Builds the Docker image with the tag: `vX.Y.Z`
  - Pushes the image to Docker Hub.
  - Deploys the image to **Cloud Run** (integration service).

---

## ⚙️ Requirements

- **Node.js 20+**
- **Docker**
- **Google Cloud SDK** (optional for local deploy testing)

---

## 🚀 Available Scripts

    # Install dependencies
    npm install

    # Run in development mode
    npm run dev

    # Build the application
    npm run build

    # Preview the build
    npm run preview

    # Linting
    npm run lint

    # Tests (Vitest)
    npm test

---

## 🐳 Docker

Build and run the app locally with Docker:

    # Build the image
    docker build -t devops-essentials .

    # Run the container (port 8080)
    docker run -p 8080:80 devops-essentials

Then open: [http://localhost:8080](http://localhost:8080)

---

## ☁️ Cloud Run Deployment

Deployments are automated with GitHub Actions:

- Every push to `develop` → automatically deploys to the **dev** service.
- Every push to `integration` → automatically deploys to the **int** service with a new version number.

---

## 📦 Versioning

The project uses **[release-it](https://github.com/release-it/release-it)** for semantic versioning:

- `develop` → always publishes `develop`.
- `integration` → generates `vX.Y.Z` and publishes to Docker Hub.

---

## ✨ Purpose

This repo accompanies the **DevOps Essentials** course, showing a practical example of:

- CI/CD with GitHub Actions
- Automated versioning with release-it
- Building and deploying front-end apps with Docker + Nginx
- Serverless deployment with Cloud Run
