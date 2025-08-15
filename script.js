document.querySelectorAll(".openCameraBtn").forEach(button => {
  button.addEventListener("click", () => {
    const modelUrl = button.getAttribute("data-model");
    const sceneViewerUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(modelUrl)}&mode=ar_only#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;end;`;
    window.location.href = sceneViewerUrl;
  });
});

console.log("3D AR Gallery loaded");
