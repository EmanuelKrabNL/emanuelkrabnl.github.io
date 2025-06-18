---
order: 4               # adjust so it shows in the right spot (1=Home,2=About,3=Posts,…)
title: Projects        # the tab label
permalink: /projects/  # the URL it should link to
layout: page           # use your standard page layout
---

# 🚀 My Projects

<ul class="list-unstyled">
  {% for project in site.projects %}
    <li class="mb-4">
      <a href="{{ project.url | relative_url }}" class="h5 d-block">
        {{ project.title }}
      </a>
      <p class="text-muted mb-1">{{ project.description }}</p>
    </li>
  {% endfor %}
</ul>
