function openAR(modelFile) {
    const modelUrl = `https://yashasvidesh03-cmd.github.io/3-d-model-/${modelFile}`;
    const sceneViewerUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(modelUrl)}&mode=ar_only#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;end;`;
    window.location.href = sceneViewerUrl;
}
