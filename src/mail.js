const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `您好 ${details.email}\n
    贵公司是否有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
如果您有这方面的疑问或需求请联系我：www.hr9.top`;
  },
  getMailBody2: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `
    贵公司是否有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
如果您有这方面的疑问或需求请联系我：www.hr9.top`;
  },
  getMailBody3: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `
    如您有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
请联系我：www.hr9.top`;
  },
  getMailBody4: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `您好 ${details.email}\n
    你是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。
如果您有这方面的疑问或需求请联系我，联系方式和介绍请到：www.hr9.top`;
  },
  getMailBody5: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return  `您好 ${details.email}\n
    贵公司是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。
如果您有这方面的疑问或需求请联系我，简介：www.hr9.top`;
  },
    getMailSub1: content => {
    const details = {
      name: content.name
    };
    return `求职`;
  },
  getMailSub2: content => {
    const details = {
      name: content.name
    };
    return `求职`;
  },
  getMailSub3: content => {
    const details = {
      name: content.name
    };
    return `您好`;
  },
  getMailSub4: content => {
    const details = {
      name: content.name
    };

    return `求职`;
  },
  getMailSub5: content => {
    const details = {
      name: content.name
    };

    return `求职`;
  }
};

module.exports = mailUtils;
