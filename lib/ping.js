var dns = require("dns");
function ping() {
    console.log("fgit\u6B63\u5E38\n\u53EF\u4EE5\u4F7F\u7528fgit\n\n\u6B63\u5728\u68C0\u67E5\u52A0\u901F\u94FE\u63A5\u662F\u5426\u6B63\u5E38...");
    dns.lookup("hub.fastgit.org", function (err, address, family) {
        address && address == "45.80.189.136" ? console.log("\u52A0\u901F\u94FE\u63A5\u6B63\u5E38\n\u68C0\u6D4B\u5B8C\u6BD5:)") : console.log("\u68C0\u6D4B\u5230\u52A0\u901F\u94FE\u63A5\u6709\u95EE\u9898\uFF0C\u8BF7\u91CD\u8BD5\n\u68C0\u6D4B\u5931\u8D25:(\n");
    });
}
module.exports = ping;
