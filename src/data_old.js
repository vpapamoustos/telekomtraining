const MOBILE = [
  // Apple
  { name: "iPhone 17", screenSize: 6.3, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Apple<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/iphone17.jpg" },
  { name: "iPhone Air", screenSize: 6.6, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Apple<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/iphone-air.jpg" },
  { name: "iPhone 17 Pro", screenSize: 6.3, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Apple<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/iphone17-pro.jpg" },
  { name: "iPhone 17 Pro Max", screenSize: 6.9, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Apple<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/iphone17-pro-max.jpg" },

  /*
  // Samsung
  { name: "Samsung Galaxy A36", screenSize: 6.7, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Samsung<br><strong>Έτος κυκλοφορίας:</strong> 2026<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> -<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/galaxy-a36.jpg" },
  { name: "Samsung Galaxy A56", screenSize: 6.7, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Samsung<br><strong>Έτος κυκλοφορίας:</strong> 2026<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> -<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/galaxy-a56.jpg" },
  { name: "Samsung Galaxy S26", screenSize: 6.2, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Samsung<br><strong>Έτος κυκλοφορίας:</strong> 2026<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/galaxy-s26.jpg" },
  { name: "Samsung Galaxy S26+", screenSize: 6.7, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Samsung<br><strong>Έτος κυκλοφορίας:</strong> 2026<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/galaxy-s26-plus.jpg" },
  { name: "Samsung Galaxy S26 Ultra", screenSize: 6.9, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Samsung<br><strong>Έτος κυκλοφορίας:</strong> 2026<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/galaxy-s26-ultra.jpg" },
  { name: "Samsung Galaxy Z Flip7", screenSize: 6.9, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Samsung<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP48<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/galaxy-z-flip7.jpg" },
  { name: "Samsung Galaxy Z Fold7", screenSize: 8.0, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Samsung<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP48<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/galaxy-z-fold7.jpg" },

  // Google
  { name: "Google Pixel 10a", screenSize: 6.3, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Google<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> -<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/pixel-10a.jpg" },
  { name: "Google Pixel 10", screenSize: 6.3, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Google<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/pixel-10.jpg" },
  { name: "Google Pixel 10 Pro", screenSize: 6.3, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Google<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/pixel-10-pro.jpg" },
  { name: "Google Pixel 10 Pro XL", screenSize: 6.8, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Google<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/pixel-10-pro-xl.jpg" },

  // Xiaomi
  { name: "Redmi Note 14 Pro", screenSize: 6.67, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Xiaomi<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> -<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/redmi-note-14-pro.jpg" },
  { name: "Redmi Note 14 Pro+", screenSize: 6.67, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Xiaomi<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> -<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/redmi-note-14-pro-plus.jpg" },
  { name: "Xiaomi 15", screenSize: 6.36, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Xiaomi<br><strong>Έτος κυκλοφορίας:</strong> 2024<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/xiaomi-15.jpg" },
  { name: "Xiaomi 15 Pro", screenSize: 6.73, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Xiaomi<br><strong>Έτος κυκλοφορίας:</strong> 2024<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/xiaomi-15-pro.jpg" },
  { name: "Xiaomi 15 Ultra", screenSize: 6.73, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Xiaomi<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/xiaomi-15-ultra.jpg" },

  // POCO
  { name: "POCO F7 Pro", screenSize: 6.67, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> POCO<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/poco-f7-pro.jpg" },
  { name: "POCO F7 Ultra", screenSize: 6.67, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> POCO<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> -<br><strong>Βάρος:</strong> -<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> -<br><strong>Αποθήκευση:</strong> -<br><strong>Τιμή:</strong> -<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/poco-f7-ultra.jpg" },

  // OnePlus
  { name: "OnePlus Nord 5", screenSize: 6.83, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> OnePlus<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> 0 mAh<br><strong>Βάρος:</strong> 0 g<br><strong>Πιστοποίηση:</strong> IP65<br><strong>Φόρτιση:</strong> 0 W<br><strong>Αποθήκευση:</strong> 0 GB<br><strong>Τιμή:</strong> 0 €<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/oneplus-nord-5.jpg" },
  { name: "OnePlus 15", screenSize: 6.78, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> OnePlus<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> 0 mAh<br><strong>Βάρος:</strong> 0 g<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> 0 W<br><strong>Αποθήκευση:</strong> 0 GB<br><strong>Τιμή:</strong> 0 €<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/oneplus-15.jpg" },

  // OPPO
  { name: "OPPO Reno14 Pro", screenSize: 6.83, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> OPPO<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> 0 mAh<br><strong>Βάρος:</strong> 0 g<br><strong>Πιστοποίηση:</strong> IP69<br><strong>Φόρτιση:</strong> 0 W<br><strong>Αποθήκευση:</strong> 0 GB<br><strong>Τιμή:</strong> 0 €<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/oppo-reno14-pro.jpg" },
  { name: "OPPO Find X9 Pro", screenSize: 6.78, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> OPPO<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> 0 mAh<br><strong>Βάρος:</strong> 0 g<br><strong>Πιστοποίηση:</strong> IP69<br><strong>Φόρτιση:</strong> 0 W<br><strong>Αποθήκευση:</strong> 0 GB<br><strong>Τιμή:</strong> 0 €<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/oppo-find-x9-pro.jpg" },

  // Motorola
  { name: "Motorola Edge 60 Pro", screenSize: 6.7, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Motorola<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> 0 mAh<br><strong>Βάρος:</strong> 0 g<br><strong>Πιστοποίηση:</strong> IP68/IP69<br><strong>Φόρτιση:</strong> 0 W<br><strong>Αποθήκευση:</strong> 0 GB<br><strong>Τιμή:</strong> 0 €<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/motorola-edge-60-pro.jpg" },
  { name: "Motorola Razr 60 Ultra", screenSize: 7.0, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Motorola<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> 0 mAh<br><strong>Βάρος:</strong> 0 g<br><strong>Πιστοποίηση:</strong> IP48<br><strong>Φόρτιση:</strong> 0 W<br><strong>Αποθήκευση:</strong> 0 GB<br><strong>Τιμή:</strong> 0 €<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/motorola-razr-60-ultra.jpg" },

  // Nothing
  { name: "Nothing Phone (3)", screenSize: 6.67, geekbench: 0, batteryLife: 0, brightness: 0, info: "<strong>Κατασκευαστής:</strong> Nothing<br><strong>Έτος κυκλοφορίας:</strong> 2025<br><strong>Μπαταρία:</strong> 0 mAh<br><strong>Βάρος:</strong> 0 g<br><strong>Πιστοποίηση:</strong> IP68<br><strong>Φόρτιση:</strong> 0 W<br><strong>Αποθήκευση:</strong> 0 GB<br><strong>Τιμή:</strong> 0 €<br><a href='#' target='_blank'>Σελίδα προϊόντος</a>", image: "assets/mobile/nothing-phone-3.jpg" }
  */
];

export const DECKS = {
  performance: {
    id: "performance",
    title: "Performance Legends",
    cards: CARS,
    attrs: [
      { key: "speed", label: "Μέγιστη ταχύτητα", unit: "km/h", higherWins: true },
      { key: "hp", label: "Ιπποδύναμη", unit: "hp", higherWins: true },
      { key: "accel", label: "0-100", unit: "sec", higherWins: false },
      { key: "value", label: "Αξία αγοράς", unit: "€", higherWins: true }
    ]
  },
  space: {
    id: "space",
    title: "Cosmic Legends",
    cards: SPACE,
    attrs: [
      { key: "diameter", label: "Διάμετρος", unit: "km", higherWins: true },
      { key: "gravity", label: "Βαρύτητα", unit: "m/s²", higherWins: true },
      { key: "temperature", label: "Θερμοκρασία", unit: "°C", higherWins: true },
      { key: "moons", label: "Δορυφόροι", unit: "", higherWins: true }
    ]
  },
  europe: {
   id: "europe",
   title: "Χώρες της Ευρώπης",
   cards: EUROPE,
   attrs: [
     { key: "population", label: "Πληθυσμός", unit: "εκ.", higherWins: true },
     { key: "area", label: "Έκταση", unit: "km²", higherWins: true },
     { key: "lifeExpectancy", label: "Προσδόκιμο ζωής", unit: "έτη", higherWins: true },
     { key: "distanceFromGreece", label: "Απόσταση από Αθήνα", unit: "km", higherWins: true }
   ]
 },
 mobile: {
   id: "mobile",
   title: "Κινητά",
   cards: MOBILE,
   attrs: [
     { key: "screenSize", label: "Μέγεθος οθόνης", unit: '"', higherWins: true },
     { key: "geekbench", label: "Geekbench", unit: "", higherWins: true },
     { key: "batteryLife", label: "Αυτονομία", unit: "ώρες", higherWins: true },
     { key: "brightness", label: "Φωτεινότητα", unit: "nits", higherWins: true }
   ]
 }
};