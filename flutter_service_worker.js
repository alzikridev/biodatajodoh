'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ddaac1fad34c9309346065c2a76a808e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "64d5369797416a88784fd72c691c322c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a74035981d6b57886f458327cf101c74",
".git/logs/refs/heads/main": "66a78305c94bf7820de91aa79276a936",
".git/logs/refs/remotes/origin/main": "0a8d38b9f64d77414e6be30e64ee1a8a",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/15/a436617660c8640831e3afec77aab08f5a5ea2": "be497d15bcc041c27f5a3be711ae73ee",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b31c116d925644682f346b293b67d223fd583d": "4b800e71ad2956d1229154bfc6db48bb",
".git/objects/24/3e9d9c94d1030ac4bf2a45b2a4b11e5537e519": "0ec7817ea46891cc7547d34a9e7d160d",
".git/objects/3a/00d4a478d5a491a3da3cd9494fd9a111fc30c6": "e477916a3a6f96976277e8d18f89c03c",
".git/objects/3a/cc490533253323eac3eca707f87f5b34584171": "8f47edf468122985148fce1150758fe1",
".git/objects/3c/a2a66c1685a70be98f4e9d97f0da104bc36345": "0e1a93df81a9cad8e259c2cf37d3a4dc",
".git/objects/42/c6b80e848d7d4dfe756a1ac968ff7d50f9efcb": "3ae9c16d0f63c842b100970d49ba92c9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b95a181949430992333df0bc8c0b9cc543fcee": "5b156ebcb620eb80c3edc04e5ef49e0b",
".git/objects/48/232fe4d231a8e97382e4f854dd4542b48dcd2e": "3e301c990fdd89b5b95bb338bdc4972b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/82b80fa576b0c2b7067634ebea2e7006f1efd6": "50d0a152216c0f1b06d80d33fe9ca072",
".git/objects/4d/e66d2f4cab7017f492c0f8f4f83c90b35ca739": "b3b7fb4b5dabacbd5ca679a1d9407a7c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/a0f4d832c6c19aaeacdceff482e0984b4e62f6": "61800af55e102ec72f866579da11aa20",
".git/objects/56/430465f6ae049d0a024f3ded8b5182df890fda": "29a801a6afcade44c38e49a9067f944d",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/39d7640b58b17f94b6c4c44699fe634bd7bb61": "85f009aebee4f9d6dda63544f494d800",
".git/objects/5b/4807cf6513aa9fbcff6349cd5b11325a005035": "1488629362e9a2d00bc298e3a281d9bc",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/41a89d7b8acc41da9de1b058ee436d11a325ed": "3550164f74b09c53d8eb7ef9162d6576",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/b83fc73e3a59a70908ec0ae48ad75f49e45072": "11deeb366de47cdf34895ce44f09be09",
".git/objects/73/d459e7dac5c0c9a49370c67b5b0fb604b2c5a2": "a8af78021161b6521017f3cbc7ca2aac",
".git/objects/82/e05e905301903153f2dd7c6015f43fbeac31a5": "ff0f9d7f3969e1d1f56b9c5e303c541e",
".git/objects/85/ebcf3985223289e46bc929233ee20a70565a41": "411b39de5456e94465f3ba2b8972c451",
".git/objects/85/ec8cc890594a2be17b1930a4faa88adfb35461": "5ead083017702f8ba9474afe2204ec6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/fcb7d9660b874182433b4a5c4c4856d72872fa": "c265b4e23dad0f571b184dfb2bf17fac",
".git/objects/8f/7a0aca083dd17f1926fe64de562f1888972e73": "1e0afa78149355b5b17481b1a906797b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/ae/e8a28082f443e97bac5862959a83a8802bf295": "ee78f68e9c3141b983e0d0b61ae93dcf",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/8a1550c536a500052bf00eb4a8261d36f594da": "d794ca3f8d5a421c86a966d6e7b423e1",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d2/97bd9cd50547495a38858c3bd57abe9a60d0c2": "4cf29c05476213874697167f62f0b946",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/e220ea3670594129601c9871ea1cc180db5e18": "28534dc0ff57359dfaa3a2849b9d1355",
".git/objects/d9/3ca8d5886fb64a2f08671660f320a3a2fde5ea": "1a3584755df6b06a7178cb6a47dc17c5",
".git/objects/dc/c0a050dcd097100f912159fc258a2d586beb7b": "93018c33b6baf491575f672866040845",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/7e320fcc0a18999dcc3e877c2f0159f72bbc31": "984b620474dd84b2bb4abcae315842a9",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/1ce90f8bec7810520fd13ee28ba4c72cb150eb": "f60c8fe950d2dd73e583de5aac7dbe54",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/48b8bda30d9015b46418c0abd6edd9b8d724f4": "893cbe3cc295fcc877859cdb50e0e92d",
".git/objects/f4/137c8939d9c80afc77b5906e37d87d70936819": "3d996cf00f6b014cf776a2e165174b62",
".git/refs/heads/main": "75b11445994e91fe8f24e01c2e4d23f1",
".git/refs/remotes/origin/main": "65e8b30e86d6a19cd7eeff919c671899",
"assets/AssetManifest.bin": "c1c9c60bb4308ef2a09467ee95d8fa4c",
"assets/AssetManifest.bin.json": "719648f310d6862dae5e6b7e77afe1c8",
"assets/AssetManifest.json": "4f01765349b8378735225afe590e7b58",
"assets/assets/images/akhwat.png": "431362b5ff1aad9154c3711b487769ed",
"assets/assets/images/bingkai.png": "c23315df347476d6d6ceac3be40b9a42",
"assets/assets/images/damai.png": "c08cb57ffde80d17342a5bd215271c3b",
"assets/assets/images/ikhwan.png": "3374838c299e3a2fffb77f63d997d61e",
"assets/assets/images/info.jpg": "7ee44a3f378e422a77de1ec242e43227",
"assets/assets/images/me.jpg": "9006f3ff356f2bd24e7fc335a3521f6b",
"assets/assets/images/mo.jpg": "1bb2d406a29611d523c06522ed220fa1",
"assets/assets/images/pascanikah.png": "b547768d62ae3813acee7c1ea7c0558a",
"assets/assets/images/peduli.png": "9e5089f43a81a429485eb13dcdf4e0f3",
"assets/assets/images/poster.jpg": "19db7b0e86a011bd988ce70b11619413",
"assets/assets/images/pranikah.png": "6d489cbda58e418021dd197066f9ae4e",
"assets/assets/images/tenang.png": "2147921977be0a89d7887db7ba5361fa",
"assets/assets/images/tr.jpg": "201f1c400e9b8cdb9937b1051fa0e211",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "84b33241a1301b3dbba6b7d3ea52f401",
"assets/NOTICES": "b061e9e7b665e6edcee0662ca2d84348",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d994cd454bd7451438d65dd8764d2193",
"/": "d994cd454bd7451438d65dd8764d2193",
"main.dart.js": "43fece806f323f274f8cb69f0e8e864d",
"manifest.json": "c1221dfddf81c86f513f05475bd8004a",
"sqflite_sw.js": "cceb72d8592a5ad4acc7f296e4a96d4e",
"sqlite3.wasm": "f08450f1d5a088a01cec0eb541c3aeca",
"version.json": "7a916252544f91487bb28b39c386ea63"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
