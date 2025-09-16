import { hwy } from '../_hostaway';

export async function GET() {
  const data = await hwy('/listings?includeResources=1');
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' }});
}
