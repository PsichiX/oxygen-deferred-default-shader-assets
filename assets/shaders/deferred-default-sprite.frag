#include "shaders/deferred-default.frag"

precision mediump float;

uniform sampler2D sBase;
uniform sampler2D sNormal;
uniform vec4 uColor;
uniform mat4 uNormals;

varying vec2 vTexCoord;

void main() {
  vec4 albedo = texture2D(sBase, vTexCoord) * uColor;
  vec3 normal = texture2D(sNormal, vTexCoord).xyz * 2.0 - 1.0;
  normal = normalize(uNormals * vec4(normal, 0.0)).xyz;

  writeMaterial(albedo, normal);
}
