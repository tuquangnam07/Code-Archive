// Dữ liệu projects - Chỉ cần sửa biến này để thêm project mới
const projects = [
    {
        name: "Tool Up Locket Gold",
        description: "Up Locket Gold bằng Username, file code python",
        type: "Tool",
        language: "python",
        created: "2026-03-05",
        status: "Working",
        github: "https://github.com/username/qr-tool",
        download: "https://example.com/download/qr-tool.zip",
        note: "Tool nhỏ viết trong 1 buổi tối, sử dụng thư viện qrcode.js",
        screenshot: ""
    },
    {
        name: "Portfolio Website",
        description: "Website portfolio cá nhân với hiệu ứng particle và smooth scroll",
        type: "Website",
        language: "HTML/CSS/JS",
        created: "2026-02-15",
        status: "Working",
        github: "https://github.com/username/portfolio",
        download: "https://example.com/download/portfolio.zip",
        note: "Sử dụng vanilla JS, không framework, có dark mode",
        screenshot: "https://via.placeholder.com/300x200/1e293b/38bdf8?text=Portfolio"
    },
    {
        name: "URL Shortener",
        description: "Dịch vụ rút gọn URL đơn giản",
        type: "Website",
        language: "PHP",
        created: "2026-01-05",
        status: "Broken",
        github: "https://github.com/username/url-shortener",
        download: "https://example.com/download/url-shortener.zip",
        note: "Lỗi database connection, cần fix",
        screenshot: "https://via.placeholder.com/300x200/1e293b/ef4444?text=URL+Shortener"
    }
];

// Biến global
let currentPage = 'dashboard';
let currentProject = null;
let filteredProjects = [...projects];
let activeFilters = {
    search: '',
    status: [],
    language: [],
    year: ''
};

// DOM elements
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    loadPage('dashboard');
    updateStats();
    updateTotalProjectsMini();
    populateFilters();
});

// Khởi tạo event listeners
function initEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.dataset.page;
            loadPage(page);
            
            // Update active state
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });

    // Mobile menu toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        activeFilters.search = e.target.value.toLowerCase();
        applyFilters();
    });

    // Filter toggle
    document.getElementById('filterToggleBtn').addEventListener('click', () => {
        document.getElementById('filterPanel').classList.toggle('show');
    });

    // Apply filters button
    document.getElementById('applyFilters').addEventListener('click', () => {
        updateActiveFilters();
        applyFilters();
        document.getElementById('filterPanel').classList.remove('show');
    });

    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', () => {
        clearFilters();
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.sidebar') && !e.target.closest('.mobile-menu-btn')) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        }
    });
}

// Populate filter options
function populateFilters() {
    // Languages
    const languages = [...new Set(projects.map(p => p.language))].sort();
    const langContainer = document.getElementById('languageFilters');
    langContainer.innerHTML = languages.map(lang => `
        <label class="filter-checkbox">
            <input type="checkbox" value="${lang}" class="filter-language"> ${lang}
        </label>
    `).join('');

    // Years
    const years = [...new Set(projects.map(p => new Date(p.created).getFullYear()))].sort((a, b) => b - a);
    const yearSelect = document.getElementById('yearFilter');
    yearSelect.innerHTML = '<option value="">All Years</option>' + 
        years.map(year => `<option value="${year}">${year}</option>`).join('');
}

// Update active filters from form
function updateActiveFilters() {
    // Status
    activeFilters.status = [...document.querySelectorAll('.filter-status:checked')].map(cb => cb.value);
    
    // Language
    activeFilters.language = [...document.querySelectorAll('.filter-language:checked')].map(cb => cb.value);
    
    // Year
    activeFilters.year = document.getElementById('yearFilter').value;
}

