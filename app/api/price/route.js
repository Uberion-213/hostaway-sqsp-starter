import { hwy } from '../_hostaway';

export async function POST(req) {
  const { listingMapId, startingDate, endingDate, numberOfGuests } = await req.json();
  if (!startingDate || !endingDate || !numberOfGuests) {
    return new Response(JSON.stringify({ error: 'startingDate, endingDate, numberOfGuests required' }), { status: 400 });
  }
  // If you have listingMapId you can also call /listings/{id}/calendar/priceDetails.
  const body = { startingDate, endingDate, numberOfGuests, version: 2 };
  const data = await hwy(`/reservations/price`, { method: 'POST', body: JSON.stringify(body) });
  // attach listingMapId so the front end can forward it
  return new Response(JSON.stringify({ ...data, listingMapId }), { headers: { 'Content-Type': 'application/json' }});
}
