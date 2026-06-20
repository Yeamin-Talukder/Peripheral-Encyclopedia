window.deviceHTML = window.deviceHTML || {};
window.deviceHTML['keyboard'] = `
            <div class="rich-content">
                <section class="snap-section" style="justify-content: center; align-items: center; text-align: center;">
                    <h2 id="overview" style="display:none;">Overview</h2>
                    <div class="device-header" style="border-bottom: none; padding-bottom: 0;">
                        <h1 class="device-title" style="font-size: 4rem; margin-bottom: 1rem;">Keyboard</h1>
                        <span class="device-type" style="font-size: 1.2rem;">Input Device</span>
                    </div>
                    <div id="canvas-container" style="width: 100%; height: 50vh; cursor: grab; margin-top: 2rem;"></div>
                </section>

                <section class="snap-section">
                    <h2 id="tutorial-title">Keyboard Tutorial: From Basics to Advanced Concepts</h2>
                    <p>Welcome to this comprehensive guide on Computer Keyboards. Whether you are a beginner learning how text appears on your screen or an advanced user exploring custom mechanical switches, polling rates, and actuation points, this tutorial covers everything you need to know.</p>
                </section>

                <section class="snap-section">
                    <h2 id="intro">Introduction</h2>
                    <h3 id="what-is">What is a keyboard?</h3>
                    <p>A keyboard is the primary input device used to enter alphanumeric text, symbols, and commands into a computer or similar electronic device. Modeled after the traditional typewriter, it uses an arrangement of buttons (keys) that act as mechanical levers or electronic switches.</p>
                    
                    <h3 id="why-important">Why is it important?</h3>
                    <p>While mice and touchscreens are great for navigation, the keyboard remains the most efficient, precise, and universal tool for data entry, programming, and executing complex software commands via shortcuts.</p>
                    
                    <h3 id="where-used">Where is it used?</h3>
                    <p>Keyboards are universally used across all computing environments: on desks connected to desktop PCs, built into laptops, virtually rendered on smartphones and tablets, and attached to industrial control panels and medical equipment.</p>
                </section>
                
                <section class="snap-section">
                    <h2 id="what-is-detailed">What is a Keyboard?</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>Simple Definition</h4>
                            <p>A keyboard is a <strong>board of buttons</strong> featuring letters, numbers, and symbols that you press to <strong>type information</strong> into your computer.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Technical Definition</h4>
                            <p>A keyboard is a peripheral input device utilizing a <strong>matrix circuit</strong> of electrical switches. When a key is depressed, it completes a specific circuit. A built-in microcontroller scans this matrix, detects the closed circuit, determines the corresponding <strong>scancode</strong>, and transmits that data to the host system via USB or wireless protocols.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="why-use">Why Do We Use Keyboards?</h2>
                    <p>Keyboards are indispensable for several core computing functions:</p>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>📝 Text Entry</h4>
                            <p>The <strong>fastest method</strong> for writing documents, emails, and messages.</p>
                        </div>
                        <div class="modern-card">
                            <h4>💻 Programming & Coding</h4>
                            <p>Essential for typing <strong>syntax</strong>, <strong>commands</strong>, and <strong>scripts</strong> in software development environments.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🎮 Gaming</h4>
                            <p>Provides dozens of easily accessible, <strong>simultaneous inputs</strong> for character movement (WASD), inventory management, and macro execution.</p>
                        </div>
                        <div class="modern-card">
                            <h4>⚡ Navigation & Shortcuts</h4>
                            <p>Allows power users to <strong>navigate operating systems rapidly</strong> using combinations like Ctrl+C (Copy), Alt+Tab (Switch Windows), or Ctrl+Shift+Esc (Task Manager).</p>
                        </div>
                        <div class="modern-card">
                            <h4>🖥️ Terminal Control</h4>
                            <p>The <strong>only way</strong> to interface with text-based operating systems (like Linux server terminals) or command prompts.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="how-works">How Does a Keyboard Work?</h2>
                    <p>The process of translating a physical button press into a digital letter happens instantly:</p>
                    <div class="timeline">
                        <div class="timeline-item">
                            <h4>1. User presses a key</h4>
                            <p>Physical force pushes the <strong>keycap and switch downward</strong>.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>2. Circuit closes</h4>
                            <p>The switch bridges a gap in the <strong>printed circuit board's (PCB)</strong> underlying matrix, completing an electrical connection.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>3. Controller detects change</h4>
                            <p>The keyboard's <strong>microcontroller</strong> continuously scans the matrix (thousands of times a second) and detects that a specific row and column have connected.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>4. Scancode generation</h4>
                            <p>The controller looks up that specific row/column intersection in its firmware map and generates a numerical <strong>scancode</strong> (e.g., the code for the letter 'A').</p>
                        </div>
                        <div class="timeline-item">
                            <h4>5. Data transmission</h4>
                            <p>The scancode is sent to the computer via a <strong>USB cable</strong> or <strong>wireless receiver</strong>.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>6. OS Interpretation</h4>
                            <p>The computer's <strong>operating system</strong> receives the scancode, checks the current software context and language layout, and renders the corresponding character on the screen.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="components">Main Components of a Keyboard</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>1. Keycaps</h4>
                            <p><strong>What it is:</strong> The plastic shells that your fingers actually touch.<br>
                            <strong>Why it is needed:</strong> To provide an ergonomic typing surface and display the printed legends.<br>
                            <strong>How it works:</strong> Usually made of ABS or PBT plastic, they mount directly onto the switch stems.</p>
                        </div>
                        <div class="modern-card">
                            <h4>2. Switches</h4>
                            <p><strong>What it is:</strong> The individual mechanisms beneath each keycap.<br>
                            <strong>Why it is needed:</strong> To provide physical resistance and complete the electrical circuit when pressed.<br>
                            <strong>How it works:</strong> Depending on the type, it uses a rubber dome, a metal spring and leaf, or light beams to register a keystroke.</p>
                        </div>
                        <div class="modern-card">
                            <h4>3. Switch Plate</h4>
                            <p><strong>What it is:</strong> A metal or plastic sheet that holds the switches in place.<br>
                            <strong>Why it is needed:</strong> Adds structural rigidity to the keyboard and reduces flex when typing heavily.<br>
                            <strong>How it works:</strong> Switches snap into the plate before being soldered or plugged into the PCB below.</p>
                        </div>
                        <div class="modern-card">
                            <h4>4. Printed Circuit Board (PCB)</h4>
                            <p><strong>What it is:</strong> The electronic board spanning the width of the keyboard.<br>
                            <strong>Why it is needed:</strong> It houses the electrical matrix, the microcontroller, and RGB lighting LEDs.<br>
                            <strong>How it works:</strong> It routes the electrical signals from every single switch to the main processing chip.</p>
                        </div>
                        <div class="modern-card">
                            <h4>5. Microcontroller (MCU)</h4>
                            <p><strong>What it is:</strong> The processor unit of the keyboard.<br>
                            <strong>Why it is needed:</strong> To manage the matrix scanning, process anti-ghosting, handle RGB lighting, and communicate with the PC.<br>
                            <strong>How it works:</strong> It continuously loops a scanning protocol, translating physical circuits into USB data packets.</p>
                        </div>
                        <div class="modern-card">
                            <h4>6. Case / Chassis</h4>
                            <p><strong>What it is:</strong> The outer shell enclosing the plate and PCB.<br>
                            <strong>Why it is needed:</strong> Protects the internals and provides an ergonomic typing angle.<br>
                            <strong>How it works:</strong> Usually made of plastic, aluminum, or acrylic, often featuring fold-out feet to adjust the angle.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="types">Types of Keyboards</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>Membrane Keyboard</h4>
                            <p><strong>Definition:</strong> A keyboard where all keys share a single, continuous rubber membrane layer over a circuit board.</p>
                            <p><strong>Working Principle:</strong> Pressing a key squishes a rubber dome, pushing a conductive pad onto the circuit underneath.</p>
                            <p><strong>Pros/Cons:</strong> Cheap, quiet, but mushy feel.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Mechanical Keyboard</h4>
                            <p><strong>Definition:</strong> A keyboard that uses an individual, independent mechanical switch for every single key.</p>
                            <p><strong>Working Principle:</strong> Uses plastic stems and metal coil springs to push metal contacts together.</p>
                            <p><strong>Pros/Cons:</strong> Highly durable, customizable feel, but expensive and loud.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Scissor-Switch Keyboard</h4>
                            <p><strong>Definition:</strong> A low-profile keyboard that uses rubber domes paired with plastic, scissor-like stabilizing mechanisms.</p>
                            <p><strong>Working Principle:</strong> The scissor mechanism ensures the keycap goes down straight, compressing a small rubber dome.</p>
                            <p><strong>Pros/Cons:</strong> Very thin, short travel, but difficult to clean.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Ergonomic / Split Keyboard</h4>
                            <p><strong>Definition:</strong> A keyboard designed specifically to minimize muscle strain, often split into two separate halves or contoured.</p>
                            <p><strong>Working Principle:</strong> Alters the typing angle to keep the user's wrists straight rather than bending them inward.</p>
                            <p><strong>Pros/Cons:</strong> Prevents RSI, but steep learning curve.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="form-factors">Form Factors (Sizes) Explained</h2>
                    <p>Keyboards are also categorized by their physical size and number of keys:</p>
                    
                    <div class="modern-card" style="margin-bottom: 2rem;">
                        <div class="stat-container">
                            <div class="stat-label"><span>Full-Size (100%)</span><span>~104 keys</span></div>
                            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: 100%;"></div></div>
                            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Includes a number pad, function row, and arrow keys.</p>
                        </div>
                        
                        <div class="stat-container">
                            <div class="stat-label"><span>Tenkeyless (TKL / 80%)</span><span>~87 keys</span></div>
                            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: 80%;"></div></div>
                            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Drops the number pad for a smaller desk footprint, allowing the mouse to be closer to your hands.</p>
                        </div>
                        
                        <div class="stat-container">
                            <div class="stat-label"><span>Compact (60% / 65%)</span><span>~61-68 keys</span></div>
                            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: 60%;"></div></div>
                            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Drops the number pad, function row, and often arrow keys. Relies heavily on "Fn" layer combinations. Extremely popular in gaming.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="switches-tech">Keyboard Switch Technologies</h2>
                    <p>If you are buying a mechanical keyboard, the switch type dictates everything about how it feels and sounds.</p>
                    
                    <h3 id="switches-mechanical">1. Mechanical Switches (The "Colors")</h3>
                    <div class="modern-grid">
                        <div class="modern-card switch-card switch-red">
                            <h4>Linear (Red / Black)</h4>
                            <p>Smooth from top to bottom without any bump or click.</p>
                            <p><strong>Best for:</strong> Fast-paced gaming where rapid, repeated presses are needed.</p>
                        </div>
                        <div class="modern-card switch-card switch-brown">
                            <h4>Tactile (Brown / Clear)</h4>
                            <p>Features a small physical "bump" you can feel halfway down the press, letting you know the key registered without needing to bottom out.</p>
                            <p><strong>Best for:</strong> Typing, programming, and general use.</p>
                        </div>
                        <div class="modern-card switch-card switch-blue">
                            <h4>Clicky (Blue / Green)</h4>
                            <p>Features a tactile bump accompanied by a loud, audible "click" sound.</p>
                            <p><strong>Best for:</strong> Nostalgic typists who want heavy auditory feedback.</p>
                        </div>
                    </div>
                    
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>2. Optical Switches</h4>
                            <p>Instead of metal contacts touching, the switch stem blocks a tiny infrared light beam. When you press the key, the stem lowers, allowing the light to hit a sensor, registering the keypress.</p>
                            <p><strong>Advantages:</strong> Zero physical wear on contacts, immune to "debounce" delay, extremely fast response time (0.2ms).</p>
                        </div>
                        <div class="modern-card">
                            <h4>3. Hall Effect (Magnetic) Switches</h4>
                            <p>Uses a magnet inside the switch stem and a Hall effect sensor on the PCB to measure the exact distance of the keypress based on magnetic field strength.</p>
                            <p><strong>Advantages:</strong> Analog control, adjustable actuation points, and "Rapid Trigger" (key resets instantly).</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="comparison">Comparison of Keyboard Technologies</h2>
                    
                    <h3 id="comp-mem-mech">Membrane vs Mechanical</h3>
                    <table>
                        <tr>
                            <th>Feature</th>
                            <th>Membrane</th>
                            <th>Mechanical</th>
                        </tr>
                        <tr>
                            <td>Typing Feel</td>
                            <td>Soft, mushy, requires bottoming out</td>
                            <td>Crisp, responsive, registers mid-press</td>
                        </tr>
                        <tr>
                            <td>Durability</td>
                            <td>~5-10 Million keystrokes</td>
                            <td>50-100 Million keystrokes</td>
                        </tr>
                        <tr>
                            <td>Cost</td>
                            <td>Low ($10 - $30)</td>
                            <td>High ($50 - $200+)</td>
                        </tr>
                    </table>
                    
                    <h3 id="comp-switches">Switch Types Comparison</h3>
                    <table>
                        <tr>
                            <th>Feature</th>
                            <th>Linear (Red)</th>
                            <th>Tactile (Brown)</th>
                            <th>Clicky (Blue)</th>
                        </tr>
                        <tr>
                            <td>Key Feel</td>
                            <td>Smooth all the way down</td>
                            <td>Small bump halfway</td>
                            <td>Bump with a sharp click</td>
                        </tr>
                        <tr>
                            <td>Sound Profile</td>
                            <td>Quiet ("thock" or "clack")</td>
                            <td>Moderate</td>
                            <td>Very Loud</td>
                        </tr>
                        <tr>
                            <td>Best Use Case</td>
                            <td>Competitive Gaming</td>
                            <td>Programming / Office Work</td>
                            <td>Touch Typing / Home Offices</td>
                        </tr>
                    </table>
                </section>
                
                <section class="snap-section">
                    <h2 id="specs">Keyboard Specifications Explained</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>Actuation Point</h4>
                            <p>The exact distance a key must be pressed down before it registers. Measured in millimeters (e.g., 1.2mm for gaming, 2.0mm standard).</p>
                        </div>
                        <div class="modern-card">
                            <h4>Actuation Force</h4>
                            <p>The amount of weight/force required to press the key down. Measured in centinewtons (cN) or grams-force (gf). 45g is light; 60g+ is heavy.</p>
                        </div>
                        <div class="modern-card">
                            <h4>N-Key Rollover (NKRO)</h4>
                            <p>The ability of the keyboard to correctly register every single key even if they are all pressed simultaneously.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Polling Rate</h4>
                            <p>How often the keyboard reports to the PC. 1000Hz (1ms) is standard for gaming keyboards.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Keycap Material</h4>
                            <p>ABS is cheaper and develops a greasy shine. PBT is thicker, more expensive, sounds deeper, and retains texture.</p>
                        </div>
                        <div class="modern-card">
                            <h4>Hot-Swappable</h4>
                            <p>Allows you to pull out a switch and push a new one in without needing to use a soldering iron.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="applications">Real-Life Applications</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>🧑‍💻 Programming & Software</h4>
                            <p>Developers rely heavily on Tactile mechanical keyboards to reduce typos while writing code.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🎮 Competitive Gaming (eSports)</h4>
                            <p>Professional gamers use 60% Hall Effect or Optical keyboards to gain microsecond advantages.</p>
                        </div>
                        <div class="modern-card">
                            <h4>📈 Data Entry & Accounting</h4>
                            <p>Professionals utilize Full-Size keyboards to input numbers rapidly using the dedicated numpad.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🎙️ Content Creation / Streaming</h4>
                            <p>Streamers often use Linear switches or install sound-dampening foam so clicks do not get picked up by microphones.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="best-for">Best Keyboard for Different Users</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>🎓 Students on a Budget</h4>
                            <p>Standard Scissor-Switch or Membrane. Quiet for dorms, cheap, spill-resistant.</p>
                        </div>
                        <div class="modern-card">
                            <h4>⌨️ Programmers / Typists</h4>
                            <p>Tenkeyless (TKL) Mechanical with Tactile (Brown) switches. Reduces shoulder strain, excellent feedback.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🏆 Competitive Gamers</h4>
                            <p>60% Hall Effect (Magnetic) Keyboard (like Wooting 60HE) for Rapid Trigger functionality.</p>
                        </div>
                        <div class="modern-card">
                            <h4>💼 Office Workers</h4>
                            <p>Wireless Ergonomic Keyboard (like Logitech ERGO K860) with a split keyframe to prevent repetitive strain injuries.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="buying-guide">Keyboard Buying Guide</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>What to check before purchasing?</h4>
                            <ul>
                                <li><strong>Layout & Size:</strong> Do you actually need a number pad? If not, buy a TKL or 75% board to save space.</li>
                                <li><strong>Switch Type:</strong> If you work in an office, do not buy Clicky (Blue) switches, or your coworkers will hate you.</li>
                                <li><strong>Connectivity:</strong> Wireless/Bluetooth for a clean desk, Wired/USB-C for zero latency.</li>
                            </ul>
                        </div>
                        <div class="modern-card">
                            <h4>Common mistakes buyers make</h4>
                            <ul>
                                <li>Buying a massive full-size gaming keyboard and having no room for the mouse.</li>
                                <li>Believing that "Mechanical" automatically makes you type or game better.</li>
                                <li>Buying cheap ABS keycaps that shine and wear out within six months.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="brands">Popular Keyboard Brands</h2>
                    <div class="modern-grid">
                        <div class="modern-card"><h4>Logitech</h4><p>Dominates office (MX Keys) and high-end wireless gaming (G Pro X).</p></div>
                        <div class="modern-card"><h4>Keychron</h4><p>King of affordable, hot-swappable mechanicals for Mac/Windows.</p></div>
                        <div class="modern-card"><h4>Razer & Corsair</h4><p>Massive gaming brands known for RGB and fast polling.</p></div>
                        <div class="modern-card"><h4>Wooting</h4><p>Pioneers of analog/Hall Effect switches for esports.</p></div>
                        <div class="modern-card"><h4>Ducky</h4><p>Legendary Taiwanese brand known for exceptional build quality.</p></div>
                        <div class="modern-card"><h4>Cherry</h4><p>The German company that invented the modern mechanical switch.</p></div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="future">Future of Keyboard Technology</h2>
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h4>🧲 Hall Effect Dominance</h4>
                            <p>Magnetic switches rapidly replacing traditional metal-contacts for unparalleled speed and customizable actuation.</p>
                        </div>
                        <div class="modern-card">
                            <h4>💻 Low-Profile Mechanicals</h4>
                            <p>Bridging the gap between laptop keyboards and desktop mechanicals, using ultra-thin switches.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🤖 Smart AI Integration</h4>
                            <p>Future keyboards may feature dedicated AI keys and onboard processors that auto-correct hardware-level mistypes.</p>
                        </div>
                        <div class="modern-card">
                            <h4>🎵 Advanced Acoustic Engineering</h4>
                            <p>The consumer market is shifting focus from "gamer aesthetics" to "enthusiast acoustics," using foam and gasket mounts.</p>
                        </div>
                    </div>
                </section>
                
                <section class="snap-section">
                    <h2 id="conclusion">Conclusion</h2>
                    <p>The keyboard is the most direct physical connection between human thought and digital execution. While a $10 membrane keyboard and a $200 custom mechanical keyboard both type the same letters, the underlying technology dramatically alters the speed, comfort, and reliability of the experience. By understanding form factors, switch mechanisms, and ergonomic principles, you can upgrade from simply typing on a computer to commanding it with precision and comfort.</p>
                </section>
            </div>
        `;
