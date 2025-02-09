import nextPWA from 'next-pwa';

const withPWA = nextPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

export default {
    reactStrictMode: true,
    ...withPWA
};
