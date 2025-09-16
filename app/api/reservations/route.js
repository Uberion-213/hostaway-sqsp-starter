import { hwy } from '../_hostaway';

export async function POST(req) {
  const payload = await req.json();
  const {
    listingMapId,
    channelId = 2000, // Hostaway Direct / website
    guestFirstName, guestLastName, guestEmail, guestPhone,
    startingDate, endingDate, numberOfGuests,
    components, totalPrice
  } = payload;

  if (!listingMapId || !guestFirstName || !guestLastName || !guestEmail || !startingDate || !endingDate || !numberOfGuests || !totalPrice) {
    return new Response(JSON.stringify({ error: 'missing required fields' }), { status: 400 });
  }

  const body = {
    channelId, listingMapId,
    guestFirstName, guestLastName, guestName: `${guestFirstName} ${guestLastName}`,
    guestEmail, guestPhone,
    startingDate, endingDate, numberOfGuests,
    totalPrice,
    financeField: payload.components || []
  };

  const data = await hwy(`/reservations`, { method: 'POST', body: JSON.stringify(body) });
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' }});
}
