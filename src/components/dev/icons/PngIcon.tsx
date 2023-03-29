import React from 'react';

const PngConst = {
  'alliance-l': 'alliance-l',
  'alliance-m': 'alliance-m',
  'alliance-main': 'alliance-main',
  'alliance-s': 'alliance-s',
  anitas: 'anitas',
  'cq-zuanshi': 'cq-zuanshi',
  cqb: 'cqb',
  debco: 'debco',
  default: 'default',
  draco: 'draco',
  dt: 'dt',
  flero: 'flero',
  ft: 'ft',
  herco: 'herco',
  hydra: 'hydra',
  incar: 'incar',
  klay: 'klay',
  linky: 'linky',
  lord: 'lord',
  lux: 'lux',
  milico: 'milico',
  monco: 'monco',
  'reflect-t': 'reflect-t',
  reflect: 'reflect',
  ria: 'ria',
  silthereum: 'silthereum',
  tigon: 'tigon',
  token: 'token',
  tornado: 'tornado',
  'w-draco': 'w-draco',
  'w-hydra': 'w-hydra',
  'w-incar': 'w-incar',
  'w-lord': 'w-lord',
  'w-milico': 'w-milico',
  'w-silthereum': 'w-silthereum',
  'w-tigon': 'w-tigon',
  'w-tornado': 'w-tornado',
  'w-zuanshi': 'w-zuanshi',
  'wemix-credit': 'wemix-credit',
  wemix: 'wemix',
  unitedStates: 'unitedStates'
} as const;

type PngType = typeof PngConst[keyof typeof PngConst];



const pngs = Object.values(PngConst) as PngType[];

const PngIcon: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h1 style={{ fontSize: '30px' }}>Png 아이콘 모음</h1>
      <section
        style={{
          marginTop: '50px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        {pngs.map((png) => (
          <div
            key={png}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                minWidth: '180px',
                minHeight: '50px'
              }}
            >
            </div>
            <article style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '14px', color: '#667085' }}>{png}</span>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PngIcon;
