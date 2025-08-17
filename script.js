//data.js
const products = [
    //---------Laptops---------
    {
        id:1,
        name: "ASUS Vivobook 15 (2025)",
        price: "₹37,761",
        image: "../img/products/pn11.png",
        smallimgs: [
            "../img/products/pn11.png",
            "../img/products/pn12.png",
            "../img/products/pn13.png",
            "../img/products/pn14.png"
        ],
        variants: [
            "16 GB RAM / 512 GB SSD",
            "16 GB RAM / 1 TB SSD",
            "32 GB RAM / 512 GB SSD",
            "32 GB RAM / 1 TB SSD"
        ],
        desc: "The Vivobook 15, a multipurpose laptop with a 12th-generation Intel U-Series CPU, DDR4 memory, and PCIe 3.0 SSD storage, delivers remarkable performance for daily work. Its three-sided NanoEdge slim-bezel display offers breathtaking images, and its Dirac-designed audio system produces rich, immersive sound. The laptop has ASUS Antimicrobial Guard Plus for improved cleanliness, a comfortable ASUS ErgoSense keyboard, and rapid charging. In addition, it has a lay-flat hinge for effortless collaboration, a webcam privacy barrier, and several I/O ports for connection. The Vivobook 15 is dependable and fashionable, meeting US MIL-STD-810H military-grade durability requirements with its ASUS AI Noise-Canceling Technology and 3DNR for clearer video conversations."
    },
    {
        id:2,
        name: "ASUS Vivobook S14 (2025)",
        price: "₹58,990",
        image: "../img/products/pn61.png",
        smallimgs: [
            "../img/products/pn61.png",
            "../img/products/pn62.png",
            "../img/products/pn63.png",
            "../img/products/pn64.png"
        ],
        variants: [
            "Variants",
            "16 GB RAM / 512 GB SSD",
            "16 GB RAM / 1 TB SSD",
            "32 GB RAM / 512 GB SSD",
            "32 GB RAM / 1 TB SSD"
        ],
        desc: "Powered by the Intel 13th Gen H-series processor and a 70 Whr battery, this ASUS Vivobook S14 offers effortless performance and extended use. Its sleek metallic design is both stylish and durable, complemented by a TUV Rheinland-certified FHD IPS Anti-glare display for comfortable viewing. Enhanced by Dolby Atmos sound and Windows Hello facial recognition, this lightweight (1.40 kg, 1.59 cm thin) laptop provides a seamless and secure user experience, making it ideal for work, study, and entertainment on the go."
    },
    {
        id:3,
        name: "ASUS Vivobook S14 (2025)",
        price: "₹67,990",
        image: "../img/products/pn71.png",
        smallimgs: [
            "../img/products/pn71.png",
            "../img/products/pn72.png",
            "../img/products/pn73.png",
            "../img/products/pn74.png"
        ],
        variants: [
            "Variants",
            "16 GB RAM / 512 GB SSD",
            "16 GB RAM / 1 TB SSD",
            "32 GB RAM / 512 GB SSD",
            "32 GB RAM / 1 TB SSD"
        ],
        desc: "This ASUS Vivobook S14 is a powerful, ultra-slim laptop designed for work and play. It features an Intel Core Ultra/i5 processor, a 70 Whr battery, and Windows 11 Home. Key features include a 16:10 FHD IPS anti-glare display, Windows Hello facial recognition, Dolby Atmos audio, and essential ports. It also comes with Microsoft 365 Basic, Office Home 2024, McAfee, and Microsoft Phone Link. Built to MIL-STD 810H military standards, it offers durability and seamless multitasking."
    },
    {
        id:4,
        name: "ASUS Vivobook 16X (2025)",
        price: "₹64,999",
        image: "../img/products/pn81.png",
        smallimgs: [
            "../img/products/pn81.png",
            "../img/products/pn82.png",
            "../img/products/pn83.png",
            "../img/products/pn84.png"
        ],
        variants: [
            "Variants",
            "16 GB RAM / 512 GB SSD",
            "16 GB RAM / 1 TB SSD",
            "32 GB RAM / 512 GB SSD",
            "32 GB RAM / 1 TB SSD"
        ],
        desc: "Built with a powerful Intel Core i5 13th Gen H-series processor and NVIDIA GeForce RTX 30-Series laptop GPU, this Vivobook 16X has the efficiency to turn your ideas into creativity superfast. Equipped with SSD, DDR4 memory, and ultrarapid WiFi 6E, this gaming laptop unleashes superior performance that caters to your endless gaming needs."
   },
   //---------Phones---------
   {
        id:5,
        name: "Apple iPhone 16 (White)",
        price: "₹69,999",
        image: "../img/products/ph1.png",
        smallimgs: [
            "../img/products/ph1.png",
            "../img/products/ph11.png",
            "../img/products/ph12.png",
            "../img/products/ph13.png"
        ],
        variants: [
            "Variants",
            "8 GB RAM / 128 GB Storage",
            "12 GB RAM / 128 GB Storage",
            "8 GB RAM / 256 GB Storage",
            "12 GB RAM / 256 GB Storage"
        ],
        desc: "iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48 MP Fusion camera. Five vibrant colours. And A18 chip."
   },
   {
        id:6,
        name: "vivo X200 5G (Cosmos Black)",
        price: "₹65,999",
        image: "../img/products/ph2.png",
        smallimgs: [
            "../img/products/ph2.png",
            "../img/products/ph21.png",
            "../img/products/ph22.png",
            "../img/products/ph23.png"
        ],
        variants: [
            "Variants",
            "8 GB RAM / 128 GB Storage",
            "12 GB RAM / 128 GB Storage",
            "8 GB RAM / 256 GB Storage",
            "12 GB RAM / 256 GB Storage"
        ],
        desc: "Telephoto Hyperzoom: Achieve ultra-long-range shots with crisp, clear detail, preserving every fine element even at extreme distances. Telephoto Macro: Capture the tiniest details with precision, bringing every element to life with 20x zoom clarity. Telephoto Portrait: From portraits to action shots, an ultra-long focal length and ZEISS. Optics turn every subject into a masterpiece. Telephoto Landscape : The ideal travel companion for effortlessly capturing stunning landscapes and portraits."
    },
   {
        id:7,
        name: "realme GT 7 Pro (Mars Orange)",
        price: "₹53,900",
        image: "../img/products/ph3.png",
        smallimgs: [
            "../img/products/ph3.png",
            "../img/products/ph31.png",
            "../img/products/ph32.png",
            "../img/products/ph33.png"
        ],
        variants: [
            "Variants",
            "8 GB RAM / 128 GB Storage",
            "12 GB RAM / 128 GB Storage",
            "8 GB RAM / 256 GB Storage",
            "12 GB RAM / 256 GB Storage"
        ],
        desc: "Processor: Powered by the cutting-edge 3nm Snapdragon 8 Elite processor with an impressive 3M AnTuTu Score, delivering exceptional speed and responsiveness, allowing you to handle demanding applications and gaming with ease. Quad-Curved Display: Designed with the industry’s best quad-curved display, strikes a perfect balance between ergonomic hand feel and immersive visual experience, enhancing both comfort and usability."
    },
   {
        id:8,
        name: "IQOO 13 5G",
        price: "₹59,999",
        image: "../img/products/ph4.png",
        smallimgs: [
            "../img/products/ph4.png",
            "../img/products/ph41.png",
            "../img/products/ph42.png",
            "../img/products/ph43.png"
        ],
        variants: [
            "Variants",
            "8 GB RAM / 128 GB Storage",
            "12 GB RAM / 128 GB Storage",
            "8 GB RAM / 256 GB Storage",
            "12 GB RAM / 256 GB Storage"
        ],
        desc: "PERFORMACE: The fastest processor ever powered by Snapdragon 8 Elite mobile platform with clock speed of 4.3GHz, 3Mn+ Antutu Score. The CPU features the first-ever 2 + 6 all-big-core architecture and an all-new 3nm process. In addition to that, it has LPDRR5X Ultra, UFS 4.1 storage, 6000mAh -3rd Generation silicon anode battery, 0.813cm ultra slim design & 120W fast charger. Also, iQOO13 is IP68+IP69 rated for dust and water resistance. "
    },
    //---------Watches---------
    {
        id:9,
        name: "Analog Watch - For Men NJ0151-88M",
        price: "₹35,009",
        image: "../img/products/w1.png",
        smallimgs: [
            "../img/products/w1.png",
            "../img/products/w11.png",
            "../img/products/w12.png",
            "../img/products/w13.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "The blue round dial is protected by a sapphire glass. The stainless steel strap comes in a silver hue that further elevates the look of the timekeeper. Besides, it is completed with a fold over push button clasp with safety clasp to ensure a secure fit on the wrist.Tsuyosa Collection"
    },
    {
        id:10,
        name: "Edge Ceramic Quartz...",
        price: "₹42,995",
        image: "../img/products/w2png",
        smallimgs: [
            "../img/products/w2png",
            "../img/products/w21.png",
            "../img/products/w22.png",
            "../img/products/w23.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "Titan The brand Titan is celebrated for its close connect with the consumers across different lifestyle categories. Titan wallets, made with timeless craftsmanship, are known for their elegant design, customer centric functional value and premium quality."
    },
    {
        id:11,
        name: "Chronograph Automatic Swiss...",
        price: "₹1,42,489",
        image: "../img/products/w3.png",
        smallimgs: [
            "../img/products/w3.png",
            "../img/products/w31.png",
            "../img/products/w32.png",
            "../img/products/w33.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "Mathey-Tissot is a Swiss watchmaking company renowned for its luxurious timepieces with a rich heritage dating back to 1886. With a focus on precision engineering and elegant design, Mathey-Tissot watches embody sophistication and craftsmanship. Their collections blend traditional Swiss watchmaking techniques with contemporary innovation, appealing to discerning enthusiasts worldwide."
    },
    {
        id:12,
        name: "Analog Watch - For Men SMWGI0002284",
        price: "₹59,990",
        image: "../img/products/w4.png",
        smallimgs: [
            "../img/products/w4.png",
            "../img/products/w41.png",
            "../img/products/w42.png",
            "../img/products/w43.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "A blend of elegance and class, wrist watches are the go-to fashion accessory for every look. They help you create a myriad of looks, from minimal to bohemian. These watches are those versatile pieces that can elevate any outfit with their spark and blend perfectly with every look. Whether you prefer an analogue watch or a digital watch, you can find trending options as per your taste and preferences."
    },
    //---------Watches---------
    {
        id:13,
        name: "Google Pixel Buds Pro 2 Bluetooth",
        price: "₹20,600",
        image: "../img/products/e1.png",
        smallimgs: [
            "../img/products/e1.png",
            "../img/products/e11.png",
            "../img/products/e12.png",
            "../img/products/e13.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "The Pixel Buds Pro 2 offers exceptional comfort with a twist-to-adjust stabilizer, ensuring a secure fit during exercise and all-day wear. Equipped with the Google Tensor A1 chip, they process audio swiftly, providing advanced Active Noise Cancellation with Silent Seal 2.0 to block out twice as much noise. Seamlessly integrated with Pixel devices, features include Clear Calling, Find My Device, and Conversation Detection, which pauses music and switches to Transparency mode when you speak. With large 11 mm drivers and spatial audio, the Pixel Buds Pro 2 delivers immersive, premium sound quality."
    },
    {
        id:14,
        name: "JBL Live Beam 3",
        price: "₹11,990",
        image: "../img/products/e2.png",
        smallimgs: [
            "../img/products/e2.png",
            "../img/products/e21.png",
            "../img/products/e22.png",
            "../img/products/e23.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "Convenient Smart Charging Case :You can customize every aspect of your JBL Live Beam 3 earbuds with the 1.45-inch touchscreen display on your Smart Charging Case The display gives you full control of your sound on any devices"
    },
    {
        id:15,
        name: "Skullcandy Indy ANC Bluetooth",
        price: "₹19,000",
        image: "../img/products/e3.png",
        smallimgs: [
            "../img/products/e3.png",
            "../img/products/e31.png",
            "../img/products/e32.png",
            "../img/products/e33.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "Skullcandy Rail ANC Wireless Earbuds are built for daily use with powerful Active Noise Cancellation and seamless multi-device connectivity. Whether you�re commuting, at the office, or on the go, Rail ANC gives you control over what you hear with Stay-Aware Mode for added safety and awareness. These true wireless earbuds deliver up to 38 hours of battery life � 8 hours in the buds and 30 in the case � with Rapid Charge that gives 2 hours of play in just 10 minutes. Thanks to Multipoint Bluetooth Pairing, you can stay connected to your phone and laptop at the same time. With a built-in microphone and crystal-clear call quality, Skullcandy Rail ANC is perfect for work calls and voice commands. Plus, its comfortable design and sweat resistance (IPX4) make it an all-day performer for music, podcasts, or video streaming � no matter where life takes you."
    },
    {
        id:16,
        name: "JBL Tune Flex TWS with ANC",
        price: "₹8,999",
        image: "../img/products/e4.png",
        smallimgs: [
            "../img/products/e4.png",
            "../img/products/e41.png",
            "../img/products/e42.png",
            "../img/products/e43.png"
        ],
        variants: [
            "Variants",
            "Black",
            "White",
            "Green",
            "Orange"
        ],
        desc: "Convenient Smart Charging Case :You can customize every aspect of your JBL Live Beam 3 earbuds with the 1.45-inch touchscreen display on your Smart Charging Case The display gives you full control of your sound on any devices"
    }

]


//Prducts.js

let productId = new URLSearchParams(window.location.search).get('id');
let product = products[productId-1];

// Set main image
document.getElementById("MainImg").src = product.image;

// Set name, price, description
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = product.price;
document.getElementById("product-desc").textContent = product.desc;

// Add small images
let smallImgGroup = document.getElementById("small-img-group");
product.smallimgs.forEach(imgSrc => {
    let div = document.createElement("div");
    div.classList.add("small-img-col");

    let img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("small-img");

    img.addEventListener("click", () => {
        document.getElementById("MainImg").src = imgSrc;
    });

    div.appendChild(img);
    smallImgGroup.appendChild(div);

});

// Add variants
let variantSelect = document.getElementById("variant-select");
product.variants.forEach(variant => {
    let option = document.createElement("option");
    option.textContent = variant;
    variantSelect.appendChild(option);
});

