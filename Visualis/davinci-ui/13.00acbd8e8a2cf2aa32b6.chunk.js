(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"39c741a38b7f6fbfdd92":function(t,i,n){"use strict";n.d(i,"a",function(){return a});var e=n("550464552fd011906622"),r=n("cb92241db9e33ee3542f"),s=n("d1886278d8ad2602c715"),o=0;function a(){Object.defineProperty(this,"id",{value:o++}),this.uuid=s.a.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=r.fb,this.side=r.D,this.flatShading=!1,this.vertexColors=r.db,this.opacity=1,this.transparent=!1,this.blendSrc=r.ac,this.blendDst=r.lb,this.blendEquation=r.b,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=r.K,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.userData={},this.needsUpdate=!0}a.prototype=Object.assign(Object.create(e.a.prototype),{constructor:a,isMaterial:!0,onBeforeCompile:function(){},setValues:function(t){if(void 0!==t)for(var i in t){var n=t[i];if(void 0!==n)if("shading"!==i){var e=this[i];void 0!==e?e&&e.isColor?e.set(n):e&&e.isVector3&&n&&n.isVector3?e.copy(n):this[i]=n:console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===r.B;else console.warn("THREE.Material: '"+i+"' parameter is undefined.")}},toJSON:function(t){var i=void 0===t||"string"===typeof t;i&&(t={textures:{},images:{}});var n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function e(t){var i=[];for(var n in t){var e=t[n];delete e.metadata,i.push(e)}return i}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearCoat&&(n.clearCoat=this.clearCoat),void 0!==this.clearCoatRoughness&&(n.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,void 0!==this.combine&&(n.combine=this.combine),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.size&&(n.size=this.size),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==r.fb&&(n.blending=this.blending),!0===this.flatShading&&(n.flatShading=this.flatShading),this.side!==r.D&&(n.side=this.side),this.vertexColors!==r.db&&(n.vertexColors=this.vertexColors),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(n.morphTargets=!0),!0===this.skinning&&(n.skinning=!0),!1===this.visible&&(n.visible=!1),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),i){var s=e(t.textures),o=e(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n},clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.lights=t.lights,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.userData=JSON.parse(JSON.stringify(t.userData)),this.clipShadows=t.clipShadows,this.clipIntersection=t.clipIntersection;var i=t.clippingPlanes,n=null;if(null!==i){var e=i.length;n=new Array(e);for(var r=0;r!==e;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.shadowSide=t.shadowSide,this},dispose:function(){this.dispatchEvent({type:"dispose"})}})},"550464552fd011906622":function(t,i,n){"use strict";function e(){}n.d(i,"a",function(){return e}),Object.assign(e.prototype,{addEventListener:function(t,i){void 0===this._listeners&&(this._listeners={});var n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(i)&&n[t].push(i)},hasEventListener:function(t,i){if(void 0===this._listeners)return!1;var n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(i)},removeEventListener:function(t,i){if(void 0!==this._listeners){var n=this._listeners[t];if(void 0!==n){var e=n.indexOf(i);-1!==e&&n.splice(e,1)}}},dispatchEvent:function(t){if(void 0!==this._listeners){var i=this._listeners[t.type];if(void 0!==i){t.target=this;for(var n=i.slice(0),e=0,r=n.length;e<r;e++)n[e].call(this,t)}}}})},a9d74ad8a46048b4091b:function(t,i,n){"use strict";function e(t){var i={};for(var n in t)for(var e in i[n]={},t[n]){var r=t[n][e];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?i[n][e]=r.clone():Array.isArray(r)?i[n][e]=r.slice():i[n][e]=r}return i}function r(t){for(var i={},n=0;n<t.length;n++){var r=e(t[n]);for(var s in r)i[s]=r[s]}return i}n.d(i,"a",function(){return e}),n.d(i,"b",function(){return r})},b4419cc2aab9d79ef113:function(t,i,n){"use strict";n.r(i),n.d(i,"ShaderMaterial",function(){return s});var e=n("39c741a38b7f6fbfdd92"),r=n("a9d74ad8a46048b4091b");function s(t){e.a.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,void 0!==t&&(void 0!==t.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}s.prototype=Object.create(e.a.prototype),s.prototype.constructor=s,s.prototype.isShaderMaterial=!0,s.prototype.copy=function(t){return e.a.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Object(r.a)(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=t.extensions,this},s.prototype.toJSON=function(t){var i=e.a.prototype.toJSON.call(this,t);for(var n in i.uniforms={},this.uniforms){var r=this.uniforms[n].value;r&&r.isTexture?i.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?i.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?i.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?i.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?i.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?i.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?i.uniforms[n]={type:"m4",value:r.toArray()}:i.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader;var s={};for(var o in this.extensions)!0===this.extensions[o]&&(s[o]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}},cb92241db9e33ee3542f:function(t,i,n){"use strict";n.d(i,"pb",function(){return e}),n.d(i,"r",function(){return r}),n.d(i,"p",function(){return s}),n.d(i,"q",function(){return o}),n.d(i,"nb",function(){return a}),n.d(i,"ob",function(){return u}),n.d(i,"D",function(){return h}),n.d(i,"g",function(){return d}),n.d(i,"v",function(){return c}),n.d(i,"B",function(){return f}),n.d(i,"db",function(){return l}),n.d(i,"cb",function(){return p}),n.d(i,"fb",function(){return m}),n.d(i,"d",function(){return b}),n.d(i,"ec",function(){return v}),n.d(i,"W",function(){return g}),n.d(i,"s",function(){return M}),n.d(i,"b",function(){return y}),n.d(i,"dc",function(){return S}),n.d(i,"Xb",function(){return w}),n.d(i,"T",function(){return O}),n.d(i,"S",function(){return x}),n.d(i,"rc",function(){return T}),n.d(i,"ib",function(){return A}),n.d(i,"cc",function(){return N}),n.d(i,"mb",function(){return D}),n.d(i,"ac",function(){return E}),n.d(i,"lb",function(){return J}),n.d(i,"w",function(){return C}),n.d(i,"jb",function(){return L}),n.d(i,"x",function(){return I}),n.d(i,"kb",function(){return j}),n.d(i,"bc",function(){return F}),n.d(i,"bb",function(){return U}),n.d(i,"f",function(){return R}),n.d(i,"J",function(){return z}),n.d(i,"K",function(){return V}),n.d(i,"y",function(){return k}),n.d(i,"G",function(){return P}),n.d(i,"F",function(){return H}),n.d(i,"gb",function(){return _}),n.d(i,"X",function(){return W}),n.d(i,"V",function(){return q}),n.d(i,"c",function(){return B}),n.d(i,"eb",function(){return G}),n.d(i,"P",function(){return K}),n.d(i,"Vb",function(){return Q}),n.d(i,"jc",function(){return X}),n.d(i,"j",function(){return Y}),n.d(i,"a",function(){return Z}),n.d(i,"ic",function(){return $}),n.d(i,"l",function(){return tt}),n.d(i,"m",function(){return it}),n.d(i,"z",function(){return nt}),n.d(i,"A",function(){return et}),n.d(i,"Zb",function(){return rt}),n.d(i,"n",function(){return st}),n.d(i,"o",function(){return ot}),n.d(i,"Wb",function(){return at}),n.d(i,"k",function(){return ut}),n.d(i,"U",function(){return ht}),n.d(i,"Y",function(){return dt}),n.d(i,"ab",function(){return ct}),n.d(i,"Z",function(){return ft}),n.d(i,"M",function(){return lt}),n.d(i,"O",function(){return pt}),n.d(i,"N",function(){return mt}),n.d(i,"kc",function(){return bt}),n.d(i,"i",function(){return vt}),n.d(i,"Yb",function(){return gt}),n.d(i,"qc",function(){return Mt}),n.d(i,"I",function(){return yt}),n.d(i,"mc",function(){return St}),n.d(i,"C",function(){return wt}),n.d(i,"H",function(){return Ot}),n.d(i,"nc",function(){return xt}),n.d(i,"oc",function(){return Tt}),n.d(i,"pc",function(){return At}),n.d(i,"lc",function(){return Nt}),n.d(i,"e",function(){return Dt}),n.d(i,"Nb",function(){return Et}),n.d(i,"rb",function(){return Jt}),n.d(i,"R",function(){return Ct}),n.d(i,"Q",function(){return Lt}),n.d(i,"t",function(){return It}),n.d(i,"u",function(){return jt}),n.d(i,"Ub",function(){return Ft}),n.d(i,"Tb",function(){return Ut}),n.d(i,"Ib",function(){return Rt}),n.d(i,"Jb",function(){return zt}),n.d(i,"Kb",function(){return Vt}),n.d(i,"Sb",function(){return kt}),n.d(i,"Rb",function(){return Pt}),n.d(i,"Hb",function(){return Ht}),n.d(i,"Gb",function(){return _t}),n.d(i,"Qb",function(){return Wt}),n.d(i,"yb",function(){return qt}),n.d(i,"zb",function(){return Bt}),n.d(i,"Ab",function(){return Gt}),n.d(i,"Bb",function(){return Kt}),n.d(i,"Cb",function(){return Qt}),n.d(i,"Db",function(){return Xt}),n.d(i,"Eb",function(){return Yt}),n.d(i,"Fb",function(){return Zt}),n.d(i,"tb",function(){return $t}),n.d(i,"ub",function(){return ti}),n.d(i,"vb",function(){return ii}),n.d(i,"sb",function(){return ni}),n.d(i,"wb",function(){return ei}),n.d(i,"xb",function(){return ri}),n.d(i,"hc",function(){return si}),n.d(i,"gc",function(){return oi}),n.d(i,"fc",function(){return ai}),n.d(i,"L",function(){return ui}),n.d(i,"sc",function(){return hi}),n.d(i,"E",function(){return di}),n.d(i,"Mb",function(){return ci}),n.d(i,"Pb",function(){return fi}),n.d(i,"Ob",function(){return li}),n.d(i,"Lb",function(){return pi}),n.d(i,"h",function(){return mi}),n.d(i,"qb",function(){return bi}),n.d(i,"hb",function(){return vi});var e="101",r=0,s=1,o=2,a=1,u=2,h=0,d=1,c=2,f=1,l=0,p=0,m=1,b=2,v=3,g=4,M=5,y=100,S=101,w=102,O=103,x=104,T=200,A=201,N=202,D=203,E=204,J=205,C=206,L=207,I=208,j=209,F=210,U=0,R=1,z=2,V=3,k=4,P=5,H=6,_=7,W=0,q=1,B=2,G=0,K=1,Q=2,X=3,Y=4,Z=5,$=300,tt=301,it=302,nt=303,et=304,rt=305,st=306,ot=307,at=1e3,ut=1001,ht=1002,dt=1003,ct=1004,ft=1005,lt=1006,pt=1007,mt=1008,bt=1009,vt=1010,gt=1011,Mt=1012,yt=1013,St=1014,wt=1015,Ot=1016,xt=1017,Tt=1018,At=1019,Nt=1020,Dt=1021,Et=1022,Jt=1023,Ct=1024,Lt=1025,It=1026,jt=1027,Ft=1028,Ut=33776,Rt=33777,zt=33778,Vt=33779,kt=35840,Pt=35841,Ht=35842,_t=35843,Wt=36196,qt=37808,Bt=37809,Gt=37810,Kt=37811,Qt=37812,Xt=37813,Yt=37814,Zt=37815,$t=37816,ti=37817,ii=37818,ni=37819,ei=37820,ri=37821,si=0,oi=1,ai=2,ui=3e3,hi=3001,di=3007,ci=3002,fi=3004,li=3005,pi=3006,mi=3200,bi=3201,vi=1},d1886278d8ad2602c715:function(t,i,n){"use strict";n.d(i,"a",function(){return e});var e={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var t=[],i=0;i<256;i++)t[i]=(i<16?"0":"")+i.toString(16);return function(){var i=4294967295*Math.random()|0,n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(t[255&i]+t[i>>8&255]+t[i>>16&255]+t[i>>24&255]+"-"+t[255&n]+t[n>>8&255]+"-"+t[n>>16&15|64]+t[n>>24&255]+"-"+t[63&e|128]+t[e>>8&255]+"-"+t[e>>16&255]+t[e>>24&255]+t[255&r]+t[r>>8&255]+t[r>>16&255]+t[r>>24&255]).toUpperCase()}}(),clamp:function(t,i,n){return Math.max(i,Math.min(n,t))},euclideanModulo:function(t,i){return(t%i+i)%i},mapLinear:function(t,i,n,e,r){return e+(t-i)*(r-e)/(n-i)},lerp:function(t,i,n){return(1-n)*t+n*i},smoothstep:function(t,i,n){return t<=i?0:t>=n?1:(t=(t-i)/(n-i))*t*(3-2*t)},smootherstep:function(t,i,n){return t<=i?0:t>=n?1:(t=(t-i)/(n-i))*t*t*(t*(6*t-15)+10)},randInt:function(t,i){return t+Math.floor(Math.random()*(i-t+1))},randFloat:function(t,i){return t+Math.random()*(i-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*e.DEG2RAD},radToDeg:function(t){return t*e.RAD2DEG},isPowerOfTwo:function(t){return 0===(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}}}}]);