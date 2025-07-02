export function callMe() {
  console.log("me being called from a function");
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function dateFormatter(date) {
  // takes two props, locale and optional timezone
  // local as undefined will base on user locale (client side)
  // return new Date(date).toLocaleDateString(undefined);
  // since we create on build, lets use our locale:
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC'
  });
}

export const formatDatePretty = async (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

export const formatDateNumeric = async (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};