// Apply all filters
function applyFilters() {
    filteredProjects = projects.filter(project => {
        // Search filter
        if (activeFilters.search && !project.name.toLowerCase().includes(activeFilters.search) && 
            !project.description.toLowerCase().includes(activeFilters.search) &&
            !project.type.toLowerCase().includes(activeFilters.search)) {
            return false;
        }

        // Status filter
        if (activeFilters.status.length > 0 && !activeFilters.status.includes(project.status)) {
            return false;
        }

        // Language filter
        if (activeFilters.language.length > 0 && !activeFilters.language.includes(project.language)) {
            return false;
        }

        // Year filter
        if (activeFilters.year && new Date(project.created).getFullYear().toString() !== activeFilters.year) {
            return false;
        }

        return true;
    });

    // Update filter badge
    updateFilterBadge();
    
    // Reload current page
    if (currentPage === 'projects' || currentPage === 'dashboard') {
        loadPage(currentPage);
    }
}

// Clear all filters
function clearFilters() {
    // Reset checkboxes
    document.querySelectorAll('.filter-status, .filter-language').forEach(cb => cb.checked = false);
    document.getElementById('yearFilter').value = '';
    document.getElementById('searchInput').value = '';
    
    // Reset active filters
    activeFilters = {
        search: '',
        status: [],
        language: [],
        year: ''
    };
    
    filteredProjects = [...projects];
    updateFilterBadge();
    loadPage(currentPage);
}

// Update filter badge
function updateFilterBadge() {
    const badgeContainer = document.getElementById('activeFilterBadge');
    const activeCount = activeFilters.status.length + activeFilters.language.length + (activeFilters.year ? 1 : 0) + (activeFilters.search ? 1 : 0);
    
    if (activeCount > 0) {
        badgeContainer.innerHTML = `<span class="filter-badge-item">${activeCount} filters active</span>`;
    } else {
        badgeContainer.innerHTML = '';
    }
}

// Load page content
function loadPage(page) {
    currentPage = page;
    const contentArea = document.getElementById('contentArea');
    
    if (page === 'dashboard') {
        contentArea.innerHTML = renderDashboard();
    } else if (page === 'projects') {
        contentArea.innerHTML = renderProjectsList();
    } else if (page === 'project-detail' && currentProject) {
        contentArea.innerHTML = renderProjectDetail(currentProject);
    }
}

// Render dashboard
function renderDashboard() {
    const stats = calculateStats();
    const latestProjects = [...filteredProjects].sort((a, b) => new Date(b.created) - new Date(a.created)).slice(0, 6);
    
    return `
        <div class="dashboard">
            <h2 style="margin-bottom: 24px;">Dashboard Overview</h2>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Total Projects</h3>
                    <div class="stat-number">${stats.total}</div>
                    <div class="stat-trend">All time projects</div>
                </div>
                <div class="stat-card">
                    <h3>Working</h3>
                    <div class="stat-number">${stats.working}</div>
                    <div class="stat-trend">Active projects</div>
                </div>
                <div class="stat-card">
                    <h3>Broken</h3>
                    <div class="stat-number">${stats.broken}</div>
                    <div class="stat-trend">Need attention</div>
                </div>
                <div class="stat-card">
                    <h3>In Progress</h3>
                    <div class="stat-number">${stats.inProgress}</div>
                    <div class="stat-trend">Developing</div>
                </div>
            </div>

            <h2 style="margin: 32px 0 24px;">Latest Projects</h2>
            <div class="projects-grid">
                ${latestProjects.map(project => renderProjectCard(project)).join('')}
                ${latestProjects.length === 0 ? '<div class="empty-state">No projects found</div>' : ''}
            </div>
        </div>
    `;
}

// Calculate statistics
function calculateStats() {
    return {
        total: filteredProjects.length,
        working: filteredProjects.filter(p => p.status === 'Working').length,
        broken: filteredProjects.filter(p => p.status === 'Broken').length,
        inProgress: filteredProjects.filter(p => p.status === 'In Progress').length,
        deprecated: filteredProjects.filter(p => p.status === 'Deprecated').length
    };
}

