function shareText(text, title) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
        })
            .then(() => console.log('Text shared successfully'))
            .catch((error) => console.log('Error sharing text:', error));
    } else {
        console.log('Web Share API not supported');
    }
}

// Function to share files using the Web Share API
function shareFiles(content, fileName, mimeType, title) {
    const file = new File([content], fileName, { type: mimeType });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
            title: title,
            files: [file]
        })
            .then(() => console.log('File shared successfully'))
            .catch((error) => console.log('Error sharing file:', error));
    } else {
        console.log('File sharing is not supported on this platform');
    }
}