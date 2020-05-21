const slugfy = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

export default slugfy;
