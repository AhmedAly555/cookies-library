var cookieLib = {
    setCookie: function(cookieName, cookieValue, expiryDate) {
        var expires = "";
        if (expiryDate) {
            expires = "; expires=" + expiryDate.toUTCString();
        }
        document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + expires + "; path=/";
    },

    getCookie: function(cookieName) {
        var nameEQ = cookieName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    },

    deleteCookie: function(cookieName) {
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },

    allCookieList: function() {
        var cookies = document.cookie.split(';');
        var cookieList = [];
        for (var i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var name = parts[0].trim();
            var value = decodeURIComponent(parts[1]);
            cookieList.push({ name: name, value: value });
        }
        return cookieList;
    },

    hasCookie: function(cookieName) {
        return this.getCookie(cookieName) !== null;
    }
};