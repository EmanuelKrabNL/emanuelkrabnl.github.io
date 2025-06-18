---
title: Projects
icon: fas fa-tools
order: 5
---

<h1 style="text-align: center;">My Projects</h1>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
.project-card {
  background: var(--page-bg);
  border: 3px solid #0077cc; /* standaard: blauw */
  border-radius: 12px;
  padding: 1rem;
  transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}
.project-card:hover {
  border-color: #ff7f50; /* bij hover: oranje */
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.project-card h2 {
  margin: 0;
  font-size: 1.25rem;
}
.project-card p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.75;
}
</style>

<div class="projects-grid">

<a class="project-card" href="/projects/videodownloader/">
  <h2>Video Downloader</h2>
  <p>Download Videos From Web!</p>
</a>

</div>
