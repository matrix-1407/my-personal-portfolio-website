/**
 * ARCHIVE_PROJECTS.js
 * Logic for the Matrix Terminal Overlay
 */

const archivedProjects = [
    {
        title: "ZenTalk",
        desc: "A real-time chat platform enabling seamless communication between users, built with React, Vite, Node.js, Express, and Socket.IO.",
        link: "https://github.com/matrix-1407/Project-ZenTalk"
    },
    {
        title: "SkyCast",
        desc: "Full-stack weather application with real-time data visualization and search history.",
        link: "https://github.com/matrix-1407/Project-SkyCast"
    },
    {
        title: "ASCII Art",
        desc: "Python application and OpenCV implementation to convert and play videos as ASCII art in terminal.",
        link: "https://github.com/matrix-1407/ASCII-art"
    },
    {
        title: "NotePulse",
        desc: "A collaborative JavaScript-based utility for multi-user synchronization, rapid digital memo management, and focused note-taking.",
        link: "https://github.com/matrix-1407/Project-NotePulse"
    },
    {
        title: "TimeTrack",
        desc: "A Productivity tracking Chrome Extension focused on task management and time analysis and time spent on different websites.",
        link: "https://github.com/matrix-1407/Project-timetrack"
    },
    {
        title: "Ascend AI",
        desc: "Generative AI platform for career roadmapping and automated interview prep.",
        link: "https://github.com/matrix-1407/Ascend-AI---career-launch-app"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('terminal-overlay');
    const terminalContent = document.getElementById('terminal-content');
    const openBtn = document.getElementById('open-archives'); // The "Project Archives" button
    const closeBtn = document.getElementById('close-terminal');

    if (!openBtn) return;

    // Replace the default alert/onclick
    openBtn.onclick = (e) => {
        e.preventDefault();
        openTerminal();
    };

    closeBtn.addEventListener('click', closeTerminal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeTerminal();
    });

    async function openTerminal() {
        overlay.style.display = 'flex';
        terminalContent.innerHTML = '';

        // Initializing sequence
        await typeLine("INITIALIZING SECURE LINK...", 30);
        await typeLine("BYPASSING ENCRYPTION...", 40);
        await typeLine("ARCHIVES ACCESSED. FETCHING LOGS...", 20);

        // Load projects one by one
        for (const project of archivedProjects) {
            await sleep(400);
            renderProject(project);
        }
    }

    function closeTerminal() {
        overlay.style.display = 'none';
    }

    function renderProject(project) {
        const div = document.createElement('div');
        div.className = 'terminal-project';
        div.innerHTML = `
            <h4>> ${project.title}</h4>
            <p>${project.desc}</p>
            <div class="links">
                <a href="${project.link}" target="_blank">[ SOURCE_CODE ]</a>
            </div>
        `;
        terminalContent.appendChild(div);

        // Trigger fade-in
        setTimeout(() => {
            div.style.opacity = '1';
            div.style.transition = 'opacity 0.6s ease';
        }, 10);

        // Auto scroll to bottom
        const body = document.getElementById('terminal-body');
        body.scrollTop = body.scrollHeight;
    }

    function typeLine(text, speed) {
        return new Promise(resolve => {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = `<span class="prompt">></span> <span class="text"></span>`;
            terminalContent.appendChild(line);

            const textSpan = line.querySelector('.text');
            let i = 0;

            const interval = setInterval(() => {
                textSpan.textContent += text[i];
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, speed);
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
