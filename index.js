const font = {
  order: 'flexible',
  properties: [
    'font',
  ],
};

const text = {
  order: 'flexible',
  properties: [
    'break',
    'column',
    'columns',
    'hyphens',
    'letter-spacing',
    'line-height',
    'tab-size',
    'text',
    'white-space',
    'word-spacing',
    'word-wrap',
  ],
};

const color = {
  order: 'flexible',
  properties: [
    'background',
    'box-decoration-break',
    'box-shadow',
    'color',
    'filter',
    'layer',
    'mask',
    'mix-blend-mode',
    'opacity',
  ],
};

const scrollbar = {
  order: 'flexible',
  properties: [
    'scrollbar',
  ],
};

const outline = {
  order: 'flexible',
  properties: [
    'outline',
  ],
};

const list = {
  order: 'flexible',
  properties: [
    'list-style',
    'marker-offset',
  ],
};

const tables = {
  order: 'flexible',
  properties: [
    'border-collapse',
    'border-spacing',
    'caption-side',
    'empty-cells',
    'speak-header',
    'table-layout',
  ],
};

const classification = {
  order: 'flexible',
  properties: [
    'clear',
    'content',
    'display',
    'float',
    'isolation',
    'position',
    'visibility',
  ],
};

const dimensions = {
  order: 'flexible',
  properties: [
    'block-size',
    'box-sizing',
    'height',
    'inline-size',
    'max-height',
    'max-width',
    'min-height',
    'min-width',
    'object',
    'width',
  ],
};

const positioning = {
  order: 'flexible',
  properties: [
    'align-content',
    'align-items',
    'align-self',
    'bottom',
    'clip',
    'flex',
    'grid',
    'justify-content',
    'left',
    'offset',
    'order',
    'overflow',
    'position',
    'right',
    'text-overflow',
    'top',
    'vertical-align',
    'z-index',
  ],
};

const margins = {
  order: 'flexible',
  properties: [
    'margin',
  ],
};

const padding = {
  order: 'flexible',
  properties: [
    'padding',
  ],
};

const border = {
  order: 'flexible',
  properties: [
    'border-color',
    'border-style',
    'border-width',
    'border',
  ],
};

const dynamic = {
  order: 'flexible',
  properties: [
    'accelerator',
    'behavior',
    'caret-color',
    'cursor',
    'filter',
    'pointer-events',
    'resize',
    'touch-action',
    'zoom',
  ],
};

const generated = {
  order: 'flexible',
  properties: [
    'counter',
    'fallback',
    'include',
    'quotes',
  ],
};

const international = {
  order: 'flexible',
  properties: [
    'direction',
    'ime-mode',
    'layout',
    'line-break',
    'ruby',
    'spacing',
    'text-autospace',
    'text-justify',
    'text-kashida-space',
    'unicode-bidi',
    'word-break',
    'writing-mode',
  ],
};

const print = {
  order: 'flexible',
  properties: [
    'marks',
    'orphans',
    'page-break',
    'page',
    'size',
    'widows',
  ],
};

const aural = {
  order: 'flexible',
  properties: [
    'azimut',
    'cue',
    'elevation',
    'pause',
    'pitch-range',
    'play-during',
    'richness',
    'speak',
    'speech',
    'stress',
    'voice-family',
    'volume',
  ],
};

const animation = {
  order: 'flexible',
  properties: [
    'animation',
    'transition',
    'will-change',
  ],
};

const transform = {
  order: 'flexible',
  properties: [
    'transform',
    'backface-visibility',
    'perspective',
  ],
};

module.exports = {
  plugins: [require.resolve('stylelint-order')],
  rules: {
    'order/order': [
      'declarations',
      'custom-properties',
      'at-variables',
      'less-mixins',
      'dollar-variables',
      'rules',
      'at-rules',
    ],
    'order/properties-order': [
      classification,
      positioning,
      dimensions,
      margins,
      border,
      padding,
      list,
      tables,
      font,
      text,
      color,
      outline,
      transform,
      animation,
      dynamic,
      generated,
      international,
      print,
      aural,
      scrollbar,
    ],
  },
};
