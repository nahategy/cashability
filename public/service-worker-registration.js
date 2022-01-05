var swUrl = "/service-worker.js";

function checkValidServiceWorker(swUrl) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: {'Service-Worker': 'script'},
    })
        .then((response) => {
            // Ensure service worker exists, and that we really are getting a JS file.
            const contentType = response.headers.get('content-type');
            if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
                console.log("asd");
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl);
            }
        })
        .catch(() => {
            console.log('No internet connection found. App is running in offline mode.');
        });
}

function registerValidSW(swUrl) {
    // return;
    navigator.serviceWorker.register(swUrl)
        .then((reg) => {
            // registration worked
            var installation = reg.installing;
            if (installation == null) {
                return;
            }
            installation.onstatechange = () => {
                // console.log(installation.state);
            };

            console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch((error) => {
        // registration failed
        console.log('Registration failed with ' + error);
    });

}

(function () {
    if ('serviceWorker' in navigator) {
        checkValidServiceWorker(swUrl);
    }
})();
