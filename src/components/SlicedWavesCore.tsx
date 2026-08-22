'use client';

import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

interface SlicedWavesCoreProps {
  color1?: string;
  color2?: string;
  color3?: string;
  columns?: number;
  rows?: number;
  barThickness?: number;
  speed?: number;
  travel?: number;
  waveSpread?: number;
  rowOffset?: number;
  softness?: number;
  glow?: number;
  brightness?: number;
  contrast?: number;
  opacity?: number;
  orientation?: 'horizontal' | 'vertical';
  alternate?: boolean;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  mouseRadius?: number;
  grain?: boolean;
  grainIntensity?: number;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uColumns;
uniform float uRows;
uniform float uThickness;
uniform float uSpeed;
uniform float uTravel;
uniform float uWaveSpread;
uniform float uRowOffset;
uniform float uSoftness;
uniform float uGlow;
uniform float uBrightness;
uniform float uContrast;
uniform float uOpacity;
uniform float uVertical;
uniform float uAlternate;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform float uMouseRadius;
uniform float uEnableMouse;
uniform float uMouseActive;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec2 grid = vec2(max(uColumns, 1.0), max(uRows, 1.0));
  vec2 p = uv * grid;
  vec2 gv = fract(p) - 0.5;
  vec2 id = floor(p);

  float barCoord = uVertical > 0.5 ? gv.x : gv.y;
  float waveId = uVertical > 0.5 ? id.y : id.x;
  float offId = uVertical > 0.5 ? id.x : id.y;
  float along = uVertical > 0.5 ? uv.y : uv.x;

  float dir = (uAlternate > 0.5 && mod(offId, 2.0) >= 1.0) ? -1.0 : 1.0;
  float phase = iTime * uSpeed + waveId * uWaveSpread + cos(offId * uRowOffset);
  float mv = sin(phase) * 0.5 + 0.5;
  if (dir < 0.0) mv = 1.0 - mv;

  float infl = 0.0;
  if (uEnableMouse > 0.5) {
    float md = distance(uv, uMouse);
    infl = smoothstep(uMouseRadius, 0.0, md) * uMouseStrength * uMouseActive;
  }

  float thick = clamp(uThickness + infl * 0.25, 0.0, 1.0);
  float startPos = (0.5 - thick * 0.5) * uTravel;
  float endPos = (-0.5 + thick * 0.5) * uTravel;
  float pos = mix(startPos, endPos, mv);

  float aa = max(uSoftness, 0.001);
  float d = abs(barCoord + pos) - thick * 0.5;
  float mask = smoothstep(aa, -aa, d);
  float glow = exp(-max(d, 0.0) * (7.0 / (uGlow + 0.001))) * clamp(uGlow, 0.0, 1.0);
  float intensity = clamp(mask + glow * (1.0 - mask), 0.0, 1.0);

  if (uGrain > 0.5) {
    float g = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + iTime) * 43758.5453);
    intensity = clamp(intensity + (g - 0.5) * uGrainIntensity, 0.0, 1.0);
  }

  vec3 grad = mix(uColor2, uColor1, mv);
  grad = mix(grad, uColor3, clamp(along, 0.0, 1.0) * 0.45);
  vec3 col = clamp((grad * uBrightness * (1.0 + infl * 0.6) - 0.5) * uContrast + 0.5, 0.0, 1.0);
  float a = intensity * uOpacity;
  fragColor = vec4(col * a, a);
}
`;

export default function SlicedWavesCore({
  color1 = '#FF9FFC',
  color2 = '#5227FF',
  color3 = '#B497CF',
  columns = 14,
  rows = 8,
  barThickness = 0.11,
  speed = 0.22,
  travel = 0.9,
  waveSpread = 0.8,
  rowOffset = 1.2,
  softness = 0.08,
  glow = 0.18,
  brightness = 1.2,
  contrast = 1.45,
  opacity = 0.48,
  orientation = 'horizontal',
  alternate = false,
  mouseInteraction = true,
  mouseStrength = 1.1,
  mouseRadius = 0.38,
  grain = true,
  grainIntensity = 0.03
}: SlicedWavesCoreProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.25)
    });

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.willChange = 'transform';
    canvas.style.transform = 'translateZ(0)';
    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const c3 = hexToRgb(color3);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uColumns: { value: columns },
        uRows: { value: rows },
        uThickness: { value: barThickness },
        uSpeed: { value: speed },
        uTravel: { value: travel },
        uWaveSpread: { value: waveSpread },
        uRowOffset: { value: rowOffset },
        uSoftness: { value: softness },
        uGlow: { value: glow },
        uBrightness: { value: brightness },
        uContrast: { value: contrast },
        uOpacity: { value: opacity },
        uVertical: { value: orientation === 'vertical' ? 1.0 : 0.0 },
        uAlternate: { value: alternate ? 1.0 : 0.0 },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseStrength: { value: mouseStrength },
        uMouseRadius: { value: mouseRadius },
        uEnableMouse: { value: mouseInteraction ? 1.0 : 0.0 },
        uMouseActive: { value: 0.0 },
        uGrain: { value: grain ? 1.0 : 0.0 },
        uGrainIntensity: { value: grainIntensity },
        uColor1: { value: new Float32Array(c1) },
        uColor2: { value: new Float32Array(c2) },
        uColor3: { value: new Float32Array(c3) }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    const setSize = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h);
      const res = program.uniforms.iResolution.value as Float32Array;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
      renderer.render({ scene: mesh });
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(container);
    setSize();

    let targetMouse = [0.5, 0.5];
    let currentMouse = [0.5, 0.5];
    let targetActive = 0;
    let currentActive = 0;
    let lastMouseMove = 0;

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseMove < 33) return; // 30fps throttle
      lastMouseMove = now;

      const rect = canvas.getBoundingClientRect();
      targetMouse = [(e.clientX - rect.left) / rect.width, 1.0 - (e.clientY - rect.top) / rect.height];
      targetActive = 1;
    };
    const onMouseLeave = () => {
      targetActive = 0;
    };

    canvas.addEventListener('mousemove', onMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', onMouseLeave, { passive: true });

    let raf = 0;
    let isVisible = true;
    let isPageVisible = !document.hidden;
    const t0 = performance.now();

    const loop = (t: number) => {
      program.uniforms.iTime.value = (t - t0) * 0.001;
      currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
      currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
      currentActive += 0.05 * (targetActive - currentActive);
      (program.uniforms.uMouse.value as Float32Array)[0] = currentMouse[0];
      (program.uniforms.uMouse.value as Float32Array)[1] = currentMouse[1];
      program.uniforms.uMouseActive.value = currentActive;

      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };

    const tryStart = () => {
      if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop);
    };
    const tryStop = () => {
      if (raf !== 0) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        isVisible ? tryStart() : tryStop();
      },
      { threshold: 0.05 }
    );
    io.observe(container);

    const onVisibility = () => {
      isPageVisible = !document.hidden;
      isPageVisible ? tryStart() : tryStop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    tryStart();

    return () => {
      tryStop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      try {
        container.removeChild(canvas);
      } catch {}
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color1, color2, color3, columns, rows, barThickness, speed, travel, waveSpread, rowOffset, softness, glow, brightness, contrast, opacity, orientation, alternate, mouseInteraction, mouseStrength, mouseRadius, grain, grainIntensity]);

  return <div ref={containerRef} className="w-full h-full relative overflow-hidden" />;
}
