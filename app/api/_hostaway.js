const BASE = 'https://api.hostaway.com/v1';

export async function hwy(path, opts = {}) {
  const headers = {
    'Authorization': `Bearer ${process.env.HOSTAWAY_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
    ...(opts.headers || {})
  };
  const res = await fetch(`${BASE}${path}`, { ...opts, headers, cache: 'no-store' });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Hostaway ${path} ${res.status}: ${text}`);
  }
  return res.json();
}
