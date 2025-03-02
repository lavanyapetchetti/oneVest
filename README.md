# **Android UI Automation with Appium & Nightwatch.js**

## **📖 Overview**
This project automates the Google Messages app using **Appium** with **Nightwatch.js**. It supports Android testing, focusing on UI interactions like **sending messages, creating groups, and navigating through the app**.

---

## **⚙️ Prerequisites**

### **1️⃣ System Requirements**
- **Node.js** (v16+ recommended)
- **Java JDK** (v11 or higher)
- **Android SDK & ADB** (Android Studio installed)
- **Appium Server** (v2.x)
- **Nightwatch.js**

### **2️⃣ Install Dependencies**
Clone the repository and install required Node modules:
```bash
git clone https://github.com/lavanyapetchetti/oneVest.git
cd oneVest
npm install
```

### **3️⃣ Setup Android Emulator or Device**
- **For Emulator:** Open **Android Studio**, go to **AVD Manager**, create a virtual device, and start it.
- **For Real Device:** Enable **USB Debugging** in Developer Options and connect your device via USB.

Setting Up the Android Emulator (AVD)
To run tests on an Android emulator, you need to set up an Android Virtual Device (AVD) that matches the configuration in the test script (e.g., Medium_Phone_API_35). If you don't have this AVD, you can create one.

Verify device is connected:
```bash
adb devices
```

---

## **🛠 Configuration**

### **1️⃣ Appium Setup**
Start Appium Server:
```bash
appium
```

Or run Appium in the background:
```bash
appium &  
```

## **🚀 Running Tests**

### **Run All Tests**
```bash
npx nightwatch
```

### **Run Specific Test**
```bash
npx nightwatch tests/send_messages.js --env app.android.emulator
```

### **Debug Mode (Verbose Logging)**
```bash
npx nightwatch --verbose
```

## **🛠 Troubleshooting**

### **1️⃣ Appium Not Detecting Device**
- Ensure **Appium Server** is running (`appium`)
- Verify connected device using:
  ```bash
  adb devices
  ```
- Restart **ADB Server**:
  ```bash
  adb kill-server && adb start-server
  ```



