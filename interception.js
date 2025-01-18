function interceptConsoleLogs(logCallback, warnCallback, errorCallback) {
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    // Override console.log
    console.log = function (message) {
        logCallback(message);
        originalLog.apply(console, arguments);  // Still print to the original console
    };

    // Override console.warn
    console.warn = function (message) {
        warnCallback(message);
        originalWarn.apply(console, arguments);  // Still print to the original console
    };

    // Override console.error
    console.error = function (message) {
        errorCallback(message);
        originalError.apply(console, arguments);  // Still print to the original console
    };
}
