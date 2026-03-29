import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductBox3DProps {
  productName?: string;
  size?: 'sm' | 'md' | 'lg';
  labelType?: 'green' | 'yellow' | 'red' | 'default';
  labelImage?: string;
}

export default function ProductBox3D({ size = 'md', labelType = 'default', labelImage }: ProductBox3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Dimensions based on size
  const dims = {
    sm: { w: 80, h: 160, d: 50 },
    md: { w: 100, h: 200, d: 60 },
    lg: { w: 120, h: 240, d: 70 },
  }[size];

  const halfW = dims.w / 2;
  const halfH = dims.h / 2;
  const halfD = dims.d / 2;

  // Shared face style
  const faceBase: React.CSSProperties = {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    top: 0,
    left: 0,
  };

  // Floral/marble pattern via CSS gradients
  const frontPattern: React.CSSProperties = {
    background: `
      radial-gradient(ellipse 30px 30px at 20% 80%, rgba(180,200,180,0.35) 0%, transparent 70%),
      radial-gradient(ellipse 25px 25px at 75% 60%, rgba(180,200,180,0.3) 0%, transparent 70%),
      radial-gradient(ellipse 20px 20px at 50% 30%, rgba(190,210,190,0.25) 0%, transparent 70%),
      radial-gradient(ellipse 15px 15px at 30% 50%, rgba(170,195,175,0.2) 0%, transparent 70%),
      linear-gradient(175deg, #f5f0eb 0%, #ede7e0 40%, #e8e2da 100%)
    `,
  };

  const sidePattern: React.CSSProperties = {
    background: `
      radial-gradient(ellipse 15px 15px at 40% 70%, rgba(180,200,180,0.3) 0%, transparent 70%),
      linear-gradient(175deg, #ebe5de 0%, #e2dcd5 100%)
    `,
  };

  const topPattern: React.CSSProperties = {
    background: `linear-gradient(135deg, #f0ebe5 0%, #e5e0d8 100%)`,
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        perspective: '1200px',
        width: dims.w + 60,
        height: dims.h + 40,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? -25 : [0, -360],
        }}
        transition={
          isHovered
            ? { duration: 0.4, ease: 'easeOut' }
            : { duration: 12, repeat: Infinity, ease: 'linear' }
        }
        style={{
          width: dims.w,
          height: dims.h,
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ===== FRONT FACE ===== */}
        <div
          style={{
            ...faceBase,
            width: dims.w,
            height: dims.h,
            transform: `translateZ(${halfD}px)`,
            ...frontPattern,
            borderRadius: '4px',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.04)',
            overflow: 'hidden',
          }}
        >
          {/* Edge highlight */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,0.1)',
              pointerEvents: 'none',
            }}
          />

          {/* Skin Smart Label / Certification Badge */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: labelType === 'default' ? '50%' : '60%', 
              zIndex: 2,
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.18))',
            }}
          >
            <img
              src={labelImage || (labelType === 'green' ? '/images/Green Label.png' : 
                   labelType === 'yellow' ? '/images/Yellow Label.png' : 
                   labelType === 'red' ? '/images/Red Label.png' : 
                   '/images/skin-smart-label.svg')}
              alt={labelType || "Skin Smart Approved"}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* Product text on front */}
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              width: '85%',
            }}
          >
            <p
              style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: size === 'sm' ? 14 : size === 'md' ? 18 : 22,
                fontWeight: 900,
                color: '#3a3530',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              Lotion
            </p>
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: size === 'sm' ? 9 : size === 'md' ? 11 : 13,
                fontStyle: 'italic',
                color: '#8a7e72',
                letterSpacing: '0.5px',
              }}
            >
              Skin Smart
            </p>
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div
          style={{
            ...faceBase,
            width: dims.w,
            height: dims.h,
            transform: `rotateY(180deg) translateZ(${halfD}px)`,
            ...frontPattern,
            borderRadius: '4px',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          />
          {/* Barcode area */}
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1.5,
                marginBottom: 4,
              }}
            >
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i % 3 === 0 ? 2 : 1,
                    height: size === 'sm' ? 16 : 22,
                    background: '#3a3530',
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>
            <p
              style={{
                fontSize: size === 'sm' ? 5 : 6,
                color: '#999',
                fontFamily: 'monospace',
                letterSpacing: 2,
              }}
            >
              4 710088 123456
            </p>
          </div>
        </div>

        {/* ===== RIGHT FACE ===== */}
        <div
          style={{
            ...faceBase,
            width: dims.d,
            height: dims.h,
            left: halfW - halfD,
            transform: `rotateY(90deg) translateZ(${halfW}px)`,
            ...sidePattern,
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* ===== LEFT FACE ===== */}
        <div
          style={{
            ...faceBase,
            width: dims.d,
            height: dims.h,
            left: halfW - halfD,
            transform: `rotateY(-90deg) translateZ(${halfW}px)`,
            ...sidePattern,
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* ===== TOP FACE ===== */}
        <div
          style={{
            ...faceBase,
            width: dims.w,
            height: dims.d,
            top: halfH - halfD,
            transform: `rotateX(90deg) translateZ(${halfH}px)`,
            ...topPattern,
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* ===== BOTTOM FACE ===== */}
        <div
          style={{
            ...faceBase,
            width: dims.w,
            height: dims.d,
            top: halfH - halfD,
            transform: `rotateX(-90deg) translateZ(${halfH}px)`,
            background: '#d8d2cb',
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '2px',
            }}
          />
        </div>
      </motion.div>

      {/* Ground shadow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: dims.w + 30,
          height: 12,
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
