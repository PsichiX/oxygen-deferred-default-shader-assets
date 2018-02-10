precision mediump float;

uniform sampler2D sGBufferAlbedo;
uniform sampler2D sGBufferNormal;
uniform sampler2D sLBufferLightEmission;
uniform sampler2D sLBufferLightPath;

uniform vec4 uAmbientLight;

varying vec2 vTexCoord;

void main() {
  vec3 albedo = texture2D(sGBufferAlbedo, vTexCoord).xyz;
  vec3 normal = texture2D(sGBufferNormal, vTexCoord).xyz;
  vec3 lightEmission = texture2D(sLBufferLightEmission, vTexCoord).xyz;
  vec3 lightPath = texture2D(sLBufferLightPath, vTexCoord).xyz;

  vec3 d = -lightPath;
  vec3 al = uAmbientLight.rgb * uAmbientLight.a;
  float sf = clamp(dot(normal, d), 0.0, 1.0);
  float lf = mix(sf, 1.0, uAmbientLight.a);
  vec3 lc = lightEmission + al;
  vec3 sc = albedo * lc * lf;

  gl_FragColor = vec4(sc, 1.0);
}
