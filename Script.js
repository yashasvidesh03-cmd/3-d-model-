// script.js

// Just a simple log to confirm JS is loaded
console.log("3D Model Viewer Loaded ✅");

// Optional: dynamically set AR mode if device supports it
document.addEventListener("DOMContentLoaded", () => {
    const modelViewer = document.querySelector("model-viewer");

    if (navigator.userAgent.toLowerCase().includes("android")) {
        console.log("Android device detected - AR mode enabled");
        modelViewer.setAttribute("ar", "");
    } else {
        console.log("Non-Android device - AR mode disabled");
    }
});
  