// Update total projects in sidebar
function updateTotalProjectsMini() {
    document.getElementById('totalProjectsMini').textContent = projects.length;
}

// Update stats display
function updateStats() {
    const stats = calculateStats();
    // Có thể thêm các element để hiển thị stats nếu cần
}

// Render projects list
function renderProjectsList() {
    return `
        <div class="projects-list">
            <h2 style="margin-bottom: 24px;">All Projects (${filteredProjects.length})</h2>
            <div class="projects-grid">
                ${filteredProjects.map(project => renderProjectCard(project)).join('')}
                ${filteredProjects.length === 0 ? `
                    <div class="empty-state">
                        <i class="fas fa-folder-open"></i>
                        <h3>No projects found</h3>
                        <p>Try adjusting your filters</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Render project card
function renderProjectCard(project) {
    const statusClass = {
        'Working': 'status-working',
        'Broken': 'status-broken',
        'In Progress': 'status-in-progress',
        'Deprecated': 'status-deprecated'
    }[project.status] || '';

    return `
        <div class="project-card">
            <img src="${project.screenshot}" alt="${project.name}" class="project-preview">
            <div class="project-info">
                <div class="project-header">
                    <h3 class="project-name">${project.name}</h3>
                    <span class="status-badge ${statusClass}">${project.status}</span>
                </div>
                <p class="project-description">${project.description.substring(0, 100)}${project.description.length > 100 ? '...' : ''}</p>
                <div class="project-meta">
                    <span class="meta-item"><i class="fas fa-code"></i> ${project.language}</span>
                    <span class="meta-item"><i class="fas fa-calendar"></i> ${formatDate(project.created)}</span>
                    <span class="meta-item"><i class="fas fa-tag"></i> ${project.type}</span>
                </div>
                <div class="project-footer">
                    <button class="btn-detail" onclick="showProjectDetail('${project.name}')">View Detail</button>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="link-icon" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
                        ${project.download ? `<a href="${project.download}" target="_blank" class="link-icon" title="Download"><i class="fas fa-download"></i></a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show project detail
function showProjectDetail(projectName) {
    currentProject = projects.find(p => p.name === projectName);
    if (currentProject) {
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        loadPage('project-detail');
    }
}

// Render project detail
function renderProjectDetail(project) {
    const statusClass = {
        'Working': 'status-working',
        'Broken': 'status-broken',
        'In Progress': 'status-in-progress',
        'Deprecated': 'status-deprecated'
    }[project.status] || '';

    return `
        <div class="project-detail">
            <button class="btn-back" onclick="loadPage('projects')">
                <i class="fas fa-arrow-left"></i> Back to Projects
            </button>
            
            <img src="${project.screenshot}" alt="${project.name}" class="detail-preview">
            
            <div class="detail-content">
                <div class="detail-header">
                    <h1 class="detail-title">${project.name}</h1>
                    <span class="status-badge ${statusClass}">${project.status}</span>
                </div>

                <div class="detail-actions">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="detail-action-btn btn-github">
                            <i class="fab fa-github"></i> View Source Code
                        </a>
                    ` : ''}
                    ${project.download ? `
                        <a href="${project.download}" target="_blank" class="detail-action-btn btn-download">
                            <i class="fas fa-download"></i> Download Project
                        </a>
                    ` : ''}
                </div>

                <div class="detail-section">
                    <h2>Description</h2>
                    <p>${project.description}</p>
                </div>

                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-item-label">Type</div>
                        <div class="detail-item-value">${project.type}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">Language</div>
                        <div class="detail-item-value">${project.language}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">Created</div>
                        <div class="detail-item-value">${formatDate(project.created)}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">Status</div>
                        <div class="detail-item-value">${project.status}</div>
                    </div>
                </div>

                ${project.note ? `
                    <div class="detail-note">
                        <h3>Developer Note</h3>
                        <p>${project.note}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Helper function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Make functions global for onclick handlers
window.showProjectDetail = showProjectDetail;
window.loadPage = loadPage;