var _0xc717=["\x61\x72\x67\x76","","\x2F\x6D\x69\x6E","\x66\x6F\x72\x6D\x2D\x64\x61\x74\x61","\x66\x73","\x61\x78\x69\x6F\x73","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x6D\x6B\x64\x69\x72\x53\x79\x6E\x63","\u0110\u01B0\u1EDD\x6E\x67\x20\x64\u1EAB\x6E\x20\x73\x61\x69\x20\u0111\u1EC3\x20\x5C\x20\x74\x68\xE0\x6E\x68\x20\x20\x2F\x20\x74\x72\x6F\x6E\x67\x20\x75\x72\x6C\x20","\x6C\x6F\x67","\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6E\x63","\x6E\x61\x6D\x65","\x6D\x61\x70","\x69\x73\x46\x69\x6C\x65","\x66\x69\x6C\x74\x65\x72","\x2F","\x63\x72\x65\x61\x74\x65\x52\x65\x61\x64\x53\x74\x72\x65\x61\x6D","\x66\x69\x6C\x65\x73","\x61\x70\x70\x65\x6E\x64","\x68\x74\x74\x70\x3A\x2F\x2F\x61\x70\x69\x2E\x72\x65\x73\x6D\x75\x73\x68\x2E\x69\x74\x2F\x77\x73\x2E\x70\x68\x70","\x70\x6F\x73\x74","\x64\x65\x73\x74","\x64\x61\x74\x61","\x4C\u1ED7\x69","\x63\x61\x74\x63\x68","\x63\x72\x65\x61\x74\x65\x57\x72\x69\x74\x65\x53\x74\x72\x65\x61\x6D","\x70\x69\x70\x65","\x74\x68\x65\x6E","\x73\x74\x72\x65\x61\x6D","\x67\x65\x74"];const testFolder=process[_0xc717[0]][2]?process[_0xc717[0]][2]:_0xc717[1];const testFolderRes=testFolder+ _0xc717[2];const FormData=require(_0xc717[3]);const fs=require(_0xc717[4]);const axios=require(_0xc717[5]);let check=true;if(testFolder!= _0xc717[1]){if(!fs[_0xc717[6]](testFolderRes)){try{fs[_0xc717[7]](testFolderRes,511)}catch(error){console[_0xc717[9]](_0xc717[8]);check= false}};if(check){const dirents=fs[_0xc717[10]](testFolder,{withFileTypes:true});const filesNames=dirents[_0xc717[14]]((_0xe956x9)=>{return _0xe956x9[_0xc717[13]]()})[_0xc717[12]]((_0xe956x9)=>{return _0xe956x9[_0xc717[11]]});for(const item in filesNames){getUrl(testFolder+ _0xc717[15]+ filesNames[item],filesNames[item])}}};async function getUrl(_0xe956xc,_0xe956xd){const _0xe956xe= await fs[_0xc717[16]](_0xe956xc);const _0xe956xf= new FormData();_0xe956xf[_0xc717[18]](_0xc717[17],_0xe956xe,_0xe956xd);const _0xe956x10= await axios[_0xc717[20]](_0xc717[19],_0xe956xf,{headers:{}});let _0xe956x11=_0xe956x10[_0xc717[22]][_0xc717[21]];axios[_0xc717[29]](_0xe956x11,{responseType:_0xc717[28]})[_0xc717[27]]((_0xe956x10)=>{_0xe956x10[_0xc717[22]][_0xc717[26]](fs[_0xc717[25]](testFolderRes+ _0xc717[15]+ _0xe956xd))})[_0xc717[24]]((_0xe956x12)=>{console[_0xc717[9]](_0xc717[23])})}