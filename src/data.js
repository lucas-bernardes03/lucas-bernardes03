// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const { colors } = require('./theme');

module.exports = {
  user: 'lucas-bernardes03',
  startedProgramming: '1/7/2021',
  repoQuantity: 6,
  header: {
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    image: {
      src: 'src/resources/images/banner.png',
    },
    description: "👋",
    badges: [
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://linkedin.com/in/lucas-bernardes03',
      },
    ],
  },
  aboutme: {
    list: ['* Lucas Bernardes, 20 years', '* Working since Aug/2022 as a Fullstack Developer'],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
      highlightColor: colors.primary,
      wallColors: [colors.secondary, colors.lightSecondary],
    },
    randomOrder: true,
    skills: [
      { name: 'Java', isHighlighted: true },
      { name: 'SpringBoot', isHighlighted: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Python' },
      { name: 'Shell Script', logo: 'gnu-bash' },
      { name: 'React'},
      { name: 'React Native', logo: 'react' },
      { name: 'jQuery' },
      { name: 'SASS' },
      { name: 'Angular', isHighlighted: true },
      { name: 'Bootstrap' },
      { name: 'AmazonAWS'},
      { name: 'Node.JS' },
      { name: 'FastAPI' },
      { name: 'TailwindCSS'},
      { name: 'MySQL', isHighlighted: true },
      { name: 'Kubernetes' },
      { name: 'PostgreSQL', isHighlighted: true },
      { name: 'TypeScript', isHighlighted: true },
      { name: 'Heroku' },
      { name: 'Github Pages', logo: 'github' },
      { name: 'Figma' },
      { name: 'NPM' },
      { name: 'Git', isHighlighted: true },
      { name: 'GitHub' },
      { name: 'Docker', isHighlighted: true },
      { name: 'Jira' },
    ],
  },
  recentworks: {
    styles: {
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      icon_color: colors.secondary.over,
    },
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    links: [
      {
        name: 'twitter',
        href: 'https://twitter.com/lbernardes03',
      },
      {
        name: 'linkedin',
        href: 'https://linkedin.com/in/lucas-bernardes03',
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'mailto:lucasbernardes24@gmail.com',
      }
    ],
  },
  githubStats: {
    styles: {
      style: 'for-the-badge',
      align: 'center',
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      show_icons: true,
      icon_color: colors.secondary.over,
      rank_icon: 'github',
    },
  },
};
