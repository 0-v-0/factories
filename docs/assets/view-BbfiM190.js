import{u as v,e as d}from"./__uno-x_vZtz2U.js";import{A as b,m as y,B as c,C as x}from"./game-C6B8_-6p.js";const T=`uniform vec2 offset;
uniform int flags;
uniform int selectedSlot;
uniform sampler2D map;
uniform sampler2D tex;
uniform sampler2D constants;
uniform float zoom;
out vec4 fragColor;

const float texScale = 1./16.;
const int mapWidth = 64;

float line(vec2 x,vec2 a,vec2 b){vec2 k=x-a,z=b-a;return length(k-z*clamp(dot(k,z)/dot(z,z),0.,1.));}

float _0(vec2 uv) {
	uv.y-=.1;
	return abs(length(vec2(uv.x,max(0.,abs(uv.y)-.25)))-.25);
}
float _1(vec2 uv){
return min(min(
line(uv,vec2(-.2,.45),vec2(0.,.6)),
length(vec2(uv.x,max(0.,abs(uv.y-.1)-.5)))),
length(vec2(max(0.,abs(uv.x)-.2),uv.y+.4)));
}
float _2(vec2 uv){
float x=min(line(uv,vec2(.185,.17),vec2(-.25,-.4)),length(vec2(max(0.,abs(uv.x)-.25),uv.y+.4)));
uv.y-=.35;
uv.x+=.025;
return min(x,abs(atan(uv.x,uv.y)-.63)<1.64?abs(length(uv)-.275):length(uv+vec2(.23,-.15)));}
float _3(vec2 uv){
uv.y=abs(uv.y-.1)-.25;
return atan(uv.x,uv.y)>-1.?abs(length(uv)-.25):
min(length(uv+vec2(.211,-.134)),length(uv+vec2(.0,.25)));}
float _4(vec2 uv){
float x=min(length(vec2(uv.x-.15,max(0.,abs(uv.y-.1)-.5))),line(uv,vec2(.15,.6),vec2(-.25,-.1)));
return min(x,length(vec2(max(0.,abs(uv.x)-.25),uv.y+.1)));}
float _5(vec2 uv){
float b=min(length(vec2(max(0.,abs(uv.x)-.25),uv.y-.6)),length(vec2(uv.x+.25,max(0.,abs(uv.y-.36)-.236))));
uv+=vec2(.05,.1);
float c=abs(length(vec2(uv.x,max(0.,abs(uv.y)-.0)))-.3);
return min(b,abs(atan(uv.x,uv.y)+1.57)<.86&&uv.x<0.?length(uv+vec2(.2,.224)):c);}
float _6(vec2 uv){
uv.y-=.075;uv=-uv;
float b=abs(length(vec2(uv.x,max(0.,abs(uv.y)-.275)))-.25);
uv.y-=.175;
float c=abs(length(vec2(uv.x,max(0.,abs(uv.y)-.05)))-.25);
return min(c,cos(atan(uv.x,uv.y+.45)+.65)<0.||(uv.x>0.&&uv.y<0.)?b:length(uv+vec2(.2,.6)));}
float _7(vec2 uv){
return min(length(vec2(max(0.,abs(uv.x)-.25),uv.y-.6)),line(uv,vec2(-.25,-.39),vec2(.25,.6)));
}
float _8(vec2 uv){
float l=length(vec2(max(0.,abs(uv.x)-.08),uv.y-.1+uv.x*.07));
uv.y-=.1;
uv.y=abs(uv.y);
uv.y-=.245;
return min(abs(length(uv)-.255),l);}
float _9(vec2 uv){
uv.y-=.125;
float b=abs(length(vec2(uv.x,max(0.,abs(uv.y)-.275)))-.25);
uv.y-=.175;
float c=abs(length(vec2(uv.x,max(0.,abs(uv.y)-.05)))-.25);
return min(c,cos(atan(uv.x,uv.y+.45)+.65)<0.||(uv.x>0.&&uv.y<0.)?b:length(uv+vec2(.2,.6)));}

float mmul(vec2 uv) {
	uv.y -= .1;
	uv = abs(uv);
	return min(line(uv,vec2(0.866*.25,0.5*.25),vec2(0.)),length(vec2(uv.x,max(0.,abs(uv.y)-.25))));
}

float digit(vec2 uv,int n){
return n==0?_0(uv):n==1?_1(uv):n==2?_2(uv):n==3?_3(uv):n==4?_4(uv):n==5?_5(uv):n==6?_6(uv):n==7?_7(uv):n==8?_8(uv):_9(uv);
}
vec2 clc(vec2 uv,float cp,float w,float ital){return uv-vec2(cp-w*.5+uv.y*ital,0.);}
bool hit(vec2 uv,inout float cp,float w){return abs((cp+=w)-uv.x)<w+.2;}

float noise(in vec2 uv){
	return sin(uv.x)+cos(uv.y);
}

#define OCTAVES 3
float fbm(in vec2 uv){
	float value = 0.;
	float amplitude = 1.;
	float freq = 1.;

	for (int i = 0; i < OCTAVES; i++) {
		// From Dave_Hoskins https://www.shadertoy.com/user/Dave_Hoskins
		value = max(value,value+(.25-abs(noise(uv * freq)-.3) * amplitude));

		amplitude *= .3;
		freq *= 1.25;
	}

	return value*2.0-2.0;
}

float mountain(vec2 uv,float h,float t) {
	uv.y=1.-uv.y;
    uv=2.*uv-vec2(1);
    const float k=1.4;
    float r = 1.;
	for (int i = 1; i < 5; i++) {
        float d = fbm(vec2(t,float(i)+uv.x*6.5));
        float f = h-exp(k*uv.x)-exp(-k*uv.x)+d*0.3+fract(d);
        if(uv.y<f)
        	r *= mix(.73,.99,uv.y*.5+.5);
    }
    return 1.-r;
}

vec4 lookup(int slot,int climate){
	return texture(constants,vec2(float(climate)/255.,float(slot)/8.));
}

// 绘制地形
vec4 getTerrain(int base,vec2 uv,int climate){
	int slot=base<2?int(lookup(0,climate).r*255.):base;
	bool land=false;
	vec4 c=texture(tex,vec2(slot&15,slot>>4)*texScale+uv);
	if(slot>7){// 混合植被颜色
		if(slot<11)
			land=true;
		else if(slot<16)
			c*=lookup(slot-8,climate);
	}else if(slot==6||slot==7){ // 水体颜色
		c*=lookup(1,climate);
	}else if(slot==0||base<4){
		if(base>1){ // 山脉
			base-=2;
			c.a=mountain(uv*16.,base==1?2.7:2.5,exp(float(climate)*.7))<.3?0.:1.;
		}else
			land=true;
	}
	if(c.a<1.){// 透明部分显示陆地
		c=mix(texture(tex,vec2(base&15,base>>4)*texScale+uv),c,c.a);
		land=base<2;
	}
	if(land)
		c*=lookup(2,climate);
	return c;
}

// 绘制图块
vec4 getTile(ivec4 tile,vec2 uv){
	// 没有建筑则显示地形
	int slot=tile.b;
	float prog=float(tile.a>>4&7)*texScale/7.;
	vec4 c=(tile.a&15)!=0?
		texture(tex,vec2(slot&15,slot>>4)*texScale+uv):
		vec4(0);
	if(uv.y<prog){
		c.a=0.;
	}
	if(c.a<1.){// 透明部分显示地形
		c=mix(getTerrain(tile.r&15,uv,tile.g),c,c.a);
	}
	return c;
}

float px=.02,ital=0.;

// 绘制2位数
float num(vec2 xy,int n){
	float x=100.,cp=0.;
	if(n>9 && hit(xy,cp,.7))
		x=min(x,digit(clc(xy,cp,.7,ital),n/10%10));
	if(hit(xy,cp,.7))
		x=min(x,digit(clc(xy,cp,.7,ital),n%10));
	return x;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
	// 获取当前像素坐标
	vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y) + offset;
	vec2 uv = coord / iResolution.xx;
	vec2 f = mod(uv,zoom);
	vec2 tuv = uv / zoom / float(mapWidth);
	if(tuv.x<0.||tuv.y<0.||tuv.x>1.||tuv.y>1.){
		fragColor=vec4(1);
		return;
	}
	ivec4 tile = ivec4(texture(map,tuv)*255.);
	float x = 100.;
	int level = tile.a&15;
	if((flags&1)!=0){
		// 显示建筑等级
		if(level!=0){
			x=num(vec2(f.x,zoom*.25-f.y)/zoom*3.,level);
		}
	}
	vec2 t=mod(uv,zoom)*texScale/zoom;
	vec3 c=getTile(tile,t).rgb;
	if(abs(px-x)<.1){
		c=mix(vec3(1,1,0),c,abs(px-x)*10.);
	}
	// 施工/选中的图块显示半透明边框
	ivec2 xyi=ivec2(uv / zoom);
	bool selected=(selectedSlot&63)==xyi.x&&selectedSlot/mapWidth==xyi.y;
	if((tile.a>>4&7)!=0||(flags&2)!=0||selected){
		vec2 s=selected||level!=0?min(f,vec2(zoom)-f):vec2(1);
		// 边框颜色
		vec3 col=vec3(1.,1.,.3);
		if(!selected){
			float e=float(tile.r>>4)/15.;
			col=vec3(1.-e,e,0);
		}
		fragColor=vec4(mix(c,col,max(0.,1.4-exp(min(s.x,s.y)/zoom))),1);
	} else {
		fragColor=vec4(c,1);
	}
}
void main(){
	mainImage(fragColor,gl_FragCoord.xy);
}`,_=(s,n)=>s.getContext("webgl2",{stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0,...n}),p=new Float32Array([-1,-1,3,-1,-1,3]);class S{slotSize=32;canvas;gl;uZoom;_scale;get scale(){return this._scale}set scale(n){this._scale=n,this.gl.uniform1f(this.uZoom,n)}constructor(n){this.canvas=n,this.gl=_(n),this.onResize(),addEventListener("resize",()=>this.onResize())}onResize(){this.canvas.width=document.body.clientWidth,this.canvas.height=document.body.clientHeight}shader(n){const t=this.gl,a=t.createShader(t.VERTEX_SHADER),e=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(a,`#version 300 es
in vec4 iPosition;void main(){gl_Position=iPosition;}`),t.shaderSource(e,`#version 300 es
precision highp float;uniform vec3 iResolution;uniform float iTime;`+n),t.compileShader(a),t.compileShader(e);const i=t.createProgram(),r=o=>t.getUniformLocation(i,o);t.attachShader(i,a),t.attachShader(i,e),t.linkProgram(i);let l;if(!t.getProgramParameter(i,t.LINK_STATUS))throw t.getShaderParameter(a,t.COMPILE_STATUS)?t.getShaderParameter(e,t.COMPILE_STATUS)?l=t.getProgramInfoLog(i):l=t.getShaderInfoLog(e):l=t.getShaderInfoLog(a),t.deleteProgram(i),new Error(l);const f=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,p,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.useProgram(i),addEventListener("unload",()=>{t.useProgram(null),t.deleteProgram(i)}),this.uZoom=r("zoom");const h=r("iTime"),g=r("iResolution"),u=this.canvas,m=()=>{t.uniform1f(h,performance.now()/1e3),t.viewport(0,0,u.width,u.height),t.uniform3f(g,u.width,u.height,1);const o=t.getAttribLocation(i,"iPosition");t.bindBuffer(t.ARRAY_BUFFER,f),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(o),t.drawArrays(t.TRIANGLES,0,3),t.disableVertexAttribArray(o),t.bindBuffer(t.ARRAY_BUFFER,null),requestAnimationFrame(m)};return m(),i}}const R=""+new URL("tex-CHHn8E7K.avif",import.meta.url).href;class E extends S{_offset=[0,0];_selectedSlot=0;texture=new Image;pr;uFlags;uSelectedSlot;uOffset;get buildingTexture(){return this.texture}set buildingTexture(n){this.texture=n,n instanceof Image?n.decode().then(()=>this.setTexture(0,"tex",this.texture)):this.setTexture(0,"tex",this.texture)}get offset(){return this._offset}set offset(n){let[t,a]=n;t&=-2,a&=-2,this._offset=n,this.gl.uniform2f(this.uOffset,t,a),t/=this.slotSize,a/=this.slotSize,b(v(t+a*c),v(t+c),v(a+x)),this.setTexture(1,"map",y)}get selectedSlot(){return this._selectedSlot}select(n,t){n=(n+this.offset[0])/this.canvas.width,t=(t+this.offset[1])/this.canvas.width;const a=this.scale;let e=n/a|t/a<<6;e==this.selectedSlot&&(e=-1),this.gl.uniform1i(this.uSelectedSlot,this._selectedSlot=e)}constructor(){super(document.getElementById("app")),this.texture instanceof Image&&(this.texture.src=R);try{const n=this.pr=this.shader(T),t=a=>this.gl.getUniformLocation(n,a);this.uFlags=t("flags"),this.uSelectedSlot=t("selectedSlot"),this.select(0,0),this.uOffset=t("offset"),this.buildingTexture=this.texture}catch(n){d(n.message)}}setOptions(n){console.assert(n>=0&&n<16),this.gl.uniform1i(this.uFlags,n)}setTexture(n,t,a){const e=this.gl;if(!a){e.deleteTexture(e.getParameter(e.TEXTURE_BINDING_2D));return}const i=e.createTexture();e.activeTexture(e[`TEXTURE${n}`]),e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),a instanceof Uint8Array?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,c,x,0,e.RGBA,e.UNSIGNED_BYTE,a,0):a instanceof Uint8ClampedArray?e.texImage2D(e.TEXTURE_2D,0,e.RGB,256,8,0,e.RGB,e.UNSIGNED_BYTE,a,0):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a),e.uniform1i(e.getUniformLocation(this.pr,t),n)}}const w=new E;export{w as v};
