'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "05fcbb60f9bc98c6369896e79c1332ff",
"assets/AssetManifest.bin.json": "57ffc91afc5814ce1def4f40503b878d",
"assets/assets/catalogue/WasteToWealthCatalogue.pdf": "afda895587f2137cdd8effc30f5c4acf",
"assets/assets/fonts/MomoSignature-Regular.ttf": "7525ae6edbd4ed021affc8db4b80d4bb",
"assets/assets/images/eco_notebook.jpg": "d651ebb51ff0e233573b4555b8f9f96c",
"assets/assets/images/falling_leaves.png": "5dc1aebddfd62aa9d3cfa45628407080",
"assets/assets/images/glass_container.jpg": "2b1145b61c9a7d2a8fea17df04aabafa",
"assets/assets/images/instagram.jpg": "9328a7d6d838c56d501b89c547f6e362",
"assets/assets/images/logo1.png": "4c765dc197430dd43ed631520bb85e71",
"assets/assets/images/logo1.svg": "d03b07fca2683b3bc75bd52a3a105de0",
"assets/assets/images/logo1_noBg.png": "05bd6ecfb5baa20e92822ad3d958a7c1",
"assets/assets/images/logo2.png": "0abe1fcbbbb3462e89e3c7a6ff16ef49",
"assets/assets/images/logo2.svg": "5aa426880b6501671d12bf929a78dc6c",
"assets/assets/images/logo3-nobg.png": "9797538f42779f451cb123ff1a71f552",
"assets/assets/images/logo3.png": "295ce6b4bfc12e68002510940507e669",
"assets/assets/images/logo_nobg.PNG": "09fdbe496ea401baddbed13813216250",
"assets/assets/images/main_banner.jpeg": "ade3160c0e2d54fdd3155aba5c34323d",
"assets/assets/images/main_banner.JPG": "9e5f5c33d414d9d873661aa52ddc6681",
"assets/assets/images/metal_bottle.jpg": "981f2a75e339195026e2010ced610cfc",
"assets/assets/images/paper_bag.jpg": "a1679568847e13a60a4d19cbbe63d96f",
"assets/assets/images/plastic_bottle.png": "2b367df61762162946e925c6e7fa8164",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe1.jpg": "51672910dde46453057158b2446f1636",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe10.jpg": "c90abe06053520f4046a6efb66d56b95",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe2.jpg": "8b89a2be5f706f4d5f329d1299b4a477",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe3.jpg": "d74579d282439bd431314eb762c2a669",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe4.jpg": "794b39f9ed2f70f1f2e8608137f3cc4b",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe5.jpg": "98861686c322b4a540e583de924520ae",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe6.jpg": "27016a5afe32162daeda1f64b4e031e6",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe7.jpg": "6bf7fc176454e5548e7ebd09e8e8af44",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe8.jpg": "f13203de94a24d92e4a03f270f7729f7",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/DELUXE_SCRUNCHIES/scrunchies_deluxe9.jpg": "69046b04d7211491363182b9e12db762",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard1.jpg": "dcac357883221ad11a6f33925f9d1d76",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard10.jpg": "1ab94eba49669bcec4eb6904251b0e7d",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard11.jpg": "e755f26b6bfb85a647ed75400b59bb12",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard2.jpg": "39b14c937b54b0cefcb048343329545d",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard3.jpg": "cd99682d9029d516321b2277e283f40a",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard4.jpg": "c6aa7269e4d02c6296afa6a4568ec163",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard5.jpg": "22fb62b8da79800f020a633bdd88cedc",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard6.jpg": "34c2d9723f8c1ae0ddfd36bc8e621b86",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard7.jpg": "88d60f4869ba444199f5fe4fe1bbb7bb",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard8.jpg": "3a8b8a46501e3ef147295e1da2b84c19",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/SCRUNCHIES/STANDARD_SCRUNCHIES/scrunchies_standard9.jpg": "e5e987e19ab955d68b182e5df9f8896c",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/DELUXE_WRIST_STRAP/deluxe_wrist_strap1.jpg": "5f20be5acf418778f1f414892088fd98",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/DELUXE_WRIST_STRAP/deluxe_wrist_strap2.jpg": "ac896ecb1f2430aa77691b03b4cb13d6",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/DELUXE_WRIST_STRAP/deluxe_wrist_strap3.jpg": "86e33b450533de479fdd81a7ace3e666",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/DELUXE_WRIST_STRAP/deluxe_wrist_strap4.jpg": "02f3681df33c70ab1622c6ae93b8f8b8",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/DELUXE_WRIST_STRAP/deluxe_wrist_strap5.jpg": "d0510125b207c86254cf3895bae3f8b8",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/JEAN_WRIST_STRAP/jean_wrist_strap1.jpg": "8bbfadcf01d42a2fd899cf5d2545c491",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/JEAN_WRIST_STRAP/jean_wrist_strap2.jpg": "bbc4750734fe9ece42f39762cf2cafff",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/JEAN_WRIST_STRAP/jean_wrist_strap3.jpg": "0743da87f5c8e5a8b0563644a89dc3af",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/PREMIUM_WRIST_STRAP/premium_wrist_strap1.jpg": "38924d8ac4419b34547e6e47ae1b7d30",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/PREMIUM_WRIST_STRAP/premium_wrist_strap2.jpg": "46157d872af5d2e8b8edba6164039381",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/PREMIUM_WRIST_STRAP/premium_wrist_strap3.jpg": "3b09b718a1aaaca9e9e7b65de656cf16",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/PREMIUM_WRIST_STRAP/premium_wrist_strap4.jpg": "5fe4c27c35ed1c4773cda57192929673",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/PREMIUM_WRIST_STRAP/premium_wrist_strap5.jpg": "337b5e714cf0cabf9cf5d17eb2f0c280",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap1.jpg": "545ec9eead045e4a22206aad96498a68",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap10.jpg": "ad7c6e6ef12e60724c184e1cf5f19e66",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap11.jpg": "e5f467fc00957ecf3520232a0f67807c",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap12.jpg": "01e6acd327c6ab96ca69758e78d333d1",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap2.jpg": "9fd415eb9d8b7440ec79be4a49311852",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap3.jpg": "2f5042d0e1f2e43e8584806af6a414aa",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap4.jpg": "fb134431b443da6a42595125587b7790",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap5.jpg": "91cd570cb8c76bf5f2cdc326a410fecd",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap6.jpg": "051f3d89cec273b73dfcc0b46fbc6f64",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap7.jpg": "a7f13874909f8b4b6b39ea23c1f2af11",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap8.jpg": "55db06936f153bddb2ea0c114f406204",
"assets/assets/images/PRODUCT/BASIC_COLLECTION/WRIST_STRAP/STANDARD_WRIST_STRAP/standard_wrist_strap9.jpg": "f5e2f16ee4c2e15d98807f1acba97606",
"assets/assets/images/PRODUCT/CORPORATE_ORDERS/corporate1.jpg": "30ee3ad8ae2d239f0a6ae74c41a5e6f2",
"assets/assets/images/PRODUCT/CORPORATE_ORDERS/corporate2.jpg": "e9a2ffa7d448788d6399c6dfdd73516a",
"assets/assets/images/PRODUCT/CORPORATE_ORDERS/corporate3.jpg": "f08e9307a0c668f44fb4184c043dac71",
"assets/assets/images/PRODUCT/PREMIUM_COLLECTION/premium1.jpg": "0880991bbe3ee87c0af7db3112ee051b",
"assets/assets/images/PRODUCT/PREMIUM_COLLECTION/premium2.jpg": "a75b0bafe901676a0717faa998df69bf",
"assets/assets/images/PRODUCT/PREMIUM_COLLECTION/premium3.jpg": "b127abb670be98463c835b207b7ecfb9",
"assets/assets/images/PRODUCT/STANDARD_COLLECTION/TOTEBAG/totebag1.jpg": "c78979f83f0a8f22e0e7d7eb66c04944",
"assets/assets/images/PRODUCT/STANDARD_COLLECTION/TOTEBAG/totebag2.jpg": "b4e8e9e7e93c8d72aef731fcdc16b50c",
"assets/assets/images/PRODUCT/STANDARD_COLLECTION/TOTEBAG/totebag3.jpg": "a61d3926400d6a9d38112f7ecbb0c519",
"assets/assets/images/PRODUCT/STANDARD_COLLECTION/TOTEBAG/totebag4.jpg": "9dedd47e34186e4701f2d46a745f2b8f",
"assets/assets/images/profile_user.jpg": "e2862a26a227b907764c094f3dd8202e",
"assets/assets/images/sample_parcel.jpeg": "d622c39db11678c7e6f38190af2423d5",
"assets/assets/images/secondary_card1.jpeg": "7be3ed994c5c1f8d41fde487e34692c1",
"assets/assets/images/secondary_card1.JPG": "b71da09968a111f01211cf3ede95c178",
"assets/assets/images/secondary_card2.jpeg": "588b11c25438c0a7794e6b81804deb12",
"assets/assets/images/secondary_card2.JPG": "6adda99e21bdd12b18224ec857011d36",
"assets/assets/images/tiktok.png": "d77c30e7309c571b56c34423a0b4ed26",
"assets/assets/images/tote_bag.jpg": "0a5e06cc807c5a71b2f895671615f712",
"assets/FontManifest.json": "aaf5a3e6f2d5a7f5b612cd5a6d1e4586",
"assets/fonts/MaterialIcons-Regular.otf": "012384b1f994a56a51251b2c8360cfc8",
"assets/NOTICES": "f2bf5d82e873bc8b7133381912487e7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d29b628be4264cac3f09baa251e6c2c3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bba2ef665e12b9e443bff2605e921758",
"/": "bba2ef665e12b9e443bff2605e921758",
"main.dart.js": "cf5737f5500d2e8c69056192bfb9cd9c",
"manifest.json": "5f400e9c1665546a78aabc0b364d5a64",
"version.json": "43f59e03d9b802046ffc68b3526ced2b"};
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
