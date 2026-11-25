export const DATA = {
  id: 'dsh-sinusitis',
  name: '鼻窦炎',
  prefix: 'sinus',
  label: '鼻窦炎',
  defaultEeriness: 2,
  gain: 0.38,
  flareChance: 0.24,
  flareGain: 20,
  triggerWeight: 1,
  flareWeight: 0.9,
  reliefs: [
    { id: 'rinse', label: '盐水冲鼻', relief: 22, minutes: 35, calm: 7 },
    { id: 'hot towel', label: '热毛巾敷脸', relief: 16, minutes: 25, calm: 6 },
    { id: 'steam', label: '吸点蒸汽', relief: 14, minutes: 20, calm: 5 },
  ],
  body: {
    stiff: '眉骨那儿压着，低头捡东西会闷一下。',
    ache: '脸颊两侧发胀，低头更明显；说话声音是闷的，闻不太出味道。',
    flare: '整张脸像被箍住，低头就胀疼；只能用嘴呼吸，声音全变了。',
  },
  voice: {
    base: '声音允许发闷；低头相关的动作允许慢半拍（「我抬下头」）；被问味道可以说「闻不出来」。',
    flare: '允许清一下嗓子再继续说；不要描述鼻涕颜色，不要报片子结果。',
  },
}
