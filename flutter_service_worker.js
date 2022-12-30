'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/config": "242d5f56d30e4944ed096ed7b90fa241",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da062c4a334898774bd193863a6ebd52",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1e297c958cebd571df0889966c9e4aa",
".git/logs/refs/heads/main": "a1e297c958cebd571df0889966c9e4aa",
".git/logs/refs/remotes/origin/main": "c0b5763b63d1b32d61cfc9777ffbf6c6",
".git/objects/03/cfc53adb7103a2b92aa7c71a7c075b03847f6b": "f1384dff6f3ca4b9d57b9cada54307b0",
".git/objects/07/4f5e9884e1d3ba2503eef37d2f3489a9356ce3": "58a1b1bc207ad0970e0b568339116043",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/0c/6c8ffbf2418f01b9e0f68123b439ad511a5373": "555880d49b8d2da24bcbf673b51a1baf",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0f/7b02a4a79c3aff3fad84cda69ce798301a31cd": "de56fab88103877ed6c8ba0a100afc10",
".git/objects/11/377812d76d592be968ab776b81928cb25d27c0": "118083bd15609fcf138512cb668704a9",
".git/objects/11/8d6efef6dbae662205be333092614a537e62ac": "3390b5c51eb8a4407c3bfc5f19c7fc4c",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/15/a4a51da23799464dcae2bbe75de5b271e2b560": "ce26dab7b1d09f207eb8f37ed85bc90a",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/1a/6c8f155133860bc01a261cec3b706a7ba4cd68": "830def7ee1200c114ddc8ce95f213416",
".git/objects/1b/2ab4a1f61cd55168f6672820c9e1da82e57545": "e5fed4f4fca52cc5ff805b148423670c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/3410b61fdafdf57b9b6a7302cc7a61f968e661": "91b24c8416c995e2c067d0d607df8485",
".git/objects/26/dfa7d54ac9bc67a357d3e6be44b67c4d9c2a5d": "17385a4235a9b2fe9d00f381bd1ed8a4",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/6084d1091ad562ddaf600c810325571b42f1f2": "bd870303af8955f793ee5ca8dae73e5d",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2c/c1698a5ecc8892955c09f242a75190878b96a2": "141f51d62c65c837fd890dc4620775d6",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/25f5411579b343241cd4a65b90f1933d0b31d2": "9a30d2e819eda52ebe5a12c5541700a4",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/39/d03b9c30567690e01b064582e138d31898b105": "c1439138a4bd3071064987677e68dcbb",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/42/aeb6718e9e2c05e9a36c3208c2900f53a919e9": "7c475df6bda7b7f711e84434fa689300",
".git/objects/42/fa571813bf11f2ee45acb4e6fcebb2fb352390": "32280ca0b7cb46ae2ed9105e042f7296",
".git/objects/44/66f071ffbfe1724590d28c573c465804342db2": "8960eb48560b6837e95ac1d1867fe3a2",
".git/objects/45/6b02624cd18dca7b26018ce90f494133edc22a": "2cb315a543dd13cac175ebd3d74726c1",
".git/objects/48/cfe8e14504bb75930261540fb21ca85c2ecace": "f7f6ba7c57fa4313a0268293820ecbb9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/6571484331b6ed2b63bf73549a976dbf255033": "4e111430b9b0c9a8eea9d37cbe0a52e1",
".git/objects/57/f3edc8ed4e867053cc64c9024b9714583ab948": "cced4f95ed90e9647ff707b84ecdfb5b",
".git/objects/5a/562e8f645438ffb43c0ec8a5f977e3d3b6080f": "35bb9b9eed4490a8ef49449aef06b187",
".git/objects/5c/c1e693b89f09785f7c6c791619192891083cda": "f6ad19582b2116648a926958163ecf3f",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/60/f82eaeacbdbbd126fd1c4421d90cad5cdaf79e": "8e0b802b6886f43341b21cdf7bacb05c",
".git/objects/62/d9a553f04d5db039ac4b5031bf15824ac0289a": "cbda0837eb691bc09bad1baeb1b90e05",
".git/objects/63/a7d9e6a31ceafcbe317b264c0c01ebe77a652a": "32ce907284ed80979016f1744226ad83",
".git/objects/64/26391e68e843221301ada269b9dddb9eec406f": "9ea0015335ef65bcfa578e1a10c058cf",
".git/objects/67/44339cc87a202c990f0621244184e1ff4e723a": "a5490188d043102faf8bfffb857ae584",
".git/objects/67/932860a72432aa0ff205e723afaba3e6bfe11d": "772cb339d589bd7eef9ca4cacb57b734",
".git/objects/6a/1944e7e359ebf22654728b63a96d42ff6d27e1": "c385b2cc52cc18f92967e1d8e42890f2",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/76/26e984fcdb0d577d003ad1c5c3bc4e12053513": "d89fde1a6bc48b48a94d29d957a0af16",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/e8b7cd35a268ad82d341322d4fa7410d3c1a15": "2e8d29ed3349c2dfd21ee747c3d311a6",
".git/objects/83/6237c0aaa4253f196a4f8f772d0711395db196": "f38e53e8b1aacabf0f758c43c81a6126",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/70f7e72e93333e11df65199c3ddba24018b6fe": "cfb31cdd9c927ec4081324106c0c5d3c",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/93/8799363282a0bcfd431c8e42f8ce9447168b81": "594535250eee474a28a5fe7990dc79d2",
".git/objects/95/0547a349687885506d8a3fc4f82bb09ba4f84c": "e2b9b1ae2676df9f91f2bfcda1a9ef81",
".git/objects/96/b44298629d46571d8546efef09a8bc67b6c341": "c7fbfcc360f2af9c0dc42deb735335f6",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9d/b051af308363ef2cc5b43a545c41ff28081e0f": "1f344244eb020fb478a16e083673de60",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/32975a92695355f35f8ed196edf3040217f20d": "b6744af35445f3ade7a5665630b5c760",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b5/5d929ea5334ce7559a8c5b4ea8c21862d153ea": "69acb0d4cbb1419fb53e6d7dacb80979",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/e3d39c4e2663d860bde1dce5e0c5109bedec2e": "e74912c8b041b52efaaba127d86a7b4d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b6310dbba3a351227aed98c535044d65f963af": "e9cecf9689f15e59ac484a324fd31fb1",
".git/objects/db/ac45054329545d1c4c3e9e10cb72cc81e008b3": "c997ea96f6ede59ad6939fe9b150ab23",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/3249ebb6543d8548a362a8e9b2ca24d1bc895b": "950bcc1c4c9401d1602508861a18c401",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/78aec478e2282ab7ed0f6077bd022df0dcc722": "48bf8ffdc7b940353bb0af5dcfe090bf",
".git/objects/e9/cfc38b9d70c49dae28cce0042e146b5a47eed5": "3ff80e0709277063cea6c8267602fe53",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/48b6d6e1d255ad48fd6a10b532d515873a4b56": "c1c9628dd1aad2ddd0afd1c2b81c5951",
".git/objects/ef/d85cc0d66a09bb552f441226f036cdd119796e": "7c642ccac5d23172d5bba6862f2a257f",
".git/objects/f0/9cbaacd5b9de39cdf62c92f2f04aa1868db1c6": "6469662aa75533c68496d4157c9e7b65",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f4/cec7e1b393f81fba42b59df7620cc8b5b7231d": "25ad286535e1642975119fdea7b9e976",
".git/objects/f8/f786c40087cac1754943ca8314b25029d70ff9": "2a0b45ab5203d04581cea7e8b2b4e6d2",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fd/a79d9d5917fba9f8d76189a97ee3568983f133": "d2a577b39895d3e45d7b83655c3f33cf",
".git/refs/heads/main": "0b51900875eefde9399dd9d81d8204b8",
".git/refs/remotes/origin/main": "0b51900875eefde9399dd9d81d8204b8",
"assets/AssetManifest.json": "8d4a8ccdc9e5034e561a004e73e96c84",
"assets/assets/images/cafe.jpg": "6ef8b91614d5fe16a4599104b4fe83fd",
"assets/assets/images/cocktail.jpg": "1c2fe60deb5554f4c4e01ecdafdd77f7",
"assets/assets/images/couscous.jpg": "631d140c83fdc3a698ceb74110eab526",
"assets/assets/images/dessert.jpg": "c0153589505590f31d3af2917412d8ee",
"assets/assets/images/drink.jpg": "452f53b7aee14c3b918eee9cdfd75105",
"assets/assets/images/jus.jpg": "f454d1ff1295e9c8645146ec7b1994be",
"assets/assets/images/logo.png": "2177d03645f3a90a31f30f77f1567dfb",
"assets/assets/images/logo.svg": "844ed483497972172ab6ce7299cb5895",
"assets/assets/images/menurest.jpg": "18848b85bb982a1442b2575650db23c6",
"assets/assets/images/pates.jpg": "6a0a10897d5bac67157184466ecd518a",
"assets/assets/images/pizza.png": "e4a089e3a26007e615a0cd71b4a1b7f5",
"assets/assets/images/restmmadenone.png": "ada123fdc1d7b0b82efc778329c06cbd",
"assets/assets/images/roommaaden.png": "8b0651d603c2d15784332f16337b2186",
"assets/assets/images/roommaadenfour.png": "06182261de1c9b1a7e675e70eb426ea0",
"assets/assets/images/roommaadenthree.png": "6a0e3e0e2c1be947db17d478b5f6c2d3",
"assets/assets/images/roommaadentwo.png": "6f8c9a98f4a650b52d865e41bfaa08e7",
"assets/assets/images/salade-cesar-1.jpeg": "586583683b3855fab15202d60a1c231a",
"assets/assets/images/Salade-de-quinoa.jpg": "9e4edb428afcf700da6851add17b5a34",
"assets/assets/images/Salade-peche.jpg": "04863424e8299449a149aebcae97ff41",
"assets/assets/images/salade.jpg": "21932731fd6683c54525c14ba65cad36",
"assets/assets/images/salade2.jpg": "38d4723acd98fa0e7b7849c4e6cd49b7",
"assets/assets/images/snack.jpg": "5706a5f2e37c2c861d9dd6c00983f642",
"assets/assets/images/soda.jpg": "2b16f10f2b5a20eef500e2ee3abbe50e",
"assets/assets/images/SPA5.jpg": "072a5097f927ec9e00dbf2bc1507854f",
"assets/assets/images/SpaFive.png": "c162621b04266ace48adbed7e010f125",
"assets/assets/images/SpaFour.png": "92c70f110a03852a426e10bc45a1ccad",
"assets/assets/images/spamaaden.jpg": "8a609f5c1b75a91eacc0b38aa149f9b9",
"assets/assets/images/SpaNine.png": "5a2931c3ba3664b40c4a224c2ca6f1da",
"assets/assets/images/SpaOne.png": "13c65784985002687997fc21da394c72",
"assets/assets/images/SpaSeven.png": "d46ad46c088232fc607c346287ae737d",
"assets/assets/images/SpaSix.png": "9e1b38c9abc551447fc135862f70625f",
"assets/assets/images/SpaTen.png": "a49be51c4523a6f7caa7beef9f2bd2b3",
"assets/assets/images/SpaThree.png": "30e7073d677a30b56e1ac1c3771cb14b",
"assets/assets/images/SpaTwo.png": "06128da75efa6e5d0d1d56c108b8eed6",
"assets/assets/images/tajine.jpg": "2b0a8f9fa420bf779bf244838ff2ee95",
"assets/assets/images/tanjia.jpg": "47d2696dfaa6413732933f51a7305c0c",
"assets/assets/images/tomatesmozzarelle.jpg": "5981aebc3cfeea63714b1ecb60fc54e6",
"assets/assets/images/water.jpg": "d2c0fddebd9c8a64967daff534c790b4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d758903bbcc3f5868baa821d3a18f057",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a9d1bca31421be821de53a785eda523",
"/": "8a9d1bca31421be821de53a785eda523",
"loader.css": "bbb9ca3416aea614ef7b83b8093d5e8e",
"logo.png": "2177d03645f3a90a31f30f77f1567dfb",
"main.dart.js": "5aedfa0cc6abef3e291447fb60d0f405",
"manifest.json": "23d4c2f5cb4839d5b3b06c12072caa4d",
"version.json": "f76726ce96debb066b538f46dd84b163"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
