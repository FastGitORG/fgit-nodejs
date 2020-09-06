var dns = require("dns");

function ping() {
    console.log("You can use fgit \n\nIt's being tested...");
    dns.lookup("hub.fastgit.org", function (err, address, family) {
        address && address ? console.log("Accelerated link is normal\nTest complete :)") : console.log("There's a problem with the acceleration link! :(\n");
    });
}
module.exports = ping;
