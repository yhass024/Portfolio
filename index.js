const options = {
  bottom: "64px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "1s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "rgb(243, 249, 248)", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);

darkmode.showWidget();
