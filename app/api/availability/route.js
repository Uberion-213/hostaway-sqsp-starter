import { hwy } from '../_hostaway';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const listingId = searchParams.get('listingId');
  const startDate = searchParams.get('start');
  const endDate = searchParams.get('end');
  if (!listingId || !startDate || !endDate) {
    return new Response(JSON.stringify({ error: 'listingId, start, end required'}), { status: 400 });
  }
  const json = await hwy(`/listings/${listingId}/calendar?startDate=${startDate}&endDate=${endDate}&includeResources=1`);
  return new Response(JSON.stringify(json), { headers: { 'Content-Type': 'application/json' }});
}
