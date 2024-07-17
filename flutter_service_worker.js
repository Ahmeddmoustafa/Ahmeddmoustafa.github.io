'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "403f5b67d17721b7002434a16cf49c5e",
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
".git/index": "3f98e39c3e37384333d51bbc06f9fa4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bebbf7e416b44b428f2f6eb4207e4d00",
".git/logs/refs/heads/main": "5d7c090a5e573af13adb91a35e5bf302",
".git/logs/refs/remotes/origin/main": "22b8bde7cdbfeab51a52866162e5c293",
".git/objects/03/fc933134a15be160221ce6a56c7673c67faf6a": "afba18ce0acf27a14bc4cf1a6d39ef5b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/2ebff69970fd56eabce7839cafec959190a9d2": "3c2c53e75ccaab190253dbc5b25a5c4d",
".git/objects/08/f800982f20a08cdda136b2c9e69f63f91555db": "fe85793997826862372b76d2c531b025",
".git/objects/0d/381897da20345fa63112f19042561f44ee3aa0": "3bf13dd934008af16ac66bd120ec07f3",
".git/objects/0f/12ae535a09a397c3243a3d4f422f4fe5f82834": "5d387c7765d7f3dc75afc109a142a89d",
".git/objects/0f/6ad73609d0642b906c8ff4bef3ccc6da7504a3": "3399461a59a50af740c06e7643c2c211",
".git/objects/10/5983b202ee0efa6901e9ed86bc14666f5ce330": "ec9bc4867cadbc8ffc333aa52b833926",
".git/objects/11/b406612dc49295d9ad498f9379ab6ceb5c18c6": "f78a24836a7c505a4916691b2eb68d00",
".git/objects/14/a2480bf73813dff5ee7a9c2c5442813c3e345a": "c21938e2772b115edfe68f64387987c2",
".git/objects/15/ee798eb1596342da558a2afa1a8374397caab6": "cc4e40dca3715594ebc8b19fa7eb9bac",
".git/objects/15/ff0d69bf6cff989ba4153d8547f4ae4ea4234b": "a9502753acd130d4077422c0cf1e1ceb",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/cb7f9b50e3a9f4045430fabe42e8c1430182fb": "2276955802ea2b07bc3455360db02dab",
".git/objects/1a/1e304050a43a17ba315cf8089510b44446ab35": "d4b813a4fa27c9307c7a013c73d7168c",
".git/objects/1e/43361ff77fa6036478c1f8486ebcc55c84e78d": "a5bea66363f60122de392c0826867a39",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/b029998ceb5b9babcdc114d0ba8f9ec058fe04": "0898634b7736a9257a02d252530b1bbd",
".git/objects/26/4497c1790c6693772e60949b1ef15745c4f915": "9a954c76443a162d2d238b1204681bea",
".git/objects/26/e173113d79b117a26b44d80b26aca55b7eb189": "70dedc5cac97dee7c4f1e62331794a9c",
".git/objects/29/6ded04abb00c2cb22eb5bd50fa2a75bf2a90e9": "c947b1a66d98e133d9aaa2cb46decd19",
".git/objects/2b/1aa428e5bf5f5d5bcb57ee3105935b63765ee0": "965c524365518f59becac707d239357f",
".git/objects/2b/24000b8888b8551d77b7d7cb61e0b6e4e64168": "a8c457745c4642f6280acad1e138a246",
".git/objects/2d/2778caeebb879b50b8489c6c92f18e12f5c96a": "8c4d6d450e916796115c0962ac4bed18",
".git/objects/2f/9e06cd55b933814bcd0950d45f4d7e0aa664ba": "b2807bdd616cf200cfcd524758fd80c9",
".git/objects/34/55ba0eb939b2d8aa8f790bffd987c17c1158ea": "5a2ae06965b16b8478c230176ea45776",
".git/objects/37/00a5ab76cddc125ec674a65523e5806ec04756": "6f0b2a666cbfabf708f99d75cb18cce3",
".git/objects/37/332ee13100a15c5b9a4eeb28215ef6ef677b25": "e8d31c43abba445f422289578c3f5f22",
".git/objects/3e/e3d03cf77dafc531c4558fd15b93af64996dab": "61dd1d4102d86e64f01411f911199832",
".git/objects/3f/07c97dc58d81b3114d5df25395f35df3c31189": "894cc30d6a4e37ebce398459b65a9a33",
".git/objects/41/80bc3bc018595110bb5efdb9c3afc9b48e60ed": "abd840386d9aa7c4b2445f25eb0cda1e",
".git/objects/42/338c3a0a3c664e5281b65007351f5a1ac933c8": "34e41f59ffb2ad7e9bfc2a3fce3b2524",
".git/objects/44/979900bad9524a8d17e213c4a5b2bd25056437": "a09d1dc818e5d21e50ed79e4fa9ac11b",
".git/objects/45/64386cdae96cb050552946fc13fd9344056a32": "ef30159d52badb492affe4078260ca47",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/26c4ce63e62baf26b5f99b32a6836816834fd9": "31c02dcccacfb5954009e1ffedcf6475",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/51/728b19e9c900c2759f4c46ce12baa36deacba1": "15c306009fe76659a2a7f55db3dc99ef",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/263ec36133e19f2a00a269595b7da53dc956aa": "2be84ebe962db61c70fd0bd3c274ba2b",
".git/objects/54/748224c975670306d3e6c5e6d812d487ad0cb1": "16a69ab4f684594922f54a2feba33140",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/a1004642fbb2885a986e43d7bc1ea7e3f06eb8": "f904cd9fed32c7f23c8ae48ac2780ebc",
".git/objects/62/cc312473b5f1ebc6476910c3c6cc27dedf8a51": "5824f123223a567962d6a007be009faf",
".git/objects/65/766debe9ad9b2c1b47eb4bd094608c619424cd": "061106b19e17b26f709b9bfd482f371c",
".git/objects/69/00df3d85e08112312fe7a5d777b2e7b2499796": "6e951a4a572a9042c6e176f0b6fd82a9",
".git/objects/6b/7e2b67bb8d8be4f2059ac218523e1f2ebfc577": "99ba8df8ca140d3e129df1400bcfa183",
".git/objects/6c/b9d387ccb324c357c208cafd6158a1359310a4": "068a9406506093c122f79b6d1be823ca",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6e/3ee63dc496343f91802a5841a657670ae1cfdb": "c1d8958ea72111a5c78666ecf1ffc29a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/b3674a410f1155254c4cce3b95cf0d5490dcb4": "13894a6b0da24924ac70cbe058b06e7b",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/79/b1f5acd0a5bd3efdd62adaed34ab636642c6d9": "a162c445c58f4d9ccf10a1fa7da3d77f",
".git/objects/79/e71de84978639a3b887d4f847212ed8617c641": "151697f5637c88029613123bc0aa3fa9",
".git/objects/7f/3612a48238db21f27e5886c0c5638798c72314": "35f8be7936ecf13336731463567b79a9",
".git/objects/80/8b16de615f9e9c6de0ff44cc3fa67f0bc36e32": "dee42e5d8366473409d7d178f017f170",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8cadeb0df5ead92686cba2be31f1a5b630ea24": "ab5712b1fd9afb23eb0a1651aa003308",
".git/objects/8a/a2ecfe9aa2b7aa83446b3fd5355b38ab463980": "6741a871f81376dfed6cef655dedba5e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8c/1a6a9ee80b8a1625ebbaf8f4bf810d0d24094a": "33a0d2de3042e964046e4b6b7023f768",
".git/objects/8f/0f0e8fe7d2bc4560c0c9971a018ca1503847ee": "b64c824d171e6de041c05335e806c39f",
".git/objects/90/42fca00268dcfe8f179e68d32660954e81a4be": "a9bd1fbab431085f80327cd062b681cc",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/ea2a831f7721e8dabf5d288b41b038e507f6fe": "a6ac19c10ea7a0785309189432289067",
".git/objects/94/f0f7b3e2ffced24f9b9d8d90d198e9da20b062": "e93a15fed849e0baf0fe6eeb3d9a47ce",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/95/76832c1858f404d02afd4e236bb3556b1b8be3": "bbbaee9aa15badf86b0b76af2eec66ff",
".git/objects/97/bc02cf72e373da098ffdebe878a41176ffa7ac": "4b98b90b653fca0711044f04245aca69",
".git/objects/99/0d9fcbfa109c7e0fb86ccf75333d3e030991b1": "ceca2a3332f659672bca46a288bd3b05",
".git/objects/9a/07b3197c3db3d57cacc0fb0bcb4216043c5327": "ed7652b544199ecc40197b433e18cd54",
".git/objects/9a/d5fa39a68f2a51a849da855bcd6daf261f3510": "97c5e4aa8951a46648b338268806d701",
".git/objects/a4/61d4b6ddfac63ffa8964b348f56545976adb95": "4490f356f587399a450e837aefcce46b",
".git/objects/a4/cb700be522ffe80f1abbcbabf244f7cc1c8ae9": "f104b0226d0eb23d83afae4425c5f612",
".git/objects/a5/eced0ab1e3f84d43539516e02e108395a2c31b": "b0af577cf4b0d8a1a628e5dbf225318a",
".git/objects/a6/c81c247d350109712b431fb9167e3240745b53": "2b221dbb471dd8da595d5aefad4fb812",
".git/objects/a7/f00d0aca77a87525e298851ecccaafb2451e11": "b62fa04f2ae60993aec1f5a990cf90f0",
".git/objects/ac/e8a1f003a456bbbb5bfe77cbdf9d6baafa98a4": "f56e6ec77ce31e0bdf7718be57eae388",
".git/objects/ad/049fa73f31a62e0fc57ed3d90744ccaa116334": "03df1383e5d2d8efd00703e2f91ffcc4",
".git/objects/ae/503aa91211e6514730c943db7073dbece97bda": "c4dfc55b8121bf40dcdd61f0adf54f50",
".git/objects/ae/b853b21bbf35aeab14ce19989bcb5afcc9e76d": "bf0bdbc932e9be875576c812ea6c55be",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/f0f8c958a018780c12a3dfdf8304e23626ff80": "c85088283504cf807463c8a8e6e35079",
".git/objects/b2/4ef39b89c714ba76645e9eadee1668781143b2": "591e7bbf5da8b62274dbdb03deaeac98",
".git/objects/b2/d0f7ab222f23568aa95a2c159eb4ebe790a411": "3a1826b54521180d9e41a0c2871a07e2",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/0b61472e03b7572e2d7436720f52fb1f149a75": "893064513912f972bda0cbe8c6eeee1a",
".git/objects/b5/fc9dff0e90a5c9aa9d0d3412458150ee345929": "2e89a12de24f3f3f710c30f10aee96f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/1e5bb461b396c81541273e7c572a22643c7e94": "49339e1a7af92d532ce25881e3fcb722",
".git/objects/c0/2cc013569c9b0d49d8a0707aec3e2a7fe54b12": "efc5167851755b5180bf061cae42bd89",
".git/objects/c3/69df2e7e2c6bc93fbad49bbe67a7ea4f8710b4": "7edeae5f2f33af0d32cfa4908e6e89cf",
".git/objects/c4/5f7d7e20f626d15e4f9bb2edd1f9476c882f71": "5199828709fb8a2215068ace6f5eb4fc",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/f000d27cd734db987b1862d7d6d4c50a75346b": "a0ed07ec64b535fafd62a631afb9b785",
".git/objects/cd/3b7b828d6b5dc5696f1c3f675589bfdcc0a1ba": "8f91f03acee78c065fed8f57122ad765",
".git/objects/ce/5410918ae6f79ce117c042cb88971d526d4bd9": "cc61a53eb42275464e396c1e12e9dc9a",
".git/objects/d0/0c2060137105fddd6f4a48506af4789c01b9fc": "1031c9c971ed7923176611907396fa89",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c97bb879b029e6612825c0b6332b1487cd07a0": "3a7ef8cec99b00bbc56c5c391aecda68",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/9816b230a622d60f6b0cdd8acb9d0e11afbf43": "d000bcb5b1182b025dbea4a08c81d490",
".git/objects/d7/e73fd28dafca676eaa19d4e72398beb2cafc28": "034c72640b618606fd75b7e3c181575a",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/de/205287f3129d36a07b56bf912543fabe4423ce": "ba27f64c97774477917b0eb1deb0b345",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/d039780c66bf33bdeb0bfcdd897914199239d7": "91ec668d84499ae4678c29056ba588de",
".git/objects/e0/838ff9ec3b6db5a6be57a2cc54396fa926453e": "e4044d1704ec98ce2943d077b01bc9f0",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e5/7064da00c64383a3eef449d926f724a4a7d562": "9a9d65be0ccdf398735b5b36cdf859c6",
".git/objects/e5/95986f610ba8caf2f571459eaac4e15a8de47f": "b6cb9615de0ba252503926876358f840",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/8b83cc2cef24bc0450a2f3cf688d2112a736da": "ff134c9630e2505b9c94f4f1838cf463",
".git/objects/e7/a8fe991672fd308704c60937ffdf6b3ad64f27": "b8fc5fdadeaf6765dc39fca05127fb2c",
".git/objects/e7/a95da2b6392a6e11373800a9a86bda43db39d8": "b04a1e4397281a41c21a0be197ccd822",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ed/5cf74042bb87866006b201b6ce80dae08f4a81": "a9ce519ae3c43c102e1ca45bb13b97fb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/830788b3856051ff5d07b6421c42bc2c3e9791": "d5673012c5e3d2bb699da48be46e8877",
".git/objects/fa/14c83ff2ba21886b68c259a337083a4ea67526": "bacd3c0bb6eb3c925459f496edc2f33e",
".git/objects/fc/1ed02050fc663aee1df6481649d25e295e2201": "6e5bddcb7687e0d8e5dfd2a3246f547c",
".git/objects/ff/bff315b7b36b0ee0c114e6d0dd737579585fdd": "3def6ba2dbfeea5e3f66665558b5a551",
".git/refs/heads/main": "16760da47f1bf2125a54a025b44707b6",
".git/refs/remotes/origin/main": "16760da47f1bf2125a54a025b44707b6",
"assets/AssetManifest.bin": "5f410d8e73f2b7757d8597d2e937d47c",
"assets/AssetManifest.bin.json": "45da77d535e54503c717de7d00fbdf10",
"assets/AssetManifest.json": "4a37fb45502d2f1042ec0043cc5db758",
"assets/assets/icons/all.png": "8db5caa712750f4a6f3e39744ff62352",
"assets/assets/icons/all.svg": "8c57a741ad2d9a1238afc00edb604bea",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/not_paid.png": "7465c111732340b4a3f485501991eb3a",
"assets/assets/icons/not_paid.svg": "5e0439fa54d82ee478efd8deb1c481f7",
"assets/assets/icons/no_image.png": "593e3c91d0c96daad6cb7a63dfef098e",
"assets/assets/icons/paid.png": "c9b0ce070f8373683b070cd1bc71de70",
"assets/assets/icons/paid.svg": "584d800eadc3c3553a945dc82e6a3a9f",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/upcoming.png": "91a9f680f07a22f5594564c9281524c2",
"assets/assets/icons/upcoming.svg": "61338e8141d53be887d29b0718a8e869",
"assets/assets/icons/whatsapp.svg": "b65e7fbc7a6bb9e96984d3d2a4784e4f",
"assets/assets/images/itracker.png": "72f797483873a1caaed97369fb54c8f5",
"assets/assets/images/itrackerpng.svg": "79db37bef55d521f568948b2115d5848",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/pdflogo.png": "dedce39251ef755a9d9a2db9fc890baa",
"assets/assets/images/sad.png": "86a0116d05db7f75baaee93bbccb24e6",
"assets/assets/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/Tajawal-Regular.ttf": "d8304accb48d86d9361ad30569823a0d",
"assets/FontManifest.json": "65e0b05e117cd45bece10de0e4b9ebcf",
"assets/fonts/MaterialIcons-Regular.otf": "c4e59df944d150539ecfbfc60eb675fc",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "18fc48551e57daa27baef1dbc15dfa15",
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
"index.html": "ae260272921369e9bcd4fd61bc66fbc4",
"/": "ae260272921369e9bcd4fd61bc66fbc4",
"logo.ico": "b110345d0fc57b98871d72cb41ff94d3",
"main.dart.js": "fd2aa0d1d583e39c66000b1d7c9cd665",
"manifest.json": "eb0967c213ff3e1cc1170c85fc8b5515",
"version.json": "e9eb58db72d407be27e9fa052224c304"};
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
