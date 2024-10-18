'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "45b9f5914d3c7ab1c8969d3be299d018",
"version.json": "3be82f25211abb159ad36da8040875d3",
"index.html": "756ae94b34c073de05c6c29a0dceaf11",
"/": "756ae94b34c073de05c6c29a0dceaf11",
"main.dart.js": "f8539c4cffafef8223672b05f8485c92",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c611a3e19433fe36df13d0458891c732",
".git/config": "468934f7bea888cfd3b2d0b4ce6c52f6",
".git/objects/0d/31c93cb11f4ad6e400412ae081d0b7fead87f3": "59badca5d41718f5ee88916c2bc42102",
".git/objects/57/3a8f4092e2696ff5080d43220918bb253d059c": "1c777f24b98a97c3351c37c45fb1aa05",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/35/fbcf97795f7be8241c27b4f2bdc330b86ba7b9": "83ec00c3e4e2afe6994b4af7b12ed6fc",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/c15f61b318189b4da45b4dd9799b41511a47dd": "e4af42c55e2f5a08fc9f236199d3cbb8",
".git/objects/5a/176b52184e492f4ef7a5f9ad9eb910d87235c9": "3656f2a24137b36416dbc13d65236f44",
".git/objects/5f/1f3fea0a44fdf217667e920f96c98b6dfbd927": "a2c7fd91c15d42233fdec48adef3f723",
".git/objects/9c/8303db09c303c6aade0c95d7a9a3691bfeb242": "14856e7d18a1be0f3d865382652715bf",
".git/objects/bb/b560e25b51d0e687af9b1d6e4c16442a84d0ba": "e24fd42ca2f6f45401f7077f088c027a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/236c9df0b3f293bdd5417ceaa6683d85d18e8b": "49644cd9a57fdcb64d6324d84e6d03f9",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/a90c12215b865208ee6c2a454026fdebafd419": "814325c7604809e27492d272cabc3a4f",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/eb05397b3d562b8844879f598ef3c29434ea51": "c203ca1a8e3c20f13928c63baf7431f8",
".git/objects/e2/bb78c7bf729458cd769de18b04fadf13325598": "cc11b0e597db3660d7819c89acd1673a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/68ec7a7738438e3e0c9430c02d10ef643b627f": "9f6e55732216497ec5fabda3568261a4",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/e3/a6aed18335bc3d2fcd7628e0d81f5748c4d6ca": "15e4fc36365e64d58bda4180282028d1",
".git/objects/c6/c78a433e25db286d2e40504a4efe0a02567dac": "7f9c877fccf7c6403542a1a6e1169738",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/d6489678cedffdd44149490474ecfaebef7ac2": "5bac1242734137b0261081c6e8252cf2",
".git/objects/16/aef55869a91608c2ce27a43ecc7d15e824e6af": "f648a485651c350971db34740324a030",
".git/objects/80/ba1399fb6a1eccc52c412f295d10435e02723d": "a87efc03fb80d6545ddacc609a40491a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/a5e7774923cbb090db4eabec0f6b4f5a841d9c": "1e597c64cb914e4549c8110148afd02a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/44f1e96043eabe068f99a2db6cbe68333a1490": "24d54adb320d207eb40cc80616832680",
".git/objects/00/0964ab498caeb8264b236064c74e6806569d50": "7b37e8abd920ceb4422bc9a8ebdaaf23",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/96/0b87004b81ad6f3fe8db87cc526334e000a64f": "632a788fb4341e846b6d58b33905bd4c",
".git/objects/98/046a5bba7814a20f44f81459f35ab0dadaea4b": "aaf56f7c11d63c0d37ae57c12fadb15d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/55/93ebf8913963aeb43c28c9149b1b43d10b397b": "76bfe76bb2616787c0df4bb2ae60b7d2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/6e201b44cf6df152eba51196db843df76c0926": "8f1e0d048fa145b42c222512aa1118a9",
".git/objects/b6/ac8d7497f228d3e33c0551a0fd02cc7195f56e": "523673ccacffc8f49ec474bc90c7f80f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/c9339066383765ca896ff17f7b2b19d8c28d68": "8447fadbd23a0c321a0b352ac6721032",
".git/objects/fa/e59a467596ef52adbb62d3fc8acae4d413b17a": "65956bb3264c391556a0ca7115a50530",
".git/objects/f6/c7057eb17253c76b690b7ee2cc650cbeab3db8": "b47d64621cb6df96eb0c0a1d33972b12",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/4a/acdb20388edb3160e2baedb386ce5da5bf8d1b": "5b74405c7baf8934297340bcb771cd56",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/1f3c930f829b69bcf3041bab09334ef92ce50c": "79838eb49f00abd2eca9cc94d85cd7fb",
".git/objects/2e/d8404fbd1ddcce2ff28c25179e5015bebe5b62": "eaf471f434aded808aadaa08709e5e3f",
".git/objects/8b/c4a35039331f4a920252204ff5c9e10144b60b": "165923337365aec671a19b9434e0e489",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "144aa8ef99204a5581c898f4f54801bb",
".git/logs/refs/heads/main": "6428d0ec941011b5b959e2db83cb1990",
".git/logs/refs/remotes/origin/main": "8cc52f01cb7c16d6fb0286f13e8e9c72",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "21e131813b849df9fba68d7efd01ad6a",
".git/refs/remotes/origin/main": "21e131813b849df9fba68d7efd01ad6a",
".git/index": "08c488c432d6369642592520a9086b20",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/res/images/3d-check.png": "f14ada1ce992acd0c1e5af0fd33293f7",
"assets/res/images/3d-otp.png": "b9688adf278c6c16c8f5b3918a5d40ce",
"assets/res/images/3d-success.png": "7658f2267a8b8240cac788ecee7e9aa1",
"assets/res/images/payments.png": "3e3f68abeebf55319ae780f761e49dc9",
"assets/res/images/3d-connect.png": "bfc9870bd456ffbe37d6fbd6450fee35",
"assets/res/images/close.png": "bc941bb5eb24a47b1e7452fade77f6c4",
"assets/res/fonts/Aloevera-Bold.ttf": "2ecdaecff7808b2d3f1a8d8351297ae9",
"assets/res/fonts/Aloevera-Regular.ttf": "8a04c00748c272aa2366dd82141c1dbe",
"assets/res/fonts/KumbhSans-Bold.ttf": "77dcc56c8b4c555de97279047829eb8c",
"assets/res/fonts/KumbhSans-Light.ttf": "437a0a83bf3e0d68d46e5b622456f307",
"assets/res/fonts/KumbhSans-ExtraBold.ttf": "8877db37fd35d38c8cdd8c75c77d7fc3",
"assets/res/fonts/KumbhSans-Regular.ttf": "ccee8d1a95492b85c2eca5e17aefa2a6",
"assets/res/fonts/KumbhSans-Medium.ttf": "cf06877944512b3fff5dad023bb86ee0",
"assets/res/fonts/Aloevera-Light.ttf": "e476e13be28268622b6603be73849140",
"assets/AssetManifest.json": "24e7cdf39aad6cad0b2f6fa9c71e0e9d",
"assets/NOTICES": "1ac719b6d08dc3e059473fef49cbb72e",
"assets/FontManifest.json": "e534884573dcf6c40fafed187e4fc34b",
"assets/AssetManifest.bin.json": "aff8b5706c55067ff71094d85d9441f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d2c2987c8912149c59b6d50884e972c6",
"assets/fonts/MaterialIcons-Regular.otf": "74c34311046876da80c05118723ffe65",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
