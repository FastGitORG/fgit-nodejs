let dns = require("dns");

function ping () {
		console.log(`fgit正常
可以使用fgit

正在检查加速链接是否正常...`);

		dns.lookup("hub.fastgit.org", function (err, address, family) {
				address&&address == "45.80.189.136"?console.log(`加速链接正常
检测完毕:)`):console.log(`检测到加速链接有问题，请重试
检测失败:(
`)
		});
}	
		
module.exports = ping;
