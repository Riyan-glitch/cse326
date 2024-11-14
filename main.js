const resources = [
    {
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript in this comprehensive guide.',
      type: 'article',
      duration: '15 min read',
      level: 'beginner'
    },
    {
      title: 'React Fundamentals',
      description: 'Master the core concepts of React including components, props, and state.',
      type: 'video',
      duration: '30 min',
      level: 'intermediate'
    },
    {
      title: 'Advanced TypeScript Patterns',
      description: 'Explore advanced TypeScript features and design patterns.',
      type: 'article',
      duration: '20 min read',
      level: 'advanced'
    },
    {
      title: 'CSS Grid Layout Tutorial',
      description: 'A complete guide to CSS Grid with practical examples.',
      type: 'video',
      duration: '25 min',
      level: 'intermediate'
    },
    {
      title: 'Getting Started with Git',
      description: 'Learn version control basics with Git and GitHub.',
      type: 'article',
      duration: '10 min read',
      level: 'beginner'
    },
    {
      title: 'Node.js API Development',
      description: 'Build RESTful APIs with Node.js and Express.',
      type: 'video',
      duration: '45 min',
      level: 'advanced'
    }
  ];
  
  let currentFilter = 'all';
  let currentLevel = 'all';
  let searchTerm = '';
  
  function renderResources() {
    const filteredResources = resources.filter(resource => {
      const matchesFilter = currentFilter === 'all' || resource.type === currentFilter;
      const matchesLevel = currentLevel === 'all' || resource.level === currentLevel;
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesLevel && matchesSearch;
    });
  
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = filteredResources.map(resource => `
      <div class="resource-card">
        <h2>${resource.title}</h2>
        <p>${resource.description}</p>
        <div class="tags">
          <span class="tag">${resource.type}</span>
          <span class="tag">${resource.duration}</span>
          <span class="tag">${resource.level}</span>
        </div>
      </div>
    `).join('');
  }
  
  // Event Listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderResources();
    });
  });
  
  document.getElementById('levelFilter').addEventListener('change', (e) => {
    currentLevel = e.target.value;
    renderResources();
  });
  
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderResources();
  });
  
  // Initial render
  renderResources();