import e from"jszip";import t from"tweetnacl";import n from"tweetnacl-util";import{Contract as o}from"@ethersproject/contracts";import{verifyMessage as r}from"@ethersproject/wallet";import{Web3Provider as a}from"@ethersproject/providers";import s from"@metamask/detect-provider";import"eth-object";import{mappingAt as i}from"eth-util-lite";import c from"protons";import l from"multihashing";import d from"cids";import p from"libp2p";import u from"libp2p-websockets";import y from"@lit-protocol/libp2p-webrtc-direct";import{NOISE as m}from"libp2p-noise";import{FaultTolerance as g}from"libp2p/src/transport-manager";import h from"libp2p-mplex";import f from"libp2p-kad-dht";import w from"peer-id";import"multiaddr";import b from"libp2p-bootstrap";import k from"it-pipe";import"it-length-prefixed";import"it-pushable";import v from"secrets.js-lit";import T from"uint8arrays/from-string";import E from"uint8arrays/to-string";import S from"it-all";!function(e){var t=function(e){var t,n=Object.prototype,o=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,o){var r=Object.create((t&&t.prototype instanceof h?t:h).prototype),a=new L(o||[]);return r._invoke=function(e,t,n){var o=p;return function(r,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===r)throw a;return K()}for(n.method=r,n.arg=a;;){var s=n.delegate;if(s){var i=I(s,n);if(i){if(i===g)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var c=d(e,t,n);if("normal"===c.type){if(o=n.done?m:u,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=m,n.method="throw",n.arg=c.arg)}}}(e,n,a),r}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",u="suspendedYield",y="executing",m="completed",g={};function h(){}function f(){}function w(){}var b={};b[a]=function(){return this};var k=Object.getPrototypeOf,v=k&&k(k(P([])));v&&v!==n&&o.call(v,a)&&(b=v);var T=w.prototype=h.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){function n(r,a,s,i){var c=d(e[r],e,a);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&o.call(p,"__await")?t.resolve(p.__await).then(function(e){n("next",e,s,i)},function(e){n("throw",e,s,i)}):t.resolve(p).then(function(e){l.value=e,s(l)},function(e){return n("throw",e,s,i)})}i(c.arg)}var r;this._invoke=function(e,o){function a(){return new t(function(t,r){n(e,o,t,r)})}return r=r?r.then(a,a):a()}}function I(e,n){var o=e.iterator[n.method];if(o===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=d(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,g;var a=r.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:K}}function K(){return{value:t,done:!0}}return f.prototype=T.constructor=w,w.constructor=f,f.displayName=c(w,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,i,"GeneratorFunction")),e.prototype=Object.create(T),e},e.awrap=function(e){return{__await:e}},E(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,o,r,a){void 0===a&&(a=Promise);var s=new S(l(t,n,o,r),a);return e.isGeneratorFunction(n)?s:s.next().then(function(e){return e.done?e.value:s.next()})},E(T),c(T,i,"Generator"),T[a]=function(){return this},T.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return i.type="throw",i.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),l=o.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:P(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}();const I={name:"AES-CBC",length:256};function A(e,o,r){switch(r){case"x25519-xsalsa20-poly1305":{const r=t.box.keyPair();let a;try{a=n.decodeBase64(e)}catch(e){throw new Error("Bad public key")}const s=n.decodeUTF8(o),i=t.randomBytes(t.box.nonceLength),c=t.box(s,i,a,r.secretKey);return{version:"x25519-xsalsa20-poly1305",nonce:n.encodeBase64(i),ephemPublicKey:n.encodeBase64(r.publicKey),ciphertext:n.encodeBase64(c)}}default:throw new Error("Encryption type/version not supported")}}function x(e,o){switch(e.version){case"x25519-xsalsa20-poly1305":{const r=n.decodeBase64(o),a=n.decodeBase64(e.nonce),s=n.decodeBase64(e.ciphertext),i=n.decodeBase64(e.ephemPublicKey),c=t.box.open(s,a,i,r);let l;try{l=n.encodeUTF8(c)}catch(e){throw new Error("Decryption failed.  Could not encode result as utf8")}if(l)return l;throw new Error("Decryption failed.  Output is falsy")}default:throw new Error("Encryption type/version not supported.")}}var L=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}];const P=c("\nmessage Request {\n  enum Type {\n    HANDSHAKE = 0;\n    GET_KEY_FRAGMENT = 1;\n    STORE_KEY_FRAGMENT = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragment getKeyFragment = 2;\n  optional StoreKeyFragment storeKeyFragment = 3;\n  optional bytes authSig = 4;\n  optional TokenParams tokenParams = 5;\n  optional bytes clientPubKey = 6;\n  optional bytes merkleProof = 7;\n}\nmessage Response {\n  enum Type {\n    HANDSHAKE_RESPONSE = 0;\n    GET_KEY_FRAGMENT_RESPONSE = 1;\n    STORE_KEY_FRAGMENT_RESPONSE = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragmentResponse getKeyFragmentResponse = 2;\n  optional StoreKeyFragmentResponse storeKeyFragmentResponse = 3;\n  optional bytes serverPubKey = 4;\n}\nmessage GetKeyFragment {\n  required bytes keyId = 1;\n}\nmessage GetKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    NOT_FOUND = 1;\n    AUTH_FAILURE = 2;\n    ERROR = 3;\n  }\n  required Result result = 1;\n  optional bytes keyId = 2;\n  optional bytes fragmentValue = 3;\n}\nmessage StoreKeyFragment {\n  required bytes fragmentValue = 1;\n  required bytes fragmentNumber = 2;\n}\nmessage StoreKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    AUTH_FAILURE = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes errorMessage = 2;\n}\nmessage TokenParams {\n  required bytes tokenAddress = 1;\n  required bytes tokenId = 2;\n  required bytes chain = 3;\n}\n"),K={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137,name:"Polygon",symbol:"MATIC",decimals:18,rpcUrls:["https://floral-rough-flower.matic.quiknode.pro/a17b25f97cc396bb2b6aaf85a005f579bf93dc73/"],blockExplorerUrls:["https://explorer.matic.network"],balanceStorageSlot:1,type:"ERC1155",websocketUrl:"wss://floral-rough-flower.matic.quiknode.pro/a17b25f97cc396bb2b6aaf85a005f579bf93dc73/"},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1,name:"Ethereum",symbol:"ETH",decimals:18,balanceStorageSlot:1,type:"ERC1155",websocketUrl:"wss://mainnet.infura.io/ws/v3/ddf1ca3700f34497bca2bf03607fde38"},kovan:{contractAddress:"0xA9b2180C2A479Ba9b263878C4d81AE4e0E717846",chainId:42,name:"Ethereum",symbol:"ETH",decimals:18,rpcUrls:["https://kovan.infura.io/v3/ddf1ca3700f34497bca2bf03607fde38"],blockExplorerUrls:["https://kovan.etherscan.io"],balanceStorageSlot:1,type:"ERC20"}};async function N(){if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});const e=await s(),t=await e.request({method:"eth_requestAccounts"});return{web3:e,account:t[0].toLowerCase()}}async function F({tokenAddress:e,balanceStorageSlot:t,tokenId:n}){console.log(`getMerkleProof for { tokenAddress, balanceStorageSlot, tokenId } ${e}, ${t}, ${n}`);const{web3:o,account:r}=await N();console.log(`getting mappingAt(${t}, ${n}, ${r})`);const a=i(t,parseInt(n),r);console.log("storageAddress: ",a);let s=0,c=null,l=null;for(;!c&&s<6;)try{l||(l=await o.request({method:"eth_getBlockByNumber",params:["latest",!1]}),console.log("rpcBlock: ",l)),c=await o.request({method:"eth_getProof",params:[e,[a],l.number]}),console.log("rpcProof: ",c)}catch(e){console.log(e),console.log(`error getting rpc proof, have made ${s} attempts`),s++}return{header:l,accountProof:c.accountProof,storageProof:c.storageProof[0].proof,blockHash:l.hash}}async function R({chain:e}){const{web3:t,account:n}=await N(),o=await t.request({method:"eth_chainId",params:[]}),r=K[e],a="0x"+r.chainId.toString("16");if(console.debug(`checkAndSignAuthMessage with chainId ${o} and chain set to ${e} and selectedChain is `,r),o!==a){if(1===r.chainId)return{errorCode:"wrong_chain"};{const e=[{chainId:a,chainName:r.name,nativeCurrency:{name:r.name,symbol:r.symbol,decimals:r.decimals},rpcUrls:r.rpcUrls,blockExplorerUrls:r.blockExplorerUrls}],n=await t.request({method:"wallet_addEthereumChain",params:e}).catch();n&&console.log(n)}}let s=localStorage.getItem("lit-auth-signature");return s||(await C(),s=localStorage.getItem("lit-auth-signature")),s=JSON.parse(s),n!==s.address&&(await C(),s=localStorage.getItem("lit-auth-signature"),s=JSON.parse(s)),s}async function C(){const e=(new Date).toISOString(),o="I am creating an account to use LITs at {{timestamp}}".replace("{{timestamp}}",e),a=await async function({body:e}){const{web3:t,account:n}=await N();console.log("signing with ",n);const o=await t.request({method:"personal_sign",params:[n,e]}),a=r(e,o).toLowerCase();if(console.log("Signature: ",o),console.log("recovered address: ",a),a!==n){const e=`ruh roh, the user signed with a different address (${a}) then they're using with web3 (${n}).  this will lead to confusion.`;throw console.error(e),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(e)}return{signature:o,address:a}}({body:o});localStorage.setItem("lit-auth-signature",JSON.stringify({sig:a.signature,derivedVia:"web3.eth.personal.sign",signedMessage:o,address:a.address}));const s=t.box.keyPair();localStorage.setItem("lit-comms-keypair",JSON.stringify({publicKey:n.encodeBase64(s.publicKey),secretKey:n.encodeBase64(s.secretKey)})),console.log("generated and saved lit-comms-keypair")}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const M=e=>{window.parent.postMessage(e,"*")};function B(e){return new Promise((t,n)=>{const o=new FileReader;o.onloadend=()=>{t(o.result)},o.readAsDataURL(e)})}const O={};async function U(t,n){const o=await async function(e){return await crypto.subtle.importKey("jwk",JSON.parse(e),I,!0,["encrypt","decrypt"])}(n),r=await async function(e,t){const n=await e.slice(0,16).arrayBuffer(),o=await e.slice(16).arrayBuffer();return await crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,o)}(t,o),a=new e;return(await a.loadAsync(r)).files}async function $(e){const t=await e.generateAsync({type:"blob"}),n=await t.arrayBuffer();console.log("blob",t);const o=await async function(){return await crypto.subtle.generateKey(I,!0,["encrypt","decrypt"])}(),r=await async function(e,t){const n=window.crypto.getRandomValues(new Uint8Array(16)),o=await crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t);return new Blob([n,new Uint8Array(o)],{type:"application/octet-stream"})}(o,n),a=await crypto.subtle.exportKey("jwk",o);return console.log("exportedSymmKey",a),{symmetricKey:JSON.stringify(a),encryptedZip:r}}async function j(e){if(O[e])return O[e];const t=await fetch("https://unpkg.com/"+e);if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);const n=await t.blob(),o=await B(n);return O[e]=o,o}async function D({symmetricKey:e}){const t=document.getElementById("mediaGridHolder"),n=document.getElementById("lockedHeader"),o=await(await fetch(window.encryptedZipDataUrl)).blob(),r=await U(o,e),a=await r["string.txt"].async("text");t.innerHTML=a,n.innerText="UNLOCKED",window.locked=!1}const G=({tokenAddress:e,tokenId:t,chain:n})=>{const o=e.toLowerCase(),r=parseInt(t).toString(16).padStart(64,"0"),a=l(Buffer.from(`${o}|${r}|${n}`),"sha2-256");return new d(a).toString()},{Request:q,Response:H,StoreKeyFragmentResponse:J,GetKeyFragmentResponse:W}=P;class Y{constructor(e={alertWhenUnauthorized:!0,minNodeCount:6,bootstrapUrls:["/dns4/node1.litgateway.com/tcp/9090/https/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ","/dns4/node1.litgateway.com/tcp/9091/https/p2p-webrtc-direct/p2p/QmfLL5EqgyJKrD1oe8ZFGLM7HXGadGuQR9RqEeM1hBVqtP","/dns4/node1.litgateway.com/tcp/9092/https/p2p-webrtc-direct/p2p/Qmeo7u9goqqKA3Fkj7VmT7EkpgtjZK6DaJBWYBGW5czo2A","/dns4/node1.litgateway.com/tcp/9093/https/p2p-webrtc-direct/p2p/QmVVtPgZWPNUmcPf57PWjij1kosrZhbHNgrMwkog1Eyn1H","/dns4/node1.litgateway.com/tcp/9094/https/p2p-webrtc-direct/p2p/QmRae8zUD7vdQjf4cAegtuFX78BfrWmdhdsVaWN9VDVFs9","/dns4/node1.litgateway.com/tcp/9095/https/p2p-webrtc-direct/p2p/QmU7e6JrtVt6PnpShJkdaN9W68eVX9JRxYxo9nVLupUGtG","/dns4/node1.litgateway.com/tcp/9096/https/p2p-webrtc-direct/p2p/QmZK4A6CRL8gcsooCpiWuxkguXJartbGDizjs7f11ALevm","/dns4/node1.litgateway.com/tcp/9097/https/p2p-webrtc-direct/p2p/QmUA9MUPs3eG7vcuQvZzwWEodzdW7xaDFyanpmuwjWEMk1","/dns4/node1.litgateway.com/tcp/9098/https/p2p-webrtc-direct/p2p/QmYJpEuUaojzYhWXShH29xQzXbJoS2YyKyEdkKP77nK1Q4","/dns4/node1.litgateway.com/tcp/9099/https/p2p-webrtc-direct/p2p/QmeJiT66sYz4P9y44W1LaoWjw42AefFxJnagyDCNpJys1w"]}){if(this.config=e,this.libp2p=null,this.connectedNodes=new Set,this.serverPubKeys={},this.ready=!1,"undefined"!=typeof window&&window&&window.localStorage){let t=window.localStorage.getItem("LitNodeClientConfig");t&&(t=JSON.parse(t)),this.config=_({},e,t)}}async getEncryptionKey({tokenAddress:e,tokenId:t,chain:n,authSig:o,merkleProof:r}){const a=await this.getEncryptionKeyFragments({tokenAddress:e,tokenId:t,authSig:o,chain:n,merkleProof:r});if(a.some(e=>"AUTH_FAILURE"===e))return this.config.alertWhenUnauthorized&&alert("You are not authorized to unlock to this LIT"),document.dispatchEvent(new Event("lit-authFailure")),null;const s=JSON.parse(localStorage.getItem("lit-comms-keypair")),i=[];for(let e=0;e<a.length;e++)if(a[e].error)console.log(`kFrag number ${e} has an error`,a[e].error);else{const t=x(JSON.parse(a[e]),s.secretKey);i.push(t)}const c=v.combine(i);return E(T(c,"base16"))}async saveEncryptionKey({tokenAddress:e,tokenId:t,chain:o,authSig:r,symmetricKey:a,merkleProof:s}){const i=Array.from(this.connectedNodes),c=i.length,l=E(T(a),"base16");console.debug(`splitting up into ${c} shares with a threshold of 3`);const d=v.share(l,c,3);if(d.length!==i.length)throw new Error(`kFrags.length (${d.length}) !== nodes.length (${i.length})`);const p=[],u=e.toLowerCase();for(let e=0;e<i.length;e++){const a=i[e];console.debug(`storing kFrag in node ${e+1} of ${i.length}`);const c=n.encodeBase64(this.serverPubKeys[a]),l=JSON.stringify(A(c,d[e],"x25519-xsalsa20-poly1305"));p.push(this.storeDataWithNode({peerId:a,tokenAddress:u,tokenId:t,fragmentNumber:e,val:l,authSig:r,chain:o,merkleProof:s}).catch(e=>({error:e})))}const y=await Promise.all(p);if(console.log("resps: ",y),y.some(e=>"AUTH_FAILURE"===e))return this.config.alertWhenUnauthorized&&alert("You are not authorized to publish to this LIT"),document.dispatchEvent(new Event("lit-authFailure")),{success:!1};const m=y.filter(e=>!1===e||e.error).length;return console.log("bad resp count",m),c-m<this.config.minNodeCount?(alert("An error occurred and your LIT was not stored.  Please try again."),document.dispatchEvent(new Event("lit-storageFailure")),{success:!1}):{success:!0}}async getEncryptionKeyFragments({tokenAddress:e,tokenId:t,authSig:n,chain:o,merkleProof:r}){const a=e.toLowerCase(),s=G({tokenAddress:e,tokenId:t,chain:o}),i=new d(s),c=await S(this.libp2p.contentRouting.findProviders(i,{timeout:6e4}));console.log(`Found ${c.length} providers`);const l=[];for(let e=0;e<c.length;e++){const i=c[e].id.toB58String();console.debug(`Getting ${s} from ${i}`),l.push(this.getDataFromNode({peerId:i,tokenAddress:a,tokenId:t,authSig:n,keyId:s,chain:o,merkleProof:r}).catch(e=>({error:e})))}const p=await Promise.all(l);return console.log("kFrags: ",p),p}async storeDataWithNode({peerId:e,tokenAddress:t,tokenId:n,fragmentNumber:o,val:r,authSig:a,chain:s,merkleProof:i}){console.debug(`storing data with node ${e} with tokenAddress ${t} and tokenId ${n}`);const c=q.encode({type:q.Type.STORE_KEY_FRAGMENT,storeKeyFragment:{fragmentValue:T(r),fragmentNumber:T(o)},authSig:T(JSON.stringify(a)),tokenParams:{tokenAddress:T(t),tokenId:T(n.toString()),chain:T(s)},merkleProof:T(JSON.stringify(i))});return await this.sendCommandToPeer({peerId:e,data:c})}async getDataFromNode({peerId:e,tokenAddress:t,tokenId:o,keyId:r,authSig:a,chain:s,merkleProof:i}){console.debug(`getDataFromNode ${e} with keyId ${r}`);const c=JSON.parse(localStorage.getItem("lit-comms-keypair")),l=q.encode({type:q.Type.GET_KEY_FRAGMENT,getKeyFragment:{keyId:T(r)},authSig:T(JSON.stringify(a)),tokenParams:{tokenAddress:T(t),tokenId:T(o.toString()),chain:T(s)},clientPubKey:n.decodeBase64(c.publicKey),merkleProof:T(JSON.stringify(i))});return await this.sendCommandToPeer({peerId:e,data:l})}async handshakeWithSgx({peerId:e}){console.debug(`handshakeWithSgx ${e}`);const t=q.encode({type:q.Type.HANDSHAKE});return await this.sendCommandToPeer({peerId:e,data:t})}async sendCommandToPeer({peerId:e,data:t}){var o=this;const r=this.libp2p.connectionManager.get(w.createFromB58String(e)),{stream:a}=await r.newStream(["/lit/1.0.0"]);console.debug(`sendCommandToPeer ${e}`);let s=null;return await k([t],a,async function(t){console.debug("in sendCommandToPeer callback");const{value:r}=await t.next(),a=H.decode(r.slice());a.type===H.Type.HANDSHAKE_RESPONSE?(o.serverPubKeys[e]=a.serverPubKey,console.log("handshake success for "+e+" - got server pub key "+n.encodeBase64(a.serverPubKey)),s=!0):a.type===H.Type.STORE_KEY_FRAGMENT_RESPONSE?a.storeKeyFragmentResponse.result===J.Result.SUCCESS?(console.log("success storing key fragment"),s=!0):a.storeKeyFragmentResponse.result===J.Result.AUTH_FAILURE?(console.log("auth failure.  user doesnt own token"),s="AUTH_FAILURE"):(console.log("error storing key fragment: "),console.log(E(a.storeKeyFragmentResponse.errorMessage)),s=!1):a.type===H.Type.GET_KEY_FRAGMENT_RESPONSE?a.getKeyFragmentResponse.result===W.Result.SUCCESS?(console.log("success getting key fragment"),s=E(a.getKeyFragmentResponse.fragmentValue)):a.getKeyFragmentResponse.result===W.Result.NOT_FOUND?(console.log("key fragment not found"),s=!1):a.getKeyFragmentResponse.result===W.Result.AUTH_FAILURE?(console.log("auth failure.  user doesnt own token"),s="AUTH_FAILURE"):(console.log("unknown error getting key fragment"),s=!1):console.log("unknown response type")}),s}async connect(){var e=this;this.libp2p=await p.create({modules:{transport:[u,y],connEncryption:[m],streamMuxer:[h],dht:f,peerDiscovery:[b]},transportManager:{faultTolerance:g.NO_FATAL},config:{dht:{enabled:!0},peerDiscovery:{[b.tag]:{enabled:!0,list:this.config.bootstrapUrls}}}}),this.libp2p.on("peer:discovery",e=>{console.debug(`Found peer ${e.toB58String()}`)}),this.libp2p.connectionManager.on("peer:connect",async function(t){const n=t.remotePeer.toB58String();console.debug(`Connected to ${n}`),e.connectedNodes.has(n)||(e.connectedNodes.add(n),setTimeout(async function(){await e.handshakeWithSgx({peerId:n})},500))}),this.libp2p.connectionManager.on("peer:disconnect",e=>{const t=e.remotePeer.toB58String();console.debug(`Disconnected from ${t}`),this.connectedNodes.delete(t)}),await this.libp2p.start(),console.debug(`libp2p id is ${this.libp2p.peerId.toB58String()}`),this.libp2p.multiaddrs.forEach(e=>console.debug(`${e.toString()}/p2p/${this.libp2p.peerId.toB58String()}`));const t=window.setInterval(()=>{Object.keys(this.serverPubKeys).length>=this.config.minNodeCount&&(clearInterval(t),this.ready=!0,console.debug("lit is ready"),document.dispatchEvent(new Event("lit-ready")))},500);window.libp2p=this.libp2p,window.PeerId=w}}"undefined"!=typeof window&&((()=>{try{return window.self!==window.top}catch(e){return!0}})()?(async()=>{console.log("calling listenForFrameParentMessages from "+window.origin),window.addEventListener("message",async e=>{const t=e.source===window.parent;if(t&&console.log("onMessage in frame: ",e),t){const{response:t,respondingToCommand:n}=e.data;if("LIT_ACK"===t)return void(window.useLitPostMessageProxy=!0);if("getEncryptionKey"===n){const{encryptionKey:t}=e.data;D({symmetricKey:t})}}},!1)})():(async()=>{console.log("calling listenForChildFrameMessages from "+window.origin),window.addEventListener("message",async e=>{let t=!1;for(let n=0;n<frames.length;n++)frames[n]===e.source&&(t=n);if(!1!==t){console.log("onMessage in parent: ",e);const{command:n,params:o}=e.data;if("LIT_SYN"===n)return void window.frames[t].postMessage({response:"LIT_ACK"},"*");if("LitNodeClient"===e.data.target&&"getEncryptionKey"===n){const e=await window.litNodeClient.getEncryptionKey(_({},o));window.frames[t].postMessage({respondingToCommand:n,encryptionKey:e},"*")}}},!1)})());const V={zipAndEncryptString:async function(t){const n=new e;return n.file("string.txt",t),$(n)},zipAndEncryptFiles:async function(t){const n=new e;for(let e=0;e<t.length;e++)n.folder("encryptedAssets").file(t[e].name,t[e]);return $(n)},encryptZip:$,decryptZip:U,connectWeb3:N,checkAndSignAuthMessage:R,createHtmlLIT:async function({title:e,htmlBody:t,css:n,encryptedZipDataUrl:o,tokenAddress:r,tokenId:a,chain:s,npmPackages:i=[]}){let c="";for(let e=0;e<i.length;e++)c+=`<script src="${await j(i[e])}"><\/script>\n`;return`\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>${e}</title>\n    <style id="jss-server-side">${n}</style>\n    ${c}\n    <script>\n      var encryptedZipDataUrl = "${o}"\n      var tokenAddress = "${r}"\n      var tokenId = "${a}"\n      var chain = "${s}"\n      var locked = true\n      var useLitPostMessageProxy = false\n\n      document.addEventListener('lit-ready', function(){\n        var unlockButton = document.getElementById('unlockButton')\n        if (unlockButton) {\n          unlockButton.disabled = false\n        }\n\n        var loadingSpinner = document.getElementById('loadingSpinner')\n        if (loadingSpinner) {\n          loadingSpinner.style = 'display: none;'\n        }\n\n        var loadingText = document.getElementById('loadingText')\n        if (loadingText){\n          loadingText.innerText = ''\n        }\n      })\n    <\/script>\n    <script onload='LitJsSdk.default.litJsSdkLoadedInALIT()' src="https://jscdn.litgateway.com/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">${t}</div>\n    <script>\n      var unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n      unlockButton.disabled = true\n    <\/script>\n  </body>\n</html>\n  `},mintLIT:async function({chain:e,quantity:t}){console.log(`minting ${t} tokens on ${e}`);try{const n=await R({chain:e});if(n.errorCode)return n;const{web3:r,account:s}=await N(),i=K[e].contractAddress,c=new o(i,L,new a(r).getSigner());console.log("sending to chain...");const l=await c.mint(t);console.log("sent to chain.  waiting to be mined...");const d=await l.wait();console.log("txReceipt: ",d);const p=d.events[0].args[3].toNumber();return{txHash:d.transactionHash,tokenId:p,tokenAddress:i,mintingAddress:s,authSig:n}}catch(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})}},toggleLock:async function(){const e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader");if(window.locked){if(window.publicContent=e.innerHTML,!window.useLitPostMessageProxy&&!window.litNodeClient.ready)return void alert("The LIT network is still connecting.  Please try again in about 10 seconds.");const t=await R({chain:window.chain});if(t.errorCode&&"wrong_chain"===t.errorCode)return void alert("You are connected to the wrong blockchain.  Please switch your metamask to "+window.chain);const{balanceStorageSlot:n}=K[window.chain];let o=null;try{o=await F({tokenAddress:window.tokenAddress,balanceStorageSlot:n,tokenId:window.tokenId})}catch(e){return console.log(e),void alert("Error - could not obtain merkle proof.  Some nodes do not support this operation yet.  Please try another ETH node.")}if(window.useLitPostMessageProxy)return void M({command:"getEncryptionKey",target:"LitNodeClient",params:{tokenAddress:window.tokenAddress,tokenId:window.tokenId,chain:window.chain,authSig:t,merkleProof:o}});const r=await window.litNodeClient.getEncryptionKey({tokenAddress:window.tokenAddress,tokenId:window.tokenId,authSig:t,chain:window.chain,merkleProof:o});await D({symmetricKey:r})}else e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0},LIT_CHAINS:K,LitNodeClient:Y,protobufs:P,kFragKey:G,encryptWithPubKey:A,decryptWithPrivKey:x,fileToDataUrl:B,getMerkleProof:F,findLITs:async function(){console.log("findLITs");try{const{web3:e,account:t}=await N(),n=function(e){for(let t=0;t<Object.keys(K).length;t++){const n=Object.keys(K)[t];if("0x"+K[n].chainId.toString("16")===e)return n}}(await e.request({method:"eth_chainId",params:[]})),r=new o(K[n].contractAddress,L,new a(e).getSigner());console.log("getting maxTokenid");const s=await r.tokenIds(),i=[],c=[];for(let e=0;e<=s;e++)i.push(t),c.push(e);return console.log("getting balanceOfBatch"),{tokenIds:(await r.balanceOfBatch(i,c)).map((e,t)=>0===e.toNumber()?null:t).filter(e=>null!==e),chain:n}}catch(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})}},sendLIT:async function({tokenMetadata:e,to:t}){console.log("sendLIT for ",e);try{const{web3:n,account:r}=await N(),{tokenAddress:s,tokenId:i}=e,c=new o(s,L,new a(n).getSigner());return console.log("transferring"),await c.safeTransferFrom(r,t,i,1,[]),console.log("sent to chain"),{success:!0}}catch(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})}},litJsSdkLoadedInALIT:()=>{M({command:"LIT_SYN"}),setTimeout(function(){if(window.useLitPostMessageProxy)console.log("inside lit - parent frame is connected to lit nodes.  using that.");else{console.log("inside lit - no parent frame lit node connection.  connecting ourselves.");const e=new Y;e.connect(),window.litNodeClient=e}},1e3)},unlockLitWithKey:D,injectViewerIFrame:function({destinationId:e,title:t,fileUrl:n,className:o}){if(n.includes("data:"))throw new Error("You can not inject an iFrame with a data url.  Try a regular https URL.");if(new URL(n).host.toLowerCase()===window.location.host.toLowerCase())throw new Error("You cannot host a LIT on the same domain as the parent webpage.  This is because iFrames with the same origin have access to localstorage and cookies in the parent webpage which is unsafe");const r=document.createElement("iframe");r.src=n,r.title=t,r.sandbox="allow-forms allow-scripts allow-popups  allow-modals allow-popups-to-escape-sandbox allow-same-origin",r.loading="lazy",r.allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr; screen-wake-lock; web-share; xr-spatial-tracking",o&&(r.className=o),document.getElementById(e).appendChild(r)},printError:e=>{console.log("Error Stack",e.stack),console.log("Error Name",e.name),console.log("Error Message",e.message)}};export default V;
//# sourceMappingURL=index.modern.js.map
