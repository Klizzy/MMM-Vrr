/* Magic Mirror
 * Node Helper: MMM-Vrr
 *
 * By Steven Zemelka <hello@klizzy.com>
 * MIT Licensed.
 */

let NodeHelper = require("node_helper");
const request = require("request").defaults({ encoding: null });

module.exports = NodeHelper.create({
    start: function () {
        console.log('MMM-VRR Node-helper loaded!')
    },

    socketNotificationReceived: function (notification, imageUrl) {
        if (notification === "MMM-VRR-SEND-IMAGE-URL") {
           this.getImageAsBase64(imageUrl);
        }
    },

    getImageAsBase64: function (imageUrl) {
        let self = this;
        request.get(imageUrl, function (error, response, body) {
            let data;
            if (!error && response.statusCode === 200) {
                data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
                self.sendSocketNotification('base64ImageReceived', data);
            }
        });
    }
});
