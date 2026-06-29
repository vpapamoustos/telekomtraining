const createMobileDescriptionHtml = (metadata) => `
  <strong>Κατασκευαστής:</strong> ${metadata.brand}<br>
  <strong>Έτος κυκλοφορίας:</strong> ${metadata.releaseYear}<br>
  <strong>Βάρος:</strong> ${metadata.weight}<br>
  <strong>Πιστοποίηση:</strong> ${metadata.ipRating}<br>
  <strong>Αποθήκευση:</strong> ${metadata.storage}<br>
  <strong>Μνήμη RAM:</strong> ${metadata.ram}<br>
  <strong>Αυτονομία:</strong> ${metadata.batteryLife}<br>
  <strong>Φωτεινότητα:</strong> ${metadata.brightness}<br>
  <strong>Εγγραφή video:</strong> ${metadata.videoRecording}<br>
  <strong>Τιμή:</strong> ${metadata.price}<br>
  <a href="${metadata.url}" target="_blank" rel="noopener noreferrer">Σελίδα προϊόντος</a>
`;

const MOBILE_RAW = [
  { name: "iPhone 17 Pro", screenSize: 6.3, frontCamera: 18, mainCamera: 48, battery: 3998, charging: 25, metadata: { brand: "Apple", releaseYear: 2025, weight: "206 g", ipRating: "IP68", storage: "1TB", price: "1869 €", batteryLife: "15.5 ώρες", brightness: "3000 nits", videoRecording: "8K", ram: "12 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/apple-iphone-17-pro-dual-5g-1tb/?productId=20443001" }, image: "assets/mobile/iphone17-pro.jpg" },
  { name: "XIAOMI 17T Pro Dual 5G", screenSize: 6.83, frontCamera: 32, mainCamera: 50, battery: 7000, charging: 100, metadata: { brand: "Xiaomi", releaseYear: 2026, weight: "205 g", ipRating: "IP68", storage: "512GB", price: "999.01 €", batteryLife: "70 ώρες", brightness: "3500 nits", videoRecording: "8K", ram: "12 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/xiaomi-17t-pro-dual-5g-12gb/512gb-smartphone/?productId=20447912" }, image: "assets/mobile/xiaomi-17t-pro.jpg" },
  { name: "SAMSUNG Galaxy S26 Ultra Dual 5G", screenSize: 6.9, frontCamera: 12, mainCamera: 200, battery: 5000, charging: 60, metadata: { brand: "Samsung", releaseYear: 2026, weight: "214 g", ipRating: "IP68", storage: "1TB", price: "1999 €", batteryLife: "31 ώρες", brightness: "2600 nits", videoRecording: "8K", ram: "16 GB", url: "https://www.germanos.gr/product/telephony/mobile/samsung-s26-series/samsung-galaxy-s26-ultra-dual-5g-16gb/1tb-smartphone-black/?productId=20445719" }, image: "assets/mobile/samsung-galaxy-s26-ultra.jpg" },
  { name: "MOTOROLA Razr Fold Dual 5G 16GB/512GB", screenSize: 8.1, frontCamera: 32, mainCamera: 50, battery: 6000, charging: 80, metadata: { brand: "Motorola", releaseYear: 2026, weight: "205 g", ipRating: "IP49", storage: "512GB", price: "1999 €", batteryLife: "24 ώρες", brightness: "6200 nits", videoRecording: "4K", ram: "16 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/motorola-razr-fold-dual-5g-16gb/512gb-smartphone/?productId=20447175" }, image: "assets/mobile/motorola-razr-fold.jpg" },
  { name: "OPPO Find X9 Ultra Dual 5G 12GB/512GB", screenSize: 6.82, frontCamera: 50, mainCamera: 200, battery: 7050, charging: 100, metadata: { brand: "Oppo", releaseYear: 2026, weight: "205 g", ipRating: "IP69", storage: "512GB", price: "1799 €", batteryLife: "24 ώρες", brightness: "4000 nits", videoRecording: "8K", ram: "12 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/oppo-find-x9-ultra-dual-5g-12gb/512gb-smartphone/?productId=20447636" }, image: "assets/mobile/oppo-find-x9-ultra.jpg" },
  { name: "XIAOMI 17 Ultra Dual 5G 16GB/512GB", screenSize: 6.9, frontCamera: 50, mainCamera: 50, battery: 6000, charging: 90, metadata: { brand: "Xiaomi", releaseYear: 2026, weight: "205 g", ipRating: "IP68", storage: "512GB", price: "1449 €", batteryLife: "24 ώρες", brightness: "4000 nits", videoRecording: "8K", ram: "16 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/xiaomi-17-ultra-dual-5g-16gb/512gb-smartphone/?productId=20446264" }, image: "assets/mobile/xiaomi-17-ultra.jpg" },
  { name: "POCO F8 Ultra Dual 5G 16GB/512GB", screenSize: 6.9, frontCamera: 32, mainCamera: 50, battery: 6500, charging: 100, metadata: { brand: "Poco", releaseYear: 2026, weight: "205 g", ipRating: "IP68", storage: "512GB", price: "949.9 €", batteryLife: "67 ώρες", brightness: "4000 nits", videoRecording: "8K", ram: "16 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/poco-f8-ultra-dual-5g-16gb/512gb-smartphone/?productId=20444760" }, image: "assets/mobile/poco-f8-ultra.jpg" },
  { name: "Realme GT8 Pro Dual 5G 16GB/512GB", screenSize: 6.79, frontCamera: 32, mainCamera: 50, battery: 7000, charging: 120, metadata: { brand: "Realme", releaseYear: 2026, weight: "205 g", ipRating: "IP69", storage: "512GB", price: "999.9 €", batteryLife: "21.3 ώρες", brightness: "4000 nits", videoRecording: "4K", ram: "16 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/realme-gt8-pro-dual-5g-16gb/512gb-smartphone/?productId=20444819" }, image: "assets/mobile/realme-gt8-pro.jpg" },
  { name: "TCL 60 Ultra NXTPAPER Dual 5G 12GB/256GB", screenSize: 7.2, frontCamera: 32, mainCamera: 50, battery: 5200, charging: 33, metadata: { brand: "TCL", releaseYear: 2026, weight: "205 g", ipRating: "IP68", storage: "256GB", price: "449.91 €", batteryLife: "24 ώρες", brightness: "4000 nits", videoRecording: "4K", ram: "12 GB", url: "https://www.germanos.gr/product/telephony/mobile/smartphones-all/tcl-60-ultra-nxtpaper-dual-5g-12gb/256gb-smartphone/?productId=20442025" }, image: "assets/mobile/tcl-60-ultra-nxtpaper.jpg" },
  { name: "SAMSUNG Galaxy Z Fold7 Dual 5G 12GB/512GB", screenSize: 8, frontCamera: 12, mainCamera: 200, battery: 4400, charging: 25, metadata: { brand: "Samsung", releaseYear: 2026, weight: "205 g", ipRating: "IP48", storage: "512GB", price: "2999 €", batteryLife: "24 ώρες", brightness: "4000 nits", videoRecording: "8K", ram: "12 GB", url: "#" }, image: "assets/mobile/samsung-galaxy-z-fold7.jpg" },
  { name: "APPLE iPhone 17 Pro Max Dual 5G 2TB", screenSize: 6.9, frontCamera: 18, mainCamera: 50, battery: 4823, charging: 40, metadata: { brand: "Apple", releaseYear: 2025, weight: "233 g", ipRating: "IP68", storage: "2TB", price: "2549.01 €", batteryLife: "17 ώρες", brightness: "3000 nits", videoRecording: "4K", ram: "12 GB", url: "https://www.germanos.gr/product/telephony/mobile/5g-smartphones/apple-iphone-17-pro-max-dual-5g-2tb/?productId=20443013" }, image: "assets/mobile/iphone17-pro-max.jpg" },
  { name: "MOTOROLA Razr 60 Ultra Dual 5G 16GB/512GB", screenSize: 7, frontCamera: 50, mainCamera: 50, battery: 4700, charging: 68, metadata: { brand: "Motorola", releaseYear: 2026, weight: "205 g", ipRating: "IP48", storage: "512GB", price: "999 €", batteryLife: "24 ώρες", brightness: "4000 nits", videoRecording: "8K", ram: "16 GB", url: "#" }, image: "assets/mobile/motorola-razr-60-ultra.jpg" },
  { name: "SAMSUNG Galaxy Z Flip7 Dual 5G 12GB/512GB", screenSize: 6.7, frontCamera: 12, mainCamera: 50, battery: 4000, charging: 67, metadata: { brand: "Samsung", releaseYear: 2026, weight: "190 g", ipRating: "IP48", storage: "512GB", price: "1369 €", batteryLife: "24 ώρες", brightness: "4000 nits", videoRecording: "4K", ram: "12 GB", url: "#" }, image: "assets/mobile/samsung-galaxy-z-flip7.jpg" },
  { name: "MOTOROLA Signature Swarovski Edition Dual 5G 16GB/512GB", screenSize: 6.78, frontCamera: 50, mainCamera: 50, battery: 5200, charging: 90, metadata: { brand: "Motorola", releaseYear: 2026, weight: "205 g", ipRating: "IP68", storage: "512GB", price: "1199.01 €", batteryLife: "24 ώρες", brightness: "4000 nits", videoRecording: "8K", ram: "16 GB", url: "#" }, image: "assets/mobile/motorola-signature-swarovski-edition.jpg" }
];

const MOBILE = MOBILE_RAW.map(card => ({
  ...card,
  info: createMobileDescriptionHtml(card.metadata)
}));

export const DECKS = {
    mobile: {
        id: "mobile",
        title: "Κινητά",
        cards: MOBILE,
        attrs: [
            { key: "screenSize", label: "Μέγεθος οθόνης", unit: '"', higherWins: true },
            { key: "frontCamera", label: "Εμπρόσθια κάμερα", unit: "MP", higherWins: true },
            { key: "mainCamera", label: "Πίσω κάμερα", unit: "MP", higherWins: true },
            { key: "battery", label: "Μπαταρία", unit: "mAh", higherWins: true },
            { key: "charging", label: "Φόρτιση", unit: "W", higherWins: true }
        ]
        }
};