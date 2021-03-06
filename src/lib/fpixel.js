export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// eslint-disable-next-line
export const pageview = () => {
  window.fbq('track', 'PageView');
};

// eslint-disable-next-line
export const event = (name, options = {}) => {
  window.fbq('track', name, options);
};
