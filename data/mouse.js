window.deviceHTML = window.deviceHTML || {};
window.deviceHTML['mouse'] = `
            <div class="rich-content">
                <section class="snap-section" style="justify-content: center; align-items: center; text-align: center;">
                    <h2 id="overview" style="display:none;">Overview</h2>
                    <div class="device-header" style="border-bottom: none; padding-bottom: 0;">
                        <h1 class="device-title" style="font-size: 4rem; margin-bottom: 1rem;">Mouse</h1>
                        <span class="device-type" style="font-size: 1.2rem;">Input Device</span>
                    </div>
                    <div id="canvas-container" style="width: 100%; height: 50vh; cursor: grab; margin-top: 2rem;"></div>
                </section>

                <section class="snap-section">
                    <h2 id="tutorial-title">Mouse Tutorial: From Basics to Advanced Concepts</h2>
                    <p>Welcome to this comprehensive guide on Computer Mice. Whether you are a beginner learning how to navigate an operating system or an advanced user exploring sensor technologies and polling rates for competitive gaming, this tutorial covers everything you need to know.</p>
                </section>

                <section class="snap-section">
                    <h2 id="intro">Introduction</h2>
                    <h3 id="what-is">What is a mouse?</h3>
                    <p>A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is translated into the movement of a pointer (or cursor) on a display, allowing for smooth, intuitive control of the graphical user interface (GUI) of a computer.</p>

                    <h3 id="why-important">Why is it important?</h3>
                    <p>Before the mouse, users had to interact with computers entirely through text-based keyboard commands (like MS-DOS). The mouse revolutionized computing by making it accessible, visual, and point-and-click, paving the way for modern operating systems like Windows and macOS.</p>

                    <h3 id="where-used">Where is it used?</h3>
                    <p>Mice are used universally across desktop computers and as external peripherals for laptops. They are essential tools in offices, home setups, graphic design studios, and professional esports arenas.</p>
                </section>
                
                <section class="snap-section">
                    <h2 id="what-is-detailed">What is a Mouse?</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>Simple Definition</h4>
                            <p>A mouse is a small device you push across your desk to move the little arrow on your computer screen. You click its buttons to select items, open programs, or interact with games.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Technical Definition</h4>
                            <p>A mouse is a Human Interface Device (HID) that utilizes optoelectronic sensors to capture microscopic surface images at high frame rates. A built-in digital signal processor (DSP) analyzes these images to calculate the delta (change) in X and Y coordinates. This positional data is then transmitted to the host computer's operating system via a wired or wireless protocol to manipulate a graphical cursor.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="why-use">Why Do We Use Mice?</h2>
                    <p>While touchscreens and touchpads exist, the traditional mouse remains dominant for several reasons:</p>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>🎯 Precision and Speed</h4>
                            <p>A mouse offers <strong>pixel-perfect accuracy</strong> that fingers on a touchscreen or touchpad cannot match.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🖌️ Graphic Design and CAD</h4>
                            <p>Essential for drawing, masking, and manipulating <strong>3D models</strong> in software like Photoshop or AutoCAD.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🎮 Gaming</h4>
                            <p>Provides fast, reactive, and highly accurate camera control and <strong>aiming</strong> in 3D environments.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🤲 Ergonomics</h4>
                            <p>Designed to support the natural resting position of the human hand during <strong>long computing sessions</strong>.</p>
                        </div>
                        <div class="modern-card">
                            <h4>⚡ Multitasking</h4>
                            <p>Allows for rapid <strong>drag-and-drop</strong> actions, text selection, and window management.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="how-works">How Does a Mouse Work?</h2>
                    <p>The operation of a modern optical mouse happens in fractions of a millisecond:</p>
                    <div class="timeline">
                        <div class="timeline-item">
                            <h4>1. Light Illumination</h4>
                            <p>A light source (usually a red LED or an infrared laser) <strong>shines down</strong> onto the desk surface.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>2. Image Capture</h4>
                            <p>A tiny camera (CMOS sensor) takes <strong>thousands of microscopic pictures</strong> of the illuminated surface every second.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>3. Pattern Recognition</h4>
                            <p>The Digital Signal Processor (DSP) compares the current picture to the previous one to see how the <strong>microscopic textures</strong> on your desk have shifted.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>4. Coordinate Calculation</h4>
                            <p>Based on the shift, the mouse calculates the <strong>exact distance and direction</strong> of the movement (Delta X and Delta Y).</p>
                        </div>
                        <div class="timeline-item">
                            <h4>5. Data Transmission</h4>
                            <p>The microcontroller sends this directional data to the computer via a <strong>USB cable</strong> or <strong>wireless receiver</strong>.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>6. Cursor Movement</h4>
                            <p>The <strong>operating system</strong> translates the data and moves the cursor on the screen accordingly.</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="components">Main Components of a Mouse</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>1. Shell (Casing)</h4>
                            <p><strong>What it is:</strong> The plastic or magnesium alloy body of the mouse.<br>
                            <strong>Why it is needed:</strong> To protect the internal components and provide an ergonomic shape for the human hand.<br>
                            <strong>How it works:</strong> Designed to support different grip styles (palm, claw, or fingertip).</p>
                        </div>
                        <div class="modern-card">
                            <h4>2. Primary Buttons & Switches</h4>
                            <p><strong>What it is:</strong> The Left and Right click buttons, sitting on top of mechanical or optical microswitches.<br>
                            <strong>Why it is needed:</strong> To execute primary commands like selecting, opening, or dragging.<br>
                            <strong>How it works:</strong> Pressing the button pushes down a metal leaf or breaks a beam of light inside the switch, sending an electrical "click" signal to the controller.</p>
                        </div>
                        <div class="modern-card">
                            <h4>3. Scroll Wheel (Encoder)</h4>
                            <p><strong>What it is:</strong> A rotating wheel located between the primary buttons.<br>
                            <strong>Why it is needed:</strong> To quickly scroll through long documents, web pages, or weapon inventories in games.<br>
                            <strong>How it works:</strong> Turning the wheel spins an internal mechanical encoder or an optical wheel, sending rotational step data to the PC.</p>
                        </div>
                        <div class="modern-card">
                            <h4>4. Sensor (CMOS & DSP)</h4>
                            <p><strong>What it is:</strong> The camera and processor located on the bottom of the mouse.<br>
                            <strong>Why it is needed:</strong> To track physical movement.<br>
                            <strong>How it works:</strong> It captures and analyzes surface textures continuously to calculate directional vectors.</p>
                        </div>
                        <div class="modern-card">
                            <h4>5. Controller Circuit (Microcontroller)</h4>
                            <p><strong>What it is:</strong> The internal motherboard of the mouse.<br>
                            <strong>Why it is needed:</strong> To gather data from the sensor, switches, and wheel, package it, and send it to the PC.<br>
                            <strong>How it works:</strong> Processes all inputs and manages RGB lighting, memory profiles, and connectivity protocols.</p>
                        </div>
                        <div class="modern-card">
                            <h4>6. Skates / Feet (PTFE)</h4>
                            <p><strong>What it is:</strong> Smooth pads on the bottom of the mouse, usually made of Teflon (PTFE).<br>
                            <strong>Why it is needed:</strong> To reduce friction.<br>
                            <strong>How it works:</strong> Provides a smooth, consistent glide across mousepads or desks.</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="types">Types of Mice</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>Optical Mouse</h4>
                            <p><strong>Definition:</strong> The standard modern mouse that uses an LED light to track movement.</p>
                            <p><strong>Working Principle:</strong> Shines an LED (usually red) at an angle to highlight surface irregularities, which are captured by a camera.</p>
                            <p><strong>Advantages:</strong> Highly accurate, immune to acceleration issues, affordable.</p>
                            <p><strong>Disadvantages:</strong> Struggles to track on highly reflective surfaces or clear glass.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Laser Mouse</h4>
                            <p><strong>Definition:</strong> A mouse that uses an infrared laser instead of an LED for illumination.</p>
                            <p><strong>Working Principle:</strong> The laser penetrates the surface slightly, capturing a deeper, higher-contrast image of the material's structure.</p>
                            <p><strong>Advantages:</strong> Works on almost any surface, including glass and high-gloss tables.</p>
                            <p><strong>Disadvantages:</strong> Can be too sensitive, picking up useless microscopic dust, which causes slight cursor jitter or artificial acceleration.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Wireless Mouse (2.4GHz / Bluetooth)</h4>
                            <p><strong>Definition:</strong> A mouse that transmits data without a physical cable.</p>
                            <p><strong>Working Principle:</strong> Uses either a dedicated 2.4GHz USB dongle for high-speed transmission or standard Bluetooth.</p>
                            <p><strong>Advantages:</strong> Zero cable drag, portability, clean desk aesthetic.</p>
                            <p><strong>Disadvantages:</strong> Requires charging/batteries; Bluetooth can have noticeable latency.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Trackball Mouse</h4>
                            <p><strong>Definition:</strong> An inverted mouse where the device remains stationary, and the user rolls an exposed ball with their thumb or fingers.</p>
                            <p><strong>Working Principle:</strong> Sensors inside the housing track the rotation of the ball rather than the movement of the mouse itself.</p>
                            <p><strong>Advantages:</strong> Requires zero desk space to move; excellent for preventing wrist strain and RSI.</p>
                            <p><strong>Disadvantages:</strong> Steep learning curve, generally terrible for fast-paced gaming.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Ergonomic / Vertical Mouse</h4>
                            <p><strong>Definition:</strong> A mouse turned on its side (usually a 57-degree angle) to mimic a natural handshake position.</p>
                            <p><strong>Working Principle:</strong> Functions exactly like a standard optical mouse but completely alters the human-device interface angle.</p>
                            <p><strong>Advantages:</strong> Prevents forearm pronation, drastically reducing pressure on the carpal tunnel and median nerve.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Gaming Mouse</h4>
                            <p><strong>Definition:</strong> A high-performance mouse designed for speed, precision, and customization.</p>
                            <p><strong>Working Principle:</strong> Uses top-tier optical sensors and lightweight materials.</p>
                            <p><strong>Advantages:</strong> Ultra-low latency, perfect tracking accuracy, customizable buttons and weight.</p>
                            <p><strong>Disadvantages:</strong> Can be expensive; aesthetic designs may not suit professional office environments.</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="sensor-tech">Mouse Sensor Technologies</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>Optical (LED) Sensors</h4>
                            <p><strong>How it works:</strong> Bounces LED light off the surface pad.</p>
                            <p><strong>Advantages:</strong> Provides 1:1 raw tracking without artificial acceleration. This is why competitive gamers exclusively use optical sensors.</p>
                            <p><strong>Disadvantages:</strong> Fails on glass or mirrored surfaces.</p>
                            <p><strong>Accuracy:</strong> Extremely High.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Laser Sensors</h4>
                            <p><strong>How it works:</strong> Uses a laser beam to illuminate deeper into the surface material.</p>
                            <p><strong>Advantages:</strong> Can track on transparent glass or shiny magazines.</p>
                            <p><strong>Disadvantages:</strong> The deep tracking often results in 5-6% variance in hardware acceleration.</p>
                            <p><strong>Accuracy:</strong> Moderate (due to acceleration inconsistency).</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="comparison">Comparison of Mouse Technologies</h2>
                    
                    <h3 id="comp-opt-las">Optical vs Laser Mouse</h3>
                    <table>
                        <tr><th>Feature</th><th>Optical (LED)</th><th>Laser</th></tr>
                        <tr><td>Surface Compatibility</td><td>Mousepads, wood, matte</td><td>Almost anything, including glass</td></tr>
                        <tr><td>Tracking Accuracy</td><td>1:1 Raw tracking (Perfect)</td><td>Suffers from hardware acceleration</td></tr>
                        <tr><td>Jitter</td><td>Very low</td><td>Higher on rough surfaces</td></tr>
                        <tr><td>Cost</td><td>Low to High</td><td>Moderate</td></tr>
                        <tr><td>Best Use Case</td><td>Gaming, Design, General Use</td><td>Travel, working on glass tables</td></tr>
                    </table>

                    <h3 id="comp-std-ergo">Standard vs Ergonomic (Vertical) Mouse</h3>
                    <table>
                        <tr><th>Feature</th><th>Standard Mouse</th><th>Ergonomic (Vertical) Mouse</th></tr>
                        <tr><td>Forearm Posture</td><td>Pronated (twisted flat)</td><td>Neutral (handshake position)</td></tr>
                        <tr><td>Wrist Strain</td><td>High over long hours</td><td>Very Low</td></tr>
                        <tr><td>Precision / Speed</td><td>Maximum (utilizes wrist flicks)</td><td>Moderate (relies on arm movement)</td></tr>
                        <tr><td>Learning Curve</td><td>None (universal standard)</td><td>High (takes weeks to adapt)</td></tr>
                        <tr><td>Best Use Case</td><td>Gaming, general computing</td><td>8-hour office shifts, RSI prevention</td></tr>
                    </table>
                    
                    <h3 id="comp-wir-wl">Wired vs Wireless Mouse</h3>
                    <table>
                        <tr><th>Feature</th><th>Wired</th><th>Wireless (2.4GHz)</th></tr>
                        <tr><td>Latency</td><td>~1ms</td><td>~1ms (indistinguishable)</td></tr>
                        <tr><td>Cable Drag</td><td>Yes (can be annoying)</td><td>None (total freedom)</td></tr>
                        <tr><td>Power</td><td>Drawn from PC (infinite)</td><td>Requires charging / batteries</td></tr>
                        <tr><td>Weight</td><td>Generally lighter</td><td>Slightly heavier (due to battery)</td></tr>
                        <tr><td>Best Use Case</td><td>Budget gaming, stationary desks</td><td>Clutter-free desks, low-sensitivity gamers</td></tr>
                    </table>
                </section>

                <section class="snap-section">
                    <h2 id="specs-explained">Mouse Specifications Explained</h2>
                    <p>When buying a high-end or gaming mouse, these specs are heavily advertised:</p>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>DPI / CPI (Dots/Counts Per Inch)</h4>
                            <p>Measures how sensitive the mouse is. A DPI of 800 means moving the mouse 1 inch moves the cursor 800 pixels. High DPI (e.g., 20,000) is largely a marketing gimmick; most professionals use 400, 800, or 1600 DPI.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Polling Rate (Hz)</h4>
                            <p>How often the mouse reports its position to the PC. 125Hz is standard office speed (reports every 8ms). 1000Hz is standard gaming speed (reports every 1ms). Modern mice can hit 4000Hz or 8000Hz.</p>
                        </div>
                        <div class="modern-card">
                            <h4>IPS (Inches Per Second)</h4>
                            <p>The maximum physical speed you can move the mouse before the sensor spins out and loses track. A good sensor has 400+ IPS, meaning human hands cannot physically move fast enough to break it.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Acceleration (G)</h4>
                            <p>The amount of gravitational force the mouse can handle during rapid directional changes without losing tracking. 40G or 50G is standard for high-end mice.</p>
                        </div>
                        <div class="modern-card">
                            <h4>LOD (Lift-Off Distance)</h4>
                            <p>The height at which the mouse stops tracking when you lift it off the pad. Gamers prefer a very low LOD (under 1.2mm) so the cursor doesn't move when repositioning the mouse.</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="applications">Real-Life Applications</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>🎮 eSports & Competitive Gaming</h4>
                            <p>Players use ultra-lightweight optical mice to execute millimeter-perfect headshots in games like Valorant or Counter-Strike.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🎬 Graphic Design & Video Editing</h4>
                            <p>Editors utilize mice with multiple programmable side buttons to map shortcuts (like cut, paste, or timeline scrubbing) to their thumbs.</p>
                        </div>
                        <div class="modern-card">
                            <h4>📐 CAD & 3D Modeling</h4>
                            <p>Engineers use mice with high-quality middle-click wheels to pan and orbit around complex 3D blueprints.</p>
                        </div>
                        <div class="modern-card">
                            <h4>💼 General Office Work</h4>
                            <p>Navigating spreadsheets, formatting documents, and managing emails quickly.</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="best-for">Best Mouse for Different Users</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>🎓 Students / Budget Users</h4>
                            <p><strong>A Standard Wired Optical Mouse.</strong> It is cheap, plug-and-play, and requires no batteries or software.</p>
                        </div>
                        <div class="modern-card">
                            <h4>💼 Office Workers</h4>
                            <p><strong>An Ergonomic Vertical Mouse</strong> (like the Logitech MX Vertical) or a high-end productivity mouse (like the MX Master 3) featuring an electromagnetic scroll wheel for massive spreadsheets.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🎯 FPS Gamers</h4>
                            <p><strong>An Ultra-lightweight Wireless Gaming Mouse</strong> (under 60 grams, like the Logitech G Pro X Superlight or Razer DeathAdder V3 Pro). Low weight allows for faster reaction times and less fatigue.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🐉 MMO/MOBA Gamers</h4>
                            <p><strong>A "Telephone" Gaming Mouse</strong> (like the Razer Naga). These feature 12 programmable thumb buttons to map dozens of spells and abilities.</p>
                        </div>
                        <div class="modern-card">
                            <h4>✈️ Traveling Professionals</h4>
                            <p><strong>A Compact Mobile Laser Mouse.</strong> It fits easily into a laptop bag and can track on hotel room glass desks or airport lounge armrests.</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="buying-guide">Mouse Buying Guide</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>What should buyers check before purchasing?</h4>
                            <ul>
                                <li><strong>Shape and Size:</strong> A mouse must fit your hand. Match your hand measurements to the mouse dimensions.</li>
                                <li><strong>Grip Style:</strong> Palm, Claw, or Fingertip? Different mice are shaped for different grips.</li>
                                <li><strong>Weight:</strong> Heavy mice (100g+) offer stability. Light mice (<70g) offer speed.</li>
                            </ul>
                        </div>
                        <div class="modern-card">
                            <h4>Common mistakes buyers make</h4>
                            <ul>
                                <li>Buying a mouse purely based on high DPI numbers.</li>
                                <li>Choosing a heavy, bulky mouse for fast-paced competitive gaming.</li>
                                <li>Ignoring the quality of the mousepad (a high-end sensor performs poorly on a dirty or reflective desk).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="brands">Popular Mouse Brands</h2>
                    <div class="modern-grid">
                        <div class="modern-card"><h4>Logitech</h4><p>The industry giant. Their "G" series dominates competitive gaming, while their "MX" series is the gold standard for office productivity.</p></div>
                        <div class="modern-card"><h4>Razer</h4><p>A premium gaming lifestyle brand known for cutting-edge optical switches and popular shapes like the DeathAdder and Viper.</p></div>
                        <div class="modern-card"><h4>Zowie (BenQ)</h4><p>The purist eSports brand. No RGB, no required software, just flawless shapes and reliable sensors built for tournament play.</p></div>
                        <div class="modern-card"><h4>SteelSeries</h4><p>Known for durable, high-quality gaming mice and excellent software integration.</p></div>
                        <div class="modern-card"><h4>Corsair</h4><p>Popular for MMO mice and robust, heavier gaming peripherals.</p></div>
                        <div class="modern-card"><h4>Glorious</h4><p>Popularized the "honeycomb" lightweight mouse trend with their Model O series.</p></div>
                        <div class="modern-card"><h4>Apple</h4><p>Known for the Magic Mouse, which features a multi-touch surface instead of physical buttons or a scroll wheel (though highly polarizing for its ergonomics).</p></div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="future">Future of Mouse Technology</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>⚡ Optical Microswitches</h4>
                            <p>Traditional mechanical switches eventually develop "double-clicking" issues. The future is optical switches, which use infrared light beams to register clicks with zero latency.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🚀 8000Hz Polling Rates</h4>
                            <p>Pushing wireless data transmission to its absolute limits to match the refresh rates of 360Hz and 540Hz gaming monitors.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🪶 Ultra-Lightweight Materials</h4>
                            <p>Moving away from plastic to carbon composite and magnesium alloys to create mice that weigh under 40 grams without structural flex.</p>
                        </div>
                        <div class="modern-card">
                            <h4>⛸️ Glass Skates</h4>
                            <p>Replacing standard PTFE feet with tempered aluminosilicate glass for a frictionless, permanent glide that never wears down.</p>
                        </div>
                    </div>
                </section>

                <section class="snap-section">
                    <h2 id="conclusion">Conclusion</h2>
                    <p>The computer mouse is a brilliant piece of engineering that turns microscopic photographs of your desk into seamless digital movement. Understanding the differences between optical and laser sensors, the importance of polling rates, and the ergonomics of shape allows you to choose a device that acts as a natural extension of your hand. Whether you are aiming for peak performance in an eSports tournament or looking to protect your wrist during a long workday, the right mouse makes all the difference in your computing experience.</p>
                </section>
            </div>
        `;
