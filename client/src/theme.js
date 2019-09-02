const constants = {
  error: '#f5222d',
  vote: '#b6b6b6',
  upvote: '#f9920b',
  downvote: '#2e70ff'
};

const dark = {
  ...constants,
  normalText: '#ffffff',
  mutedText: '#b0b8bf',
  border: '#243447',
  accent: '#778899',
  pageBackground: '#36465D',
  voteButtonHover: '#383838',
  foreground: '#36465D',
  activeBackground: '#3b526a',
  inputBackground: '#3b526a',
  shadow: '#243447'
};

const light = {
  ...constants,
  normalText: '#d56e60',
  mutedText: '#818e99',
  border: '#ebedf0',
  accent: '#d56e60',
  pageBackground: '#f4f6f8',
  voteButtonHover: '#f2f2f2',
  foreground: '#ffffff',
  activeBackground: '#fafafa',
  inputBackground: '#fcfcfc',
  shadow: 'rgba(0, 0, 0, 0.05)'
};

const theme = isDark => (isDark ? dark : light);

export default theme;
