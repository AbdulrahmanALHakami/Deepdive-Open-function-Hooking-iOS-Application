// Hooking into the open() function
Interceptor.attach(Module.findExportByName(null, 'open'), {
    onEnter: function (args) {
        // Get the file path being opened
        var path = Memory.readUtf8String(args[0]);

        // some of sensitive data files-Paths
        var sensitivedata = [
            "/etc/passwd",
            "/etc/shadow",
            "/private/var/mobile/Library/AddressBook",
            "/Library/Keychains",
            "/System/Library/Extensions",
            "/var/mobile/Media",
            "/private/var/log",
            "/private/var/mobile/Documents",
            "/Users/Shared",
            "/Library/Application Support",
            "/System/Library/LaunchDaemons"
        ];

        //  sensitive monitor
        for (var i = 0; i < sensitivedata.length; i++) {
            if (path.startsWith(sensitivedata[i])) {
                console.warn("Warning: there is a tri to access sensitive files: " + path);
            }
        }
    }
});

