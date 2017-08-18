const initialState = {
  strokeArc: {
    startAngle: 35,
    endAngle: 325,
    radius: 150,
    x: 450,
    y: 200,
  },
  figureArc: {
    startAngle: -150,
    endAngle: 160,
    outerRadius: 150,
    innerRadius: 100,
    x: 450,
    y: 200,
  },
  isVisible: {
    strokeArcContainer: true,
    figureArcContainer: false,
  },
  strokeViewBox: {
    vbX: 0,
    vbY: 0,
    width: 500,
    height: 500,
    k: 100,
    dragX: 0,
    dragY: 0,
    onDrag: false,
    isZoomIn: false,
    isZoomOut: false,
    isPan: false,
    btnZoomIn: 'button-zoom-in',
    btnZoomOut: 'button-zoom-out',
    btnPan: 'button-pan',
    svgCursor: 'default-cursor',
  },
  figureViewBox: {
    vbX: 0,
    vbY: 0,
    width: 500,
    height: 500,
    k: 100,
    dragX: 0,
    dragY: 0,
    onDrag: false,
    isZoomIn: false,
    isZoomOut: false,
    isPan: false,
    btnZoomIn: 'button-zoom-in',
    btnZoomOut: 'button-zoom-out',
    btnPan: 'button-pan',
    svgCursor: 'default-cursor',
  },
};

export default initialState;
