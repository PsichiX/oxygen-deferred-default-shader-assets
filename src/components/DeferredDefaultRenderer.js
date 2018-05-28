import { DeferredRenderer } from 'oxygen-core';

export default class DeferredDefaultRenderer extends DeferredRenderer {

  static get propsTypes() {
    return {
      shader: DeferredRenderer.propsTypes.shader,
      overrideUniforms: DeferredRenderer.propsTypes.overrideUniforms,
      overrideSamplers: DeferredRenderer.propsTypes.overrideSamplers,
      gBufferId: DeferredRenderer.propsTypes.gBufferId,
      lBufferid: DeferredRenderer.propsTypes.lBufferid,
      gBufferLayer: DeferredRenderer.propsTypes.gBufferLayer,
      lBufferLayer: DeferredRenderer.propsTypes.lBufferLayer
    };
  }

  static factory() {
    return new DeferredDefaultRenderer();
  }

  constructor() {
    super();

    this.gBufferId = '#default-deferred-g-buffer';
    this.lBufferId = '#default-deferred-l-buffer';
    this.gBufferTargets = { float: true, mipmap: false, count: 2 };
    this.lBufferTargets = { float: true, mipmap: false, count: 2 };
  }

}
