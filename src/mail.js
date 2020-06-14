const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    11`;
  },
  getMailBody2: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    22`;
  },
  getMailBody3: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    33`;
  },
  getMailBody4: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    44`;
  },
  getMailBody5: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    55`;
  },
    getMailSub1: content => {
    const details = {
      name: content.name
    };
    return `11`;
  },
  getMailSub2: content => {
    const details = {
      name: content.name
    };
    return `22`;
  },
  getMailSub3: content => {
    const details = {
      name: content.name
    };
    return `33`;
  },
  getMailSub4: content => {
    const details = {
      name: content.name
    };

    return `44`;
  },
  getMailSub5: content => {
    const details = {
      name: content.name
    };

    return `55`;
  }
};

module.exports = mailUtils;
