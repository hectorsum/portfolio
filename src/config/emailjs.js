// EmailJS Configuration
// Get these values from https://dashboard.emailjs.com/

export const emailConfig = {
  // Service ID - from EmailJS Email Services
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',

  // Template ID - from EmailJS Email Templates
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'contact_form',

  // Public Key - from EmailJS Account > API Keys
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const isEmailJSConfigured = () => {
  return !!(emailConfig.SERVICE_ID && emailConfig.PUBLIC_KEY);
};
