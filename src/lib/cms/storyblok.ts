import StoryblokClient from 'storyblok-js-client';

const sb = new StoryblokClient({
  accessToken: import.meta.env.STORYBLOK_TOKEN, // put in .env
  cache: { clear: 'auto', type: 'memory' },
});

export async function getStory(slug: string, opts?: { draft?: boolean }) {
  const version = opts?.draft ? 'draft' : 'published';
  const { data } = await sb.get(`cdn/stories/${slug}`, { version });
  return data.story; // -> { name, slug, content: { ...fields } }
}
