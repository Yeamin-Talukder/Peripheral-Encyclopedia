const devicesData = [
    {
        id: 'keyboard',
        name: 'Keyboard',
        type: 'Input Device',
        image: 'images/keyboard.png',
        description: 'A keyboard is the primary input device used to enter alphanumeric text, symbols, and commands into a computer or similar electronic device. Modeled after the traditional typewriter, it uses an arrangement of buttons (keys) that act as mechanical levers or electronic switches.',
        
    },
    {
        id: 'mouse',
        name: 'Mouse',
        type: 'Input Device',
        image: 'images/mouse.png',
        description: 'A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of a pointer on a display, which allows a smooth control of the graphical user interface.',
        
    },
    {
        id: 'printer',
        name: 'Printer',
        type: 'Output Device',
        image: 'images/printer.png',
        description: 'A printer is an external hardware output device that takes the electronic data stored on a computer or other device and generates a hard copy of it.',
        details: [
            { title: 'Technology', content: 'Common types include Inkjet (spraying ink dots) and Laser (using toner and static electricity) for different quality needs.' },
            { title: 'Functions', content: 'Many modern printers are All-in-One (AIO) devices that also scan, copy, and fax.' },
            { title: 'Connectivity', content: 'Supports USB, Ethernet, and Wireless (Wi-Fi) connections for network and cloud printing.' }
        ]
    },
    {
        id: 'external-ssd',
        name: 'External SSD',
        type: 'Storage Device',
        image: 'images/external_ssd.png',
        description: 'An external Solid State Drive (SSD) is a portable storage device that uses flash memory to store data, providing much faster data transfer speeds and better durability than traditional mechanical hard drives.',
        details: [
            { title: 'Speed', content: 'Offers blazing fast read/write speeds, often exceeding 1000MB/s, utilizing NVMe technology over USB-C.' },
            { title: 'Durability', content: 'No moving parts means they are highly resistant to physical shock and drops compared to HDDs.' },
            { title: 'Portability', content: 'Compact and lightweight, making them perfect for on-the-go professionals and creators.' }
        ]
    },
    {
        id: 'joystick',
        name: 'Joystick',
        type: 'Input Device',
        image: 'images/joystick.png',
        description: 'A joystick is an input device consisting of a stick that pivots on a base and reports its angle or direction to the device it is controlling. It is primarily used for playing video games, especially flight simulators.',
        details: [
            { title: 'Control Axes', content: 'Typically features X and Y axes for directional control, and often a Z-axis (twist) for rudder control in flight games.' },
            { title: 'Feedback', content: 'Advanced models include Force Feedback (haptics) to simulate physical resistance and vibration.' },
            { title: 'HOTAS Systems', content: 'Often paired with a separate throttle controller (Hands On Throttle-And-Stick) for ultimate realism.' }
        ]
    },
    {
        id: 'monitors',
        name: 'Monitors',
        type: 'Output Device',
        image: 'images/monitors.png',
        description: 'A computer monitor is an electronic visual display for computers. A monitor usually comprises the display device, circuitry, casing, and power supply.',
        details: [
            { title: 'Panel Types', content: 'IPS for color accuracy, TN for speed, VA for contrast, and OLED for perfect blacks and infinite contrast ratio.' },
            { title: 'Resolution', content: 'Ranging from 1080p (Full HD) to 4K (UHD) and beyond, providing crisp and detailed imagery.' },
            { title: 'Refresh Rate', content: 'Measured in Hz; higher rates (144Hz, 240Hz) provide smoother motion, crucial for competitive gaming.' }
        ]
    },
    {
        id: 'network-adapter',
        name: 'Network Adapter',
        type: 'Networking Device',
        image: 'images/network_adapter.png',
        description: 'A network adapter is the component of a computer\'s internal hardware that is used for communicating over a network with another computer. It allows the computer to connect with another computer, server, or any networking device over an LAN connection.',
        details: [
            { title: 'Interface', content: 'Can be internal PCIe cards or external USB dongles for adding wireless or high-speed wired capabilities.' },
            { title: 'Standards', content: 'Supports various IEEE 802.11 standards (Wi-Fi 5, Wi-Fi 6, Wi-Fi 6E) for wireless networking.' },
            { title: 'Bandwidth', content: 'Wired adapters can support Gigabit (1Gbps) or multi-Gigabit (2.5G, 5G, 10G) speeds.' }
        ]
    },
    {
        id: 'projectors',
        name: 'Projectors',
        type: 'Output Device',
        image: 'images/projectors.png',
        description: 'A projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. They create an image by shining a light through a small transparent lens.',
        details: [
            { title: 'Light Source', content: 'Traditional lamps are being replaced by LED and Laser light sources for better longevity and instant on/off.' },
            { title: 'Throw Ratio', content: 'Short-throw and Ultra-short-throw projectors can display huge images from just inches away from the wall.' },
            { title: 'Luminance', content: 'Brightness is measured in ANSI Lumens; higher lumens are required for well-lit rooms.' }
        ]
    },
    {
        id: 'speakers',
        name: 'Speakers',
        type: 'Output Device',
        image: 'images/speakers.png',
        description: 'Computer speakers, or multimedia speakers, are speakers external to a computer, that disable the lower fidelity built-in speaker. They often have a low-power internal amplifier.',
        details: [
            { title: 'Configurations', content: 'Available in 2.0 (stereo), 2.1 (stereo with subwoofer), or 5.1/7.1 surround sound setups.' },
            { title: 'Connectivity', content: 'Connects via 3.5mm analog jack, USB for digital audio, or wirelessly via Bluetooth.' },
            { title: 'Drivers', content: 'Contains different drivers like tweeters for high frequencies and woofers for mid/low frequencies.' }
        ]
    },
    {
        id: 'usb-flash-drive',
        name: 'USB Flash Drive',
        type: 'Storage Device',
        image: 'images/usb_flash_drive.png',
        description: 'A USB flash drive is a data storage device that includes flash memory with an integrated USB interface. It is typically removable, rewritable, and much smaller than an optical disc.',
        details: [
            { title: 'Capacity', content: 'Storage sizes range from a few Gigabytes (GB) to several Terabytes (TB) in a thumb-sized form factor.' },
            { title: 'Interfaces', content: 'Utilizes USB Type-A or Type-C connectors, supporting speeds from USB 2.0 up to USB 3.2 Gen 2x2.' },
            { title: 'Security', content: 'Many enterprise drives offer hardware-based encryption and fingerprint sensors for data protection.' }
        ]
    },
    {
        id: 'webcam',
        name: 'Webcam',
        type: 'Input Device',
        image: 'images/webcam.png',
        description: 'A webcam is a video camera that feeds or streams an image or video in real time to or through a computer to a computer network, such as the Internet. Webcams are typically small cameras that sit on a desk, attach to a user\'s monitor, or are built into the hardware.',
        details: [
            { title: 'Resolution & FPS', content: 'Standard webcams offer 1080p at 30fps, while premium models offer 4K resolution or 60fps for smooth streaming.' },
            { title: 'Autofocus', content: 'Advanced models feature fast autofocus and facial tracking to keep the subject sharp.' },
            { title: 'Microphones', content: 'Often include built-in noise-canceling stereo microphones for clear voice capture during calls.' }
        ]
    },
    {
        id: 'sound-system',
        name: 'Sound System',
        type: 'Output Device',
        image: 'images/sound_system.png',
        description: 'A comprehensive audio setup intended to deliver high-fidelity sound reproduction. For computers, this usually implies a multi-speaker setup designed to immerse the user in movies, games, or high-quality music.',
        details: [
            { title: 'Surround Sound', content: 'Provides spatial audio through multiple channels (e.g., 5.1, 7.1) placing the user in the center of the action.' },
            { title: 'DAC / Amplifiers', content: 'High-end systems often utilize external Digital-to-Analog Converters (DACs) and receivers for pure audio processing.' },
            { title: 'Subwoofers', content: 'Dedicated large speakers designed specifically to reproduce the lowest audio frequencies (bass).' }
        ]
    }
];
