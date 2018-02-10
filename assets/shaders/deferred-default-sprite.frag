#include "shaders/deferred-default.frag"

precision mediump float;

uniform sampler2D sBase;
uniform sampler2D sNormal;
uniform vec4 uColor;

varying vec2 vTexCoord;

void main() {
  vec4 albedo = texture2D(sBase, vTexCoord) * uColor;
  vec3 normal = texture2D(sNormal, vTexCoord).xyz * 2.0 - 1.0;

  writeMaterial(albedo, normal);
}
