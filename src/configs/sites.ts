import { NODE_ENV } from './envs';

export const IS_DEV = NODE_ENV !== 'production';

export const SITE_NAME = 'Blog Kang Sudar';
/** text of the logo in the header */
export const SITE_DOMAIN = 'www.sudar.web.id';
export const PRODUCTION_URL = 'https://www.sudar.web.id';
export const BASE_URL = IS_DEV ? 'http://localhost:3000' : PRODUCTION_URL;
export const DEFAULT_LOCALE = 'id';
export const BLOG_PAGINATION_LIMIT = 10;

export const GOOGLE_VERIFICATION_ID = 'eGOhdZjNeSLIBtMneyjMwoE3fg4c4';
export const ANALYTICS_ID = 'f0f0dcd7-e5eb-490e-a3ce-6a183146109f';
export const DISQUS_SHORTNAME = 'sudarblogger';
export const CLOUDINARY_CLOUD_NAME = 'gadingnst';
