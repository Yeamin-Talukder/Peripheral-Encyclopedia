document.addEventListener('DOMContentLoaded', () => {
    const deviceList = document.getElementById('device-list');
    const contentArea = document.getElementById('content-area');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const tocSidebar = document.getElementById('toc-sidebar');
    const tocList = document.getElementById('toc-list');
    const mainContent = document.querySelector('.main-content');

    const sidebarToggle = document.getElementById('sidebar-toggle');

    // Toggle Sidebar for mobile via hamburger
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Toggle Sidebar for desktop via middle arrow
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded-full');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Initialize Sidebar Links
    function renderSidebar() {
        devicesData.forEach(device => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${device.id}`;
            a.textContent = device.name;
            a.dataset.id = device.id;
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                loadDevice(device.id);
                
                // Update active state
                document.querySelectorAll('.device-list a').forEach(link => link.classList.remove('active'));
                a.classList.add('active');

                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });

            li.appendChild(a);
            deviceList.appendChild(li);
        });
    }

    let tocObserver = null;

    // Generate Table of Contents
    function generateTOC() {
        tocList.innerHTML = '';
        
        // Clean up old observer
        if (tocObserver) {
            tocObserver.disconnect();
            tocObserver = null;
        }

        const sections = contentArea.querySelectorAll('.snap-section');
        
        if (sections.length === 0) {
            tocSidebar.style.display = 'none';
            mainContent.classList.remove('has-toc');
            return;
        }

        tocSidebar.style.display = 'block';
        mainContent.classList.add('has-toc');

        sections.forEach(section => {
            const heading = section.querySelector('h2');
            if (!heading || !heading.id) return; // Skip if no heading or no ID

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.textContent = heading.textContent;
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
            });

            li.classList.add('toc-maintopic');
            li.appendChild(a);
            tocList.appendChild(li);
        });

        // Initialize IntersectionObserver for perfectly synced TOC highlighting
        tocObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const heading = entry.target.querySelector('h2');
                    if (heading && heading.id) {
                        document.querySelectorAll('.toc-list a').forEach(a => a.classList.remove('active'));
                        const activeLink = document.querySelector(`.toc-list a[href="#${heading.id}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                            // Ensure the active TOC link is always visible in the sidebar
                            activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                }
            });
        }, { threshold: 0.5 }); // Trigger when section is 50% visible

        sections.forEach(section => tocObserver.observe(section));
    }

    // Render Device Content
    function loadDevice(id) {
        const device = devicesData.find(d => d.id === id);
        if (!device) return;

        // Save state so refreshing remembers the current tab
        localStorage.setItem('lastViewedDevice', id);

        // Reset animation by clearing content briefly
        contentArea.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text-color);">Loading...</div>';

        function renderRichContent(htmlString) {
            contentArea.innerHTML = htmlString;
            document.documentElement.classList.add('snap-scrolling');
            
            // Initialize 3D model if container exists
            if (id === 'keyboard') {
                setTimeout(init3DKeyboard, 100);
            } else if (id === 'mouse') {
                setTimeout(init3DMouse, 100);
            } else if (id === 'external-ssd') {
                setTimeout(init3DExternalSSD, 100);
            }
            
            // Generate TOC after injecting content
            setTimeout(generateTOC, 50); 
            setTimeout(initScrollAnimations, 150);
        }

        function renderBasicContent() {
            let htmlContent = `
            <div class="device-header">
                <h1 class="device-title">${device.name}</h1>
                <span class="device-type">${device.type}</span>
            </div>
            <div class="device-image-container">
                <img src="${device.image}" alt="${device.name}" class="device-image">
            </div>
            <p class="device-description">${device.description}</p>`;
            
            let detailsHTML = '';
            if (device.details) {
                detailsHTML = '<div class="device-details-grid">';
                device.details.forEach(detail => {
                    detailsHTML += `
                        <div class="detail-card">
                            <h3>${detail.title}</h3>
                            <p>${detail.content}</p>
                        </div>
                    `;
                });
                detailsHTML += '</div>';
            }
            
            htmlContent += detailsHTML;
            contentArea.innerHTML = htmlContent;
            
            // Disable snap scrolling
            document.documentElement.classList.remove('snap-scrolling');
            
            // Hide TOC
            tocSidebar.style.display = 'none';
            mainContent.classList.remove('has-toc');
            
            // Initialize animations for default details
            setTimeout(initScrollAnimations, 150);
        }

        // Lazy Loading Logic
        if (window.deviceHTML && window.deviceHTML[id]) {
            // Already loaded
            renderRichContent(window.deviceHTML[id]);
        } else {
            // Try to fetch the device's specific js file
            const script = document.createElement('script');
            script.src = `data/${id}.js`;
            script.onload = () => {
                if (window.deviceHTML && window.deviceHTML[id]) {
                    renderRichContent(window.deviceHTML[id]);
                } else {
                    renderBasicContent();
                }
            };
            script.onerror = () => {
                // If the file doesn't exist yet, gracefully fallback to the basic layout
                renderBasicContent();
            };
            document.body.appendChild(script);
        }
    }

    // Initialize Scroll Animations
    function initScrollAnimations() {
        const cards = document.querySelectorAll('.modern-card, .detail-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        cards.forEach((card, index) => {
            // Stagger animation delays for cards in the same view
            card.style.transitionDelay = `${(index % 4) * 0.1}s`;
            observer.observe(card);
        });
    }

    // Init
    renderSidebar();

    // Check hash on load to open specific device directly
    const hash = window.location.hash.substring(1);
    const lastDevice = localStorage.getItem('lastViewedDevice');
    
    if (hash) {
        const linkToClick = document.querySelector(`.device-list a[data-id="${hash}"]`);
        if (linkToClick) {
            linkToClick.click();
        }
    } else if (lastDevice) {
        // Load from cache if it exists
        const linkToClick = document.querySelector(`.device-list a[data-id="${lastDevice}"]`);
        if (linkToClick) {
            linkToClick.click();
        } else if (devicesData.length > 0) {
            document.querySelector('.device-list a').click();
        }
    } else {
        // Load first device by default
        if (devicesData.length > 0) {
            document.querySelector('.device-list a').click();
        }
    }

    // 3D Keyboard Rendering Logic
    let currentReqId = null;
    function init3DKeyboard() {
        const container = document.getElementById('canvas-container');
        if (!container || typeof THREE === 'undefined') return;

        if (currentReqId) {
            cancelAnimationFrame(currentReqId);
            currentReqId = null;
        }

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 8, 12);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        
        container.style.position = 'relative'; // Ensure absolute labels position correctly

        // Fullscreen Toggle Button
        const fsBtn = document.createElement('button');
        fsBtn.innerHTML = '⛶ Fullscreen';
        fsBtn.style.position = 'absolute';
        fsBtn.style.bottom = '20px';
        fsBtn.style.right = '20px';
        fsBtn.style.zIndex = '100';
        fsBtn.style.background = 'var(--text-primary)';
        fsBtn.style.color = 'var(--bg-main)';
        fsBtn.style.border = 'none';
        fsBtn.style.padding = '8px 16px';
        fsBtn.style.borderRadius = '20px';
        fsBtn.style.cursor = 'pointer';
        fsBtn.style.fontWeight = 'bold';
        fsBtn.style.fontFamily = 'var(--font-main)';
        fsBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
        fsBtn.style.transition = 'transform 0.2s';
        
        fsBtn.onmouseover = () => fsBtn.style.transform = 'scale(1.05)';
        fsBtn.onmouseout = () => fsBtn.style.transform = 'scale(1)';

        fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable fullscreen: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });

        // Update button text on fullscreen change
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement === container) {
                fsBtn.innerHTML = '✖ Exit Fullscreen';
            } else {
                fsBtn.innerHTML = '⛶ Fullscreen';
            }
        });

        container.appendChild(fsBtn);

        // Cinematic Studio Lighting Setup
        // 1. Soft Ambient Base
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        
        // 2. Main Key Light (White, Top Right Front)
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.6);
        mainLight.position.set(8, 10, 5);
        mainLight.castShadow = true;
        mainLight.shadow.mapSize.width = 2048;
        mainLight.shadow.mapSize.height = 2048;
        mainLight.shadow.camera.near = 0.5;
        mainLight.shadow.camera.far = 25;
        mainLight.shadow.camera.left = -10;
        mainLight.shadow.camera.right = 10;
        mainLight.shadow.camera.top = 10;
        mainLight.shadow.camera.bottom = -10;
        mainLight.shadow.bias = -0.001;
        scene.add(mainLight);

        // 3. Fill Light (White, Left Front)
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
        fillLight.position.set(-8, 4, 6);
        scene.add(fillLight);

        // 4. Rim Light (White, Top Back)
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.4);
        rimLight.position.set(0, 6, -10);
        scene.add(rimLight);
        
        // 5. Under-glow / Bottom bounce light (White, Bottom Front)
        const bottomLight = new THREE.DirectionalLight(0xffffff, 0.2);
        bottomLight.position.set(0, -5, 5);
        scene.add(bottomLight);

        // Premium PBR Materials based on the VGN Image (Glossy)
        const baseMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, roughness: 0.15, metalness: 0.9 }); // Highly reflective aluminum
        const creamMat = new THREE.MeshStandardMaterial({ color: 0xebd8c3, roughness: 0.2, metalness: 0.1 });
        const darkMat = new THREE.MeshStandardMaterial({ color: 0x2c2c2c, roughness: 0.2, metalness: 0.1 });
        const orangeMat = new THREE.MeshStandardMaterial({ color: 0xe66a2e, roughness: 0.2, metalness: 0.1 });

        // Annotation Marking System setup later...

        // Helper function to create beveled shapes
        function createRoundedRectShape(width, depth, radius) {
            const shape = new THREE.Shape();
            const w = width / 2;
            const d = depth / 2;
            shape.moveTo(-w + radius, -d);
            shape.lineTo(w - radius, -d);
            shape.quadraticCurveTo(w, -d, w, -d + radius);
            shape.lineTo(w, d - radius);
            shape.quadraticCurveTo(w, d, w - radius, d);
            shape.lineTo(-w + radius, d);
            shape.quadraticCurveTo(-w, d, -w, d - radius);
            shape.lineTo(-w, -d + radius);
            shape.quadraticCurveTo(-w, -d, -w + radius, -d);
            return shape;
        }

        // --- Layers Setup ---
        const keyboardGroup = new THREE.Group();
        const layerCase = new THREE.Group();
        const layerPCB = new THREE.Group();
        const layerPlate = new THREE.Group();
        const layerSwitches = new THREE.Group();
        const layerKeycaps = new THREE.Group();

        keyboardGroup.add(layerCase);
        keyboardGroup.add(layerPCB);
        keyboardGroup.add(layerPlate);
        keyboardGroup.add(layerSwitches);
        keyboardGroup.add(layerKeycaps);
        scene.add(keyboardGroup);

        // 1. Generate Bottom Case
        const baseWidth = 16 * 0.6 + 0.3; // 16 units wide for 65%
        const baseDepth = 5 * 0.6 + 0.3;  // 5 rows deep
        const baseShape = createRoundedRectShape(baseWidth, baseDepth, 0.15);
        const caseGeo = new THREE.ExtrudeGeometry(baseShape, {
            depth: 0.3,
            bevelEnabled: true,
            bevelSegments: 4,
            steps: 1,
            bevelSize: 0.04,
            bevelThickness: 0.04
        });
        caseGeo.rotateX(-Math.PI / 2);
        const caseMesh = new THREE.Mesh(caseGeo, baseMat);
        caseMesh.position.y = -0.04; 
        caseMesh.castShadow = true;
        caseMesh.receiveShadow = true;
        layerCase.add(caseMesh);

        // 2. Generate PCB Layer
        const pcbGeo = new THREE.BoxGeometry(baseWidth - 0.2, 0.04, baseDepth - 0.2);
        const pcbMat = new THREE.MeshStandardMaterial({ color: 0x0a3b1f, roughness: 0.8, metalness: 0.5 }); // Dark green
        const pcbMesh = new THREE.Mesh(pcbGeo, pcbMat);
        pcbMesh.position.y = 0.3;
        pcbMesh.castShadow = true;
        pcbMesh.receiveShadow = true;
        layerPCB.add(pcbMesh);

        // 3. Generate Plate Layer
        const plateGeo = new THREE.BoxGeometry(baseWidth - 0.15, 0.04, baseDepth - 0.15);
        const plateMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.5, metalness: 0.8 }); // Aluminum
        const plateMesh = new THREE.Mesh(plateGeo, plateMat);
        plateMesh.position.y = 0.42;
        plateMesh.castShadow = true;
        plateMesh.receiveShadow = true;
        layerPlate.add(plateMesh);

        // 4. Switch Geometry Setup
        const switchHousingMat = new THREE.MeshStandardMaterial({ color: 0x111111, transparent: true, opacity: 0.8, roughness: 0.2 });
        const switchStemMat = new THREE.MeshStandardMaterial({ color: 0xc23616, roughness: 0.5 }); // Red switches
        const switchHousingGeo = new THREE.BoxGeometry(0.35, 0.25, 0.35);
        const switchStemGeo = new THREE.BoxGeometry(0.12, 0.15, 0.12);

        // 5. Keycap Geometry Setup
        const keyGeos = {};
        function getKeyGeo(u) {
            if (!keyGeos[u]) {
                const w = (u * 0.6) - 0.08; 
                const d = 0.52; 
                const shape = createRoundedRectShape(w - 0.06, d - 0.06, 0.05); 
                const geo = new THREE.ExtrudeGeometry(shape, {
                    depth: 0.15,
                    bevelEnabled: true,
                    bevelSegments: 3,
                    steps: 1,
                    bevelSize: 0.04,
                    bevelThickness: 0.06
                });
                geo.rotateX(-Math.PI / 2);
                keyGeos[u] = geo;
            }
            return keyGeos[u];
        }

        // Text Texture Generator for Key Labels
        function createTextSprite(text, widthU, matType) {
            if (!text) return null;
            const canvas = document.createElement('canvas');
            canvas.width = 256 * widthU;
            canvas.height = 256;
            const ctx = canvas.getContext('2d');
            
            // Cream and Dark keys use Orange text, Orange keys use Dark text
            ctx.fillStyle = matType === 'orange' ? '#2c2c2c' : '#e66a2e'; 
            let fontSize = text.length > 1 ? 60 : 100;
            if (text.length > 4) fontSize = 50; 
            ctx.font = `bold ${fontSize}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            
            const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.85 });
            const w = (widthU * 0.6) - 0.16; 
            const d = 0.44;
            const geo = new THREE.PlaneGeometry(w, d);
            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = -Math.PI / 2;
            mesh.position.y = 0.211; 
            return mesh;
        }

        // Standard 65% Layout Array
        const layout = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],       
            [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1],   
            [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25, 1],    
            [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.75, 1, 1],       
            [1.25, 1.25, 1.25, 6.25, 1, 1, 1, 1, 1, 1]  
        ];

        // Key Labels
        const labels = [
            ['Esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back', 'Home'],
            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
            ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'PgUp'],
            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', '▲', 'PgDn'],
            ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl', '◄', '▼', '►']
        ];

        // Place Keys and Switches
        const startZ = - (5 * 0.6) / 2 + 0.3; 

        for (let r = 0; r < layout.length; r++) {
            const row = layout[r];
            let currentX = - (15 * 0.6) / 2; 
            
            for (let c = 0; c < row.length; c++) {
                const u = row[c];
                const xPos = currentX + (u * 0.6) / 2;
                const zPos = startZ + (r * 0.6);

                // Add Switch
                const switchGroup = new THREE.Group();
                const housing = new THREE.Mesh(switchHousingGeo, switchHousingMat);
                housing.position.y = 0.56; 
                housing.castShadow = true;
                const stem = new THREE.Mesh(switchStemGeo, switchStemMat);
                stem.position.y = 0.76;
                stem.castShadow = true;
                switchGroup.add(housing);
                switchGroup.add(stem);
                switchGroup.position.set(xPos, 0, zPos);
                layerSwitches.add(switchGroup);

                // Add Keycap
                const geo = getKeyGeo(u);

                // Assign Color Based on 65% Image Layout
                let matType = 'cream';
                if (r === 0) {
                    if (c === 0) matType = 'orange'; // Esc
                    else if (c === 13 || c === 14) matType = 'dark'; // Back, Home
                } else if (r === 1) {
                    if (c === 0 || c === 14) matType = 'dark'; // Tab, Del
                } else if (r === 2) {
                    if (c === 0 || c === 13) matType = 'dark'; // Caps, PgUp
                    else if (c === 12) matType = 'orange'; // Enter
                } else if (r === 3) {
                    if (c === 0 || c === 11 || c === 12 || c === 13) matType = 'dark'; // Shift, Shift, Up, PgDn
                } else if (r === 4) {
                    if (c === 3) matType = 'orange'; // Spacebar
                    else matType = 'dark'; // Bottom modifiers and arrows
                }

                const keyMaterial = matType === 'orange' ? orangeMat : (matType === 'dark' ? darkMat : creamMat);
                const mesh = new THREE.Mesh(geo, keyMaterial);
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                // Add Text Label
                const textMesh = createTextSprite(labels[r][c], u, matType);
                if (textMesh) mesh.add(textMesh);

                mesh.position.set(xPos, 0.81, zPos); 
                layerKeycaps.add(mesh);
                
                currentX += u * 0.6;
            }
        }

        // Dynamic Annotation Marking System (Follows exploded layers)
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
        const dotGeo = new THREE.SphereGeometry(0.06, 8, 8);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const annoTargets = [
            { text: 'PBT Keycaps', layer: layerKeycaps, pos: new THREE.Vector3(-3.8, 1.0, -1.2), offset: new THREE.Vector3(-2, 1.5, -2) },
            { text: 'Mechanical Switches', layer: layerSwitches, pos: new THREE.Vector3(3.0, 0.7, -0.6), offset: new THREE.Vector3(3, 1.0, -1) },
            { text: 'Aluminum Plate', layer: layerPlate, pos: new THREE.Vector3(2.0, 0.45, 1.0), offset: new THREE.Vector3(3, 1.0, 2) },
            { text: 'Circuit Board (PCB)', layer: layerPCB, pos: new THREE.Vector3(-2.0, 0.3, 1.0), offset: new THREE.Vector3(-3, 0.5, 2) },
            { text: 'Bottom Chassis', layer: layerCase, pos: new THREE.Vector3(4.5, 0.1, 1.5), offset: new THREE.Vector3(3, 0.5, 2) }
        ];

        annoTargets.forEach(anno => {
            const obj = new THREE.Object3D();
            obj.position.copy(anno.pos);
            anno.layer.add(obj);
            anno.obj = obj;

            const lineGeo = new THREE.BufferGeometry();
            const positions = new Float32Array(6); 
            lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const line = new THREE.Line(lineGeo, lineMat);
            scene.add(line);
            anno.line = line;

            const dot = new THREE.Mesh(dotGeo, dotMat);
            scene.add(dot);
            anno.dot = dot;

            const el = document.createElement('div');
            el.className = 'annotation-label';
            el.textContent = anno.text;
            el.style.position = 'absolute';
            el.style.color = 'var(--bg-main)';
            el.style.background = 'var(--text-primary)';
            el.style.padding = '4px 12px';
            el.style.borderRadius = '20px';
            el.style.fontSize = '12px';
            el.style.fontWeight = 'bold';
            el.style.pointerEvents = 'none'; 
            el.style.transform = 'translate(-50%, -50%)';
            el.style.opacity = '0'; 
            el.style.transition = 'opacity 0.2s';
            el.style.whiteSpace = 'nowrap';
            el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
            el.style.zIndex = '10';
            container.appendChild(el);
            anno.el = el;
        });

        // Ergonomic typing angle (tilt)
        keyboardGroup.rotation.x = 0.12;
        scene.add(keyboardGroup);

        // Animation Loop Variables
        let explosionProgress = 0;

        // Animation Loop
        function animate() {
            currentReqId = requestAnimationFrame(animate);
            controls.update();

            // Cyclical Explode Animation
            const time = Date.now() * 0.001;
            const cycle = time % 6; // 6 second loop
            if (cycle < 1) {
                explosionProgress = 0; // Assembled pause
            } else if (cycle < 2.5) {
                let t = (cycle - 1) / 1.5;
                explosionProgress = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Ease in out
            } else if (cycle < 4) {
                explosionProgress = 1; // Exploded pause
            } else {
                let t = (cycle - 4) / 2.0;
                let easeDown = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                explosionProgress = 1 - easeDown; // Ease back down
            }

            layerPCB.position.y = explosionProgress * 1.5;
            layerPlate.position.y = explosionProgress * 3.0;
            layerSwitches.position.y = explosionProgress * 4.5;
            layerKeycaps.position.y = explosionProgress * 6.0;

            // Render Frame
            renderer.render(scene, camera);

            // Update Dynamic HTML Annotations
            const widthHalf = container.clientWidth / 2;
            const heightHalf = container.clientHeight / 2;
            const tempVec = new THREE.Vector3();

            annoTargets.forEach(anno => {
                // Get the updated world position of the target obj
                anno.obj.getWorldPosition(tempVec);
                
                // Set the label position
                const labelPos = tempVec.clone().add(anno.offset);
                
                // Update 3D Line Geometry
                const positions = new Float32Array([
                    tempVec.x, tempVec.y, tempVec.z,
                    labelPos.x, labelPos.y, labelPos.z
                ]);
                anno.line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                anno.dot.position.copy(tempVec);

                // Project Label to Screen
                const projected = labelPos.clone().project(camera);

                // Check if coordinate is behind camera
                if (projected.z > 1) {
                    anno.el.style.opacity = '0';
                    return;
                }

                const x = (projected.x * widthHalf) + widthHalf;
                const y = -(projected.y * heightHalf) + heightHalf;

                anno.el.style.left = `${x}px`;
                anno.el.style.top = `${y}px`;
                anno.el.style.opacity = '1';
            });
        }
        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            if (container.clientWidth) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        });
    }
    
    // 3D Mouse Rendering Logic
    function init3DMouse() {
        const container = document.getElementById('canvas-container');
        if (!container || typeof THREE === 'undefined') return;

        if (currentReqId) {
            cancelAnimationFrame(currentReqId);
            currentReqId = null;
        }

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 8, 12);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        
        container.style.position = 'relative';

        // Fullscreen Toggle
        const fsBtn = document.createElement('button');
        fsBtn.innerHTML = '⛶ Fullscreen';
        fsBtn.style.position = 'absolute';
        fsBtn.style.bottom = '20px';
        fsBtn.style.right = '20px';
        fsBtn.style.zIndex = '100';
        fsBtn.style.background = 'var(--text-primary)';
        fsBtn.style.color = 'var(--bg-main)';
        fsBtn.style.border = 'none';
        fsBtn.style.padding = '8px 16px';
        fsBtn.style.borderRadius = '20px';
        fsBtn.style.cursor = 'pointer';
        fsBtn.style.fontWeight = 'bold';
        fsBtn.style.fontFamily = 'var(--font-main)';
        fsBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
        fsBtn.style.transition = 'transform 0.2s';
        
        fsBtn.onmouseover = () => fsBtn.style.transform = 'scale(1.05)';
        fsBtn.onmouseout = () => fsBtn.style.transform = 'scale(1)';

        fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(err => {
                    console.error(`Error: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement === container) {
                fsBtn.innerHTML = '✖ Exit Fullscreen';
            } else {
                fsBtn.innerHTML = '⛶ Fullscreen';
            }
        });
        container.appendChild(fsBtn);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.7);
        mainLight.position.set(8, 10, 5);
        mainLight.castShadow = true;
        scene.add(mainLight);

        const fillLight = new THREE.DirectionalLight(0xd4eaff, 0.4);
        fillLight.position.set(-8, 4, 6);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0x1abc9c, 0.6);
        rimLight.position.set(0, 6, -10);
        scene.add(rimLight);

        const mouseGroup = new THREE.Group();
        scene.add(mouseGroup);

        const initialPositions = new Map();
        const meshCenters = new Map();
        const annotations = [];

        // Loading text
        const loadingDiv = document.createElement('div');
        loadingDiv.textContent = 'Loading 3D Model...';
        loadingDiv.style.position = 'absolute';
        loadingDiv.style.top = '50%';
        loadingDiv.style.left = '50%';
        loadingDiv.style.transform = 'translate(-50%, -50%)';
        loadingDiv.style.color = '#1abc9c';
        loadingDiv.style.fontFamily = 'var(--font-main)';
        loadingDiv.style.fontSize = '24px';
        container.appendChild(loadingDiv);

        const loader = new THREE.GLTFLoader();
        loader.load(window.mouseGLBData, (gltf) => {
            if (container.contains(loadingDiv)) {
                container.removeChild(loadingDiv);
            }
            const model = gltf.scene;
            
            // Function to generate a procedural noise texture for realistic material bump mapping
            function createNoiseTexture() {
                const size = 512;
                const canvas = document.createElement('canvas');
                canvas.width = size;
                canvas.height = size;
                const context = canvas.getContext('2d');
                const imgData = context.createImageData(size, size);
                for (let i = 0; i < imgData.data.length; i += 4) {
                    const noise = Math.random() * 255;
                    imgData.data[i] = noise;
                    imgData.data[i + 1] = noise;
                    imgData.data[i + 2] = noise;
                    imgData.data[i + 3] = 255;
                }
                context.putImageData(imgData, 0, 0);
                const texture = new THREE.CanvasTexture(canvas);
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(4, 4);
                return texture;
            }

            const noiseTexture = createNoiseTexture();

            // Dark and Silver Combination Palette with Textures
            const materialsPalette = [
                { hex: '#1a1a1a', color: 0x1a1a1a, roughness: 0.8, metalness: 0.4, bumpScale: 0.005 }, // Matte Dark Texture
                { hex: '#c0c0c0', color: 0xc0c0c0, roughness: 0.3, metalness: 0.8, bumpScale: 0.002 }, // Brushed Silver
                { hex: '#0a0a0a', color: 0x0a0a0a, roughness: 0.9, metalness: 0.1, bumpScale: 0.01 },  // High Grip Black
                { hex: '#888888', color: 0x888888, roughness: 0.5, metalness: 0.6, bumpScale: 0.003 }  // Gunmetal Gray
            ];
            let colorIndex = 0;

            // Process meshes
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;

                    const matProps = materialsPalette[colorIndex % materialsPalette.length];
                    const hexColor = matProps.hex;

                    // Apply sleek premium textured material
                    if (child.material) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: matProps.color,
                            roughness: matProps.roughness,
                            metalness: matProps.metalness,
                            bumpMap: noiseTexture,
                            bumpScale: matProps.bumpScale
                        });
                    }
                    
                    colorIndex++;
                }
            });

            // Center and scale the whole model
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 4.0 / maxDim; // Normalize size
            model.scale.setScalar(scale);
            
            // Recompute bounding box after scale to center it
            const boxScaled = new THREE.Box3().setFromObject(model);
            const centerScaled = boxScaled.getCenter(new THREE.Vector3());
            model.position.sub(centerScaled);
            
            // Lift it slightly
            model.position.y += 0.5;

            mouseGroup.add(model);
            mouseGroup.updateMatrixWorld(true);

            // Create Annotations (Keyboard style markings) dynamically based on actual mesh geometry
            const lineMat = new THREE.LineBasicMaterial({ color: 0x1abc9c, transparent: true, opacity: 0.5 });
            const dotGeo = new THREE.SphereGeometry(0.04, 8, 8);
            const dotMat = new THREE.MeshBasicMaterial({ color: 0x1abc9c });

            let labelsAdded = 0;

            model.traverse((child) => {
                if (child.isMesh) {
                    const name = child.name.toLowerCase();
                    let targetText = null;
                    let offset = new THREE.Vector3();

                    if (name.includes('left') || name.includes('lmb')) {
                        targetText = 'Left Button';
                        offset.set(-1.5, 1.5, -1);
                    } else if (name.includes('right') || name.includes('rmb')) {
                        targetText = 'Right Button';
                        offset.set(1.5, 1.5, -1);
                    } else if (name.includes('wheel') || name.includes('scroll') || name.includes('middle')) {
                        targetText = 'Scroll Wheel';
                        offset.set(0, 2.5, -2);
                    }

                    if (targetText) {
                        labelsAdded++;
                        // Extract precise center of this specific part
                        child.geometry.computeBoundingBox();
                        const localCenter = new THREE.Vector3();
                        if (child.geometry.boundingBox) {
                            child.geometry.boundingBox.getCenter(localCenter);
                        }
                        
                        const objCenter = new THREE.Object3D();
                        objCenter.position.copy(localCenter);
                        child.add(objCenter);

                        const lineGeo = new THREE.BufferGeometry();
                        const positions = new Float32Array(6); 
                        lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                        const line = new THREE.Line(lineGeo, lineMat);
                        scene.add(line);

                        const dot = new THREE.Mesh(dotGeo, dotMat);
                        scene.add(dot);

                        const el = document.createElement('div');
                        el.className = 'annotation-label';
                        el.innerHTML = `[ ${targetText} ]`;
                        el.style.position = 'absolute';
                        el.style.color = '#ffffff';
                        el.style.background = 'rgba(26, 188, 156, 0.9)'; // Cyan background
                        el.style.padding = '4px 12px';
                        el.style.borderRadius = '20px';
                        el.style.fontSize = '11px';
                        el.style.fontWeight = 'bold';
                        el.style.pointerEvents = 'none'; 
                        el.style.transform = 'translate(-50%, -50%)';
                        el.style.whiteSpace = 'nowrap';
                        el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
                        el.style.zIndex = '10';
                        container.appendChild(el);

                        mouseAnnotations.push({
                            obj: objCenter,
                            offset: offset,
                            line: line,
                            dot: dot,
                            el: el
                        });
                    }
                }
            });

            if (labelsAdded === 0) {
                console.warn("Could not find specific buttons by name. Falling back to manual coordinate anchors.");
                // Fallback coordinates if the model has no labeled parts
                const manualTargets = [
                    { text: 'Left Button', pos: new THREE.Vector3(-0.4, 0.8, -0.6), offset: new THREE.Vector3(-1.5, 1.5, -1) },
                    { text: 'Right Button', pos: new THREE.Vector3(0.4, 0.8, -0.6), offset: new THREE.Vector3(1.5, 1.5, -1) },
                    { text: 'Scroll Wheel', pos: new THREE.Vector3(0, 0.8, -0.8), offset: new THREE.Vector3(0, 2.5, -2) }
                ];
                manualTargets.forEach(target => {
                    const objCenter = new THREE.Object3D();
                    objCenter.position.copy(target.pos);
                    mouseGroup.add(objCenter);

                    const lineGeo = new THREE.BufferGeometry();
                    const positions = new Float32Array(6); 
                    lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                    const line = new THREE.Line(lineGeo, lineMat);
                    scene.add(line);

                    const dot = new THREE.Mesh(dotGeo, dotMat);
                    scene.add(dot);

                    const el = document.createElement('div');
                    el.className = 'annotation-label';
                    el.innerHTML = `[ ${target.text} ]`;
                    el.style.position = 'absolute';
                    el.style.color = '#ffffff';
                    el.style.background = 'rgba(26, 188, 156, 0.9)'; 
                    el.style.padding = '4px 12px';
                    el.style.borderRadius = '20px';
                    el.style.fontSize = '11px';
                    el.style.fontWeight = 'bold';
                    el.style.pointerEvents = 'none'; 
                    el.style.transform = 'translate(-50%, -50%)';
                    el.style.whiteSpace = 'nowrap';
                    el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
                    el.style.zIndex = '10';
                    container.appendChild(el);

                    mouseAnnotations.push({
                        obj: objCenter,
                        offset: target.offset,
                        line: line,
                        dot: dot,
                        el: el
                    });
                });
            }

        }, undefined, (error) => {
            console.error('Error loading model:', error);
            if (container.contains(loadingDiv)) {
                loadingDiv.textContent = 'Failed to load model.';
                loadingDiv.style.color = 'red';
            }
        });

        const mouseAnnotations = [];

        function animate() {
            currentReqId = requestAnimationFrame(animate);
            controls.update();

            // Update Dynamic HTML Annotations
            const tempVec = new THREE.Vector3();
            mouseAnnotations.forEach(anno => {
                anno.obj.getWorldPosition(tempVec);
                const labelPos = tempVec.clone().add(anno.offset);
                
                const positions = new Float32Array([
                    tempVec.x, tempVec.y, tempVec.z,
                    labelPos.x, labelPos.y, labelPos.z
                ]);
                anno.line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                anno.dot.position.copy(tempVec);

                const projected = labelPos.clone().project(camera);
                if (projected.z > 1) {
                    anno.el.style.opacity = '0';
                    return;
                }
                const x = (projected.x * .5 + .5) * container.clientWidth;
                const y = (projected.y * -.5 + .5) * container.clientHeight;

                anno.el.style.left = `${x}px`;
                anno.el.style.top = `${y}px`;
                anno.el.style.opacity = '1';
            });

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            if (container.clientWidth) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        });
    }

    // 3D External SSD Rendering Logic
    // 3D Exploded SATA SSD Rendering Logic
    function init3DExternalSSD() {
        const container = document.getElementById('canvas-container-external-ssd');
        if (!container || typeof THREE === 'undefined') return;

        // Cleanup previous if exists
        container.innerHTML = '';
        if (currentReqId) {
            cancelAnimationFrame(currentReqId);
            currentReqId = null;
        }

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0f1115, 0.02);

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.set(6, 6, 8);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxDistance = 20;
        controls.minDistance = 3;
        controls.target.set(0, 0, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
        mainLight.position.set(5, 10, 5);
        mainLight.castShadow = true;
        mainLight.shadow.mapSize.width = 2048;
        mainLight.shadow.mapSize.height = 2048;
        scene.add(mainLight);

        const fillLight = new THREE.DirectionalLight(0x1abc9c, 0.3);
        fillLight.position.set(-5, -2, -5);
        scene.add(fillLight);

        // Procedural SSD Assembly Group
        const ssdGroup = new THREE.Group();

        // Materials
        const darkMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.6, metalness: 0.2 });
        const silverMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.3, metalness: 0.8 });
        const pcbMat = new THREE.MeshStandardMaterial({ color: 0x3a2c1d, roughness: 0.9, metalness: 0.1 });
        const chipMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8, metalness: 0.1 });
        const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.2, metalness: 1.0 });

        // 1. Bottom Cover (y = -1.5)
        const bottomGeo = new THREE.BoxGeometry(2.6, 0.2, 3.6);
        const bottomCover = new THREE.Mesh(bottomGeo, darkMat);
        bottomCover.position.y = -1.5;
        bottomCover.castShadow = true;
        bottomCover.receiveShadow = true;
        ssdGroup.add(bottomCover);

        // 2. Logic Board / PCB (y = 0)
        const pcbGeo = new THREE.BoxGeometry(2.4, 0.05, 3.4);
        const pcb = new THREE.Mesh(pcbGeo, pcbMat);
        pcb.position.y = 0;
        pcb.castShadow = true;
        pcb.receiveShadow = true;
        ssdGroup.add(pcb);

        // 3. NAND Memory Chips (on PCB)
        const nandGeo = new THREE.BoxGeometry(0.6, 0.1, 0.9);
        const nandPositions = [
            [-0.6, 0.075, 0.8], [0.6, 0.075, 0.8],
            [-0.6, 0.075, -0.2], [0.6, 0.075, -0.2]
        ];
        nandPositions.forEach(pos => {
            const nand = new THREE.Mesh(nandGeo, chipMat);
            nand.position.set(...pos);
            nand.castShadow = true;
            ssdGroup.add(nand);
        });

        // 4. Controller Chip (on PCB)
        const controllerGeo = new THREE.BoxGeometry(0.7, 0.1, 0.7);
        const controller = new THREE.Mesh(controllerGeo, chipMat);
        controller.position.set(0.5, 0.075, -1.0);
        controller.castShadow = true;
        ssdGroup.add(controller);

        // 5. Cache Chip (on PCB)
        const cacheGeo = new THREE.BoxGeometry(0.3, 0.1, 0.4);
        const cacheChip = new THREE.Mesh(cacheGeo, chipMat);
        cacheChip.position.set(-0.5, 0.075, -1.1);
        cacheChip.castShadow = true;
        ssdGroup.add(cacheChip);

        // 6. Interface Connector (SATA Port)
        const portGeo = new THREE.BoxGeometry(1.6, 0.2, 0.2);
        const port = new THREE.Mesh(portGeo, chipMat);
        port.position.set(0, 0.1, -1.65);
        port.castShadow = true;
        ssdGroup.add(port);
        
        // Gold Pins on Port
        const pinGeo = new THREE.BoxGeometry(0.05, 0.02, 0.22);
        for(let i=0; i<15; i++) {
            const pin = new THREE.Mesh(pinGeo, goldMat);
            pin.position.set(-0.6 + (i * 0.08), 0.12, -1.66);
            ssdGroup.add(pin);
        }

        // 7. Top Cover (y = +1.5)
        const topGeo = new THREE.BoxGeometry(2.6, 0.1, 3.6);
        const topCover = new THREE.Mesh(topGeo, silverMat);
        topCover.position.y = 1.5;
        topCover.castShadow = true;
        topCover.receiveShadow = true;
        ssdGroup.add(topCover);

        // Add SSD Logo to Top Cover
        const logoGeo = new THREE.BoxGeometry(1.5, 0.02, 0.6);
        const logoMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 });
        const logo = new THREE.Mesh(logoGeo, logoMat);
        logo.position.set(0, 1.56, 0);
        ssdGroup.add(logo);

        // Tilt the entire exploded assembly for a dramatic angle
        ssdGroup.rotation.x = 0.2;
        ssdGroup.rotation.y = -0.5;
        scene.add(ssdGroup);

        // --- Annotation System ---
        const annotations = [];
        const lineMat = new THREE.LineBasicMaterial({ color: 0x1abc9c, linewidth: 2, transparent: true, opacity: 0.8 });
        const dotGeo = new THREE.SphereGeometry(0.06, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0x1abc9c });

        const annotationTargets = [
            { text: 'Top cover', pos: new THREE.Vector3(1.0, 1.5, 0), offset: new THREE.Vector3(2.5, 1.5, 0) },
            { text: 'Logic board', pos: new THREE.Vector3(-1.2, 0, 0), offset: new THREE.Vector3(-3.0, 0.5, 0) },
            { text: 'NAND Memory chips', pos: new THREE.Vector3(-0.6, 0.1, 0.8), offset: new THREE.Vector3(-3.0, -0.5, 1.5) },
            { text: 'Controller chip', pos: new THREE.Vector3(0.5, 0.1, -1.0), offset: new THREE.Vector3(3.0, -0.5, -1) },
            { text: 'Cache chip', pos: new THREE.Vector3(-0.5, 0.1, -1.1), offset: new THREE.Vector3(3.0, 0.5, -2) },
            { text: 'Interface connector', pos: new THREE.Vector3(0.8, 0.1, -1.65), offset: new THREE.Vector3(3.5, 1.5, -2.5) },
            { text: 'Bottom cover', pos: new THREE.Vector3(-1.2, -1.5, 1.0), offset: new THREE.Vector3(-2.5, -1.5, 2.0) }
        ];

        annotationTargets.forEach(target => {
            // Anchor Object inside the group so it moves/rotates with the SSD
            const anchor = new THREE.Object3D();
            anchor.position.copy(target.pos);
            ssdGroup.add(anchor);

            const lineGeo = new THREE.BufferGeometry();
            const positions = new Float32Array(6); 
            lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const line = new THREE.Line(lineGeo, lineMat);
            scene.add(line);

            const dot = new THREE.Mesh(dotGeo, dotMat);
            scene.add(dot);

            const el = document.createElement('div');
            el.className = 'annotation-label';
            el.innerHTML = target.text;
            el.style.position = 'absolute';
            el.style.color = '#ffffff';
            el.style.background = 'rgba(26, 188, 156, 0.9)'; // Cyan
            el.style.padding = '4px 12px';
            el.style.borderRadius = '20px';
            el.style.fontSize = '12px';
            el.style.fontWeight = 'bold';
            el.style.pointerEvents = 'none'; 
            el.style.transform = 'translate(-50%, -50%)';
            el.style.whiteSpace = 'nowrap';
            el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
            el.style.zIndex = '10';
            container.appendChild(el);

            annotations.push({
                anchor: anchor,
                offset: target.offset,
                line: line,
                dot: dot,
                el: el
            });
        });

        // Add a floor grid
        const grid = new THREE.GridHelper(15, 15, 0x1abc9c, 0x222222);
        grid.material.transparent = true;
        grid.material.opacity = 0.15;
        grid.position.y = -3;
        scene.add(grid);

        // Floating Animations
        function animate() {
            currentReqId = requestAnimationFrame(animate);
            controls.update();

            // Gentle floating effect
            ssdGroup.position.y = Math.sin(Date.now() * 0.002) * 0.1;
            ssdGroup.rotation.y = -0.5 + Math.sin(Date.now() * 0.0005) * 0.1;

            // Update Annotations
            const tempVec = new THREE.Vector3();
            annotations.forEach(anno => {
                anno.anchor.getWorldPosition(tempVec);
                // Apply world offset
                const labelPos = tempVec.clone().add(anno.offset);
                
                const positions = new Float32Array([
                    tempVec.x, tempVec.y, tempVec.z,
                    labelPos.x, labelPos.y, labelPos.z
                ]);
                anno.line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                anno.dot.position.copy(tempVec);

                const projected = labelPos.clone().project(camera);
                if (projected.z > 1) {
                    anno.el.style.opacity = '0';
                    return;
                }
                const x = (projected.x * .5 + .5) * container.clientWidth;
                const y = (projected.y * -.5 + .5) * container.clientHeight;

                anno.el.style.left = `${x}px`;
                anno.el.style.top = `${y}px`;
                anno.el.style.opacity = '1';
            });

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            if (container.clientWidth) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        });
    }
});
