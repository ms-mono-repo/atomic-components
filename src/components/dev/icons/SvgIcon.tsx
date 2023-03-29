import React from 'react';

const SvgConst = {
  'menu-arrow': 'menu-arrow',
  'join-step-active': 'join-step-active',
  'wemixplay-console': 'wemixplay-console',
  'wemixplay-console-w': 'wemixplay-console-w',
  loading: 'loading',
  dot: 'dot',
  check: 'check',
  'check-dis': 'check-dis',
  'select-check': 'select-check',
  'select-arrow': 'select-arrow',
  'badge-x': 'badge-x',
  'badge-arrow': 'badge-arrow',
  'badge-add': 'badge-add',
  's-game': 's-game',
  's-message': 's-message',
  's-forum': 's-forum',
  's-user': 's-user',
  's-server': 's-server',
  's-dashboard': 's-dashboard',
  's-onboarding': 's-onboarding',
  's-store': 's-store',
  's-judge': 's-judge',
  's-notice': 's-notice',
  's-set': 's-set',
  lang: 'lang',
  'lang-arrow': 'lang-arrow',
  user: 'user',
  'link-arrow': 'link-arrow',
  'toast-x': 'toast-x',
  ess: 'ess',
  success: 'success',
  fail: 'fail',
  arrow: 'arrow',
  plus: 'plus',
  error: 'error',
  copy: 'copy',
  upload: 'upload',
  clock: 'clock',
  shield: 'shield',
  rocket: 'rocket',
  plane: 'plane',
  locked: 'locked',
  'p-symbol-black': 'p-symbol-black',
  issue: 'issue',
  'success-msg': 'success-msg',
  'state-complete': 'state-complete',
  'state-ongoing': 'state-ongoing',
  'state-issue': 'state-issue',
  'state-empty': 'state-empty',
  'update-dots': 'update-dots',
  'update-i': 'update-i',
  'update-check': 'update-check',
  'update-check-gray': 'update-check-gray',
  'review-check': 'review-check',
  'review-reject': 'review-reject',
  'review-reject-gray': 'review-reject-gray',
  'review-ing': 'review-ing',
  'tooltip-i': 'tooltip-i',
  play: 'play',
  'close-white': 'close-white',
  wemixplay: 'wemixplay',
  spin: 'spin'
} as const;

type SvgType = (typeof SvgConst)[keyof typeof SvgConst];

const svgs = Object.values(SvgConst) as SvgType[];

const SvgIcon: React.FC = () => {
  return (
    <div
      className="content__inner"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}
    >
      <h1 style={{ fontSize: '30px' }}>Svg 아이콘 모음</h1>
      <section
        style={{
          marginTop: '50px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        {svgs.map((svg) => (
          <div
            key={svg}
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
              <span style={{ fontSize: '14px', color: '#667085' }}>{svg}</span>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SvgIcon;
