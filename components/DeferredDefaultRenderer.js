import { DeferredRenderer } from 'oxygen-core';

export default class DeferredDefaultRenderer extends DeferredRenderer {

  static get propsTypes() {
    return {
      shader: DeferredRenderer.shader,
      overrideUniforms: DeferredRenderer.overrideUniforms,
      overrideSamplers: DeferredRenderer.overrideSamplers,
      gBufferId: DeferredRenderer.gBufferId,
      lBufferid: DeferredRenderer.lBufferid,
      gBufferLayer: DeferredRenderer.gBufferLayer,
      lBufferLayer: DeferredRenderer.gBufferLayer
    };
  }

  static factory() {
    return new DeferredDefaultRenderer();
  }

  constructor() {
    super();

    this.gBufferTargets = { float: true, mipmap: false, count: 2 };
    this.lBufferTargets = { float: true, mipmap: false, count: 2 };
  }

}
